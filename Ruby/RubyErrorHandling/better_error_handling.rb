# begin
#   puts 8/0
# rescue ZeroDivisionError => e
#   puts "Error occured: #{e}"
# end

begin
  puts nil + 10
rescue StandardError => e
  puts "Error occured: #{e}"
end