const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files
app.use(express.static('.'));

// API endpoint to get HTML files
app.get('/api/files', (req, res) => {
    const htmlFilesDir = path.join(__dirname, 'html-files');
    
    try {
        if (!fs.existsSync(htmlFilesDir)) {
            return res.json([]);
        }
        
        const files = fs.readdirSync(htmlFilesDir)
            .filter(file => file.endsWith('.html'))
            .map(file => {
                const filePath = path.join(htmlFilesDir, file);
                const stats = fs.statSync(filePath);
                
                return {
                    name: file,
                    size: stats.size,
                    lastModified: stats.mtime.toISOString(),
                    path: `html-files/${file}`
                };
            });
        
        res.json(files);
    } catch (error) {
        console.error('Error reading files:', error);
        res.status(500).json({ error: 'Failed to read files' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
    console.log(`Open http://localhost:${PORT} to view the HTML directory`);
});
