import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';

@Entity()
export class Kpi {
  @PrimaryColumn()
  id: number;
  @Column()
  label: string;
  @Column({ nullable: true, name: 'kpi_description' })
  description: string;
  @Column({ nullable: true, default: '', name: 'label_french' })
  labelFrench: string;
  @Column({ nullable: true, name: 'kpi_description_french' })
  descriptionFrench: string;
  @Column({ nullable: true, default: '', name: 'label_portuguese' })
  labelPortuguese: string;
  @Column({ nullable: true, name: 'kpi_description_portuguese' })
  descriptionPortuguese: string;
  @ManyToOne(() => Kpi, (kpi) => kpi.childs, { nullable: true })
  @JoinColumn({ name: 'parent_id' })
  parent: Kpi;
  @OneToMany(() => Kpi, (kpi) => kpi.parent)
  childs: Kpi[];
}
