function firstChar(text) {
    // Trim the input string to remove leading and trailing spaces
    let trimmedText = text.trim();
    
    // Check if the trimmed string is empty
    if (trimmedText.length === 0) {
        return ''; // Return empty string
    }
    
    // Return the first character
    return trimmedText.charAt(0);
}

// Uncomment the following line to show the prompt popup
const text = prompt("Enter text:");
alert(firstChar(text));