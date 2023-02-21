import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  width: 7rem;
  height: 7rem;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.main};
  border-radius: 50%;

  > img {
    width: 6rem;
    height: 6rem;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
  }
  &.rock {
    .Rock {
      opacity: 1;
    }
  }
  &.paper {
    .Paper {
      opacity: 1;
    }
  }
  &.scissors {
    .Scissors {
      opacity: 1;
    }
  }

  > .Rock {
    margin-bottom: 1rem;
  }
  > .Scissors {
    margin-bottom: 0.5rem;
  }
  > .Paper {
    width: 5rem;
    height: 5rem;
    margin-top: 0.2rem;
  }
`;
