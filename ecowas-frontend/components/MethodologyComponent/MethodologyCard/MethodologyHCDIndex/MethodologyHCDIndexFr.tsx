import React from "react";
import { MethodologyCardContent } from "../MethodologyCard.style";

type Props = {};

const MethodologyHCDIndexFr = (props: Props) => {
  return (
    <>
      <MethodologyCardContent>
        L{"'"}indice a été conçu pour être l{"'"}Étoile du Nord de toutes les
        initiatives. Il a été élaboré conformément à l{"'"}ambition de la CEDEAO
        sur trois dimensions principales. Il établit des objectifs clairs
        définis en 2021 et sera mis à jour chaque année pour surveiller les
        progrès des États membres. La surveillance des progrès de l{"'"}indice
        HCD est essentielle pour maintenir la concentration et l{"'"}élan du
        HCD. L{"'"}indice permet aux États membres de comprendre en détail leur
        performance en matière de HCD, de célébrer leurs succès et d{"'"}
        identifier les tendances négatives à corriger.
      </MethodologyCardContent>

      <MethodologyCardContent>
        Il est essentiel pour le succès de la stratégie que l{"'"}indice HCD
        annuel soit régulièrement mis à jour avec le soutien des points focaux.
        L{"'"}objectif de cette section est de détailler la méthodologie de la
        mise à jour de l{"'"}indice HCD ainsi que les résultats de la première
        ronde de révision de l{"'"}indice HCD en 2022.
      </MethodologyCardContent>
      <MethodologyCardContent>
        La mise à jour de l{"'"}indice comprend quatre étapes :
        <ol>
          <li>
            Sur chacune des trois dimensions du HCD, une liste d{"'"}indicateurs
            est définie pour capturer l{"'"}évolution des inputs (par exemple,
            les dépenses gouvernementales) ainsi que des outputs (par exemple,
            le ratio enseignant-élève) et des résultats (par exemple, l{"'"}
            alphabétisation des jeunes).
          </li>
          <li>
            Chaque valeur pour chaque pays est normalisée sur une échelle de 0 à
            1 pour permettre la comparaison et une lecture normalisée. Les
            valeurs maximales de 0 à 1 sont définies pour garantir que les
            valeurs sont comparables dans le temps
          </li>
          <li>
            Les indicateurs sont ensuite agrégés par thème, et des ajustements
            sont apportés pour tenir compte de toute corrélation entre les
            indicateurs avec l{"'"}évolution des résultats liés, tels que la
            mortalité infantile et la mortalité maternelle ; ensuite, l{"'"}
            indice est intégré au niveau national. La méthode utilisée pour
            calculer la moyenne par thème est la somme des carrés des
            indicateurs - une moyenne arithmétique - pour refléter la distance
            par rapport à la performance cible idéale. Le carré de la variation
            (ou distance par rapport à la cible) est calculé pour chaque
            indicateur, la variation étant définie comme l{"'"}écart entre
            chaque valeur individuelle et la moyenne, afin de réduire l{"'"}
            effet statistique potentiel des valeurs aberrantes.
          </li>
          <li>
            Un indice HCD entièrement intégré est ensuite compilé pour la région
            sur chacune des trois dimensions et est enfin intégré globalement en
            tant que moyenne de tous les États membres.
          </li>
        </ol>
      </MethodologyCardContent>

      <MethodologyCardContent>
        L{"'"}indice agrégé inclut des données de référence (2017 ou 2016 selon
        la disponibilité des données) et les valeurs les plus récentes,
        principalement de 2020. Il permet d{"'"}évaluer le contexte actuel du
        HCD ainsi que de comprendre son évolution au cours des 2 à 3 dernières
        années.
      </MethodologyCardContent>

      <MethodologyCardContent>
        La performance observée inclut partiellement uniquement :
        <ul>
          <li>
            L{"'"}effet de la pandémie de COVID-19 ou des récents troubles
            politiques, tels que les systèmes de santé perturbés, la fermeture
            des écoles ou la menace sur les moyens de subsistance.
          </li>
          <li>L{"'"}impact de la stratégie intégrée HCD de la CEDEAO 2030.</li>
        </ul>
      </MethodologyCardContent>
      <MethodologyCardContent>
        Depuis 2021, 4 des 19 indicateurs initiaux liés à l{"'"}environnement
        des affaires ont été abandonnés en raison de problèmes de fiabilité des
        données (nombre de procédures pour créer une entreprise, coûts de
        démarrage d{"'"}entreprise, adultes ayant un compte en banque, tarifs d
        {"'"}accès à Internet fixe). Ces indicateurs ont été remplacés pour la
        mise à jour de l{"'"}indice HCD intégré de la CEDEAO par 3 nouveaux
        indicateurs : Pénétration des points de vente financiers, Pénétration d
        {"'"}Internet, Nouvelles entreprises enregistrées.
      </MethodologyCardContent>
    </>
  );
};

export default MethodologyHCDIndexFr;
