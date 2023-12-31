def rps(p1, p2):
    rules = ['rock', 'paper', 'scissors']
    if p1 == p2:
        return 'Draw!'
    elif rules[(rules.index(p1) + 1) % 3] == p2:
        return 'Player 2 won!'
    else:
        return 'Player 1 won!'


# def rps(p1, p2):
#     rules={'rock':'scissors', 'paper':'rock', 'scissors':'paper'}
#     if p1==p2:
#         return 'Draw!'
#     elif p1==rules[p2]:
#         return 'Player 2 won!'
#     else:
#         return 'Player 1 won!'


print(rps("rock", "scissors"))