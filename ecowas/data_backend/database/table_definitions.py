from sqlalchemy import Column, Integer, String, Float, Sequence, ForeignKey
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()


class Country(Base):
    __tablename__ = "country"

    id = Column(Integer, primary_key=True)
    label = Column(String, nullable=False)


class Kpi(Base):
    __tablename__ = "kpi"
    KPI_ID = "kpi.id"
    id = Column(Integer, primary_key=True)
    label = Column(String, nullable=True)
    label_to_use_in_dash = Column(String, nullable=True)
    kpi_description = Column(String, nullable=True)
    parent_id = Column(
        Integer,
        ForeignKey(
            KPI_ID, onupdate="CASCADE", ondelete="CASCADE", name="fk_kpi_parent"
        ),
        nullable=True,
    )
    label_french = Column(String, nullable=True)
    kpi_description_french = Column(String, nullable=True)
    label_portuguese = Column(String, nullable=True)
    kpi_description_portuguese = Column(String, nullable=True)
    is_gender_index_kpi = Column(Integer, primary_key=True)
    associated_gender_kpi_id = Column(
        Integer,
        ForeignKey(
            KPI_ID, onupdate="CASCADE", ondelete="CASCADE", name="fk_kpi_associated_gender_id"
        ),
        nullable=True,
    )


class KpiValue(Base):
    __tablename__ = "kpi_value"

    id = Column(
        Integer, Sequence("kpi_value_id_seq", start=1, increment=1), primary_key=True
    )
    kpi_id = Column(
        Integer,
        ForeignKey(
            "kpi.id", onupdate="CASCADE", ondelete="CASCADE", name="fk_kpi_value_kpi"
        ),
        nullable=False,
    )
    country_id = Column(
        Integer,
        ForeignKey(
            "country.id",
            onupdate="CASCADE",
            ondelete="CASCADE",
            name="fk_kpi_value_country",
        ),
        nullable=False,
    )
    description = Column(String, nullable=True)
    baseline = Column(Float, nullable=True)
    latest_value = Column(Float, nullable=True)
    target_latest_value = Column(Float, nullable=True)
    target2030 = Column(Float, nullable=True)
    progress_made = Column(Float, nullable=True)
    distance_to_target = Column(Float, nullable=True)
    direction_good_performance = Column(Float, nullable=True)
    ranking = Column(Float, nullable=True)
    baseline_normalized = Column(Float, nullable=True)
    latest_data_normalized = Column(Float, nullable=True)
    target_latest_value_normalized = Column(Float, nullable=True)
    target2030_normalized = Column(Float, nullable=True)
