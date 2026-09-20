# Mawsooq AI UI + Gemini Flash/Flash-Lite Fix

Replace only the files in this patch, preserving the folder paths.

## What changed

### Chatbot UI
- Suggestion chips are no longer rendered under each assistant message.
- The latest suggestion row is pinned immediately above the chat input.
- The suggestion row remains a single horizontal scroll row.
- The horizontal scrollbar keeps Mawsooq blue styling.
- WhatsApp CTA remains at the end of every assistant message.
- The chat transcript keeps its independent vertical scroll.

### Gemini API
- Uses the standard `models/:generateContent` REST endpoint with no extra npm package.
- Removes structured-output configuration from the actual generation request so the same call is compatible across more Flash/Flash-Lite model generations.
- The model is still instructed to return JSON; the server parses it itself.
- If a model returns plain text instead of JSON, the user still receives that response instead of seeing the generic AI error.
- Automatic fallback order:
  1. `GEMINI_MODEL` from Vercel
  2. `gemini-3.1-flash-lite`
  3. `gemini-2.5-flash-lite`
  4. `gemini-2.5-flash`
  5. `gemini-3.8-flash`
  6. `gemini-3-flash-preview`

Recommended Vercel value:

```env
GEMINI_MODEL=gemini-3.1-flash-lite
```

Keep the existing `GEMINI_API_KEY` unchanged.

### Diagnostics
`/api/integration-status` now performs a tiny real Gemini generation request rather than only checking model metadata.

After redeploying, open:

`https://mawsouq.com/api/integration-status/`

Look for:
- `geminiGenerationReachable: true`
- `geminiWorkingModel: "..."`

If all Gemini models fail, `geminiAttempts` shows the HTTP status and Google error for each model without exposing your API key.

## Deployment
1. Copy these three files over the same paths in the Mawsooq project.
2. Confirm Vercel has `GEMINI_API_KEY` and `GEMINI_MODEL=gemini-3.1-flash-lite`.
3. Redeploy Production so the new server route is active.
4. Test `/api/integration-status/` first, then test the chatbot.

No npm package installation is required.
