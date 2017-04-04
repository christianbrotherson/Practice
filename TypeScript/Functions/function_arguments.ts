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

function lineupCard(team: string, ...players: string[]) {
  console.log('Team: ' + team);
  for (let player of players) {
    console.log(player);
  }
}

lineupCard('Astros', 'Alutve', 'Corerra', 'Bregman')