import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 100%;
  flex-direction: column;
  padding: 50px 20px;
`;

export const Header = styled.View`
  width: 100%;
  max-height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const FoodInfosContainer = styled.View`
  width: 45%;
  max-height: 100%;
  flex-direction: column;
  border-radius: 5px;
  background-color: #fff;
  margin: 10px auto;
  padding: 10px;
`;

export const FooContainer = styled.View`
  max-width: 100%;
  max-height: 100%;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
`;
