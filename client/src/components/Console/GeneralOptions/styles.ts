import styled from 'styled-components';

export const LABEL = styled.div<{dec: boolean}>`
  text-decoration: ${({ dec }) => (dec ? 'line-through' : 'none')};
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 2rem;
  width: 10rem;

  select:nth-child(2) {
    min-width: 4rem;
    margin-left: 0.4rem;
    width: 100%;
  }

  .range-input {
    width: 7rem;
    &::-webkit-slider-runnable-track {
      #thumb {
      }
    }
  }

  .range-input:disabled {
    &::-webkit-slider-runnable-track {
      background-color: red;
      opacity: 0.5;
    }
  }

  @media only screen and (max-width: 550px) {
    flex-direction: column;
    align-items: flex-start;
    width: 8rem;
  }
`;
