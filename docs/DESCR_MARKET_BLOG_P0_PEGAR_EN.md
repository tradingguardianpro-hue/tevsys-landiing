# P0 — Paste into Market blog EN (775054)

**URL:** https://www.mql5.com/en/blogs/post/775054  
**Done in repo:** paste-ready. **You in Seller:** edit the article and publish.

## 1) Figures — find and replace
- `114 trades` / `114 documented` → `116`
- Keep ≈ **0.06%** and decision vs execution attribution.

## 2) New section (after Documented accuracy / before Evidence)
Suggested title: **Open trade crossing midnight**

Paste:

---

A daily limit usually re-arms when the day changes. For most utilities, that means the counter resets at 00:00 — even with positions still open. If you trade swing or overnight, that mechanic has a gap: your trade crosses midnight and starts the new day without the layer you agreed.

tevsys solves this with a different product decision: when protection is active and an open trade crosses midnight, the weekend or another calendar boundary, protection does not reset mid-trade. You stay under your agreed % for as long as the trade is open and the program is watching.

You can see it on the panel: the intraday scenario and the calendar-crossing scenario look different, so you always know what you are looking at. This is not an extra feature — it is the difference between a limit that resets and protection that lasts as long as your exposure.

More on the site: https://www.tevsys.io/en/como-funciona#overnight-laborable · FAQ: https://www.tevsys.io/en/como-funciona#overnight-faq

---

## 3) One HyperClose line (optional — stops Gemini mix-up)
**HyperClose is not the close when a daily/weekly limit is hit** (that is the limits engine). HyperClose fires if, with protection already on, you try to open a new trade (“one more”) — including on OFF days — and it logs the attempt.

## 4) Market vs web (optional, 2 sentences)
The **Market Advanced** edition on this listing does not need a tevsys.io license key or WebRequest. The web-license channel may require WebRequest per the install guide. Do not mix the channels.

## Seller checklist
- [ ] 114 → 116 in lead + precision
- [ ] Overnight section pasted
- [ ] (Optional) HyperClose + Market vs web lines
- [ ] Save / publish
