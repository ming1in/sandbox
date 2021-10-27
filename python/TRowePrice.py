KEYPAD = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [-1, 0, -1]]
NUM_ROWS = 4
NUM_COLS = 3


def getPossibleRookMoves(start):
    currRow, currCol = start[0], start[1]

    possibleMoves = []

    for row in range(NUM_ROWS-1):
        move = [row, currCol]

        if move != start:
            possibleMoves.append(move)

    for col in range(NUM_COLS):
        move = [currRow, col]

        if move != start:
            possibleMoves.append(move)

    if currCol == 1:
        possibleMoves.append([3, 1])

    return possibleMoves


# start -> [row, col]
def findPhoneNumber(start):
    queue = [
        [str(KEYPAD[start[0]][start[1]]), start]
    ]  # [ phoneNum: string, currPos: [row, col] ]

    phoneNums = []
    
    memo = {}

    while len(queue) != 0:
        currentPhoneNum, currPos = queue[0]
        possibleMoves = getPossibleRookMoves(currPos)
        
        for move in possibleMoves:
            newPhoneNum = currentPhoneNum + str(KEYPAD[move[0]][move[1]])

            if len(newPhoneNum) == 10:
                phoneNums.append(newPhoneNum)
            else:
                queue.append([newPhoneNum, move])

        queue = queue[1:]

    return phoneNums


findPhoneNumber([2, 2])
