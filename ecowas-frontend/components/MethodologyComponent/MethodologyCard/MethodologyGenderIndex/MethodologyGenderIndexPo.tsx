import React from "react";

type Props = {};

const MethodologyGenderIndexPo = (props: Props) => {
  return (
    <div>
      O índice de Gênero HCD utiliza vários indicadores para fornecer uma visão
      detalhada do desempenho de paridade nos Estados membros. Uma vez que a
      pedra angular de uma estratégia HCD bem-sucedida reside na inclusão de
      mulheres e meninas, é crucial acompanhar de perto e continuamente as
      métricas neste índice. Seguimos uma metodologia em 5 etapas:
      <ol>
        <li>
          Identificar indicadores de resultado que nos permitam capturar os
          resultados do HCD onde o gênero é uma fonte de diferença
        </li>
        <li>
          Identificar para cada indicador selecionado se uma taxa mais alta de
          mulheres (em comparação com a taxa de homens) mostrava uma situação
          favorável às mulheres ou não
        </li>
        <li>
          Calcular para cada indicador selecionado:
          <ul>
            <li>
              A razão mulher-homem quando uma taxa mais alta de mulheres mostra
              um resultado positivo para as mulheres (por exemplo, taxa de
              alfabetização de meninas dividida pela taxa de alfabetização de
              meninos)
            </li>
            <li>
              A razão homem-mulher quando uma taxa mais alta de mulheres mostra
              o oposto (por exemplo, a parcela de meninas fora da escola
              dividida pela parcela de meninos fora da escola)
            </li>
          </ul>
        </li>
        <li>
          Para cada Estado membro, calcular a média aritmética das razões nas 3
          áreas temáticas
        </li>
        <li>
          Calcular a média ponderada da região da CEDEAO de acordo com a
          participação dos Estados membros na população total da região. Isso é
          motivado pela necessidade de dar o mesmo peso a cada mulher ou menina
          na região da CEDEAO
        </li>
      </ol>
      Nossos resultados são baseados em 12 indicadores:
      <ul>
        <li>
          Saúde e Nutrição: Taxa de mortalidade materna, Taxa de mortalidade
          infantil, Taxa de déficit de crescimento em menores de 5 anos,
          Expectativa de vida ao nascer
        </li>
        <li>
          Educação, habilidades e participação no mercado de trabalho: Crianças
          fora da escola, Média de anos de escolaridade, Pontuações de testes
          harmonizados, Jovens NEET, Taxa de alfabetização dos jovens
        </li>
        <li>
          Empreendedorismo, inclusão financeira e economia digital: Penetração
          da Internet
        </li>
        <li>
          Adicionamos mais dois indicadores para avaliar melhor as lacunas de
          gênero nas etapas posteriores da vida: Mulheres em cargos de gerência
          e Poupança em uma instituição financeira
        </li>
      </ul>
      Ao ler os resultados do Índice de Gênero HCD, um número abaixo de 1 mostra
      uma situação menos favorável para as mulheres. Quando o número é acima de
      1, as mulheres têm resultados melhores do que os homens no indicador e/ou
      dimensão.
    </div>
  );
};

export default MethodologyGenderIndexPo;
