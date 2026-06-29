# Álainn Painting Classes — Website

**Owner:** Sarah Mulvaney  
**Business:** Álainn Painting Classes, Kildare  
**Instagram:** [@alainn.painting.classes](https://www.instagram.com/alainn.painting.classes)

---

## Table of Contents

1. [Project Structure](#1-project-structure)
2. [How the Site Works](#2-how-the-site-works)
3. [Editing Content](#3-editing-content)
4. [Design System — Colours & Fonts](#4-design-system--colours--fonts)
5. [Adding Sarah's Photo](#5-adding-sarahs-photo)
6. [Adding a Real Email / Contact Form Backend](#6-adding-a-real-email--contact-form-backend)
7. [Adding Real Testimonials](#7-adding-real-testimonials)
8. [Deployment](#8-deployment)
9. [Going Further](#9-going-further)

---

## 1. Project Structure

```
alainn/
├── index.html          → Home / hero page
├── intro.html          → "Welcome to Álainn" page
├── classes.html        → Occasions & class types
├── about.html          → About Sarah
├── testimonials.html   → Customer reviews
├── contact.html        → Enquiry form & contact details
├── styles.css          → All styles for the entire site
├── script.js           → All interactivity (nav, form, animations)
└── README.md           → This file
```

All pages share the same `styles.css` and `script.js`. You never need to edit those files just to update text or swap an image.

---

## 2. How the Site Works

The site is **pure HTML, CSS and JavaScript** — no frameworks, no build tools, no database. This means:

- You can open any `.html` file in a browser and it just works
- To make changes, open the file in any text editor (VS Code, Notepad, TextEdit)
- Save the file, refresh the browser, see the change
- There's nothing to compile or install

> **Tip:** For a better editing experience, download [VS Code](https://code.visualstudio.com/) (free). It highlights HTML in colour and helps catch typos.

---

## 3. Editing Content

### Changing text on any page

Open the relevant `.html` file. All visible text sits between HTML tags. For example:

```html
<h1 class="contact__heading reveal">Let's get you booked in.</h1>
```

Change the text between `>` and `<`:

```html
<h1 class="contact__heading reveal">Ready to paint? Let's chat.</h1>
```

Save and refresh. Do **not** change the parts inside the `< >` brackets (the class names) unless you know what you're doing.

---

### Page-by-page quick reference

| File | What to edit |
|---|---|
| `index.html` | Hero headline, subtext, tagline, occasion strip items |
| `intro.html` | Welcome copy, pillar descriptions, quote |
| `classes.html` | Class card titles and descriptions |
| `about.html` | Sarah's bio paragraphs, values list |
| `testimonials.html` | Review quotes, reviewer names, occasion labels |
| `contact.html` | Contact details (email, location), form note |

---

### Updating the email address

In `contact.html`, find this line (around line 115):

```html
<a href="mailto:hello@alainnpainting.ie">hello@alainnpainting.ie</a>
```

Replace both instances of `hello@alainnpainting.ie` with Sarah's real email address. There are two: one in the `href` attribute and one as the visible text.

---

### Updating the Instagram link

Every page has this in the footer:

```html
<a href="https://www.instagram.com/alainn.painting.classes" target="_blank" rel="noopener noreferrer">Instagram</a>
```

If the Instagram handle ever changes, do a find-and-replace across all `.html` files for `alainn.painting.classes`.

---

### Updating the nav links

The navigation is repeated on every page. If you add a new page, you'll need to add a link to the nav in **each** `.html` file. Find this block:

```html
<ul class="al-nav__links" role="list">
  <li><a href="classes.html">Classes</a></li>
  <li><a href="about.html">About</a></li>
  <li><a href="contact.html">Contact</a></li>
</ul>
```

Add your new page the same way, e.g.:

```html
<li><a href="gallery.html">Gallery</a></li>
```

Also update the mobile nav block just below it (the `al-nav__mobile` div) to match.

---

### Updating the page title and SEO description

At the top of each HTML file, inside `<head>`, you'll find:

```html
<title>Book a Class | Álainn Painting Classes Kildare</title>
<meta name="description" content="..."/>
```

Keep the title under **60 characters** and the description under **155 characters** for best results in Google.

---

## 4. Design System — Colours & Fonts

All colours and fonts are defined as CSS variables at the top of `styles.css`. Changing a variable updates it **everywhere** on the site at once.

### Colours

Open `styles.css` and find the `:root` block near the top:

```css
:root {
  --blush:        #E4A090;   /* Hero & section background */
  --cream:        #FBF2EC;   /* Cream section background */
  --terra:        #9B4A30;   /* Mid terracotta — borders, dividers */
  --terra-dark:   #7D3220;   /* Buttons, strong accents */
  --terra-rich:   #4A1608;   /* Headings, dark text */
  --terra-mid:    #C06848;   /* Eyebrow labels, star ratings */
  --gold:         #B8824A;   /* Decorative gold blobs */
  --footer-bg:    #3A1206;   /* Footer background */
  ...
}
```

To adjust the blush pink shade, change `--blush`. To make buttons darker, change `--terra-dark`. Everything cascades automatically.

### Fonts

The site uses three Google Fonts:

| Font | Role | Where used |
|---|---|---|
| **Playfair Display** | Display headings | Page titles, hero headline |
| **Cormorant Garamond** | Body & UI text | Paragraphs, nav, buttons |
| **Dancing Script** | Script accent | "Gather your people", sign-offs |

These are loaded from Google Fonts. No font files to manage — they load automatically when the page is online. If you want to change a font, replace the font name in `styles.css` and update the Google Fonts URL in the `<head>` of each HTML file.

---

## 5. Adding Sarah's Photo

The About page has a blush-pink portrait placeholder waiting for a real photo.

### Step 1 — Prepare the image

- **Dimensions:** 600 × 800px minimum (portrait ratio, 3:4)
- **Format:** JPG or WebP (WebP is smaller and loads faster)
- **File size:** Keep under 200KB if possible. Use [Squoosh](https://squoosh.app/) (free, browser-based) to compress.
- **Filename:** `sarah.jpg` (no spaces)

### Step 2 — Add the file to the folder

Place `sarah.jpg` in the same folder as all the `.html` files.

### Step 3 — Replace the placeholder in `about.html`

Find this block (around line 30):

```html
<div class="about__portrait" role="img" aria-label="Photo of Sarah Mulvaney — coming soon">
  <div class="about__portrait-placeholder">
    <svg ...>...</svg>
    <span class="about__portrait-label">Photo of Sarah</span>
  </div>
  <div class="about__badge" ...>...</div>
</div>
```

Replace the entire `<div class="about__portrait">` block with:

```html
<div class="about__portrait">
  <img
    src="sarah.jpg"
    alt="Sarah Mulvaney, host of Álainn Painting Classes"
    width="600"
    height="800"
    loading="lazy"
    style="width:100%;height:100%;object-fit:cover;"
  />
  <div class="about__badge" aria-label="BA Fine Art trained">
    <span class="about__badge-num">BA</span>
    <span class="about__badge-label">Fine Art trained</span>
  </div>
</div>
```

The badge will still appear over the photo. The corner bracket decorations come from CSS and remain automatically.

### Adding an Open Graph image

For a link preview when someone shares the website on WhatsApp or social media, add a file called `og-image.jpg` to the folder (1200 × 630px, under 200KB). The `<meta property="og:image">` tag in `index.html` already points to it.

---

## 6. Adding a Real Email / Contact Form Backend

The contact form currently shows a success message but **does not actually send an email**. To make it functional, you have two options:

### Option A — Formspree (easiest, free tier available)

[Formspree](https://formspree.io) handles form submissions and emails them to you, with no server required.

1. Sign up at formspree.io
2. Create a new form — you'll get an endpoint URL like `https://formspree.io/f/abcdefgh`
3. In `contact.html`, find the form tag:
   ```html
   <form class="contact__form" novalidate aria-label="Booking enquiry form">
   ```
   Change it to:
   ```html
   <form class="contact__form" action="https://formspree.io/f/YOUR_ID" method="POST" novalidate aria-label="Booking enquiry form">
   ```
4. In `script.js`, remove or comment out the `handleSubmit` function — Formspree handles the submission natively.

### Option B — EmailJS (stays client-side, no server)

[EmailJS](https://www.emailjs.com) sends emails directly from the browser using an API key.

1. Sign up at emailjs.com
2. Connect your Gmail or other email provider
3. Add their SDK to each page's `<head>`:
   ```html
   <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>
   ```
4. Follow their [getting started guide](https://www.emailjs.com/docs/tutorial/overview/) — the `handleSubmit` function in `script.js` is already structured to slot their `emailjs.send()` call into the success block.

---

## 7. Adding Real Testimonials

When real reviews come in, open `testimonials.html` and find one of the three card blocks:

```html
<article class="tm-card reveal" role="listitem" aria-label="Review from a catch-up class">
  ...
  <blockquote class="tm-card__quote">I came with my sister...</blockquote>
  ...
  <span class="tm-card__name">— Your name here</span>
  <span class="tm-card__detail">Catch-up class</span>
  ...
</article>
```

Replace the `blockquote` text with the real review, and the `tm-card__name` and `tm-card__detail` spans with the reviewer's name and class type.

Also remove the placeholder note near the bottom:

```html
<p class="testimonials__note reveal" ...>Placeholder reviews — swap in real ones as they come in</p>
```

---

## 8. Deployment

The site is a set of static files — no server, no database, no backend required. Any static hosting service will work. Below are the three most practical options.

---

### Option A — GitHub Pages (free, recommended for developers)

1. [Create a free GitHub account](https://github.com)
2. Create a new repository (e.g. `alainn-website`)
3. Upload all files from this folder into the repository
4. Go to **Settings → Pages → Source** and select the `main` branch
5. Your site will be live at `https://yourusername.github.io/alainn-website`

To use a custom domain (e.g. `alainnpaintingclasses.ie`):
- Add a file called `CNAME` to the repository containing just your domain name
- Point your domain's DNS to GitHub Pages (GitHub provides the instructions)

---

### Option B — Netlify (free, drag-and-drop, recommended for non-developers)

1. Go to [netlify.com](https://www.netlify.com) and sign up for free
2. From the dashboard, click **"Add new site" → "Deploy manually"**
3. Drag and drop the entire `alainn` folder into the upload area
4. Netlify gives you a live URL instantly (e.g. `alainn.netlify.app`)
5. To update the site, just drag and drop the folder again

To connect a custom domain: go to **Site settings → Domain management** in Netlify.

> **Tip:** Netlify also has a free form handling service that works as an alternative to Formspree — simply add `netlify` as an attribute to the `<form>` tag.

---

### Option C — Squarespace / Wix (if migrating to a CMS later)

If you later move to Squarespace or Wix, the HTML, CSS and copy in these files can be used as a precise reference for how each page should look and what it should say. A developer can recreate it in any CMS using these files as the design spec.

---

### Updating the live site

After deployment, every time you make a change:

- **GitHub Pages:** Commit and push the changed files. The site updates in ~1 minute.
- **Netlify:** Drag and drop the folder again. The site updates instantly.

---

### Before going live — checklist

- [ ] Replace placeholder email with Sarah's real email address (in `contact.html`)
- [ ] Connect a real form backend (Formspree or EmailJS)
- [ ] Add Sarah's photo (see Section 5)
- [ ] Replace placeholder testimonials with real reviews (once they come in)
- [ ] Update canonical URLs in each `<head>` from `https://alainnpaintingclasses.ie/` to whatever domain you use
- [ ] Add the `og-image.jpg` (1200 × 630px) for social link previews
- [ ] Test the site on a real mobile phone before announcing it

---

## 9. Going Further

### Adding a Gallery page

If Sarah wants to show photos of finished paintings or class evenings, create a new `gallery.html` file. Copy the `<head>`, nav, and footer from any existing page. Add a `<main>` section with a CSS grid of images. Add the page to the nav across all files.

### Adding a booking system

When Sarah is ready to take online bookings (rather than just enquiries), consider:

- **[Eventbrite](https://www.eventbrite.ie)** — great for ticketed classes, free to use for free events
- **[Calendly](https://calendly.com)** — good for one-on-one or small group bookings
- **[BookWhen](https://bookwhen.com)** — designed for classes and workshops, Irish-friendly

All three allow you to embed a booking widget directly into a page with a small `<script>` tag — no development required.

### Google Analytics

To see how many people visit the site and which pages they read:

1. Create a free [Google Analytics 4](https://analytics.google.com) account
2. Get your Measurement ID (looks like `G-XXXXXXXXXX`)
3. Add this snippet to the `<head>` of every page:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Google Search Console

Once the site is live, register it on [Google Search Console](https://search.google.com/search-console) to help Google index it faster and see which search terms are bringing people to the site.

---

*Built with care for Álainn Painting Classes · Kildare, Ireland · 2026*
