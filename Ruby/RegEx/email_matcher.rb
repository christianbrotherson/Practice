VALID_EMAIL_REGEX = /\A([\w+\-].?)+@[a-z\d\-]+(\.[a-z]+)*\.[a-z]+\z/i

def is_valid_email? email
  email =~ VALID_EMAIL_REGEX
end

p is_valid_email?("christian@brotherson.com") ? "Valid" : "Invalid"
p is_valid_email?("christianbrotherson.com") ? "Valid" : "Invalid"
p is_valid_email?("christian.brotherson@brotherson.com") ? "Valid" : "Invalid"
p is_valid_email?("christian@brotherson") ? "Valid" : "Invalid"
p is_valid_email?("christian_b@brotherson.safe") ? "Valid" : "Invalid"

