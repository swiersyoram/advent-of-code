file = open('./input.txt', 'r')
puzzleInput = file.readlines()


class Card:
    def __init__(self, card, winningNumbers, myNumbers):
        self.card = card
        self.winningNumbers = winningNumbers
        self.myNumbers = myNumbers
        self.value = calculateCardValue(winningNumbers, myNumbers)
        self.amount = 1

    def __str__(self):
        return f'Card: {self.card}, Winning Numbers: {self.winningNumbers}, My Numbers: {self.myNumbers}, Value: {self.value}, Amount: {self.amount}'

    def increment(self):
        self.amount = self.amount + 1

def cleanNumbers(numbers):
    return list(map(lambda x: int(x), filter(lambda x: x != '', numbers.strip().split(' '))))


def getCards():
    for i in range(len(puzzleInput)):
        line = puzzleInput[i].strip()
        card, numbers = line.split(':')
        cardNumber = int(card.split('Card')[1])
        winningNumbers, myNumbers = numbers.split('|')
        winningNumbers = cleanNumbers(winningNumbers)
        myNumbers = cleanNumbers(myNumbers)
        cards.append(Card(cardNumber, winningNumbers, myNumbers))


def calculateCardValue(winningNumbers, myNumbers):
    value = 0
    for i in range(len(myNumbers)):
        number = myNumbers[i]
        if number in winningNumbers:
            value += 1
    return value

def calculateCopies(card):
    if card.value > 0:
        for i in range(card.amount):
            for j in range(card.card, card.card + card.value):
                cards[j].increment()

cards = []
getCards()
total = 0
for i in range(len(cards)):
    print(cards[i])
    calculateCopies(cards[i])
    total = total + cards[i].amount


print(total)
