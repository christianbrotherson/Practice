// var x : number = 0
// while (x < 10) {
//   console.log(x);
//   x++;
// }
var players = [3, 23, 4, 54, 2];
// for in
console.log("for/in");
for (var player in players) {
    console.log(player);
}
// for of
console.log("for/of");
for (var _i = 0, players_1 = players; _i < players_1.length; _i++) {
    var player = players_1[_i];
    console.log(player);
}
//# sourceMappingURL=loops.js.map