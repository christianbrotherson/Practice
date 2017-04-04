var names : string[] = ['Christian', 'Courtney', 'Brenden'];
var counter : number = 0;

(function() {
  for (let name in names) {
    counter++;
  }
})();

console.log(counter)