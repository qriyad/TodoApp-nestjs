import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TodosService } from './todos.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}
  
  @Post('createTodo')
  async create(@Body() createTodoDto: CreateTodoDto) {
    return this.todosService.create(createTodoDto);
  }
  
  @Get('findAll')
  async findAll() {
    return this.todosService.findAll();
  }

  @Get('findOne/:id')
  async findOne(@Param('id') id: number) {
    return this.todosService.findOne(id);
  }

  @Patch('update/:id')
  async update(@Param('id') id: number, @Body() updateTodoDto: CreateTodoDto) {
    return this.todosService.update(id, updateTodoDto);
  }

  @Delete('remove/:id')
  async remove(@Param('id') id: number) {
    return this.todosService.remove(id);
  }
}
