import { Text, View } from "react-native";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

function HomeScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <Text>Login</Text>

      <Button mode="contained" onPress={() => navigation.navigate("Profile")}>
        Press me
      </Button>
    </SafeAreaView>
  );
}

export default HomeScreen;
