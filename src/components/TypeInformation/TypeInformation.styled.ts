import styled from 'styled-components';

interface Container {
  smallSize?: boolean;
}

export const Container = styled.div<Container>`
  position: relative;
  display: flex;
  width: ${props => (props.smallSize ? '4rem' : '17rem')};
  height: ${props => (props.smallSize ? '4rem' : '17rem')};
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  box-shadow: ${props => !props.smallSize && `0 0 0 0.2rem ${props.theme.colors.white}`};

  :hover {
    ${props =>
      props.smallSize &&
      `cursor: pointer; 
      opacity: 0.9; 
      transition: 0.3s; 
      box-shadow: 0 0 0 0.3rem ${props.theme.colors.orange};`}
  }

  > img {
    width: ${props => (props.smallSize ? '4rem' : '13rem')};
    height: ${props => (props.smallSize ? '4rem' : '13rem')};
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
  }

  &.rock {
    background-color: ${props => props.theme.colors.red};
    .Rock {
      opacity: 1;
    }
  }

  &.paper {
    background-color: ${props => props.theme.colors.blue};
    .Paper {
      opacity: 1;
      width: ${props => (props.smallSize ? '3.3rem' : '13rem')};
      height: ${props => (props.smallSize ? '3.3rem' : '13rem')};
    }
  }

  &.scissors {
    background-color: ${props => props.theme.colors.yellow};
    .Scissors {
      opacity: 1;
    }
  }
`;
