import { type FieldValidator, RequiredValidation, EmailValidation, LengthValidation, CompareValidation } from '.'

export class ValidationBuilder {
  private constructor (private readonly fieldName: string, private readonly validators: FieldValidator[] = []) {}

  static of (fieldName: string): ValidationBuilder {
    return new ValidationBuilder(fieldName)
  }

  required (): ValidationBuilder {
    this.validators.push(new RequiredValidation(this.fieldName))
    return this
  }

  email (): ValidationBuilder {
    this.validators.push(new EmailValidation(this.fieldName))
    return this
  }

  length (length: number): ValidationBuilder {
    this.validators.push(new LengthValidation(this.fieldName, length))
    return this
  }

  sameAs (fieldToCompare: string): ValidationBuilder {
    this.validators.push(new CompareValidation(this.fieldName, fieldToCompare))
    return this
  }

  build (): FieldValidator[] {
    return this.validators
  }
}
