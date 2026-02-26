# Sushrut Ingle Portfolio

A premium, modern, black-and-white personal portfolio website built with pure HTML, CSS, and JavaScript.

## Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Custom styling with CSS variables
- **JavaScript** - Vanilla JS for interactivity
- **No frameworks** - Lightweight static site

## Features

- Dark/Light theme toggle
- Fully responsive design
- Smooth scroll animations
- Code typing animation
- Contact popup modal
- SEO optimized

## Local Development

1. Clone the repository
2. Open `index.html` in your browser

Or use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .
```

Then visit `http://localhost:8000`

## Deployment to GitHub Pages

1. Push your code to a GitHub repository
2. Go to Repository Settings > Pages
3. Select "Deploy from a branch"
4. Choose "main" branch and "/ (root)" folder
5. Click Save

Or use GitHub Actions (automated):

1. Push to main branch
2. Workflow will automatically deploy to GitHub Pages

**Live Demo**: https://sushrutingle.github.io

## Customization

### Personal Information

Edit `index.html` to update:
- Name
- Headline
- Bio/About text
- Skills
- Experience
- Education

### Colors

Edit `css/styles.css` - modify CSS variables in `:root` and `[data-theme="light"]`

### Adding a GIF

In `index.html`, find the `.hero-gif` section and replace:

```html
<div class="hero-gif">
  <div class="hero-gif-placeholder">Add your GIF here</div>
</div>
```

With:

```html
<div class="hero-gif">
  <img src="your-gif.gif" alt="Your description">
</div>
```

## Project Structure

```
├── index.html          # Main HTML file
├── css/
│   └── styles.css     # All styles
├── js/
│   └── script.js      # All JavaScript
├── public/
│   ├── robots.txt     # Search engine indexing
│   ├── sitemap.xml    # SEO sitemap
│   ├── security.txt   # Security contact
│   └── _headers       # Security headers
├── .github/
│   └── workflows/
│       └── deploy.yml # CI/CD pipeline
├── README.md          # This file
├── GUIDE.md          # Modification guide
├── SECURITY.md        # Security policy
└── .gitignore        # Git ignore rules
```

## License

MIT License - feel free to use this portfolio as a template for your own.

## Contact

- Email: sushrutingle@gmail.com
- LinkedIn: https://linkedin.com
- GitHub: https://github.com
