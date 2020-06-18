import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import Subject from '@modules/subjects/infra/typeorm/entities/Subject';
import ObservationType from '@modules/observations/infra/typeorm/entities/ObservationType';
import User from '@modules/users/infra/typeorm/entities/User';
import IObservationEntity from '@modules/observations/entities/IObservationEntity';

@Entity('observations')
class Observation implements IObservationEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  type_id: string;

  @Column({ nullable: true })
  subject_id: string;

  @Column({ nullable: true })
  submission_id: string;

  @Column({ nullable: true })
  user_id: string;

  @Column({ nullable: true })
  value: string;

  @Column({ nullable: true })
  comment: string;

  @CreateDateColumn({ default: 'now()' })
  created_at: Date;

  @UpdateDateColumn({ default: 'now()' })
  updated_at: Date;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Subject)
  @JoinColumn({ name: 'subject_id' })
  subject: Subject;
}

export default Observation;
