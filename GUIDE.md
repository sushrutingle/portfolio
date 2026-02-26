# Modification Guide

This guide will help you make common changes to your portfolio website.

---

## Table of Contents
1. [Personal Information](#personal-information)
2. [Adding/Removing Sections](#addingremoving-sections)
3. [Modifying Skills](#modifying-skills)
4. [Changing Colors](#changing-colors)
5. [Adding a GIF](#adding-a-gif)
6. [Updating Links](#updating-links)
7. [Theme Customization](#theme-customization)
8. [Adding New Animations](#adding-new-animations)

---

## Personal Information

### To change your name:
**File:** `index.html`
```html
<!-- Line ~81 -->
<h1 class="hero-name">Sushrut Ingle</h1>
```

### To change headline:
**File:** `index.html`
```html
<!-- Line ~82 -->
<p class="hero-headline">Computer Engineering Student | Developer | Problem Solver</p>
```

### To change intro text:
**File:** `index.html`
```html
<!-- Line ~83 -->
<p class="hero-intro">Building technical foundations in software and engineering...</p>
```

### To change contact email:
**File:** `index.html` (multiple places - hero, popup, footer)
```
Search for: sushrutingle@gmail.com
Replace with: your-new-email@example.com
```

---

## Adding/Removing Sections

### To remove a section:
1. Delete the entire `<section>` block from `index.html`
2. Remove corresponding nav link
3. Update nav-links in both desktop and mobile nav

### To add a new section:
1. Add section HTML in `index.html`:
```html
<section id="new-section">
  <div class="container">
    <div class="section-header reveal">
      <h2 class="section-title">Section Title</h2>
    </div>
    <div class="your-content reveal">
      <!-- Your content here -->
    </div>
  </div>
</section>
```

2. Add nav link:
```html
<li><a href="#new-section">Section Title</a></li>
```

---

## Modifying Skills

### To add a skill to Technical Expertise:
**File:** `index.html` - Find the expertise-card section

Example - adding a new skill to Programming:
```html
<span class="expertise-pill">
  <svg viewBox="0 0 24 24" fill="currentColor"><path d="..."/></svg>
  NewSkill
</span>
```

### To add a new expertise column:
**File:** `index.html` - Add new expertise-card:
```html
<div class="expertise-card">
  <h3 class="expertise-title">Category Name</h3>
  <div class="expertise-divider"></div>
  <div class="expertise-skills">
    <span class="expertise-pill">Skill 1</span>
    <span class="expertise-pill">Skill 2</span>
  </div>
</div>
```

---

## Changing Colors

### To change the color scheme:
**File:** `css/styles.css` - Look for `:root` section (lines 1-28)

```css
:root {
  /* Dark Theme Colors */
  --bg-primary: #0a0a0a;    /* Main background */
  --bg-surface: #111111;    /* Card backgrounds */
  --border-color: #2a2a2a; /* Borders */
  --text-primary: #ffffff; /* Main text */
  --text-secondary: #a0a0a0; /* Secondary text */
  --text-tertiary: #666666;  /* Muted text */
}
```

### To change light theme colors:
**File:** `css/styles.css` - Look for `[data-theme="light"]` (lines 31-44)

```css
[data-theme="light"] {
  --bg-primary: #ffffff;
  --bg-surface: #f5f5f5;
  /* ... etc */
}
```

---

## Adding a GIF

### To add your hero GIF:
**File:** `index.html` - Find `.hero-gif` section (~line 140)

Replace the placeholder:
```html
<!-- Before -->
<div class="hero-gif">
  <div class="hero-gif-placeholder">Add your GIF here</div>
</div>

<!-- After -->
<div class="hero-gif">
  <img src="your-gif.gif" alt="Your description">
</div>
```

Or add a local GIF file to the project folder and reference it:
```html
<img src="my-avatar.gif" alt="Animation">
```

---

## Updating Links

### To update social links:
**File:** `index.html`

**LinkedIn:** Search and replace `https://linkedin.com`
**GitHub:** Search and replace `https://github.com`
**Portfolio:** Replace `#` with your portfolio URL

### In Contact Popup:
```html
<a href="https://linkedin.com/in/your-profile" ...>
```

---

## Theme Customization

### To change default theme:
**File:** `index.html` - Line 2
```html
<!-- Change from dark to light -->
<html lang="en" data-theme="light">
```

### To disable theme toggle:
**File:** `index.html` - Remove the theme-toggle button (lines ~267-285)
**File:** `js/script.js` - Remove theme toggle code (lines ~56-71)

---

## Adding New Animations

### To add a new reveal animation:
**File:** `css/styles.css`

```css
/* Add new animation class */
.your-element {
  opacity: 0;
  transform: translateY(40px) scale(0.98);
  filter: blur(8px);
  transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
}

.your-element.visible {
  opacity: 1;
  transform: translateY(0) scale(1);
  filter: blur(0);
}
```

### To add scroll-triggered animation:
**File:** `js/script.js`

```javascript
// Add to scroll reveal section
const newElements = document.querySelectorAll('.your-element');

newElements.forEach(el => {
  // Your custom observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });
  
  observer.observe(el);
});
```

---

## Quick Reference

| Task | File to Edit |
|------|--------------|
| Change name/text | `index.html` |
| Change colors | `css/styles.css` |
| Add skills | `index.html` |
| Add animations | `css/styles.css` + `js/script.js` |
| Add GIF/image | `index.html` |
| Update links | `index.html` |
| Change fonts | `css/styles.css` (lines 12-13) |

---

## Tips

1. **Always backup** before making changes
2. **Use browser devtools** (F12) to preview changes live
3. **Keep the structure** consistent when adding new sections
4. **Test on mobile** after any layout changes
5. **Validate HTML** if breaking changes occur

---

## Need Help?

- Check `SPEC.md` for original design specifications
- Review existing code patterns for consistency
- Test all interactive features after modifications
