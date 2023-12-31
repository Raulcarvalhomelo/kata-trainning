const assert = require('assert');
const hitOrStay = require('./blackjack'); // Certifique-se de ajustar o caminho conforme necessário

describe('Sample Tests', function() {

  it('should hit on < 17', function() {
    assert.deepStrictEqual(hitOrStay([7, 6], 8), ['hit', 21]);
  });

  it('should stay on > 17', function() {
    assert.deepStrictEqual(hitOrStay(['K', 'Q'], 5), ['stay', 20]);
  });

  it('should hit on soft 17, Ace = 1', function() {
    assert.deepStrictEqual(hitOrStay(['A', 6], 8), ['hit', 15]);
  });

  it('should stay on hard 17', function() {
    assert.deepStrictEqual(hitOrStay(['K', 9], 8), ['stay', 19]);
  });

  it('should hit on soft 16 , Ace = 11', function() {
    assert.deepStrictEqual(hitOrStay(['A', 5], 4), ['hit', 20]);
  });

});