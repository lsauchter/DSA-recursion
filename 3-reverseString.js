const reverseString = function(string) {
    const arr = string.split('')
  
    if (arr.length === 1) {
      return arr[0]
    }
  
    return reverseString(arr.slice(1).join('')) + arr[0]
}
  
reverseString('abc')