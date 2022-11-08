/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
function test(a, b, c) {
  let foo = 100;
}
$(test)
$(function () {
  console.log("HELLO");
})();
function foo() {
  $(function () {
    console.log("HELLO");
  })();
}
$(foo)
let foo3 = function () {
  function testing(a, b) {}
  $(testing)
};
$(foo3)
const foo2 = () => {};
$(foo2)
$(() => {
  console.log("HELLO!");
})();
$Object.freeze(foo);
new $Object();
async function foo4() {}
$(foo4)
async function meh() {
  await foo4();
}
$(meh)
function* toFailures() {
  const failure = toFailures();
  yield failure;
}
$(toFailures)
$(function fsafa() {
  return {
    abort: $(function abort() {}),
    finish: $(function finish(a, b, c) {}),
    meh() {}
  };
})();
let object = {
  f2: $(function () {})
};
/******/ })()
;