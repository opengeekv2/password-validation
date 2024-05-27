const {it, expect} = require("@jest/globals");
const {calculateBasket} = require("../potter");
it('should calculate basket for a single book', () => {
   expect(calculateBasket([0])).toBe(8)
})

it('should calculate basket for two equal books', () => {
    expect(calculateBasket([0, 0])).toBe(16)
})

it('should calculate basket for two different books', () => {
    expect(calculateBasket([0, 1])).toBe(8 * 2 * 0.95)
})

it('should calculate basket for three equal books', () => {
    expect(calculateBasket([0, 0, 0])).toBe(8 * 3)
})

it('should calculate basket for three different books', () => {
    expect(calculateBasket([0, 1, 2])).toBe(8 * 3 * 0.90)
})

it('should calculate basket for four different books', () => {
    expect(calculateBasket([0, 1, 2, 3])).toBe(8 * 4 * 0.80)
})

it('should calculate basket for five different books', () => {
    expect(calculateBasket([0, 1, 2, 3, 4])).toBe(8 * 5 * 0.75)
})