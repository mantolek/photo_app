import styled from 'styled-components';

export const MENU_CONTAINER = styled.div`
  height: 2rem;
  min-height: 2rem;
  width: 50vw;
  background-color: ${({ theme }) => theme.colorBright};
  z-index: 2;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    color: ${({ theme }) => theme.colorBtn};
    background-color: ${({ theme }) => theme.colorBgBtn};
  }

  p {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
  }

  .right-top-box {
    display: flex;
    align-items: center;
    position: relative;

    .colors-button {
      width: 0.6rem;
      height: 0.6rem;
      cursor: pointer;
      border-radius: 50%;
      background-color: #000;
      transition: 0.3s all;
      border: 0.1rem solid #fff;
      transform: translateX(-0.2rem);

      &:hover {
        background-color: #fff;
        border: 0.1rem solid #000;
      }
    }

    .colors-box {
      transition: 0.3s all;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      opacity: 0;
      position: absolute;
      z-index: -100;
      height: 4rem;
      top: 2.2rem;
      border-radius: .3rem;
      padding: .3rem;
      left: -2rem;
      background-color: ${({ theme }) => theme.colorBright};
      width: 6rem;

      &.activeColors {
        opacity: 1;
        z-index: 100;
      }

      h5 {
        margin: 0.1rem 0 0 0;
        transform: translateX(.65rem);
      }
      
      ul {
        transform: translateX(1.5rem);
        margin: 0;
        padding: 0;
        list-style-type: circle;

        li {
          transition: 0.3s all;
          font-size: 0.8rem;
          cursor: pointer;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }

    button {
      color: ${({ theme }) => theme.colorBtn};
      background-color: ${({ theme }) => theme.colorBgBtn};
    }

    .flags_box {
      display: flex;
      flex-direction: column;

      .flags {
        width: 1rem;
        height: 0.7rem;
        margin: 0.1rem;
        cursor: pointer;
      }
    }
  }
`;
