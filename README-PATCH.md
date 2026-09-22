# Mawsooq Saudi WhatsApp CTA Patch — 2026-09-22

## What this patch changes

- Makes `+966 59 806 1334` (`966598061334` for WhatsApp URLs) the canonical WhatsApp destination.
- Rewrites every WhatsApp CTA at runtime, including older hard-coded `wa.me` and `api.whatsapp.com` links across existing pages.
- Preserves each CTA's prefilled message and the Mawsooq reference code used by Google Sheets tracking.
- Updates dynamically inserted WhatsApp links as well as links present on first page load.
- Replaces the generic chat-bubble icon in the Mawsooq AI WhatsApp CTAs/floating button with the real WhatsApp glyph.
- Updates plain-text legacy WhatsApp-number links in the rendered UI to display `+966 59 806 1334`.

## Important WhatsApp limitation

A public website cannot press WhatsApp's **Send** button for a visitor. `wa.me` / Click-to-Chat links may prefill the message and open WhatsApp, but WhatsApp requires the visitor to explicitly send it. This is enforced by WhatsApp and cannot be bypassed safely with front-end code.

Therefore the Google Sheet records **WhatsApp CTA opens/clicks**, not confirmed sent messages. To measure confirmed inbound WhatsApp leads, connect the Saudi WhatsApp Business number to the WhatsApp Business Platform / Cloud API and use its inbound-message webhook to reconcile the Mawsooq reference code.

## Files

- `lib/leadTracking.js`
- `components/LeadClickTracker.jsx`
- `components/ai/MawsooqChatbot.jsx`

## Deployment

Copy these files over the same paths in the current Mawsooq project and redeploy. No new npm package or environment variable is required.

## Quick test

1. Open any Arabic or English page.
2. Click any WhatsApp CTA, including an old page that previously used the Egypt number.
3. The opened URL must target `966598061334`.
4. The prefilled message should still contain the generated `MSQ-...` reference.
5. Refresh the Google Sheet and confirm the logged WhatsApp URL also contains `966598061334`.
