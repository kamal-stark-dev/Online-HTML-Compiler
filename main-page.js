// Ctrl + Enter key functionality
document
  .getElementById("code-input")
  .addEventListener("keydown", function (event) {
    if (event.ctrlKey && event.key === "Enter") {
      runCode();
    }
  });

// Tab key functionality
const $textarea = document.getElementById("code-input");

const space = "    ";

$textarea.addEventListener("keydown", (e) => {
  if (e.key === "Tab") {
    e.preventDefault();
    const textarea = e.target;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    textarea.value =
      textarea.value.substring(0, start) +
      space +
      textarea.value.substring(end);
    textarea.selectionStart = textarea.selectionEnd = start + space.length;
  }
});

// Function to run the code
function runCode() {
  var code = document.getElementById("code-input").value;
  var iframe = document.getElementById("output-frame");
  var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;

  // Clear previous content
  iframeDocument.body.innerHTML = "";

  // Create a new HTML document inside the iframe
  var newDoc = iframeDocument.open();
  newDoc.write(code);
  newDoc.close();
}

// Going to end of line on clicking whitespaces afterwards
function handleTextInsertion(textarea, insertion) {
  // Get current cursor position and selected text range
  var start = textarea.selectionStart;
  var end = textarea.selectionEnd;

  // Adjust start position if text is selected
  if (start !== end) {
    var selectedText = textarea.value.substring(start, end);
    var leadingSpaces = selectedText.match(/^\s*/)[0];
    start += leadingSpaces.length;
  }

  // Insert text at the cursor position
  var newText =
    textarea.value.substring(0, start) +
    insertion +
    textarea.value.substring(end);

  textarea.value = newText;

  // Move cursor position forward by the length of the inserted text
  textarea.selectionStart = textarea.selectionEnd = start + insertion.length;
}

// Saving the code to local storage
document
  .getElementById("code-input")
  .addEventListener("input", function (event) {
    localStorage.setItem("code", event.target.value);
  });

document.addEventListener("DOMContentLoaded", function () {
  // Retrieve the saved code from local storage
  const savedCode = localStorage.getItem("code");

  // If there is saved code, set it as the value of the input field
  if (savedCode !== null) {
    document.getElementById("code-input").value = savedCode;
  }
});
