import styled from "@emotion/styled";

export const MethodologyCardWrapper = styled.div`
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  width: 33rem;
  height: 100%;

`;

export const MethodologyCardHeader = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`;

export const MethodologyCardHeaderTitle = styled.div`
  font-style: normal;
  font-weight: 800;
  font-size: 0.9rem;
  line-height: 120%;
  padding-top: 0.8rem;
`;

export const MethodologyCardContent = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 0.8rem;
  line-height: 120%;
  margin-bottom: 0.5rem;
`;
