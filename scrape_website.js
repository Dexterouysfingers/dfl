const https = require('https');
const fs = require('fs');

// Function to fetch website content
function fetchWebsite(url) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'farmcrowdyweb.netlify.app',
      path: '/fcfood',
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    };

    const req = https.request(options, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        resolve(data);
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    req.end();
  });
}

// Main function to analyze the website
async function analyzeWebsite() {
  try {
    console.log('Fetching website content...');
    const content = await fetchWebsite('https://farmcrowdyweb.netlify.app/fcfood');
    
    // Save the raw HTML for inspection
    fs.writeFileSync('website_content.html', content);
    console.log('Website content saved to website_content.html');
    
    // Basic analysis
    console.log('\n=== BASIC ANALYSIS ===');
    console.log('Content length:', content.length, 'characters');
    
    // Look for common UI elements
    const analysis = {
      hasNavigation: content.includes('nav') || content.includes('navigation'),
      hasHeader: content.includes('header'),
      hasFooter: content.includes('footer'),
      hasForms: content.includes('<form'),
      hasButtons: content.includes('<button'),
      hasImages: content.includes('<img'),
      hasLinks: content.includes('<a href'),
      hasScripts: content.includes('<script'),
      hasStyles: content.includes('<style') || content.includes('stylesheet'),
      isReactApp: content.includes('react') || content.includes('React'),
      isNextJS: content.includes('next') || content.includes('Next'),
      hasTailwind: content.includes('tailwind') || content.includes('class="'),
      hasBootstrap: content.includes('bootstrap') || content.includes('btn-'),
      hasMaterialUI: content.includes('mui') || content.includes('Mui'),
    };
    
    console.log('\n=== DETECTED FEATURES ===');
    Object.entries(analysis).forEach(([feature, detected]) => {
      console.log(`${feature}: ${detected ? '✅' : '❌'}`);
    });
    
    // Extract title
    const titleMatch = content.match(/<title[^>]*>([^<]+)<\/title>/i);
    if (titleMatch) {
      console.log('\nPage title:', titleMatch[1]);
    }
    
    // Look for meta description
    const metaMatch = content.match(/<meta[^>]*name="description"[^>]*content="([^"]+)"/i);
    if (metaMatch) {
      console.log('Meta description:', metaMatch[1]);
    }
    
    console.log('\nAnalysis complete! Check website_content.html for the full HTML content.');
    
  } catch (error) {
    console.error('Error fetching website:', error.message);
  }
}

// Run the analysis
analyzeWebsite(); 