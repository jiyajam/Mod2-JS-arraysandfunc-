function concat(arr) {
    let result = "";  // Initialize an empty string to hold the result

    // Loop through each element in the array and concatenate it to the result
    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
    }

    return result;  // Return the concatenated string
}

// Hardcoded array of strings
let names = ["Johnny", "DeeDee", "Joey", "Marky"];

// Call the concat function and store the result
let concatenatedString = concat(names);

// Print the result to the HTML document
document.getElementById("output").innerHTML = concatenatedString;
