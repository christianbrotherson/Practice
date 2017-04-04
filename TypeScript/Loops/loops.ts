// var x : number = 0

// while (x < 10) {
//   console.log(x);
//   x++;
// }

let players : number[] = [3, 23, 4, 54, 2]
// for in
console.log("for/in")
for (let player in players) {
  console.log(player);
}

// for of
console.log("for/of")
for (let player of players) {
  console.log(player);
}