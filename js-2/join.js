function join(array) {
  var string = array[0];
  for (var i = 1; i < array.length; i++) {
    string = string + " " + array[i]
  }
  return string
}


console.log(join([10, 9, 8, 7, 6, 5, 4]))
console.log(join([10, 8, 12, 5]))
console.log(join(["Hola,", "Daniel", "Muñoz"]))
