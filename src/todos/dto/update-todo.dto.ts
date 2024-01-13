import { PartialType } from '@nestjs/mapped-types';
import { CreateTodoDto } from './create-todo.dto';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateTodoDto extends PartialType(CreateTodoDto) {
    @ApiPropertyOptional()
    user_id?: number;

    @ApiPropertyOptional()
    title?: string;

    @ApiPropertyOptional()
    description?: string;

    @ApiPropertyOptional({ enum: ['todo', 'in progress', 'completed'] })
    status?: 'todo' | 'in progress' | 'complete';
}
