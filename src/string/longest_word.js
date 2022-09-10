let longestWord = (string) => {
    let stringg = string.split(" ");
    let longest = 0;
    let longest_word = null;
    for (let i = 0; i < stringg.length; i++) {
      if (longest < stringg[i].length) {
        longest = stringg[i].length;
        longest_word = stringg[i];
      }
    }
    return longest_word;
};
console.log(longestWord("Hello guys this is geeksforgeeks where students learn programming"));