function firstChar(text) {
  // your code here
	 let trimmedText = text.trim();
    
    // Step 2: Check if the trimmed string is empty
    if (trimmedText.length === 0) {
        return ''; // Return empty string
    }
    
    // Step 3: Return the first character
    return trimmedText.charAt(0);
}

// Do not change the code below
//Uncomment the following line to show the prompt popup
//const text = prompt("Enter text:");
alert(firstChar(text));
