import React from "react";
import { MethodologyCardContent } from "../MethodologyCard.style";

const MethodologyHCDIndexEn: React.FC = () => {
  return (
    <>
      <MethodologyCardContent>
        The Index was designed to be the North Star of all initiatives. It was
        crafted according to the ECOWAS ambition across three main dimensions.
        It sets out clear targets defined in 2021 and will be updated each year
        to monitor the progress of the Member States. Monitoring HCD index
        progress is key in maintaining the focus on and momentum of HCD. The
        index allows Member States to understand their HCD performance
        granularly as well as celebrate successes and point out negative trends
        to address.
      </MethodologyCardContent>
      <MethodologyCardContent>
        It is critical for the success of the strategy that the annual HCD index
        is updated regularly with the support of focal points.
      </MethodologyCardContent>
      <MethodologyCardContent>
        The objective of this section is to detail the methodology of the HCD
        index update as well as the findings of the first round on the HCD index
        review of 2022.
      </MethodologyCardContent>
      <MethodologyCardContent>
        Updating the index requires four steps:
        <ol>
          <li>
            On each of the three dimensions of HCD, a list of indicators is
            defined to capture the evolution on inputs (e.g., government
            expenditure) as well as outputs (e.g., teacher-student ratio) and
            outcomes (e.g., youth literacy).
          </li>
          <li>
            Each value for each country is normalized on a 0-1 scale to allow
            for comparison and a normalized read. The 0-1 maximum values are set
            to ensure that the values are comparable over time.
          </li>
          <li>
            {" "}
            The indicators are then aggregated by theme, and adjustments are
            made to account for any correlation between indicators with linked
            outcomes evolution, such as child mortality and maternal mortality;
            then, the index is integrated at a national level. The method used
            to compute the average by theme, is the sum of squares of indicators
            – an arithmetic mean – to reflect the distance to ideal target
            performance. The square of the variation (or distance to target) is
            computed for each indicator, with the variation defined as the
            spread between each individual value and the mean, in order to
            reduce potential statistical effect of any outliers.{" "}
          </li>
          <li>
            A fully integrated HCD Index is then compiled for the region across
            each of the three dimensions and is finally integrated overall as an
            average of all Member States.
          </li>
        </ol>
      </MethodologyCardContent>
      <MethodologyCardContent>
        The aggregated index includes data from baseline (2017 or 2016 depending
        on data availability) and latest values mostly from 2020. It allows to
        assess the current HCD context as well as understand its evolution over
        the past 2-3 years.
      </MethodologyCardContent>
      <MethodologyCardContent>
        The performance observed includes only partially:
        <ul>
          <li>
            {" "}
            The effect from the COVID-19 pandemic or recent political unrest,
            disrupted health systems, school closure, or threatened livelihood.{" "}
          </li>
          <li>The impact of the ECOWAS 2030 HCD integrated strategy</li>
        </ul>
      </MethodologyCardContent>
      <MethodologyCardContent>
        The exhibit below shows the list of selected indicators. Since 2021, 4
        out of the 19 initial indicators related to doing business have been
        discontinued due to data reliability issues (No. of procedures to start
        a business, Business start-up costs, Adult with account ownership, Fixed
        internet tariffs). These indicators have been replaced for the update of
        the ECOWAS Integrative HCD index by 3 new indicators: Penetration of
        financial outlets, Internet penetration, Registered new businesses
      </MethodologyCardContent>
    </>
  );
};

export default MethodologyHCDIndexEn;
