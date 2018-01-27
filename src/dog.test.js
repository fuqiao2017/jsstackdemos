import Dog from './dog'

test('Dog.bark', () => {
  const testDog = new Dog('旺财')
  expect(testDog.bark()).toBe('Wah, Wah, i am 旺财')
})
