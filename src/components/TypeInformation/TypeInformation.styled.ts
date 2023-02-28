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
