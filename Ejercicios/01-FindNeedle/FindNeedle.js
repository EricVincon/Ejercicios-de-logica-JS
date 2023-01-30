 function FindNeedle(haystack, needle) {
    if (needle.length > haystack.length || needle === "") {
      return -1;
    }
    for (let i = 0; i < haystack.length; i++) {
      if (haystack.slice(i, i + needle.length) === needle) return i;
    }
  }


module.exports = FindNeedle
