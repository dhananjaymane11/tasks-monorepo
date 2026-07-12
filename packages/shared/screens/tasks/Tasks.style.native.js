import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
  flex: 1;
  width: 100%;
`;

export const Header = styled.View`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;
