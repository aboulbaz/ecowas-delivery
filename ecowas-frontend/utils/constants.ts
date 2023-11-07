import { FlattenedDictionary } from "./translation/utils";
import { intlMessages } from "./translation";
import ProgressUp from "public/assets/icons/progress-up.svg";
import ProgressDown from "public/assets/icons/progress-down.svg";
import ProgressNeutral from "public/assets/icons/neutral-icon.svg";
import { themeColors } from "themes/emotionColors";

export enum LANGUAGES {
  FR = "fr",
  EN = "en",
  PO = "po",
}

export const intlMessagesDispatcher: Record<LANGUAGES, FlattenedDictionary> = {
  [LANGUAGES.FR]: intlMessages.fr,
  [LANGUAGES.EN]: intlMessages.en,
  [LANGUAGES.PO]: intlMessages.po,
};

export enum Routes {
  OVERVIEW = "/overview",
  DIMENSION_RESULTS = "/dimension-results",
  COUNTRY_COMPARISON = "/country-comparison",
  COUNTRY_RESULTS = "/country-results",
  HCD_GENDER_INDEX = "/hcd-gender-index",
  HCD_GENDER_INDEX_DEEP_DIVE = "/hcd-gender-index-deep-dive",
  METHODOLOGY = "/methodology",
}

export const titleDispatcher: Record<Routes, string> = {
  [Routes.OVERVIEW]: "layout.menu-items.overview",
  [Routes.DIMENSION_RESULTS]: "layout.menu-items.dimension-results",
  [Routes.COUNTRY_COMPARISON]: "layout.menu-items.country-comparison",
  [Routes.COUNTRY_RESULTS]: "layout.menu-items.country-results",
  [Routes.HCD_GENDER_INDEX]: "layout.menu-items.hcd-gender-index",
  [Routes.HCD_GENDER_INDEX_DEEP_DIVE]:
    "layout.menu-items.hcd-gender-index-deep-dive",
  [Routes.METHODOLOGY]: "layout.menu-items.methodology",
};

export enum IndexEnum {
  HCD_INTEGRATED_INDEX = 22,
  HEALTH = 1,
  EDUCATION = 9,
  ENTREPRENEURSHIP = 18,
}

export enum IndexEnumHCDGenderIndex {
  HEALTH = 24,
  EDUCATION = 25,
  ENTREPRENEURSHIP = 	26,
  HCD_INTEGRATED_INDEX = 23,
}

export enum ProgressEnum {
  UP,
  DOWN,
  NEUTRAL,
}

export const ProgressIconDispatcher: Record<ProgressEnum, any> = {
  [ProgressEnum.UP]: {
    icon: ProgressUp,
    color: themeColors.green,
  },
  [ProgressEnum.DOWN]: {
    icon: ProgressDown,
    color: themeColors.down,
  },
  [ProgressEnum.NEUTRAL]: {
    icon: ProgressNeutral,
    color: themeColors.black,
  },
};

export enum VALUES_TYPE {
  ALL = "All values",
  BASELINE = "Baseline",
  LATEST = "Latest",
  TARGET_FOR_LATEST = "Target for latest",
  TARGET_2030 = "Target 2030",
}

export const ValuesTypeRecord: Record<VALUES_TYPE, string> = {
  [VALUES_TYPE.ALL]: "overview.all-values",
  [VALUES_TYPE.BASELINE]: "overview.baseline",
  [VALUES_TYPE.LATEST]: "overview.latest",
  [VALUES_TYPE.TARGET_FOR_LATEST]: "overview.target-latest-value",
  [VALUES_TYPE.TARGET_2030]: "overview.target-2030"
}

export enum GENDER_INDEX_DEPP_DIVE_METRIC {
  AGGREGATE_SCORE = "Aggregate score",
  UNDER_5_MORTALIRY_RATE = "Under-5 mortality rate",
  UNDER_5_STUNTING_RATE = "Under-5 stunting rate",
  LIFE_EXPECTANCY = "Life expectancy at birth",
}

export const ECOWAS_DEFAULT_ID = 17;
