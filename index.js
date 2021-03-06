/**
 * JS Playground implementation using new Function() in iframe
 */

function run() {
  const code = document.getElementById("code").value;
  const previewFrame = document.getElementById("previewFrame").contentWindow;
  previewFrame.preview(code);
}

function say(txt) {
  document.body.insertAdjacentHTML("beforeend", `${txt}<br>`);
}
