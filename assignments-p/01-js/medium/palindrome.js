/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.trim();
  str = str.toLowerCase();
  str = str.replaceAll(' ', '');
  specialChar = ['!','?', ',', '.']
  let i=0, j=str.length-1;
  while(i<=j) {
    if(specialChar.includes(str[i])) {
      i++;
    }
    if(specialChar.includes(str[j])) {
      j--;
    }
    if(str[i] != str[j]) {
      return false;
  }
  i++;
  j--;
}
  return true;
}

module.exports = isPalindrome;
