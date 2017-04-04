var Invoice = (function () {
    function Invoice(name, city, state) {
        this.name = name;
        this.city = city;
        this.state = state;
        this.companyProfile = name + ", " + city + ", " + state;
    }
    return Invoice;
}());
var googleInvoice = new Invoice('Google', 'Mountain View', 'CA');
var yahooInvoice = new Invoice('Yahoo', 'SV', 'CA');
console.log(googleInvoice.companyProfile);
console.log(yahooInvoice.companyProfile);
//# sourceMappingURL=intro_to_classes.js.map