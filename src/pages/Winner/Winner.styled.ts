import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  margin-top: 5rem;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.3rem;

    > .header_text {
      font-size: 2.6rem;
      font-weight: 800;
    }

    > .sub_text {
      font-size: 1.2rem;
      color: ${props => props.theme.colors.darkgrey};
    }

    > button {
      margin-top: 1.5rem;
      padding: 0.3rem 1rem;
      border: none;
      border-radius: 0.5rem;
      background-color: ${props => props.theme.colors.orange};
      color: ${props => props.theme.colors.white};
      font-size: 1.1rem;
      font-weight: 800;
      cursor: pointer;

      &:hover {
        background-color: ${props => props.theme.colors.red};
        opacity: 0.9;
        transition: 0.3s;
      }
    }
  }
`;

export const Image = styled.img`
  width: 100%;
  width: 250px;
`;
