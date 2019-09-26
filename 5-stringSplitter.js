const stringSplitter = function(str) {
    if (str.length === 1) {
      return str
    }
    stringSplitter(str.slice(1))
    return[...str]
}
  
stringSplitter('abc')