
let firstname = "Bob"
let gender = "male"
let msg = firstname === 'Bob' && gender === 'male' || firstname === 'Alice' && gender === 'female' ? `Bonjour ${firstname}, vous êtes entrée sur le chan.` :
  `Bonjour ${firstname}, vous n'êtes pas autoriser à entrée sur le chan.`
console.log(`${msg}`)
