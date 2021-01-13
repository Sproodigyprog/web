function getPrime() {
  let n = 0

  while(n < 100) {
    let m = 2
    while((m < n)) {
      if (n % m === 0) break
      else {
        m++
        if (n === m) console.log(`n: ${n}`)
      }
    }
    n++
  }
}

getPrime()
