import { useNavigation } from "@react-navigation/native";

const useCustomNavigation = () => {
  const navigation = useNavigation();
  const { navigate } = navigation;

  return { navigate };
};

export default useCustomNavigation;
