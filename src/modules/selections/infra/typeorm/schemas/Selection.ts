import {
  Entity,
  ObjectID,
  ObjectIdColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('selections')
class Workflow {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  name: string;

  @Column()
  content: string[];

  @CreateDateColumn({ default: 'now()' })
  created_at: Date;

  @UpdateDateColumn({ default: 'now()' })
  updated_at: Date;
}

export default Workflow;
