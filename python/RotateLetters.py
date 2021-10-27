def rotateLetter(letter, rotations):
    isCap = letter.upper() == letter
    
    letterPos = ord(letter.lower()) - 96
    rotatePos = letterPos + rotations

    if rotatePos > 26:
        rotatePos = rotatePos % 26

    rotatedLetter = chr(rotatePos + 96)
    return rotatedLetter.upper() if isCap else rotatedLetter


print(rotateLetter("A", 4) == "E")
print(rotateLetter("l", 4) == "p")
print(rotateLetter("a", 26) == "z")
