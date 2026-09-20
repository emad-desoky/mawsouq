# Mawsooq WhatsApp Lead Sheet Integration

The website generates a reference such as `MSQ-260920-A1B2C3` for every WhatsApp click.
The same reference is:

1. appended to the visitor's pre-filled WhatsApp message, and
2. written to the `Reference` column in the Google Sheet.

This lets the Mawsooq team match an actual WhatsApp conversation to the landing page, CTA, UTM campaign and (when used) AI-chat summary that produced it.

## One-time Google Apps Script deployment

The Google Sheet has already been created in Drive as **Mawsooq WhatsApp Leads**. Current spreadsheet ID: `1_deobuSJRt6XOuu_fyl6bnZopdxePthWJUPNfkkfMc8`. Google Drive/Sheets access does not deploy Apps Script web apps automatically, so this deployment is the only console step required for live Sheet logging.

1. Open the created **Mawsooq WhatsApp Leads** Google Sheet.
2. Open **Extensions → Apps Script**.
3. Replace the default script with `integrations/google-sheets/Code.gs` from this patch.
4. In **Project Settings → Script Properties**, add:
   - `LEAD_SHEET_ID` = the spreadsheet ID from the Sheet URL.
   - `LEAD_WEBHOOK_SECRET` = a long random secret you create.
5. Choose **Deploy → New deployment → Web app**.
6. Execute as: **Me**.
7. Access: allow the web app to receive the website POST request.
8. Copy the deployment `/exec` URL.
9. In Vercel add:
   - `GOOGLE_SHEETS_WEBHOOK_URL` = that `/exec` URL
   - `LEAD_WEBHOOK_SECRET` = the exact same secret from Script Properties
10. Redeploy the website.

## Sheet columns

The logger writes: timestamp, reference, page URL/path/title, CTA placement, language, device, screen size, referrer, first-touch page, UTMs, AI lead summary, AI-ready flag, the final WhatsApp URL, status and notes.

The Apps Script rejects requests without the server-only shared secret and prevents duplicate rows for the same reference in the recent lead window.
