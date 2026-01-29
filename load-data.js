// ============================================
// LOAD MARKET DATA FROM JSON
// This script loads data.json and updates the page
// WITHOUT modifying the HTML file itself!
// ============================================

// ✅ FIXED: Wrap in DOMContentLoaded to ensure DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('📊 Loading market data...');
    
    // Fetch the JSON data
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            console.log('✅ Data loaded!', data);
            
            // Update Market Health Score
            const scoreElement = document.querySelector('.score-value');
            if (scoreElement) {
                scoreElement.childNodes[0].textContent = data.market_health_score;
            }
            
            // Update all indicators
            const indicators = document.querySelectorAll('.indicator-value');
            
            // Avg Price per Sqft
            if (indicators[0]) {
                indicators[0].textContent = 'AED ' + data.avg_price_sqft.toLocaleString();
            }
            
            // Monthly Transactions
            if (indicators[1]) {
                indicators[1].textContent = data.monthly_transactions.toLocaleString();
            }
            
            // Pipeline Units
            if (indicators[2]) {
                indicators[2].textContent = data.pipeline_units.toLocaleString();
            }
            
            // Average Yield
            if (indicators[3]) {
                indicators[3].textContent = data.avg_yield + '%';
            }
            
            // Foreign Investment
            if (indicators[6]) {
                indicators[6].textContent = data.foreign_investment + '%';
            }
            
            // Update timestamp
            const lastUpdated = new Date(data.last_updated);
            const timeString = lastUpdated.toLocaleString('en-US', { 
                month: 'short',
                day: 'numeric',
                hour: '2-digit', 
                minute: '2-digit',
                hour12: true 
            });
            
            const timestampElements = document.querySelectorAll('p, div, span');
            timestampElements.forEach(el => {
                if (el.textContent.includes('Last updated:')) {
                    el.textContent = el.textContent.replace(/Last updated: [^•]+/, 'Last updated: ' + timeString);
                }
            });
            
            console.log('✅ Page updated with live data!');
            console.log('📅 Data from:', timeString);
            
        })
        .catch(error => {
            console.log('⚠️ Could not load data.json, using static values');
            console.error(error);
        });
});
