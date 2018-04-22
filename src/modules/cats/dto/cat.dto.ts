import { ApiModelProperty, ApiImplicitParam } from '@nestjs/swagger';

export class CatDto {
    @ApiModelProperty()
    readonly name: string;

    @ApiModelProperty()
    readonly age: number;

    @ApiModelProperty()
    readonly breed: string;
}