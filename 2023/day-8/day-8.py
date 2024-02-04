import time

file = open('./input.txt', 'r')
puzzleInput = file.readlines()


def getInstructionMap(instructionMap):
    for i in range(len(instructionMap)):

        base = [j.strip() for j in instructionMap[i].split('=')]
        current = base[0]
        left = base[1][1:4]
        right = base[1][6:9]
        instructionMap[i] = (current, left, right)
    return instructionMap

def parseInstructions(puzzleInput):
    instructions = [c for c in puzzleInput[0] if c != '\n']
    instructionMap = getInstructionMap(puzzleInput[2:])
    return (instructions, instructionMap)


def findInstruction(instructionMap, current, index):
    for i, value in enumerate(instructionMap[index:]):
        if(value[0] == current):
            return (value, i)
    for i, value in enumerate(instructionMap[:index]):
        if(value[0] == current):
            return (value, i)
    return None

def normalizeStep(step, instructions):
    if(step >= len(instructions)):
        return step % len(instructions)
    return step

instructions, instructionMap = parseInstructions(puzzleInput)
print(instructions, instructionMap)
step = 0
start = 'AAA'
next = ''



instruction = findInstruction(instructionMap, start, 1)
print(len(instructions))

while instruction[0][0] != 'ZZZ':
    print(step)
    normalizedStep = normalizeStep(step, instructions)
    print(normalizedStep)
    direction = instructions[normalizedStep]
    if(direction == 'L'):
        next = instruction[0][1]
    else:
        next = instruction[0][2]
    instruction = findInstruction(instructionMap, next, instruction[1])
    step += 1
    print(instruction)
print(step)



