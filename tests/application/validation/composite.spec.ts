import { type FieldValidator, ValidationComposite } from '@/application/validation'

import { type MockProxy, mock } from 'jest-mock-extended'
import faker from 'faker'

describe('ValidationComposite', () => {
  let sut: ValidationComposite
  let validator1: MockProxy<FieldValidator>
  let validator2: MockProxy<FieldValidator>
  let validators: FieldValidator[]
  let fieldName: string
  let value: string

  beforeAll(() => {
    fieldName = faker.database.column()
    value = faker.random.word()
    validator1 = mock({ field: fieldName })
    validator2 = mock({ field: fieldName })
    validator1.validate.mockReturnValue(undefined)
    validator2.validate.mockReturnValue(undefined)
    validators = [validator1, validator2]
  })

  beforeEach(() => {
    sut = ValidationComposite.build(validators)
  })

  it('should return undefined on success', () => {
    const validate = sut.validate(fieldName, { [fieldName]: value })

    expect(validate).toBeFalsy()
  })

  it('should return first error if any Validator fails', () => {
    const error = new Error('first error')
    validator1.validate.mockReturnValueOnce(error)
    validator2.validate.mockReturnValueOnce(new Error('other error'))

    const validateError = sut.validate(fieldName, { [fieldName]: value })

    expect(validateError).toBe(error.message)
  })
})
