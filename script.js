document.getElementById("run-button").addEventListener("click", runCode);

// Ctrl + Enter key functionality
document
  .getElementById("code-input")
  .addEventListener("keydown", function (event) {
    if (event.ctrlKey && event.key === "Enter") {
      runCode();
    }
  });

// Tab key functionality
var space = "   ";
document
  .getElementById("code-input")
  .addEventListener("keydown", function (event) {
    if (event.key === "Tab") {
      event.preventDefault();
      var textarea = event.target;
      var start = textarea.selectionStart;
      var end = textarea.selectionEnd;
      textarea.value =
        textarea.value.substring(0, start) +
        space +
        textarea.value.substring(end);
      textarea.selectionStart = textarea.selectionEnd = start + 1;
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

// Change Mode
var change_mode = document.getElementById("change-mode");

change_mode.onclick = function () {
  change_mode.classList.toggle("ri-sun-line");
  document.body.classList.toggle("dark-mode");
};

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
