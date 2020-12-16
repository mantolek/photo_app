import styled from 'styled-components';

export const TOPLEFTMENU = styled.div`
  height: 2rem;
  min-height: 2rem;
  background-color: ${({ theme }) => theme.colorDark};
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;

  button {
    color: ${({ theme }) => theme.colorBtn2};
    background-color: ${({ theme }) => theme.colorBgBtn2};
  }
`;
