file = open('./input.txt', 'r')
puzzleInput = file.readlines()

def getNumber(number, coors):
    return {'number': number, 'x': coors[0] - len(number), 'y': coors[1]}

def getNumbers():
    numbers = []
    for i in range(len(puzzleInput)):
        chars = list(puzzleInput[i])
        number = ''
        for j in range(len(chars)):
            char = chars[j]
            if char.isnumeric():
                number = number + char
                if j == len(chars) - 1:
                    numbers.append(getNumber(number, [j, i]))
            else:
                if number != '':
                    numbers.append(getNumber(number, [j, i]))
                number = ''
    return numbers


def isValidSymbol(coors):
    y, x = coors
    if not isInRange(coors):
        return False
    char = puzzleInput[y][x]
    return char != '.' and char != ' '


def isInRange(coors):
    x, y = coors
    return 0 <= x < len(puzzleInput[0]) - 1 and 0 <= y < len(puzzleInput) - 1


def isValidNumber(coors, numberLength):
    x, y = coors
    isValid = False
    if isValidSymbol([y, x - 1]) or isValidSymbol([y, x + numberLength]):
        isValid = True
    for i in range(x - 1, x + numberLength + 1):
        if isValidSymbol([y - 1, i]) or isValidSymbol([y + 1, i]):
            isValid = True
    return isValid


numbers = getNumbers()
total = 0
for i in range(len(numbers)):
    number = int(numbers[i]['number'])
    coors = [numbers[i]['x'], numbers[i]['y']]
    numberLength = len(str(number))
    isValid = isValidNumber(coors, numberLength)
    if isValid:
        total = total + number

print(total)
