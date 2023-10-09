import React from "react";


const MethodologyGenderIndexEn: React.FC = () => {
  return (
    <div>
      The HCD Gender index uses several indicators to provide a granular view of
      parity performance in Member States. Since the cornerstone of a successful
      HCD strategy lies in the inclusion of women and girls, it is crucial to
      closely and continuously track the metrics in this index.We followed a
      5-step approach methodology:
      <ol>
        <li>
          Identify outcome indicators that allow us to capture HCD outcomes
          where gender is a source of difference
        </li>
        <li>
          Identify for each selected indicator if a higher rate of female (vs.
          rate of male) was showing a favourable situation towards women or not
        </li>
        <li>
          Calculate for each selected indicator:
          <ul>
            <li>
              The female-to-male ratio when a higher rate of women is showing a
              positive outcome for women (e.g., {"girls'"} literacy rate divided
              by
              {"boys'"} literacy rate)
            </li>
            <li>
              The male-to-female ratio when a higher rate of women is showing
              the opposite (e.g., share of girls out of school divided by share
              of boys out of school)
            </li>
          </ul>
        </li>
        <li>
          For each Member State, calculate the arithmetic average of the ratios
          across the 3 thematic areas{" "}
        </li>
        <li>
          Calculate the weighted average of the ECOWAS region according to
          Member States share in the total region population. This is driven by
          the need to give the same weight to every woman or girl in the ECOWAS
          region
        </li>
      </ol>
      Our results are based on 12 indicators:
      <ul>
        <li>
          Health and Nutrition: Maternal mortality rate, Under-5 mortality rate,
          Under-5 stunting rate, Life expectancy at birth
        </li>
        <li>
          Education, skills, and labor participation: Children out of school,
          Mean years of schooling, Harmonized test scores, Youth NEET, Youth
          literacy rate
        </li>
        <li>
          Entrepreneurship, financial inclusion, and digital economy: Internet
          penetration
        </li>
        <li>
          We added two other indicators to better assess Gender gaps at the
          later stages of life: Women in managerial positions and Saving at a
          financial institution
        </li>
      </ul>
      When reading the results of the HCD Gender Index, a number below 1 shows a
      situation less favourable for women. When the number is above 1, women
      have better outcomes then men on the indicator and/or dimension.
    </div>
  );
};

export default MethodologyGenderIndexEn;
