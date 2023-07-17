import { makeLoginValidation } from '@/main/factories/application/validation'
import { EmailValidation, LengthValidation, RequiredValidation, ValidationComposite } from '@/application/validation'

describe('LoginValidationFactory', () => {
  it('should make ValidationComposite with correct validations', () => {
    const composite = makeLoginValidation()

    expect(composite).toEqual(ValidationComposite.build([
      new RequiredValidation('email'),
      new EmailValidation('email'),
      new RequiredValidation('password'),
      new LengthValidation('password', 5)
    ]))
  })
})
