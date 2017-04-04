class Invoice {
  companyProfile : string;

  constructor(public name, public city, public state) {
    this.companyProfile = name + ", " + city + ", " + state;
  }
}

var googleInvoice = new Invoice('Google', 'Mountain View', 'CA');
var yahooInvoice = new Invoice('Yahoo', 'SV', 'CA');

console.log(googleInvoice.companyProfile);
console.log(yahooInvoice.companyProfile);