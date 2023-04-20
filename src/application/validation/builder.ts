import { type FieldValidator, RequiredValidation } from '.'

export class ValidationBuilder {
  private constructor (private readonly fieldName: string, private readonly validators: FieldValidator[] = []) {}

  static of (fieldName: string): ValidationBuilder {
    return new ValidationBuilder(fieldName)
  }

  required (): ValidationBuilder {
    this.validators.push(new RequiredValidation(this.fieldName))
    return this
  }

  build (): FieldValidator[] {
    return this.validators
  }
}
