export function rps(p1: string, p2: string): string{
  const rules: {[index:string]:string} = {
    'rock': 'scissors',
    'paper': 'rock',
    'scissors': 'paper'
  }
  if (p1 === p2) return 'Draw!'
  
  if (rules[p1] == p2) return 'Player 1 won!'
  return 'Player 2 won!'
}

console.log(rps("rock", "scissors"))