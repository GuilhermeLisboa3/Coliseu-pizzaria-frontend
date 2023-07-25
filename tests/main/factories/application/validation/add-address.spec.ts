import { makeAddAddressValidation } from '@/main/factories/application/validation'
import { LengthValidation, RequiredValidation, ValidationComposite } from '@/application/validation'

describe('makeAddAddressValidation', () => {
  it('should make ValidationComposite with correct validations', () => {
    const composite = makeAddAddressValidation()

    expect(composite).toEqual(ValidationComposite.build([
      new RequiredValidation('zipCode'),
      new LengthValidation('zipCode', 8),
      new RequiredValidation('number'),
      new RequiredValidation('surname')
    ]))
  })
})
