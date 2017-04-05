# def pig_latin_translator sentence
#   arr = sentence.split(' ')
#   arr.each do |word| 
#     word.split('').rotate(1) << ('ay')
#   end
# end

# p pig_latin_translator("the quick brown fox jumped over the lazy dog")



class PigLatin

  def choice
    puts "Welcome to the Translatinator, please choose 1) English to Pig Latin, or 2) Pig Latin to English"
    choice = gets.chomp.to_i

    if choice == 1
      puts "You have selected Pig Latin"
      pig_latinizer
    elsif choice == 2
      puts "You have selected English"
    else
      puts "Please enter a valid choice"
      self.choice
    end
  end

  def pig_latinizer
    puts "Enter a phrase that you want translated to Pig Latin"
    input = gets.chomp

    each_word = input.split(/ /)
    letter_array = []
    pig_latin = []
    vowel_array = %w(a e i o u)

    each_word.each do |word|
      letter_array = word.split(//)

      first_letter = letter_array.delete_at(0)
      new_letters = letter_array.join

      word = new_letters + first_letter + "ay"

      pig_latin << word
    end

    puts pig_latin.join(' ').capitalize
  end
end

my_translator = PigLatin.new

my_translator.choice