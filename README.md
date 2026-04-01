# WhitePlayer

A minimal night prayer time calculator built with vanilla JavaScript. Calculates Islamic night divisions (thirds, midnight) based on Maghrib and Fajr times, with live prayer time fetching via the Aladhan API.

## Features

- Calculate Islamic midnight and night thirds
- Live prayer times via [Aladhan API](https://aladhan.com/prayer-times-api)
- Timeline visualization of night phases
- Responsive dark UI with glassmorphism card

## Tech Stack

- **Frontend:** HTML5, CSS3, JavaScript (ES6+)
- **API:** Aladhan Prayer Times API
- **Hosting:** GitHub Pages

## Getting Started

```bash
git clone https://github.com/Ni7i/whiteplayer.git
cd whiteplayer
open index.html
```

No build tools needed. Just open in browser.

## Project Structure

```
whiteplayer/
├── index.html      # Main markup
├── style.css       # Styling & layout
├── script.js       # Prayer time logic & calculations
└── README.md
```

## How It Works

1. Enter Maghrib (sunset) and Fajr (dawn) times
2. The app calculates the total night duration
3. Night is divided into thirds + Islamic midnight
4. Results are displayed on a timeline

## License

MIT
