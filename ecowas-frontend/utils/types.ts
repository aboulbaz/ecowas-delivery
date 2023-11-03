import { IndexEnum, IndexEnumHCDGenderIndex, LANGUAGES } from "./constants";
import HCDIndesIcon from "public/assets/icons/integrated-hcd-index-icon.svg";
import HealthIcon from "public/assets/icons/icon-health.svg";
import EducationIcon from "public/assets/icons/education-icon.svg";
import EntrepreneurshipIcon from "public/assets/icons/entrepreneurship-icon.svg";

export interface IKPI {
  id: number;
  label: string;
  description?: string;
  labelFrench: string;
  descriptionFrench?: string;
  labelPortuguese: string;
  descriptionPortuguese?: string;
  parent?: IKPI;
  childs?: IKPI[];
}

export interface ILanguageDispatcher {
  label: string;
  description: string;
}

export const LanguageDispatcher: Record<LANGUAGES, ILanguageDispatcher> = {
  [LANGUAGES.FR]: {
    label: "labelFrench",
    description: "descriptionFrench",
  },
  [LANGUAGES.EN]: {
    label: "label",
    description: "description",
  },
  [LANGUAGES.PO]: {
    label: "labelPortuguese",
    description: "descriptionPortuguese",
  },
};

/* 
{
  "id": 9,
  "label": "Education, skills and labor participation",
  "description": "Scale 0-1",
  "labelFrench": "",
  "descriptionFrench": null,
  "labelPortuguese": "",
  "descriptionPortuguese": null
}
*/
export interface ICountry {
  id: number;
  label: string;
  kpiValues?: IOverviewValues[];
}

export interface IOverviewValues {
  id: number;
  ranking: number;
  baseline: number;
  baselineNormalized: number;
  latestValue: number;
  latestValueNormalized: number;
  targetLatestValue: number;
  targetLatestValueNormalized: number;
  target2030: number;
  target2030Normalized: number;
  progressMade: number;
  distanceToTarget: number;
  directionGoodPerformance: number;
  country: ICountry;
  kpi: IKPI;
  associatedKpi?: IOverviewValues;
  childs?: IOverviewValues[];
}

export type IconDIspatcherValue = {
  icon: any;
  title: string;
};

export const IndexDispatcher: Record<IndexEnum, IconDIspatcherValue> = {
  [IndexEnum.HCD_INTEGRATED_INDEX]: {
    icon: HCDIndesIcon,
    title: "overview.integrated-hcd-index",
  },
  [IndexEnum.HEALTH]: {
    icon: HealthIcon,
    title: "overview.health",
  },
  [IndexEnum.EDUCATION]: {
    icon: EducationIcon,
    title: "overview.education",
  },
  [IndexEnum.ENTREPRENEURSHIP]: {
    icon: EntrepreneurshipIcon,
    title: "overview.entrepreneurship",
  },
};

export const IndexHcdGenderDispatcher: Record<
  IndexEnumHCDGenderIndex,
  IconDIspatcherValue
> = {
  [IndexEnumHCDGenderIndex.HCD_INTEGRATED_INDEX]: {
    icon: HCDIndesIcon,
    title: "HcdGenderIndex.integrated-hcd-index",
  },
  [IndexEnumHCDGenderIndex.HEALTH]: {
    icon: HealthIcon,
    title: "HcdGenderIndex.health",
  },
  [IndexEnumHCDGenderIndex.EDUCATION]: {
    icon: EducationIcon,
    title: "HcdGenderIndex.education",
  },
  [IndexEnumHCDGenderIndex.ENTREPRENEURSHIP]: {
    icon: EntrepreneurshipIcon,
    title: "HcdGenderIndex.entrepreneurship",
  },
};
