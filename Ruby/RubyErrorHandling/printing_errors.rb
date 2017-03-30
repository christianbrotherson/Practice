def error_logger(e)
  File.open("RubyErrorHandling/error_logger.txt", 'a') do |file|
    file.puts e
  end
end

begin
  puts 8/0
rescue StandardError => e
  error_logger("Error: #{e} at #{Time.now}")
end