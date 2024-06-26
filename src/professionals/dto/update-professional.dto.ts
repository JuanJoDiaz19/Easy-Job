import { PartialType } from '@nestjs/mapped-types';
import { CreateProfessionalDto } from './create-professional.dto';
import { IsOptional, IsString } from 'class-validator';

export class UpdateProfessionalDto extends PartialType(CreateProfessionalDto) {
    @IsString()
    @IsOptional()
    readonly id?: string;
}
