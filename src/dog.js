// @flow

class Dog {
  name: string
  constructor(name: string) {
    this.name = name
  }
  bark() {
    return `Wah, Wah, i am ${this.name}`
  }
}

// module.exports = Dog
export default Dog
