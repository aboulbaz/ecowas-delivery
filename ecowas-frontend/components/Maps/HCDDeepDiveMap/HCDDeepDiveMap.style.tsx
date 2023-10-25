import styled from "@emotion/styled";

export const ComponentWrapper = styled.div`
  height: 36rem;
  position: relative;
`;

export const MapContainer = styled.div`
  background-color: white;
  width: 95%;
  height: 36rem;
  border-radius: 5px;
  margin-left: 50px;
  display: flex;
  /* flex-direction: row-reverse; */
`;

export const MapSVG = styled.svg`
  border-radius: 5px;
  width: 100%;
  height: 36rem;
`;

export const MapMetricWrapper = styled.div`
  width: 5rem;
  /* display: flex; */
  padding: 0.7rem;
  padding-left: 0.5rem;
`;

export const MapMetric = styled.div`
  padding: 0.7rem;
  width: 1rem;
  height: 6rem;
  background: linear-gradient(180deg, #00834f 0%, #e0824e 100%);
`;

export const MapMetricTitle = styled.p`
  font-size: 12px;
  font-style: normal;
  font-weight: 800;
  line-height: 120%;
  padding: 0;
  width: 6rem;
`;

export const MapMetricLabel = styled.p`
  font-size: 9px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
`;

type MapSVGPathProps = {
  opacity?: number;
  color: string;
};

export const MapSVGSelectedPath = styled.path<MapSVGPathProps>`
  fill: ${({ color }) => color};
  stroke: white;
  stroke-opacity: 1;
  stroke-width: 0.1;
  z-index: 1;
`;

export const MapSVGCircle = styled.circle<MapSVGPathProps>`
  position: absolute;
  z-index: 10;
  fill: ${({ color }) => color};
  stroke: white;
  stroke-width: 0.2px;
  top: 3em;
`;

export const MapWrapper = styled.g`
  position: absolute;
  z-index: -10;
`;

type MapTextProps = {
  isBlack?: boolean;
};

export const MapText = styled.text<MapTextProps>`
  text-align: center;
  font-size: 1.5px;
  font-weight: bolder;
  fill: ${({ theme, isBlack }) => (isBlack ? "#999696" : theme.colors.white)};
`;

export const CicularLoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const CaboVerdeWrapper = styled.div`
  color: #838383;
  font-weight: bolder;
  font-size: 0.8rem;
  width: 5rem;
  align-items: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  align-content: center;
`;

export const CaboVerdeCircle = styled.div<MapSVGPathProps>`
  background: ${({ color }) => color};
  border-radius: 50%;
  height: 3rem;
  width: 3rem;
  margin-top: 2rem;
  margin-bottom: 5px;
  text-align: center;
  padding-top: 0.7rem;
  color: white;
  font-size: 1rem;
`;

export const ECOWASCircle = styled.div<MapSVGPathProps>`
  background: ${({ color }) => color};
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 6rem;
  width: 6rem;
  border-radius: 50%;
  margin-top: 9rem;
`;

export const ECOWASText = styled.div`
  margin-top: 1.5rem;
  color: white;
  font-weight: bolder;
  text-align: center;
  font-size: 0.8rem;
`;

export const ECOWASValue = styled.div`
  color: white;
  font-weight: bolder;
  text-align: center;
  font-size: 1.5rem;
`;

export const MapTextWrapper = styled.div`
  text-align: center;
`;
