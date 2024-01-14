import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Todo {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    user_id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column({
        type: 'text',
        default: 'todo',
    })
    status: 'todo' | 'in progress' | 'completed';
}