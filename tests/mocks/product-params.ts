import faker from 'faker'

export const productParams = {
  id: faker.datatype.uuid(),
  name: faker.name.findName(),
  description: faker.random.words(20),
  price: faker.datatype.float({ max: 100 }),
  available: faker.datatype.boolean(),
  picture: faker.internet.url(),
  error: new Error(faker.random.word())
}