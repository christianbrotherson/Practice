#Getters and Setters

class ApiConnector 
  attr_accessor :title, :description, :url

  def test_method
    puts "testing class call"
  end
end

api = ApiConnector.new


api.url = 'https://google.com'

puts api.url

api.test_method