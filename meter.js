// Get DOM elements
const metersInput = document.getElementById('meters');
const feetInput = document.getElementById('feet');
const convertBtn = document.getElementById('convertBtn');
const clearBtn = document.getElementById('clearBtn');

// Conversion constant
const METERS_TO_FEET = 3.28084;

// Convert meters to feet
function metersToFeet(meters) {
    return meters * METERS_TO_FEET;
}

// Convert feet to meters
function feetToMeters(feet) {
    return feet / METERS_TO_FEET;
}

// Format number to 2 decimal places
function formatNumber(number) {
    return Math.round(number * 100) / 100;
}

// Handle conversion button click
convertBtn.addEventListener('click', function() {
    const metersValue = parseFloat(metersInput.value);
    
    if (isNaN(metersValue) || metersValue === '') {
        alert('Please enter a valid number in meters');
        metersInput.focus();
        return;
    }
    
    const result = metersToFeet(metersValue);
    feetInput.value = formatNumber(result);
});

// Handle real-time conversion when typing in meters input
metersInput.addEventListener('input', function() {
    const metersValue = parseFloat(metersInput.value);
    
    if (!isNaN(metersValue) && metersValue !== '') {
        const result = metersToFeet(metersValue);
        feetInput.value = formatNumber(result);
    } else {
        feetInput.value = '';
    }
});

// Handle real-time conversion when typing in feet input (reverse conversion)
feetInput.addEventListener('input', function() {
    const feetValue = parseFloat(feetInput.value);
    
    if (!isNaN(feetValue) && feetValue !== '') {
        const result = feetToMeters(feetValue);
        metersInput.value = formatNumber(result);
    } else {
        metersInput.value = '';
    }
});

// Handle Enter key press in meters input
metersInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        convertBtn.click();
    }
});

// Handle Enter key press in feet input
feetInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        convertBtn.click();
    }
});

// Handle clear button click
clearBtn.addEventListener('click', function() {
    metersInput.value = '';
    feetInput.value = '';
    metersInput.focus();
});

// Focus on meters input when page loads
window.addEventListener('load', function() {
    metersInput.focus();
});
