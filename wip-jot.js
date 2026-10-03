// quick notes in code

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

function debounce(fn, ms) {
  let t;
  return (...a) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...a), ms);
  };
}

console.log(sum([1, 2, 3]));
