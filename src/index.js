module.exports = function reverse (n) {
  let res = '';
  n = Math.abs(n) + '';

  for(let i = (n.length - 1); i >= 0; i--) {
    res += n[i];
  }

  return res;
}
