import React from "react";
import { MethodologyCardContent } from "../MethodologyCard.style";

type Props = {};

const MethodologyHCDIndexPo = (props: Props) => {
  return (
    <>
      <MethodologyCardContent>
        O Índice foi projetado para ser a Estrela Polar de todas as iniciativas.
        Foi elaborado de acordo com a ambição da CEDEAO em três dimensões
        principais. Estabelece metas claras definidas em 2021 e será atualizado
        a cada ano para monitorar o progresso dos Estados membros. O
        monitoramento do progresso do índice HCD é fundamental para manter o
        foco e o impulso do HCD. O índice permite que os Estados membros
        compreendam sua performance em HCD de forma granular, bem como celebrem
        sucessos e apontem tendências negativas para serem abordadas.
      </MethodologyCardContent>

      <MethodologyCardContent>
        É fundamental para o sucesso da estratégia que o índice anual HCD seja
        atualizado regularmente com o apoio dos pontos focais.
      </MethodologyCardContent>

      <MethodologyCardContent>
        O objetivo desta seção é detalhar a metodologia da atualização do índice
        HCD, bem como os resultados da primeira rodada da revisão do índice HCD
        de 2022.
      </MethodologyCardContent>

      <MethodologyCardContent>
        A atualização do índice requer quatro etapas:
        <ol>
          <li>
            Em cada uma das três dimensões do HCD, é definida uma lista de
            indicadores para capturar a evolução dos insumos (por exemplo,
            despesas do governo) e também dos resultados (por exemplo,
            alfabetização de jovens).
          </li>
          <li>
            Cada valor para cada país é normalizado em uma escala de 0 a 1 para
            permitir comparação e leitura normalizada. Os valores máximos de 0 a
            1 são definidos para garantir que os valores sejam comparáveis ao
            longo do tempo.
          </li>
          <li>Os indicadores são então agregados por tema, e ajustes</li>
        </ol>
      </MethodologyCardContent>
    </>
  );
};

export default MethodologyHCDIndexPo;
