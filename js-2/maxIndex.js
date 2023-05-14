function maxIndex(pr_array){
  var resultado = 0;
  for (var i = 0; i < pr_array.length; i++) {
    if (pr_array[i] > pr_array[i - 1]) {
      resultado = i
    }
  }
  if (pr_array[0] == undefined) {
    resultado = -1
  }
  return resultado
}


console.log(maxIndex([1, 3, 2])) // 1
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])) // 0
console.log(maxIndex([])) // -1
