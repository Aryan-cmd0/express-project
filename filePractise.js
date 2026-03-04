// const { log } = require("console");
const fs = require("fs");

console.log("Starting file practice...");

// Write file
fs.writeFile("practice.txt", "This is my first file practice.", (err) => {
    if (err) {
        console.log("Error writing file");
        return;
    }

    console.log("File written successfully.");

    // Read file
    fs.readFile("practice.txt", (err, data) => {
        if (err) {
            console.log("Error reading file");
            return;
        }

        console.log("File content:");
        console.log(data.toString());

        // Append file
        fs.appendFile("practice.txt", "\nLearning backend step by step 🚀", (err) => {
            if (err) {
                console.log("Error appending file");
                return;
            }

            console.log("Content appended successfully.");
        });
    });
});

console.log("Ending file practice...");
