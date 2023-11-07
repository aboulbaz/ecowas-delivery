import React from "react";

type Props = {};

const MethodologyGenderIndexPo = (props: Props) => {
  return (
    <div>
      O Índice de Gênero HCD utiliza vários indicadores para fornecer uma visão
      detalhada do desempenho de paridade nos Estados-Membros. Uma vez que a
      pedra angular de uma estratégia HCD bem-sucedida reside na inclusão de
      mulheres e meninas, é crucial acompanhar de perto e continuamente as
      métricas deste índice. Seguimos uma metodologia de 5 etapas:
      <ol>
        <li>
          Identificar indicadores de resultados que nos permitam capturar os
          resultados de HCD nos quais o gênero é uma fonte de diferença.
        </li>
        <li>
          Identificar para cada indicador selecionado se uma taxa mais alta de
          mulheres (em comparação com os homens) indica uma situação favorável
          às mulheres ou não.
        </li>
        <li>
          Calcular para cada indicador selecionado:
          <ul>
            <li>
              A razão mulher-homem quando uma taxa mais alta de mulheres indica
              um resultado positivo para as mulheres (por exemplo, taxa de
              alfabetização das meninas dividida pela taxa de alfabetização dos
              meninos).
            </li>
            <li>
              A razão homem-mulher quando uma taxa mais alta de mulheres indica
              o oposto (por exemplo, participação de meninas fora da escola
              dividida pela participação de meninos fora da escola).
            </li>
          </ul>
        </li>
        <li>
          Para cada Estado-Membro, calcular a média aritmética das razões nas 3
          áreas temáticas.
        </li>
        <li>
          Calcular a média ponderada da região da CEDEAO de acordo com a
          participação dos Estados-Membros na população total da região. Isso é
          motivado pela necessidade de dar o mesmo peso a cada mulher ou menina
          na região da CEDEAO.
        </li>
      </ol>
      Nossos resultados são baseados em 12 indicadores:
      <ul>
        <li>
          Saúde e Nutrição: Taxa de mortalidade materna, Taxa de mortalidade de
          menores de 5 anos, Taxa de retardo no crescimento de menores de 5
          anos, Expectativa de vida ao nascer.
        </li>
        <li>
          Educação, habilidades e participação no mercado de trabalho: Crianças
          fora da escola, Média de anos de escolaridade, Pontuações de testes
          harmonizados, Jovens NEET (não em emprego, educação ou treinamento),
          Taxa de alfabetização de jovens.
        </li>
        <li>
          Empreendedorismo, inclusão financeira e economia digital: Penetração
          da Internet.
        </li>
        <li>
          Adicionamos dois outros indicadores para avaliar melhor as lacunas de
          gênero nas fases posteriores da vida: Mulheres em posições de
          liderança e Poupança em instituições financeiras.
        </li>
      </ul>
      Ao ler os resultados do Índice de Gênero HCD, um número abaixo de 1 mostra
      uma situação menos favorável para as mulheres. Quando o número está acima
      de 1, as mulheres têm melhores resultados do que os homens no indicador
      e/ou na dimensão.
    </div>
  );
};

export default MethodologyGenderIndexPo;
