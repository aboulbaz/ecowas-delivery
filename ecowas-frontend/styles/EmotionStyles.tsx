import styled from "@emotion/styled";

export const ThirdPageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 10px;
`;

type EmotionHeaderProps = {
  isNotPrimary?: boolean;
};

export const EmotionHeader = styled.h1<EmotionHeaderProps>`
  color: ${(props) =>
    props?.isNotPrimary
      ? props.theme.colors.danger
      : props.theme.colors.primary};
`;

export const Background = styled.div`
  background-color: ${({ theme }) => theme.colors.ternary};
`;
