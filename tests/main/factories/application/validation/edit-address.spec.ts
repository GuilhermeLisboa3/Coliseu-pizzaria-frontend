import { makeEditAddressValidation } from '@/main/factories/application/validation'
import { RequiredValidation, ValidationComposite } from '@/application/validation'

describe('makeEditAddressValidation', () => {
  it('should make ValidationComposite with correct validations', () => {
    const composite = makeEditAddressValidation()

    expect(composite).toEqual(ValidationComposite.build([
      new RequiredValidation('number'),
      new RequiredValidation('surname')
    ]))
  })
})
