import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from './entities/todo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo)
    private todosRepository: Repository<Todo>,
  ) {}
    async create(createTodoDto: CreateTodoDto): Promise<Todo> {
        const newTodo = this.todosRepository.create(createTodoDto);
        return this.todosRepository.save(newTodo);
    }

    async findAll(): Promise<Todo[]> {
      return this.todosRepository.find();
    }

    async findOne(id: number): Promise<Todo> {
      return this.todosRepository.findOneBy({ id });
    }

    async update(id: number, updateTodoDto: CreateTodoDto): Promise<Todo> {
      const todo = await this.todosRepository.findOneBy({ id });
      const updatedTodo = Object.assign(todo, updateTodoDto);
      return this.todosRepository.save(updatedTodo);
    }

    async remove(id: number): Promise<Todo> {
      const todo = await this.todosRepository.findOneBy({ id });
      return this.todosRepository.remove(todo);
    }
}
