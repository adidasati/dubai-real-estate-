// ============================================
// SIMPLE UPDATE SCRIPT - Just updates timestamp
// This verifies the system works!
// ============================================

const fs = require('fs');

console.log('🔄 Starting simple update...');

try {
    // Read index.html
    let html = fs.readFileSync('index.html', 'utf8');
    
    // Update timestamp
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
    
    // Write back
    fs.writeFileSync('index.html', html, 'utf8');
    
    console.log('✅ Successfully updated!');
    console.log(`📅 New timestamp: ${timeString}`);
    
} catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
}
```

**שימרי כ: `update-simple.js`**

### **2.4 גררי את הקובץ `update-simple.js` לGitHub**

או לחצי "choose your files" ובחרי אותו

### **2.5 לחצי "Commit changes"**

✅ **קובץ 2 הועלה!**

---

# ✅ **בדיקה - איך זה אמור להיראות:**
```
📁 dubai-real-estate-/
├── 📁 .github/
│   └── 📁 workflows/
│       └── 📄 update-dashboard.yml ✅
├── 📄 index.html ✅
└── 📄 update-simple.js ✅
```

**תבדקי ב-"Code" tab שיש את כל 3 הדברים האלה! ✅**

---

# 🔥 **שלב 3: הריצי את זה!**

### **3.1 לחצי על טאב "Actions"** (למעלה)

### **3.2 בצד שמאל תראי: "Update Dashboard"**
לחצי עליו

### **3.3 לחצי על כפתור ירוק: "Run workflow"**

### **3.4 לחצי שוב: "Run workflow"** (בחלון הקטן)

### **3.5 חכי דקה...**

תראי:
- 🟡 צהוב = רץ עכשיו
- ✅ ירוק = הצליח!
- ❌ אדום = נכשל

---

# 🎉 **בדיקה אחרונה:**
```
1. לכי ל: https://adidasati.github.io/dubai-real-estate-/

2. Ctrl+F5 (רענון חזק)

3. גללי לתחתית

4. תראי: "Last updated: Jan 29, 10:45 AM"

✅ הזמן עדכני? זה עובד!!! 🎉