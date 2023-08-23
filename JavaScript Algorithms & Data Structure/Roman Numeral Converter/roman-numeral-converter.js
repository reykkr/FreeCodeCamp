function convertToRoman(num) {
  const romanNumerals = {
    1000: 'M',
    900: 'CM',
    500: 'D',
    400: 'CD',
    100: 'C',
    90: 'XC',
    50: 'L',
    40: 'XL',
    10: 'X',
    9: 'IX',
    5: 'V',
    4: 'IV',
    1: 'I'
  };

  let result = '';
  const sortedKeys = Object.keys(romanNumerals).sort((a, b) => b - a);

  for (let value of sortedKeys) {
    while (num >= value) {
      result += romanNumerals[value];
      num -= value;
    }
  }

  return result;
}

console.log(convertToRoman(4));    
console.log(convertToRoman(5));     
console.log(convertToRoman(9));     
console.log(convertToRoman(12));    
console.log(convertToRoman(16));    
console.log(convertToRoman(29));    
console.log(convertToRoman(44));    
console.log(convertToRoman(45));
console.log(convertToRoman(68));    
console.log(convertToRoman(83));    
console.log(convertToRoman(97));    
console.log(convertToRoman(99));    
console.log(convertToRoman(400));
console.log(convertToRoman(500));   
console.log(convertToRoman(501));   
console.log(convertToRoman(649));   
console.log(convertToRoman(798));  
console.log(convertToRoman(891));   
console.log(convertToRoman(1000));  
console.log(convertToRoman(1004));  
console.log(convertToRoman(1006));  
console.log(convertToRoman(1023));  
console.log(convertToRoman(2014));  
console.log(convertToRoman(3999));  