string = "The 12 quick brown fox jumped over the 10 lazy dogs"

p string =~ /o/

p string =~ /z/ ? "Valid" : "Invalid" 

# The above line is the one line regex for the following if statement
# if string =~ /z/ 
#   "Valid"
# else
#   "Invalid"
# end

p string =~ /Z/i ? "Valid" : "Invalid" 
# the i makes the search case insensitive

p string.to_enum(:scan, /\d+/).map { Regexp.last_match }
# the d searches for integers, the plus searches for multiple instances
