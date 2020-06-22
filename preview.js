function preview(code) {
  new Function(code)();
}

function say(txt) {
  document.body.insertAdjacentHTML("beforeend", `${txt}<br>`);
}
