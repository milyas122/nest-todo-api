import { PipeTransform, BadRequestException } from '@nestjs/common';

export class YupValidationPipe implements PipeTransform {
  constructor(private schema?: any) {
    console.log(Date.now());
  }
  async transform(value: any) {
    try {
      await this.schema.validate(value, {
        stripUnknown: true,
        abortEarly: false,
      });
      return value;
    } catch (e) {
      throw new BadRequestException(e.errors);
    }
  }
}
