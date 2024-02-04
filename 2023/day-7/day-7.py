import random

file = open('./input.txt', 'r')
puzzleInput = file.readlines()

types = [('high card', 1),('one pair', 2), ('two pair', 3), ('three of a kind', 4), ('full house', 5), ('four of a kind', 6), ('five of a kind', 7)]


def getHandAndBid(puzzleInput):
    parsedInput = []
    for line in puzzleInput:
        hand,bid = line.split(' ')
        parsedInput.append((hand, int(bid), handToNumericValue(hand)))
    return parsedInput

def getType(hand):
    pairs = []
    jokers = hand.count('J')
    hand = list(filter(lambda a: a != 'J', hand))
    for card in hand:
        pairs.append(hand.count(card))
        hand = list(filter(lambda a: a != card, hand))
    pairs.sort(reverse=True)
    if(len(pairs) == 0):
        return types[6]
    elif(pairs[0] + jokers == 5):
        return types[6]
    elif(pairs[0] + jokers == 4):
        return types[5]
    elif(pairs[0] + jokers == 3 and pairs[1] == 2):
        return types[4]
    elif(pairs[0] + jokers == 3):
        return types[3]
    elif(pairs[0] + jokers == 2 and pairs[1] == 2):
        return types[2]
    elif(pairs[0] + jokers == 2):
        return types[1]
    else:
        return types[0]


def getHandValue(hand):
    values = []

    for index, c in enumerate(hand):
        if(c == 'A'):
            values.append('F')
        elif(c == 'K'):
            values.append('D')
        elif(c == 'Q'):
            values.append('C')
        elif(c == 'T'):
            values.append('A')
        elif(c == 'J'):
            values.append('1')
        else:
            values.append(c)
    dec = int(''.join(values), 16)
    print(hand, dec )
    return dec


def handToNumericValue(hand):
    handType = getType(hand)
    handValue = getHandValue(hand)
    return (handType[1], handValue)


handsAndBids = getHandAndBid(puzzleInput)
sortedHands = sorted(handsAndBids, key=lambda x: x[2])
print(sortedHands)
bidRankValues = []
for i,hand in enumerate(sortedHands):
    bidRankValues.append((i+1) * hand[1])
sumOfBidRankValues = sum(bidRankValues)
print(sumOfBidRankValues)
#part 1  249638405
#part 2  249776650