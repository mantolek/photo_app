import styled from 'styled-components';

export const CONTAINER = styled.div`
  display: flex;
  width: 15rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 9rem;
  height: 9rem;

  @media only screen and (max-width: 780px) {
    width: 40vw;
  }

  @media only screen and (max-width: 550px) {
    width: 7.8rem;
  }


`;
export const WRAPPER_1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;

  p {
    background: #80baae;
    padding-left: 1rem;
    width: 93.4%;
    margin: 0.3rem;
    border-radius: 0.2rem;
  }
`;

export const WRAPPER_2 = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  height: .9rem;

  input {
    margin: 0 0.4rem;
  }

  .emptius {
    height: 0.9rem;
  }

  @media only screen and (max-width: 780px) {
    input {
      width: 12vw;
    }

    select {
      width: 15vw;
    }
  }

  @media only screen and (max-width: 550px) {
    input {
      width: 3rem;
    }

    select {
      width: 4rem;
    }
  }
`;

export const WRAPPER_3 = styled.div`
  width: 100%;
  height: 6.5rem;

  input {
      height: 1.3rem;
  }

  span {
      min-width: 2rem;
      text-align: center;
  }

  .emptius2 {
    height: 5rem;
  }

  .cubic-info {
    display: flex;
    align-items: center;
  }
`;
