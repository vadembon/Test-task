import styled from 'styled-components';

export const CardList = styled.ul`
  display: grid;
  max-width: calc(100vw - 268px);
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  grid-gap: 16px;
  margin: 0px auto;

  padding: 28px 0;
  list-style: none;
`;

export const CardItem = styled.li`
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const BtnLoadMore = styled.button`
  display: block;
  margin: 0 auto;

  width: 196px;
  height: 50px;

  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  border: none;
  cursor: pointer;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #373737;
  background-color: #5cd3a8;
  text-transform: uppercase;
  :hover {
    box-shadow: inset 1px 1px 27px 5px #4b2a99;
  }
`;
