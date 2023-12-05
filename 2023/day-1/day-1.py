import re

file = open('./input.txt', 'r')
puzzleInput = file.readlines()
print(puzzleInput)


# Part 1
# numbers = []
# for i in range(len(puzzleInput)):
#     item = puzzleInput[i]
#     firstDigit = 0
#     secondDigit = 0
#     for j in range(len(item)):
#         char = item[j]
#         if(char.isnumeric()):
#             if(firstDigit == 0):
#                 firstDigit = char
#             secondDigit = char
#     number = int(firstDigit + secondDigit)
#     numbers.append(number)
#
# print(sum(numbers))

def getMatches(string):
    matches = []
    for i in range(len(numberStrings)):
            numberString = numberStrings[i]
            allMatches = findAll(string, numberString)
            for j in allMatches:
                matches.append({'number': numberString, 'match': j, 'value': i + 1})
    matches.sort(key=lambda x: x['match'])
    filterdMatches = []
    for e in filter(lambda x: x['match'] != -1, matches):
        filterdMatches.append(e)
    return filterdMatches

def findAll(string, substring):
    return [m.start() for m in re.finditer(substring, string)]

# Part 2
numbers = []
numberStrings = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']

for i in range(len(puzzleInput)):
    item = puzzleInput[i]
    matches = getMatches(item)
    # print(matches)
    listItem = list(item)
    for j in range(len(matches)):
        listItem[matches[j]['match']] = str(matches[j]['value'])
    item = ''.join(listItem)

    firstDigit = 0
    secondDigit = 0
    for j in range(len(item)):
        char = item[j]
        if(char.isnumeric()):
            if(firstDigit == 0):
                firstDigit = char
            secondDigit = char
    number = int(firstDigit + secondDigit)
    numbers.append(number)

print(sum(numbers))
