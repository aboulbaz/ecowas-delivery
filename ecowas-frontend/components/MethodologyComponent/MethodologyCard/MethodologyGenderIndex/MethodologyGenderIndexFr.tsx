import React from "react";

type Props = {};

const MethodologyGenderIndexFr = (props: Props) => {
  return (
    <div>
      L{"'"}indice de genre du HCD utilise plusieurs indicateurs pour fournir une
      vue détaillée de la performance en matière de parité dans les États
      membres. Étant donné que la pierre angulaire d{"'"}une stratégie HCD réussie
      réside dans l{"'"}inclusion des femmes et des filles, il est crucial de suivre
      de près et en continu les indicateurs de cet indice. Nous avons suivi une
      méthodologie en 5 étapes :
      <ol>
        <li>
          Identifier les indicateurs de résultat qui nous permettent de saisir
          les résultats du HCD où le genre est une source de différence
        </li>
        <li>
          Identifier pour chaque indicateur sélectionné si un taux plus élevé de
          femmes (par rapport au taux d{"'"}hommes) montrait une situation favorable
          aux femmes ou non
        </li>
        <li>
          Calculer pour chaque indicateur sélectionné :
          <ul>
            <li>
              Le ratio femmes-hommes lorsque un taux plus élevé de femmes montre
              un résultat positif pour les femmes (par exemple, taux
              d{"'"}alphabétisation des filles divisé par le taux d{"'"}alphabétisation
              des garçons)
            </li>
            <li>
              Le ratio hommes-femmes lorsque un taux plus élevé de femmes montre
              le contraire (par exemple, part de filles hors de l{"'"}école divisée
              par la part de garçons hors de l{"'"}école)
            </li>
          </ul>
        </li>
        <li>
          Pour chaque État membre, calculer la moyenne arithmétique des ratios à
          travers les 3 domaines thématiques
        </li>
        <li>
          Calculer la moyenne pondérée de la région de la CEDEAO selon la part
          des États membres dans la population totale de la région. Cela est
          motivé par la nécessité de donner le même poids à chaque femme ou
          fille de la région de la CEDEAO
        </li>
      </ol>
      Nos résultats sont basés sur 12 indicateurs :
      <ul>
        <li>
          Santé et nutrition : Taux de mortalité maternelle, Taux de mortalité
          des moins de 5 ans, Taux de retard de croissance des moins de 5 ans,
          Espérance de vie à la naissance
        </li>
        <li>
          Éducation, compétences et participation au marché du travail : Enfants
          hors de l{"'"}école, Années moyennes de scolarité, Résultats des tests
          harmonisés, Jeunes NEET, Taux d{"'"}alphabétisation des jeunes
        </li>
        <li>
          Entrepreneuriat, inclusion financière et économie numérique :
          Pénétration d{"'"}Internet
        </li>
        <li>
          Nous avons ajouté deux autres indicateurs pour mieux évaluer les
          écarts entre les sexes aux stades ultérieurs de la vie : Femmes
          occupant des postes de direction et Épargne dans un établissement
          financier
        </li>
      </ul>
      Lors de la lecture des résultats de l{"'"}indice de genre du HCD, un nombre
      inférieur à 1 montre une situation moins favorable pour les femmes.
      Lorsque le nombre est supérieur à 1, les femmes ont de meilleurs résultats
      que les hommes sur l{"'"}indicateur et/ou la dimension.
    </div>
  );
};

export default MethodologyGenderIndexFr;
