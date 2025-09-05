# HTML Directory App

A simple web application that crawls a folder containing raw HTML files and displays them as a beautiful directory page.

## Features

- 🗂️ **Automatic File Discovery**: Scans the `html-files` folder for HTML files
- 📊 **File Statistics**: Shows file count and total size
- 🎨 **Modern UI**: Beautiful, responsive design with hover effects
- 📱 **Mobile Friendly**: Works on all device sizes
- ⚡ **Real-time Updates**: Refresh button to rescan files

## Project Structure

```
├── index.html          # Main directory page
├── server.js           # Express server with file API
├── package.json        # Node.js dependencies
├── html-files/         # Folder containing HTML files
│   ├── sample1.html
│   ├── sample2.html
│   └── sample3.html
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (comes with Node.js)

### Installation

1. Clone or download this repository
2. Navigate to the project directory
3. Install dependencies:

```bash
npm install
```

### Running the Application

1. Start the server:

```bash
npm start
```

2. Open your browser and go to:

```
http://localhost:3000
```

### Development Mode

For development with auto-restart on file changes:

```bash
npm run dev
```

## Adding HTML Files

Simply add your HTML files to the `html-files` folder. The application will automatically detect and display them on the next refresh.

## API Endpoints

- `GET /api/files` - Returns a JSON array of HTML files with metadata (name, size, lastModified, path)

## Customization

### Styling

The application uses modern CSS with:
- CSS Grid for responsive layout
- CSS Gradients for visual appeal
- Smooth transitions and hover effects
- Mobile-first responsive design

### File Types

Currently configured to scan for `.html` files only. To modify this, edit the filter in `server.js`:

```javascript
.filter(file => file.endsWith('.html'))
```

## Browser Compatibility

- Chrome/Edge (recommended)
- Firefox
- Safari
- Mobile browsers

## License

MIT License - feel free to use and modify as needed.
