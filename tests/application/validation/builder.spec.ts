import { EmailValidation, LengthValidation, RequiredValidation, ValidationBuilder } from '@/application/validation'

import faker from 'faker'

describe('ValidationBuilder', () => {
  let fieldName: string
  let fieldLength: number

  beforeAll(() => {
    fieldName = faker.database.column()
    fieldLength = faker.datatype.number()
  })

  it('should return a RequiredValidation if required() is call', () => {
    const validators = ValidationBuilder.of(fieldName).required().build()

    expect(validators).toStrictEqual([new RequiredValidation(fieldName)])
  })

  it('should return a EmailValidation if email() is call', () => {
    const validators = ValidationBuilder.of(fieldName).email().build()

    expect(validators).toStrictEqual([new EmailValidation(fieldName)])
  })

  it('should return a LengthValidation if length() is call', () => {
    const validators = ValidationBuilder.of(fieldName).length(fieldLength).build()

    expect(validators).toStrictEqual([new LengthValidation(fieldName, fieldLength)])
  })
})
