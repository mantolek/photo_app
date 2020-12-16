import styled from 'styled-components';

export const CONSOLE_WRAPPER = styled.div`
  flex: 1;
  height: 100%;
  max-width: 50vw;
  border-right: 1px solid #272c36;
  display: flex;

  label {
    font-size: 3rem;

    .count_box {
      display: flex;
      flex-direction: column;
      
      div {
        display: flex;
        
        p {
          padding-right: 0.1rem;
        }
        .count_input {
          border: none;
          background: transparent;
          border-bottom: 2px solid red;
          width: 4rem;
          outline: none;
          padding-left: 0.1rem;
          font-size: 3rem;
          font-family: inherit;
        }
      }
      
      .beautiful {
        height: 1rem;
      }
    }
  }
`;

export const PAGE_CONTAINER = styled.div`
  width: 50vw;
`;

export const MENU = styled.div<{display: number}>`
  min-width: 2rem;
  height: 100vh;
  display: ${({ display }) => (display ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: flex-start;
  transition: 0.3s all;
  background-color: ${({ theme }) => theme.colorDark};
  position: relative;

  .btn-reset {
    position: absolute;
    bottom: 0rem;
    left: -0.25rem;
    border-radius: 20%;
    color: ${({ theme }) => theme.colorBtn2};
    background-color: ${({ theme }) => theme.colorBgBtn2};
  }
`;

export const OPEN_APP = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  left: 25%;
  transform: translateX(-50%);
`;

export const ELEMENTS = styled.div`
  height: 100%;
  flex: 1;
  max-width: 50vw;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.background};
  z-index: 2;

  .title-folder {
    background: #80baae;
    margin: 0.2rem 0.2rem 0 0.2rem;
    border-radius: 0.1rem;
    padding-left: 0.5rem;
    cursor: pointer;
    transition: 0.3s all;

    &:hover {
      background-color: rgb(99, 165, 152);
    }
  }

  .elements-wrapper {
    padding: 0.5rem;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
  }

  .elements-choosen-element {
    width: 6rem;
    height: 6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #cecece;
    border: 0.1rem solid #000;
    border-radius: 0.3rem;
    box-shadow: 0 10px 6px -6px #777;

    position: absolute;
    bottom: 1rem;
    left: 25%;
    transform: translateX(-30%);

    img {
      height: 6rem;
    }
  }
`;

export const GENERAL_OPTIONS = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  z-index: 2;
  background-color: ${({ theme }) => theme.background};
`;

export const BACKGROUND = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  z-index: 2;
  background-color: ${({ theme }) => theme.background};

  .bg-box {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    max-height: 92vh;
    overflow-y: auto;
  }
`;

export const ANIMATION_OPTIONS = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  z-index: 2;
  background-color: ${({ theme }) => theme.background};
`;

export const PHOTO = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  z-index: 2;
  background-color: ${({ theme }) => theme.background};

  select {
    width: 26vw;
    max-width: 10rem;
    align-self: center;
  }
`;
