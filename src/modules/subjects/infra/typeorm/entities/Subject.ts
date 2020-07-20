import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToMany,
  JoinColumn,
  JoinTable,
} from 'typeorm';

import ISubjectEntity from '@modules/subjects/entities/ISubjectEntity';
import Tag from './Tag';
import Observation from '@modules/observations/infra/typeorm/entities/Observation';
import Submission from './Submission';

@Entity('subjects')
class Subject implements ISubjectEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  workflow_id: string;

  @CreateDateColumn({ default: 'now()' })
  created_at: Date;

  @UpdateDateColumn({ default: 'now()' })
  updated_at: Date;

  @ManyToMany(() => Tag)
  @JoinTable()
  tags: Tag[];

  @OneToMany(() => Observation, observation => observation.subject)
  observations: Observation[];

  lastObservation: Observation;
  lastSubmission: Submission;

  @OneToMany(() => Submission, submission => submission.subject)
  submissions: Submission[];
}

export default Subject;
