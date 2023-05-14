function max(array){
  var res_parc = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] > res_parc) {
    res_parc = array[i]
  }
}
if (res_parc == 0) {
  res_parc = undefined
}
  return res_parc
}


console.log(max([1, 3, 2])) // 3
console.log(max([10, 9, 8, 7, 6, 5, 4])) // 10
console.log(max([])) // undefined
