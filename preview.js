const preview = function(code) {
  new Function(code)();
};

const child_say = function(txt) {
  document.body.insertAdjacentHTML("beforeend", `${txt}<br>`);
};
