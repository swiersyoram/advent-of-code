file = open('./input.txt', 'r')
puzzleInput = file.readlines()

redCubes = 12
greenCubes = 13
blueCubes = 14


# def getGame(line):
#     gameIndex = puzzleInput[i].find(':')
#     if gameIndex == 6:
#         return puzzleInput[i][gameIndex - 1:gameIndex]
#     elif gameIndex == 7:
#         return puzzleInput[i][gameIndex - 2:gameIndex]
#     elif gameIndex == 8:
#         return puzzleInput[i][gameIndex - 3:gameIndex]
#
#
# def isGamePossible(line):
#     possible = 'true'
#     pairs = line.split(':')[1].split(';')
#     for i in range(len(pairs)):
#         pairs[i] = pairs[i].split(',')
#         for j in range(len(pairs[i])):
#             cubes = pairs[i][j].split()
#             print(cubes)
#             if (cubes[1] == 'red' and int(cubes[0]) > 12) or (cubes[1] == 'green' and int(cubes[0]) > 13) or (
#                     cubes[1] == 'blue' and int(cubes[0]) > 14):
#                 possible = 'false'
#
#     return possible
#
# total = 0
# for i in range(len(puzzleInput)):
#     game = getGame(puzzleInput[i])
#     print(puzzleInput[i], end='')
#     possible = isGamePossible(puzzleInput[i])
#     print(possible)
#     if possible == 'true':
#         total = total + int(game)
# print(total)

# Part 2

total = 0

for i in range(len(puzzleInput)):
    rgb = {'red': 0, 'green': 0, 'blue': 0}
    puzzleInput[i] = puzzleInput[i].split(':')[1].split('\n')[0].split(';')

    for j in range(len(puzzleInput[i])):
        puzzleInput[i][j] = puzzleInput[i][j].split(',')
        for k in range(len(puzzleInput[i][j])):
            value, item = puzzleInput[i][j][k].split()
            if rgb[item] < int(value):
                rgb[item] = int(value)
    # print(rgb)
    total = total + (rgb['red'] * rgb['green'] * rgb['blue'])

print(total)

