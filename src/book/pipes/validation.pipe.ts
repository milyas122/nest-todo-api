import { Injectable, PipeTransform, BadRequestException } from '@nestjs/common';

@Injectable()
export class YupValidationPipe implements PipeTransform {
  constructor(private schema: any) {}
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
