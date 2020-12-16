import styled from 'styled-components';

export const CONTAINER = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  flex: 1;
`;

export const WRAPPER = styled.div<{grabbing: boolean}>`
  overflow: hidden;
  height: 100%;
  display: flex;
  align-items: flex-end;
  background-size: cover;
  background-position: center;
  position: relative;

  .IamNewElement {
    cursor: ${({ grabbing }) => (grabbing ? 'grabbing' : 'pointer')};
  }

  // Stop following button
  .stop-following {
    position: absolute;
    bottom: 0;
    left: 0;
    color: ${({ theme }) => theme.colorBtn};
    background-color: ${({ theme }) => theme.colorBgBtn};
  }

  // Info about moving elements
  .info-move {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 0.4rem;
    color: red;
    user-select: none;

    button {
      margin-left: 0.3rem;
      color: ${({ theme }) => theme.colorBtn2};
      background-color: ${({ theme }) => theme.colorBgBtn2};
    }
  }

  #photo {
    background-size: cover;
    background-position: center;
  }

  .hello_box {
    background-image: linear-gradient(to top, #a8edea 0%, #fed6e3 100%);
    width: 100%;
    height: 100%;

    .hello_gif {
      position: absolute;
      bottom: 0;
      right: 0;
    }
  }
`;

export const CURSOR = styled.img<{src: string, left: number, top: number, display: string}>`
  content: ${({ src }) => `url(${src})`}; 
  position: absolute;
  left: ${({ left }) => left}px;
  top: ${({ top }) => top}px;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
  pointer-events: none;
  display: ${({display}) => display ? 'block' : 'none'}
`;
