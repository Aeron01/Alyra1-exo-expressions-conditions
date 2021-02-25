let list = ['Alice', 'Bob', 'Charlie', 'Craig', 'Eve']
for (let i = 0; i <= list.length; ++i) {
  switch (i) {
    case 0:
      console.log('Alice want to exchange with Bob')
      break
    case 1:
      console.log('Bob want to exchange with Alice')
      break
    case 3:
      console.log('Charlie is a generic third participant')
      break
    case 4:
      console.log('Craig is a password cracker')
      break
    case 5:
      console.log('Eve is an eavesdropper')
      break
    default:
  }
}