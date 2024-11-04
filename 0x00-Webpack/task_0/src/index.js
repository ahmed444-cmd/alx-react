import $ from 'jquery';

// Function to create and append paragraphs
function addParagraphs() {
    for (let i = 1; i <= 3; i++) {
        $('body').append(`<p>This is paragraph ${i}</p>`);
    }
}

// Call the function to add paragraphs
addParagraphs();
