function numbsOfvowels(vowels){
    const vowel = ["a", "e", "i", "o", "u"]
    let count = 0;
for (const letter of vowels){
    if(vowel.includes(letter)){
        count++
    }
}
console.log(count)
}


const vowels = "agdbwereubdnaserejbaaraj"
const numOfv = numbsOfvowels(vowels)
console.log(numOfv)