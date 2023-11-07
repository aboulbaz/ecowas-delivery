import React from "react";

type Props = {};

const MethodologyGenderIndexFr = (props: Props) => {
  return (
    <div>
      L{"'"}Indice de Genre DCH utilise plusieurs indicateurs pour fournir une
      vue détaillée de la performance de parité dans les États membres. Une fois
      que la pierre angulaire d{"'"}une stratégie DCH réussie réside dans l{"'"}
      inclusion des femmes et des filles, il est crucial de suivre de près et en
      continu les données de cet indice. Nous avons suivi une méthodologie en 5
      étapes :
      <ol>
        <li>
          Identifier les indicateurs de résultats qui nous permettent de saisir
          les résultats en matière de DCH où le genre est une source de
          différence.
        </li>
        <li>
          Identifier pour chaque indicateur sélectionné si un taux plus élevé de
          femmes (par rapport aux hommes) indique une situation favorable aux
          femmes ou non.
        </li>
        <li>
          Calculer pour chaque indicateur sélectionné :
          <ul>
            <li>
              Le ratio femmes-hommes lorsque des taux plus élevés de femmes
              indiquent un résultat positif pour les femmes (par exemple, taux d
              {"'"}alphabétisation des filles divisé par le taux d{"'"}
              alphabétisation des garçons).
            </li>
            <li>
              Le ratio hommes-femmes lorsque des taux plus élevés de femmes
              indiquent le contraire (par exemple, part de filles non
              scolarisées divisée par la part de garçons non scolarisés). 4.
              Pour chaque État membre, calculer la moyenne arithmétique des
              ratios dans les 3 domaines thématiques.
            </li>
          </ul>
        </li>
        <li>
          Pour chaque État membre, calculer la moyenne arithmétique des ratios
          dans les 3 domaines thématiques.
        </li>
        <li>
          Calculer la moyenne pondérée de la région de la CEDEAO en fonction de
          la part des États membres dans la population totale de la région. Cela
          est motivé par la nécessité de donner le même poids à chaque femme ou
          fille dans la région de la CEDEAO. Nos résultats sont basés sur 12
          indicateurs :
          <ul>
            <li>
              Santé et Nutrition : Taux de mortalité maternelle, Taux de
              mortalité des moins de 5 ans, Taux de retard de croissance des
              moins de 5 ans, Espérance de vie à la naissance.
            </li>
            <li>
              Éducation, compétences et participation au travail : Enfants non
              scolarisés, Nombre moyen d{"'"}années de scolarité, Scores de
              tests harmonisés, Jeunes NEET (ni en emploi, ni en éducation, ni
              en formation), Taux d{"'"}alphabétisation des jeunes.
            </li>
            <li>
              Entrepreneuriat, inclusion financière et économie numérique :
              Pénétration d{"'"}Internet.
            </li>
          </ul>
        </li>
      </ol>
      <div>
        Nous avons ajouté deux autres indicateurs pour évaluer mieux les écarts
        de genre aux stades ultérieurs de la vie : Femmes en position de
        direction et Épargne dans une institution financière.
      </div>
      <div>
        Lors de la lecture des résultats de l{"'"}Indice de Genre DCH, un nombre
        inférieur à 1 montre une situation moins favorable pour les femmes.
        Quand le nombre est supérieur à 1, les femmes obtiennent de meilleurs
        résultats que les hommes sur l{"'"}indicateur et/ou la dimension.
      </div>
    </div>
  );
};

export default MethodologyGenderIndexFr;
