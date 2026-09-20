const SHEET_NAME = 'WhatsApp Leads';
const HEADERS = [
  'Timestamp',
  'Reference',
  'Page URL',
  'Page Path',
  'Page Title',
  'CTA Placement',
  'Language',
  'Device',
  'Screen',
  'Referrer',
  'First Page',
  'UTM Source',
  'UTM Medium',
  'UTM Campaign',
  'UTM Term',
  'UTM Content',
  'Chat Summary',
  'AI Ready',
  'WhatsApp URL',
  'Status',
  'Notes',
];

function jsonResponse(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}

function text(value, maxLength) {
  const limit = maxLength || 1600;
  return String(value == null ? '' : value).replace(/\s+/g, ' ').trim().slice(0, limit);
}

function ensureHeader(sheet) {
  const current = sheet.getRange(1, 1, 1, HEADERS.length).getValues()[0];
  const needsHeader = HEADERS.some(function(header, index) {
    return current[index] !== header;
  });

  if (needsHeader) {
    sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
    sheet.setFrozenRows(1);
  }
}

function doGet() {
  return jsonResponse({ ok: true, service: 'Mawsooq WhatsApp Lead Logger' });
}

function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      return jsonResponse({ ok: false, error: 'Missing payload' });
    }

    const payload = JSON.parse(e.postData.contents);
    const properties = PropertiesService.getScriptProperties();
    const expectedSecret = properties.getProperty('LEAD_WEBHOOK_SECRET');
    const spreadsheetId = properties.getProperty('LEAD_SHEET_ID');

    if (!expectedSecret || !spreadsheetId) {
      return jsonResponse({ ok: false, error: 'Script properties are not configured' });
    }

    if (text(payload.secret, 200) !== expectedSecret) {
      return jsonResponse({ ok: false, error: 'Unauthorized' });
    }

    const reference = text(payload.reference, 40).toUpperCase();
    if (!/^MSQ-\d{6}-[A-Z0-9]{6}$/.test(reference)) {
      return jsonResponse({ ok: false, error: 'Invalid reference' });
    }

    const lock = LockService.getScriptLock();
    lock.waitLock(10000);

    try {
      const spreadsheet = SpreadsheetApp.openById(spreadsheetId);
      const sheet = spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.insertSheet(SHEET_NAME);
      ensureHeader(sheet);

      // Prevent accidental duplicate rows if a browser/network retries the same reference.
      const lastRow = sheet.getLastRow();
      if (lastRow > 1) {
        const recentStart = Math.max(2, lastRow - 249);
        const recentCount = lastRow - recentStart + 1;
        const recentRefs = sheet.getRange(recentStart, 2, recentCount, 1).getDisplayValues();
        if (recentRefs.some(function(row) { return row[0] === reference; })) {
          return jsonResponse({ ok: true, duplicate: true, reference: reference });
        }
      }

      sheet.appendRow([
        text(payload.timestamp, 80) || new Date().toISOString(),
        reference,
        text(payload.page_url),
        text(payload.page_path, 500),
        text(payload.page_title, 500),
        text(payload.placement, 120),
        text(payload.language, 20),
        text(payload.device, 30),
        text(payload.screen, 40),
        text(payload.referrer),
        text(payload.first_page),
        text(payload.utm_source, 200),
        text(payload.utm_medium, 200),
        text(payload.utm_campaign, 300),
        text(payload.utm_term, 300),
        text(payload.utm_content, 300),
        text(payload.chat_summary, 1600),
        payload.ai_ready === true ? 'Yes' : 'No',
        text(payload.whatsapp_url),
        'Clicked WhatsApp',
        '',
      ]);

      return jsonResponse({ ok: true, reference: reference });
    } finally {
      lock.releaseLock();
    }
  } catch (error) {
    console.error(error);
    return jsonResponse({ ok: false, error: 'Lead logger failed' });
  }
}
