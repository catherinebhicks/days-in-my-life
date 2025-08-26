# days-in-my-life


Life Visualization - Your Journey Since the Wood Paneling Era
Just some fun vibe coding of how many days Ive lived A beautiful, interactive visualization of your life in weeks, complete with the abiity to edit your own cultural context and personal milestones. Born from someone who was born era of disco and large lapels, this project maps my personal journey alongside major world events and cultural moments because I was bored and wanted to mess around with my remainder builder.io credits for the month and see how long it would take me to fork off a public artifact in Claude and get to something that was specific. 

Total time spent 72 mins, in case you were wondering. 15 mins for vibe coding and the remainder for me tweaking it to the way I wanted it with hand coding.

Features

Interactive Timeline: Each colorful square represents a week of your life since the wood paneling era
Cultural Context: Major world events, movies, music, and technology milestones mapped to your timeline
Personal Milestones: Your achievements integrated seamlessly with world history
Since Last Visit: Dynamic stats showing what's happened since you last checked
Decade Breakdowns: Comprehensive cultural context for each decade of your life
Privacy-Friendly: Uses snarky references instead of specific dates for better privacy

Tech Stack

React 18 - Modern React with hooks
Vite - Lightning fast build tool
Tailwind CSS - Utility-first CSS framework
Lucide React - Beautiful, customizable icons
Modern JavaScript - ES6+ features throughout

Getting Started

Prerequisites

Node.js 16+ installed on your machine
npm or yarn package manager

Installation

Clone the repository
bashgit clone https://github.com/yourusername/life-visualization.git
cd life-visualization

Install dependencies
bashnpm install

Start the development server
bashnpm run dev

Open your browser and navigate to http://localhost:5173

Building for Production
bashnpm run build
The built files will be in the dist/ directory, ready for deployment.
Customization

Adding Your Personal Milestones
Edit the getLifeEventForWeek function in src/components/WeeksOfLife.jsx to add your own important dates:
javascript// Add your milestone here
1234: { 
  icon: Users, 
  title: 'Your Important Event', 
  type: 'personal', 
  bgColor: '#color', 
  decade: '2020s' 
}
Changing the Birth Era
Update the birth date and snarky references throughout the component to match your preferences.
Customizing Decades
Modify the renderDecadeBreakdowns function to add or change cultural events for each decade.
File Structure
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
Deployment
Vercel (Recommended)

Push your code to GitHub
Connect your GitHub repo to Vercel
Deploy automatically on every push

Netlify

Build the project: npm run build
Upload the dist/ folder to Netlify
Or connect your GitHub repo for auto-deployment

GitHub Pages

Install gh-pages: npm install --save-dev gh-pages
Add to package.json scripts: "deploy": "gh-pages -d dist"
Run: npm run build && npm run deploy

Contributing
This is a personal project, but if you'd like to suggest improvements:

Fork the repository
Create a feature branch
Make your changes
Submit a pull request

License
MIT License - feel free to use this code for your own life visualization!
Acknowledgments

Inspired by the "Life in Weeks" concept
Built with love for the wood paneling era
Cultural context data sourced from various historical references
Icons provided by Lucide React
