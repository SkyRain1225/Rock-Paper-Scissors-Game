import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  gap: 5rem;
  margin-top: 5rem;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > p {
    font-size: 1.5rem;
    font-weight: 800;
    margin-bottom: 2rem;
  }
`;
