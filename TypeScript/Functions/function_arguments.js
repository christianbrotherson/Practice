// function printAddress(street: string, streetTwo?: string, state = 'UT') {
//   console.log(street);
//   if (streetTwo) {
//     console.log(streetTwo);
//   }
//   console.log(state);
// }
// printAddress('265 First West');
// printAddress('265 First West', 'Apt 25');
// printAddress('265 First West', 'Apt 25', 'NV');
function lineupCard(team) {
    var players = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        players[_i - 1] = arguments[_i];
    }
    console.log('Team: ' + team);
    for (var _a = 0, players_1 = players; _a < players_1.length; _a++) {
        var player = players_1[_a];
        console.log(player);
    }
}
lineupCard('Astros', 'Alutve', 'Corerra', 'Bregman');
//# sourceMappingURL=function_arguments.js.map