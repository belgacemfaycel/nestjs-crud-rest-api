import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Posts {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    creator_id: number;

    @Column()
    content: string;

    @Column({ length: 25 })
    title: string;

    @Column()
    filename: string;

    @Column()
    created_time: Date;

}

