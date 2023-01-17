import styled from 'styled-components';

export const SearchbarStyled = styled.header`
  /* top: 0; */
  /* left: 0; */
  /* position: sticky; */
  /* z-index: 1100; */
  display: flex;
  justify-content: start;

  height: 64px;
  padding-right: 40px;
  padding-left: 40px;

  color: #fff;
`;

export const SearchFormStyled = styled.form`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0;
  margin-right: auto;
  width: 450px;
`;

export const SearchFormInputStyled = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  padding-left: 16px;
  padding-right: 48px;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: 0.03em;
  color: #212121;
  border: 1px solid rgba(255, 255, 255, 0.3);
  filter: drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.3));
  border-radius: 3px;
  background-color: #ffffff;
`;
