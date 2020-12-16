import styled from 'styled-components';

export const SEARCHBTN = styled.button`
  background-color: ${({ theme }) => theme.colorBgBtn2};
  color: ${({ theme }) => theme.colorBtn2};
`;

export const CONTAINER = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 0.35rem;
  margin-top: 0.5rem;
  padding-top: 0.2rem;
  max-height: 77.3vh;
  overflow-y: auto;

  .finished-imgages {
    background-position: center !important;
    background-size: cover !important;
    width: 4rem;
    height: 4rem;
    margin: 0.2rem;
    cursor: pointer;
    border-radius: .3rem;
    border: ${({theme}) => `.1rem solid ${theme.colorBright}`};
  }
`;
