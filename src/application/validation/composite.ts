import { type FieldValidator } from './field-validator'
import { type Validator } from './validator'

export class ValidationComposite implements Validator {
  private constructor (private readonly validators: FieldValidator[]) {}

  static build (validators: FieldValidator[]): ValidationComposite {
    return new ValidationComposite(validators)
  }

  validate (fieldName: string, input: object): string | undefined {
    const validators = this.validators.filter(v => v.field === fieldName)
    for (const validator of validators) {
      const error = validator.validate(input)
      if (error) return error.message
    }
  }
}
