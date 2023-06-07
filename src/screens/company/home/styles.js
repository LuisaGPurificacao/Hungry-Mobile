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

export const SearchContainer = styled.View`
  width: 100%;
  max-height: 100%;
  margin-top: 40px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CentroContainer = styled.TouchableOpacity`
  width: 100%;
  min-height: 10%;
  margin: 10px 0;
  padding: 10px;
  border-radius: 5px;
  background-color: #fff;
`;

export const CategoryContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const NameOperation = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ScrollContainer = styled.ScrollView`

`;
