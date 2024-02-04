 function numbersOfRepeat(numbers){
  let count = 0;
  for (const number of numbers){
    if (String(number) === '4'){
        count++
    }
  }
  console.log(count)
  return count
 }

 const numbers = [2, 4, 4, 5, 4, 6, 6, 4, 3, 3, 2, 6, 4, 5, 6, 8]
 const repeat = numbersOfRepeat(numbers)
 console.log(repeat)