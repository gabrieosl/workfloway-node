import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import ITagEntity from '@modules/subjects/entities/ITagEntity';
import Subject from './Subject';

@Entity('tags')
class Tag implements ITagEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  subject_id: string;

  @Column()
  key: string;

  @Column()
  value: string;

  @CreateDateColumn({ default: 'now()' })
  created_at: Date;

  @UpdateDateColumn({ default: 'now()' })
  updated_at: Date;
}

export default Tag;
