# Markham Smart Lock website

A one-page bilingual (English / 简体中文) site for GitHub Pages.

## Files
- `index.html` — the whole site (styles and script included)
- `assets/` — lock photos

## Before publishing
Open `index.html`, scroll to the bottom and fill in `CONFIG`:

```js
const CONFIG = {
  businessName: "Markham Smart Lock",
  phone: "905-555-0123",
  email: "hello@yourdomain.ca",   // booking requests go here
  wechat: "your-wechat-id"
};
```

Prices are written in the Pricing section (search for `$599`, `$549`, `$499`, `$329`).

## Publish on GitHub Pages
1. Create a new public repository on GitHub (e.g. `markham-smart-lock`).
2. Upload `index.html` and the `assets` folder (Add file → Upload files).
3. Go to Settings → Pages → Source: "Deploy from a branch", Branch: `main`, folder `/ (root)` → Save.
4. After a minute your site is live at `https://<your-username>.github.io/markham-smart-lock/`.
5. Optional: add your own domain under Settings → Pages → Custom domain.

## Notes
- The booking form opens the visitor's email app with their request filled in. Nothing is stored or processed on the site, and there is no checkout. That keeps it an informational site, as GitHub Pages' usage rules require. Take payment after installation by e-Transfer or a Stripe/Square payment link.
- Before going live, confirm the features with your supplier. The site only claims fingerprint, PIN, card and key.
