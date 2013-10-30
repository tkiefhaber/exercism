class Bob:
  def __init__(self):
    self

  def hey(self, input):
    import re
    if input == None:
      return 'Fine. Be that way!'
    elif input == input.upper():
      return 'Woah, chill out!'
    elif re.search('\?', input):
      return 'Sure.'
    else:
      return 'Whatever.'
