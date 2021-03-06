import {
  Entity,
  ObjectID,
  ObjectIdColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('workflows')
class Workflow {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  name: string;

  @Column()
  content: object[];

  @CreateDateColumn({ default: 'now()' })
  created_at: Date;

  @UpdateDateColumn({ default: 'now()' })
  updated_at: Date;
}

export default Workflow;
