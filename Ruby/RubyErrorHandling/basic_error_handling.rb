# puts 8/0 --should give error

begin
  puts 8/0
rescue 
  puts "Rescued the error"   
end