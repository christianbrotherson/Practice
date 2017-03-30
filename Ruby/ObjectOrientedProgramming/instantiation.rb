class Invoice
  def initialize customer, total
    @customer = customer
    @total = total
  end

  def summary
    puts "Invoice:"
    puts "Customer: #{@customer}"
    puts "Total: #{@total}"
  end
end

invoice = Invoice.new("Uber, Inc", 500)
invoice.summary