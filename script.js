/* Write your code here! */

function higherOrLower(val1, val2){
  if(val1 > val2){
    return "higher"
  } else if(val1 < val2){
    return "lower"
  }else{
    return "equal"
  }
}

function dvdCollection(movies1, movies2, movies3){
  let movies = [...movies1, ...movies2, ...movies3]
  return movies.sort()
}

function studentBody(arr){
  let total = 0
  let totalAge = 0
  let totalGrade = 0
  for(let i = 0; i < arr.length; i++){
    const student = arr[i]
    total +=1
    totalAge += student.age
    totalGrade += student.grade
  }
  avgAge = totalAge/total
  avgGrade = totalGrade/total
  return {total: total, age: avgAge, grade: avgGrade}
}

function fruitBasket(arr){
  let fruitObjects = []
  for(let i = 0; i < arr.length; i++){
    fruitObjects.push({
      name: arr[i],
      weight: Math.floor(Math.random()* 10)+1,
      eat(){
        return `You ate a ${arr[i]}!`
      },
      throwAway(){
        return `You threw away a ${arr[i]}!`
      }
    })
  }
  return fruitObjects
}


// class fruitBasket{
//   constructor(name){
//     this.name = 
//     this.weight = Math.floor(Math.random()* 10)+1
//   }
//   eat(){
//     return `You ate a ${this.name}!`
//   }
//   throwAway(){
//     return `You threw away a ${this.name}`
//   }
// }

function getBooksByLanguage(){
  
}



/**
 * The code below exports your functions so they can be tested.
 * Notice that the names are currently commented out.
 * Uncomment the functions as you write them.
 */
module.exports = {
  // higherOrLower,
  // dvdCollection,
  // studentBody,
  fruitBasket,
  // getBooksByLanguage,
  // coinMachine,
};
