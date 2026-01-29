const fs = require('fs');

console.log('Starting update...');

try {
    let html = fs.readFileSync('index.html', 'utf8');
    
    const now = new Date();
    const timeString = now.toLocaleString('en-US', { 
        month: 'short',
        day: 'numeric',
        hour: '2-digit', 
        minute: '2-digit',
        hour12: true 
    });
    
    html = html.replace(
        /Last updated: [^•]+/g,
        `Last updated: ${timeString}`
    );
    
    fs.writeFileSync('index.html', html, 'utf8');
    
    console.log('Success! Updated to:', timeString);
    
} catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
}
