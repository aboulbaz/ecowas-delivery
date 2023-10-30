import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryColumn,
} from 'typeorm';

@Entity()
export class Kpi {
  @PrimaryColumn()
  id: number;
  @Column({ nullable: true, name: 'label' })
  internaleLabel: string;
  @Column({ nullable: true, name: 'label_to_use_in_dash' })
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
  @Column({ default: 0, name: 'is_gender_index_kpi', nullable: true })
  isGenderIndexKPI: number;
  @OneToOne(() => Kpi, (kpi) => kpi.id, { nullable: true })
  @JoinColumn({ name: 'associated_gender_kpi_id' })
  associatedGenderIndexKpi: Kpi;
}
