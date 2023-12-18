from functools import reduce

file = open('./input.txt', 'r')
puzzleInput = file.readlines()


def getInput():
    time, distance = puzzleInput
    times = int(''.join(list(filter(lambda x:x!='',time.split(':')[1].strip().split(' ')))))
    distances = int(''.join(list(filter(lambda x:x!='',distance.split(':')[1].strip().split(' ')))))
    return [times, distances]


timeDistance = getInput()
print(timeDistance)



# d = x * (t-x)

def calculateDistances(timeDistance):
    time, distance = timeDistance
    res = []
    for i in range(time):
        d = i * (time-i)
        if d > distance:
            res.append(d)
    return res


print(len(calculateDistances(timeDistance)))



