import { Country } from 'src/country/entities/country.entity';
import { Kpi } from 'src/kpi/entities/kpi.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class KpiValue {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'float', nullable: true })
  ranking: number;
  @Column({ type: 'float', nullable: true })
  baseline: number;
  @Column({
    type: 'float',
    default: 0,
    name: 'baseline_normalized',
    nullable: true,
  })
  baselineNormalized: number;
  @Column({ nullable: true })
  description: string;
  @Column({ type: 'float', name: 'latest_value', nullable: true })
  latestValue: number;
  @Column({
    type: 'float',
    default: 0,
    name: 'latest_data_normalized',
    nullable: true,
  })
  latestValueNormalized: number;
  @Column({ type: 'float', name: 'target_latest_value', nullable: true })
  targetLatestValue: number;
  @Column({
    type: 'float',
    name: 'target_latest_value_normalized',
    nullable: true,
  })
  targetLatestValueNormalized: number;
  @Column({ type: 'float', name: 'target2030', nullable: true })
  target2030: number;
  @Column({
    type: 'float',
    default: 0,
    name: 'target2030_normalized',
    nullable: true,
  })
  target2030Normalized: number;
  @Column({ type: 'float', name: 'progress_made', nullable: true })
  progressMade: number;
  @Column({ type: 'float', name: 'distance_to_target', nullable: true })
  distanceToTarget: number;
  @Column({ type: 'float', name: 'direction_good_performance', nullable: true })
  directionGoodPerformance: number;
  @ManyToOne(() => Kpi, (kpi) => kpi.id, {
    nullable: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'kpi_id' })
  kpi: Kpi;
  @ManyToOne(() => Country, (country) => country.id, { nullable: true })
  @JoinColumn({ name: 'country_id' })
  country: Country;
}
