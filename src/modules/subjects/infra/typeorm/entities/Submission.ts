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
import ISubmissionEntity from '@modules/subjects/entities/ISubmissionEntity';

@Entity('submissions')
class Submission implements ISubmissionEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  subject_id: string;

  @Column()
  repetition: number;

  @Column()
  closed: boolean;

  @CreateDateColumn({ default: 'now()' })
  created_at: Date;

  @UpdateDateColumn({ default: 'now()' })
  updated_at: Date;

  @ManyToOne(() => Subject)
  @JoinColumn({ name: 'subject_id' })
  subject: Subject;
}

export default Submission;
