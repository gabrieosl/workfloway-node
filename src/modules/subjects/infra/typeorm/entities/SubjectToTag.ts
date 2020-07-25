import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import Subject from './Subject';
import Tag from './Tag';

@Entity('subject_to_tags')
class SubjectToTag {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  subjectId: string;

  @Column()
  tagId: string;

  @Column()
  value: string;

  @CreateDateColumn({ default: 'now()' })
  created_at: Date;

  @UpdateDateColumn({ default: 'now()' })
  updated_at: Date;

  @ManyToOne(type => Subject, subject => subject.tags, { onDelete: 'CASCADE' })
  subject!: Subject;

  @ManyToOne(type => Tag, tag => tag.subjectToTag, { onDelete: 'CASCADE' })
  tag!: Tag;
}

export default SubjectToTag;
