require 'humanize'

# no_space_array, total = [], 0
# p (1..1000).to_a.map(&:humanize).each { |word| no_space_array << word.delete(" ").delete("-")}.each { |element| total += element.length }
# # p no_space_array
# p total

p (1..1000).to_a.map(&:humanize).join.tr(" -", "").length