import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Country {
  @PrimaryColumn()
  id: number;
  @Column()
  label: string;
}
