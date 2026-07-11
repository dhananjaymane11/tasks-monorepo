import { Text, Button, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

function HomeScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <Text>Profile</Text>
      <Button title="Go to login" onPress={() => navigation.navigate("Home")} />
    </SafeAreaView>
  );
}

export default HomeScreen;
