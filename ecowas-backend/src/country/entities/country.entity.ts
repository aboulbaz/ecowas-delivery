import { KpiValue } from 'src/kpi_values/entities/kpi_value.entity';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

@Entity()
export class Country {
  @PrimaryColumn()
  id: number;
  @Column({ nullable: true })
  label: string;

  @OneToMany(() => KpiValue, (kpiValue) => kpiValue.country)
  kpiValues: KpiValue[];
}
