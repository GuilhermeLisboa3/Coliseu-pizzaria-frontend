
import faker from 'faker'

export const AccountParams = {
  name: faker.name.findName(),
  email: faker.internet.email(),
  password: faker.internet.password()
}
