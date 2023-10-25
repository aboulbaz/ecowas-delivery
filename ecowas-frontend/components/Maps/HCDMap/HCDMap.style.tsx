import styled from "@emotion/styled";

export const ComponentWrapper = styled.div`
  height: 36rem;
`;

export const MapContainer = styled.div`
  background-color: white;
  width: 95%;
  height: 36rem;
  border-radius: 5px;
  margin-left: 50px;
  display: flex;
`;

export const MapSVG = styled.svg`
  border-radius: 5px;
  width: 100%;
  height: 36rem;
`;

export const MapMetricWrapper = styled.div`
  width: 5rem;
  padding: 0.7rem;
  padding-left: 1rem;
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
`;

export const MapMetricLabel = styled.p`
  font-size: 9px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
`;

type MapSVGPathProps = {
  color: string;
};

export const MapSVGPath = styled.path<MapSVGPathProps>`
  fill: ${({ color }) => color};
  fill-opacity: 1;
  stroke: white;
  stroke-opacity: 1;
  stroke-width: 0.1;
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
  margin-top: 6rem;
  margin-bottom: 5px;
`;

export const ECOWASCircle = styled.div<MapSVGPathProps>`
  position: relative;
  background: ${({ color }) => color};
  display: flex;
  align-items: center;
  height: 6rem;
  width: 6rem;
  border-radius: 50%;
  margin-top: 6rem;
`;

export const ECOWASText = styled.div`
  color: white;
  font-weight: bolder;
  text-align: center;
  font-size: 1.1rem;
  position: absolute;
  left: 10%;
`;

export const MapText = styled.text<MapSVGPathProps>`
  font-size: 1.5px;
  fill: white;
  width: 1px;
  overflow: visible;
  font-weight: bolder;
`;

export const CicularLoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
