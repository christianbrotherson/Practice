File.open("teams1.txt", 'w+') { |f| f.write("Broncos, Panthers, Cowboys") }

# file_to_save = File.new("other_teams", 'w+')
# file_to_save.puts("Patriots, Raiders, Rams")
# file_to_save.close

# Options for files 
# r stands for reading
# a stands for appending to a file
# w stands for just writing to a file
# w+ stands for reading and writing to a file
# a+ stands for opening a file for reading and appending
# r+ stands for opening a file for updating, and includes both reading and writing