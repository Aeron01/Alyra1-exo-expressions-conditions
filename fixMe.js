let list = "'Alice', 'Bob', 'Charlie', 'Craig', 'Eva'"
for (let i = 0; i <= list.length; ++i) {
  list[i] = list[i].toLowerCase()
  switch (list[i]) {
    case 'ALICE': /*(list === 'Alice' && list === 'Bob')*/
      consol.log('Alice want to exchange with Bob')
    case 'BOB':
      console.log('Bob want to exchange with Alice')
    case 'CHARLIE':
      console.log('Charlie is a generic third participant')
    case 'CRAIG':
      console.log('Craig is a password cracker')
    case 'EVE':
      console.log('Eve is an eavesdropper')
    default:
  }
}