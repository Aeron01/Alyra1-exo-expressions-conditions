
let firstname = "Bob"
let gender = "male"
let firstnameLc = firstname.toLocaleLowerCase()
let genderLc = gender.toLowerCase()
let msg = firstnameLc === 'bob' && genderLc === 'male' || firstnameLc === 'Alice' && genderLc === 'female' ? `Bonjour ${firstname}, vous êtes entré${gender === "female" ? "e" : ""} sur le chan.` :
  `Bonjour ${firstname}, vous n'êtes pas autoriser sur ce chan.`
console.log(`${msg}`)


// correction
let firstname1 = "Bob"
let gender1 = "female"

console.log(`Bonjour ${firstname1}, vous etes entré${gender1 === "female" ? "e" : ""} sur le chan`)
