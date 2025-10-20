# HCJ - Card Management App

A lightweight and intuitive card management web application built with pure HTML, CSS, and JavaScript. Create, edit, and organize your notes with a clean, responsive interface.

## ✨ Features

- **📝 Create Cards**: Add new cards with custom titles using the floating action button
- **✏️ Edit Cards**: Modify existing card titles seamlessly
- **🗑️ Delete Cards**: Remove cards with a confirmation dialog for safety
- **📱 Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **🎬 Smooth Animations**: Elegant hover effects and modal transitions
- **🎨 Clean UI**: Minimalist design with intuitive user interface
- **💾 Local Storage**: Cards persist during browser session

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and accessibility features
- **CSS3**: Modern styling with CSS Grid, Flexbox, and CSS Custom Properties
- **Vanilla JavaScript**: Pure JavaScript for dynamic functionality
- **Responsive Design**: Mobile-first approach with media queries

## 📁 Project Structure
card-management-app/
├── index.html # Main application file
├── styles.css # Styles and responsive design
├── script.js # Application logic and functionality
└── README.md # Project documentation


## 🚀 Getting Started

### Prerequisites

- Modern web browser (Chrome 60+, Firefox 55+, Safari 12+, Edge 79+)
- No dependencies or build tools required

### Installation

1. **Clone or download** the project files
2. **Ensure all files** are in the same directory:
   - `index.html`
   - `styles.css` 
   - `script.js`
3. **Open** `index.html` in your web browser

### Usage

1. **Adding a Card**: Click the blue `+` floating button
2. **Editing a Card**: Click the `±` button on any card
3. **Deleting a Card**: Click the `×` button and confirm
4. **Navigation**: Use arrow buttons (`←` and `→`) in modals

## 🌐 Browser Compatibility

- ✅ Chrome 60+
- ✅ Firefox 55+ 
- ✅ Safari 12+
- ✅ Edge 79+

## 🎨 Customization

### Color Scheme
Easily customize the color palette by modifying CSS variables in `styles.css`:

```css
:root {
  --red: #ff4757;
  --green: #2ed573;
  --blue: #3742fa;
  --white: #ffffff;
  --gray: #747d8c;
}

Layout
Adjust card grid layout in the .cards-container class:

.cards-container {
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

🤝 Contributing
Contributions, issues, and feature requests are welcome! Feel free to:

Fork the project

Create a feature branch

Commit your changes

Open a Pull Request

👨‍💻 Author
Ezra
Built with ❤️ using pure HTML, CSS, and JavaScript.