import { ApiProperty } from "@nestjs/swagger";

export class CreateAdvertisementDto {
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

