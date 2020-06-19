import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
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

  @OneToMany(() => Tag, tag => tag.subject_id)
  tags: Tag[];

  @OneToMany(() => Observation, observation => observation.subject)
  observations: Observation[];

  lastObservation: Observation;
  lastSubmission: Submission;

  @OneToMany(() => Submission, submission => submission.subject)
  submissions: Submission[];
}

export default Subject;
