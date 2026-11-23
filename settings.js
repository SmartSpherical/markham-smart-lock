/* ===================================================================
   SITE SETTINGS  —  contact details and prices
   -------------------------------------------------------------------
   This is the only file you need to edit to change these.
   • Change only the text inside the "quotes" or the numbers.
   • Keep the commas at the ends of lines.
   • Prices are in Canadian dollars, before HST. Numbers only — no $ sign.
   Everything on the page (pricing cards, the price under the headline,
   the booking form, phone and WeChat links) updates from here.
   =================================================================== */

window.SITE = {

  /* ---------- Contact ---------- */
  businessName: "Markham Smart Lock",
  contactName:  "Gary Lam",
  phone:        "+1 416-200-8386",
  wechat:       "GaryLamRealty",
  email:        "garylamrealty@outlook.com",   // booking requests are emailed here
                           // Leave it "" and they're sent to your phone as a text message instead.

  /* ---------- Prices ---------- */
  prices: {
    installed:   599,      // "Installed" package — lock + door conversion + installation
    secondDoor:  499,      // "Second door" — another door, same visit
    lockOnly:    329       // "Lock only" — no installation
  },

  /* Launch offer shown on the "Installed" card. Set price to 0 to hide it. */
  launchOffer: {
    price:     549,
    customers: 20          // "...for our first 20 customers"
  },

  hstRate: 13              // shown as "plus 13% HST"
};
