var greeting = (hour) => {
  return (name) => {
    return (when) => {
      var greet = (hour > 12) ? 'Good Evening' : 'Good Morning'
      console.log(`${greet} ${name} hasta ${when}`)
    }
  }
}

greeting(13)('Richard')('Sabado')

var goodMorning = greeting(6)
goodMorning('Raphael')('Quinta')
goodMorning('John')('Quinta')

console.log('------------------')

var words = [
  {name: 'Java', version: 8}, 
  {name: 'Ruby', version: 2.3},
  {name: 'Node', version: 6.06},
  {name: 'Python', version: 3.4},
  {name: 'Elixir', version: 1.1},
  {name: 'Clojure', version: 2.1}
]

var findByName = (name) => {
    for(var i in words) {
      if( words[i].name == name ) {
        console.log('words')
        return (version) => {
          words[i].version = version;
        }
      }
  }
}

var java = findByName('Java')

java(9)
console.log(words);
java(10)
console.log(words);