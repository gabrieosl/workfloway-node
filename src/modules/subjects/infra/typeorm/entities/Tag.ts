import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import ITagEntity from '@modules/subjects/entities/ITagEntity';
import SubjectToTag from './SubjectToTag';

@Entity('tags')
class Tag implements ITagEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @CreateDateColumn({ default: 'now()' })
  created_at: Date;

  @UpdateDateColumn({ default: 'now()' })
  updated_at: Date;

  @OneToMany(type => SubjectToTag, subjectToTag => subjectToTag.tag)
  subjectToTag: SubjectToTag[];
}

export default Tag;
