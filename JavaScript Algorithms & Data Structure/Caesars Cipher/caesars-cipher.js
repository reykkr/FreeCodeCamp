function rot13(str) {
  let decodedStr = '';

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (/[A-Z]/.test(char)) {
      const charCode = char.charCodeAt(0);
      let decodedCharCode = charCode - 13;
      
      if (decodedCharCode < 65) {
        decodedCharCode += 26; 
      }

      decodedStr += String.fromCharCode(decodedCharCode);
    } else {
      decodedStr += char;
    }
  }

  return decodedStr;
}

console.log(rot13("SERR PBQR PNZC")); 
console.log(rot13("SERR CVMMN!"));
console.log(rot13("SERR YBIR?"));
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));