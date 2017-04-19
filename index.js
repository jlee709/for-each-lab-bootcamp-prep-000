

function iterativeLog(array){
   array.forEach((element, index, array) => {
    console.log(`${index}: ${element}`)
  });
}


// function callback(){
//
// }

function iterate(callback) {
  var array = ['jedi','sith','assasin']
  array.forEach(callback)
  return array
}



function doToArray(array, callback){
array.forEach(callback)
}


// You'll be editing index.js and running tests as usual.
// Define a function, iterativeLog(), that accepts an array. Call .forEach() on this array, and inside the callback, log each element with the format ${index}: ${element}.
// Define a function, iterate, that accepts a callback. Within the iterate() function, you should initialize an array — it can contain anything you want. Call .forEach() on this array, passing the callback to .forEach(). Then return the array that you initialized.
// Define a function, doToArray that accepts an array and a callback. Call .forEach() on the array, passing the callback as the forEach callback.
