import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean } from "class-validator";
export class CreateTodoDto {
    @ApiProperty()
    user_id: number;

    @ApiProperty()
    title: string;

    @ApiProperty()
    description: string;
}
