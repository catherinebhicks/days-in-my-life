# Life Visualization - Your Journey Since the Wood Paneling Era

A beautiful, interactive visualization of your life in weeks, complete with cultural context and personal milestones. Born from the era of disco and large lapels, this project maps your personal journey alongside major world events and cultural moments.

![Life Visualization Preview](./preview.png)

## Features

- **Interactive Timeline**: Each colorful square represents a week of your life since the wood paneling era
- **Cultural Context**: Major world events, movies, music, and technology milestones mapped to your timeline
- **Personal Milestones**: Your achievements integrated seamlessly with world history
- **Since Last Visit**: Dynamic stats showing what's happened since you last checked
- **Decade Breakdowns**: Comprehensive cultural context for each decade of your life
- **Privacy-Friendly**: Uses snarky references instead of specific dates for better privacy

## Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Lightning fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful, customizable icons
- **Modern JavaScript** - ES6+ features throughout

## Getting Started

### Prerequisites
- Node.js 16+ installed on your machine
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/life-visualization.git
   cd life-visualization
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment.

## Customization

### Adding Your Personal Milestones
Edit the `getLifeEventForWeek` function in `src/components/WeeksOfLife.jsx` to add your own important dates:

```javascript
// Add your milestone here
1234: { 
  icon: Users, 
  title: 'Your Important Event', 
  type: 'personal', 
  bgColor: '#color', 
  decade: '2020s' 
}
```

### Changing the Birth Era
Update the birth date and snarky references throughout the component to match your preferences.

### Customizing Decades
Modify the `renderDecadeBreakdowns` function to add or change cultural events for each decade.

## File Structure

```
life-visualization/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   └── WeeksOfLife.jsx    # Main component (your artifact code goes here)
│   ├── App.jsx                # App wrapper
│   ├── main.jsx               # React entry point
│   └── index.css              # Tailwind imports & global styles
├── index.html                 # HTML template
├── package.json               # Dependencies and scripts
├── tailwind.config.js         # Tailwind configuration
├── vite.config.js            # Vite configuration
└── README.md                 # This file
```

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your GitHub repo to Vercel
3. Deploy automatically on every push

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist/` folder to Netlify
3. Or connect your GitHub repo for auto-deployment

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts: `"deploy": "gh-pages -d dist"`
3. Run: `npm run build && npm run deploy`

## Contributing

This is a personal project, but if you'd like to suggest improvements:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License - feel free to use this code for your own life visualization!

## Acknowledgments

- Inspired by the "Life in Weeks" concept
- Built with love for the wood paneling era
- Cultural context data sourced from various historical references
- Icons provided by [Lucide React](https://lucide.dev)

---

*"From the decade of disco and large lapels to today - every week tells a story."*