let password = '1a2b!ffffffff'
const crackme6 = (password) => {
  if (password.startsWith('1a2b!') && password.length > 13) {
    console.log('OK')
  } else {
    console.log('BAD')
  }
}
crackme6(password)