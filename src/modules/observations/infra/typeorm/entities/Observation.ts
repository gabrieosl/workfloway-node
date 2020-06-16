import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import Repetition from '@modules/subjects/infra/typeorm/entities/Repetition';
import ObservationType from '@modules/observations/infra/typeorm/entities/ObservationType';
// import User from './User';

@Entity('observations')
class Observation {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  comment: string;

  @Column({ nullable: true })
  value: string;

  @CreateDateColumn({ default: 'now()' })
  created_at: Date;

  @UpdateDateColumn({ default: 'now()' })
  updated_at: Date;

  @Column({ nullable: true })
  type_id: string;

  @ManyToOne(() => ObservationType)
  @JoinColumn({ name: 'type_id' })
  type: ObservationType;

  @Column({ nullable: true })
  repetition_id: string;

  @ManyToOne(() => Repetition)
  @JoinColumn({ name: 'repetition_id' })
  repetition: Repetition;

  @Column({ nullable: true })
  user_id: string;

  // @ManyToOne(() => User)
  // @JoinColumn({ name: 'user_id' })
  // user: Repetition;
}

export default Observation;
