import React from "react";
import { MethodologyCardContent } from "../MethodologyCard.style";

type Props = {};

const MethodologyHCDIndexPo = (props: Props) => {
  return (
    <>
      <MethodologyCardContent>
        O Índice foi projetado para ser a Estrela Polar de todas as iniciativas.
        O Índice foi projetado para ser a Estrela do Norte de todas as
        iniciativas. Foi elaborado de acordo com a ambição da CEDEAO em três
        dimensões principais. Define metas claras definidas em 2021 e será
        atualizado a cada ano para monitorar o progresso dos Estados-Membros. A
        monitorização do progresso do índice HCD é fundamental para manter o
        foco e o impulso do HCD. O índice permite aos Estados-Membros entender
        sua performance em HCD detalhadamente, bem como celebrar sucessos e
        apontar tendências negativas para abordar.{" "}
      </MethodologyCardContent>

      <MethodologyCardContent>
        É crucial para o sucesso da estratégia que o índice anual de HCD seja
        atualizado regularmente com o apoio de pontos focais.
      </MethodologyCardContent>

      <MethodologyCardContent>
        O objetivo desta seção é detalhar a metodologia da atualização do índice
        de HCD, bem como os resultados da primeira rodada da revisão do índice
        de HCD em 2022.
      </MethodologyCardContent>

      <MethodologyCardContent>
        A atualização do índice requer quatro etapas:
        <ol>
          <li>
            Em cada uma das três dimensões do HCD, uma lista de indicadores é
            definida para capturar a evolução nos insumos (por exemplo, despesas
            governamentais), bem como nas saídas (por exemplo, proporção
            professor-aluno) e resultados (por exemplo, alfabetização de
            jovens).
          </li>
          <li>
            Cada valor para cada país é normalizado em uma escala de 0 a 1 para
            permitir comparação e leitura normalizada. Os valores máximos de 0 a
            1 são definidos para garantir que os valores sejam comparáveis ao
            longo do tempo.
          </li>
          <li>
            Os indicadores são então agregados por tema, e ajustes são feitos
            para levar em conta qualquer correlação entre indicadores com
            evolução de resultados relacionados, como mortalidade infantil e
            mortalidade materna; em seguida, o índice é integrado em nível
            nacional. O método usado para calcular a média por tema é a soma dos
            quadrados dos indicadores - uma média aritmética - para refletir a
            distância em relação ao desempenho ideal alvo. O quadrado da
            variação (ou distância em relação ao alvo) é calculado para cada
            indicador, sendo a variação definida como a diferença entre cada
            valor individual e a média, a fim de reduzir o potencial efeito
            estatístico de quaisquer valores discrepantes.
          </li>
          <li>
            Um Índice de HCD totalmente integrado é então compilado para a
            região em cada uma das três dimensões e é finalmente integrado
            globalmente como uma média de todos os Estados-Membros.
          </li>
        </ol>
      </MethodologyCardContent>
      <MethodologyCardContent>
        O índice agregado inclui dados de base (2017 ou 2016, dependendo da
        disponibilidade de dados) e os valores mais recentes, principalmente a
        partir de 2020. Isso permite avaliar o contexto atual do HCD e entender
        sua evolução nos últimos 2-3 anos.
      </MethodologyCardContent>
      <MethodologyCardContent>
        O desempenho observado inclui apenas parcialmente:
        <ul>
          <li>
            O efeito da pandemia de COVID-19 ou de recentes turbulências
            políticas, como sistemas de saúde perturbados, fechamento de escolas
            ou ameaça aos meios de subsistência.
          </li>
          <li>O impacto da estratégia integrada de HCD da CEDEAO para 2030.</li>
        </ul>
      </MethodologyCardContent>
      <MethodologyCardContent>
        Desde 2021, 4 dos 19 indicadores iniciais relacionados ao ambiente de
        negócios foram descontinuados devido a problemas de confiabilidade dos
        dados (número de procedimentos para iniciar um negócio, custos de
        inicialização de negócios, adultos com contas bancárias, tarifas de
        acesso à Internet fixo). Esses indicadores foram substituídos para a
        atualização do índice integrado de HCD da CEDEAO por 3 novos
        indicadores: Penetração de pontos de venda financeiros, Penetração da
        Internet, Novas empresas registradas.
      </MethodologyCardContent>
    </>
  );
};

export default MethodologyHCDIndexPo;
