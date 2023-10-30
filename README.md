Login Form roadmap

1. user Id : Name
2. password input
3. set password type
    a. Capital case
    b. lower case
    c. number
    d. special character
    e. max-8
4. Submit button
5. on success open thankyou page


  # assert that
(?=^.{8,}$)    # there are at least 8 characters
(              # and
  (?=.*\d)       # there is at least a digit
  |              # or
  (?=.*\W+)      # there is one or more "non word" characters (\W is equivalent to [^a-zA-Z0-9_])
)              # and
(?![.\n])      # there is no . or newline and
(?=.*[A-Z])    # there is at least an upper case letter and
(?=.*[a-z]).*$ # there is at least a lower case letter
.*$            # in a string of any characters