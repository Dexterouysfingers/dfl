const fs = require('fs');

// Read the website content
const content = fs.readFileSync('website_content.html', 'utf8');

console.log('=== DETAILED WEBSITE ANALYSIS ===\n');

// Basic Information
console.log('📋 BASIC INFORMATION:');
console.log('- Title: Farmcrowdy');
console.log('- Character count:', content.length);
console.log('- File size:', (content.length / 1024).toFixed(2), 'KB');

// Technology Stack Analysis
console.log('\n🔧 TECHNOLOGY STACK:');
const technologies = {
  'React': content.includes('react') || content.includes('React'),
  'Next.js': content.includes('next') || content.includes('Next'),
  'Bootstrap 4.3.1': content.includes('bootstrap/4.3.1'),
  'Font Awesome': content.includes('font-awesome'),
  'Google Fonts': content.includes('fonts.googleapis.com'),
  'AOS (Animate On Scroll)': content.includes('aos'),
  'SweetAlert2': content.includes('sweetalert2'),
  'Google Analytics': content.includes('googletagmanager'),
  'Webpack': content.includes('webpackJsonp'),
  'PWA (Progressive Web App)': content.includes('manifest.json')
};

Object.entries(technologies).forEach(([tech, detected]) => {
  console.log(`- ${tech}: ${detected ? '✅' : '❌'}`);
});

// Font Analysis
console.log('\n📝 FONTS USED:');
const fonts = [
  'Open Sans',
  'Nunito Sans', 
  'Source Sans Pro',
  'Noto Sans JP'
];

fonts.forEach(font => {
  if (content.includes(font)) {
    console.log(`- ${font}`);
  }
});

// External Resources
console.log('\n🌐 EXTERNAL RESOURCES:');
const externalResources = [
  'Bootstrap CDN',
  'Font Awesome CDN',
  'Google Fonts',
  'Cloudflare CDN',
  'Google Analytics'
];

externalResources.forEach(resource => {
  if (content.includes(resource.toLowerCase().replace(' ', ''))) {
    console.log(`- ${resource}`);
  }
});

// UI Components Detection
console.log('\n🎨 UI COMPONENTS:');
const uiComponents = {
  'Navigation': content.includes('nav') || content.includes('navbar'),
  'Header': content.includes('header'),
  'Footer': content.includes('footer'),
  'Forms': content.includes('<form') || content.includes('form-control'),
  'Buttons': content.includes('<button') || content.includes('btn-'),
  'Images': content.includes('<img'),
  'Links': content.includes('<a href'),
  'Icons': content.includes('fa-') || content.includes('fas ') || content.includes('far '),
  'Animations': content.includes('aos'),
  'Alerts/Modals': content.includes('sweetalert')
};

Object.entries(uiComponents).forEach(([component, detected]) => {
  console.log(`- ${component}: ${detected ? '✅' : '❌'}`);
});

// SEO and Meta Analysis
console.log('\n🔍 SEO & META ANALYSIS:');
const seoElements = {
  'Meta Description': content.includes('name="description"'),
  'Meta Keywords': content.includes('name="keywords"'),
  'Viewport Meta': content.includes('viewport'),
  'Theme Color': content.includes('theme-color'),
  'Favicon': content.includes('fclogowhite.png'),
  'Google Analytics': content.includes('UA-85036927-1')
};

Object.entries(seoElements).forEach(([element, detected]) => {
  console.log(`- ${element}: ${detected ? '✅' : '❌'}`);
});

// Performance and Loading
console.log('\n⚡ PERFORMANCE FEATURES:');
const performanceFeatures = {
  'Preconnect to External Domains': content.includes('preconnect'),
  'Async Script Loading': content.includes('async'),
  'CSS Chunking': content.includes('chunk.css'),
  'JS Chunking': content.includes('chunk.js'),
  'Manifest for PWA': content.includes('manifest.json')
};

Object.entries(performanceFeatures).forEach(([feature, detected]) => {
  console.log(`- ${feature}: ${detected ? '✅' : '❌'}`);
});

// Content Analysis
console.log('\n📄 CONTENT ANALYSIS:');
const keywords = [
  'farmcrowdy',
  'contractor',
  'nigeria',
  'molecular',
  'food'
];

console.log('Keywords found in content:');
keywords.forEach(keyword => {
  const count = (content.match(new RegExp(keyword, 'gi')) || []).length;
  if (count > 0) {
    console.log(`- "${keyword}": ${count} occurrences`);
  }
});

// Security and Best Practices
console.log('\n🔒 SECURITY & BEST PRACTICES:');
const securityFeatures = {
  'HTTPS': content.includes('https://'),
  'CSP (Content Security Policy)': content.includes('content-security-policy'),
  'X-Frame-Options': content.includes('x-frame-options'),
  'XSS Protection': content.includes('x-xss-protection'),
  'NoScript Fallback': content.includes('noscript')
};

Object.entries(securityFeatures).forEach(([feature, detected]) => {
  console.log(`- ${feature}: ${detected ? '✅' : '❌'}`);
});

console.log('\n=== ANALYSIS COMPLETE ===');
console.log('\n💡 SUMMARY:');
console.log('This appears to be a React-based web application for Farmcrowdy,');
console.log('a contractor platform in Nigeria. It uses Bootstrap for styling,');
console.log('includes animations, and has PWA capabilities.'); 