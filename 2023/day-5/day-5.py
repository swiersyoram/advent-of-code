file = open('./input.txt', 'r')
puzzleInput = file.readlines()
import numpy as np
import threading
import multiprocessing


class Map:
    def __init__(self, values):
        self.mapName = values[0].split(':')[0].strip()
        self.maps = list(map(lambda x: list(map(lambda x: int(x), x.split(' '))), values[1:]))

    def __str__(self):
        return f'Map: {self.mapName}, maps: {self.maps}'


def getSeeds():
    return list(map(lambda x: int(x), puzzleInput[0].split(':')[1].strip().split(' ')))


def getMaps():
    maps = []
    map = []
    for i in range(len(puzzleInput)):
        if puzzleInput[i] != '\n' and i != len(puzzleInput) - 1:
            map.append(puzzleInput[i].strip())
        else:
            maps.append(Map(map))
            map = []
    return maps[1:]


def calculateMap(inputMap, seed):
    for i in range(len(inputMap.maps)):
        map = inputMap.maps[i]
        if map[1] <= seed < map[1] + map[2]:
            return seed - map[1] + map[0]
    return seed


def getRanges(seeds):
    ranges = []
    for i in range(len(seeds)):
        if i % 2 == 0:
            ranges.append([seeds[i], seeds[i] + seeds[i + 1]])
    return ranges


def calculateLowest(r, maps):
    l = 0
    for i in range(r[0], r[1]):
        seed = i
        for j in range(len(maps)):
            seed = calculateMap(maps[j], seed)
        print(seed, end=' ')
        if seed < l or l == 0:
                l = seed
    print(l)
    return lowest.append(l)


seeds = getSeeds()
ranges = getRanges(seeds)
maps = getMaps()
lowest = []

print(ranges)
r = ranges[0]

a = np.array([])
for i in range(r[0], r[1]):
        np.append(a, i)
print(len(a))


# for i in ranges:
#     print(i)
#     calculateLowest(i, maps)
# print(lowest)
