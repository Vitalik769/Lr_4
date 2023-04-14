import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { CreateAdvertisementDto} from './create-monplan.dto';

export class UpdateAdvertisementDto extends PartialType(CreateAdvertisementDto) {
    @ApiProperty({example:"0", description:"Id"})
    id: number;
    @ApiProperty({example:"Vitaliy", description:"Name"})
    Name: string;
    @ApiProperty({example:"Male ", description:"Sex"})
    Sex: string;
    @ApiProperty({example:"18", description:"Age"})
    Age: string;
    @ApiProperty({example:"1000", description:"Price"})
    Price: string;
    @ApiProperty({example:"74", description:"arendTime"})
    ArendTime: string;
}
