# Markham Smart Lock website

A one-page bilingual (English / 简体中文) site, hosted free on GitHub Pages.

Live site: https://smartspherical.github.io/markham-smart-lock/
Repository: https://github.com/SmartSpherical/markham-smart-lock

## Change your contact details or prices

Everything you'd normally want to change is in **one small file: `settings.js`**.
The page fills those values in everywhere: the price under the headline, the three pricing cards, the launch offer, the booking form's dropdown, the phone and WeChat details, and the "Call" button on phones.

```js
window.SITE = {
  businessName: "Markham Smart Lock",
  contactName:  "Gary Lam",
  phone:        "+1 416-200-8386",
  wechat:       "GaryLamRealty",
  email:        "",

  prices: {
    installed:   599,
    secondDoor:  499,
    lockOnly:    329
  },

  launchOffer: { price: 549, customers: 20 },   // set price to 0 to hide the offer
  hstRate: 13
};
```

### Easiest way: edit on the GitHub website (no software needed)
1. Sign in to GitHub as **SmartSpherical**.
2. Open https://github.com/SmartSpherical/markham-smart-lock/blob/main/settings.js
3. Click the **pencil icon** (Edit this file) at the top right of the file.
4. Change the text inside the quotes or the numbers. Keep the quotes, commas and brackets as they are.
5. Click **Commit changes…**, then **Commit changes** again.
6. Wait about a minute, then refresh the live site. If you still see old values, wait another minute (browsers keep a short cache) or open the site in a private window.

### Rules that keep it working
- Prices are numbers only: `599`, not `"$599"` or `599.00`.
- Text goes inside straight double quotes: `"Gary Lam"`.
- Every line inside the brackets ends with a comma, except the last one before a `}`.
- To hide the launch offer, set `price: 0`.
- If `email` is left as `""`, the booking form sends the request to your phone as a text message instead. Add an email (`"you@example.com"`) to receive requests by email.

If something breaks after an edit, open the file's **History** on GitHub and compare against the previous version. Usually it's a missing comma or quote.

### Changing wording (not prices)
Headlines, descriptions and FAQ answers are in `index.html`. Each sentence appears twice, once inside `<span class="en">…</span>` (English) and once inside `<span class="zh">…</span>` (Chinese). Edit both so the two languages stay in step.

## Files
- `settings.js` — contact details and prices (edit this)
- `index.html` — the page: text, layout, styles and animations
- `assets/` — Blender renders: `photo-lock-hero.jpg` (main image), `photo-dusk-off.jpg` / `photo-dusk-on.jpg` (wall light switching on), `intro-door.jpg` + `intro-lever.png` (opening animation); `lock-bolts.svg` illustration; `og-image.jpg` social share image

## Notes
- The booking form opens the visitor's text messages (or email app, if an email is set) with their request filled in. Nothing is stored or processed on the site, and there is no checkout. That keeps it an informational site, as GitHub Pages' usage rules require. Take payment after installation by e-Transfer or a Stripe/Square payment link.
- Before going live, confirm the features with your supplier. The site only claims fingerprint, PIN, card and key.

## Animations
- **Opening:** the door unlocks (fingerprint, keypad wakes, handle presses) and swings open into the site. It plays every time the page loads (including refresh), can be skipped with a click or any key, and is skipped automatically for visitors who turn on "reduce motion". Add `?intro` to the address to replay it.
- **Main image:** light sweep across the glass, fingerprint scan glow, card-reader glow, slow push-in.
- **Bolts illustration:** latch and four bolts throw out of the faceplate while it's on screen.
- **Made for Markham homes:** the wall light switches on when the picture scrolls into view.
