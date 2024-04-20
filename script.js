document.getElementById("run-button").addEventListener("click", runCode);

document
  .getElementById("code-input")
  .addEventListener("keydown", function (event) {
    if (event.ctrlKey && event.key === "Enter") {
      runCode();
    }
  });

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
