import { View } from "react-native";
import { Text, Button } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

function Profile({ onLogout }) {
  return (
    <SafeAreaView>
      <Text>Profile</Text>
      <Button mode="contained" onPress={onLogout}>
        Logout
      </Button>
    </SafeAreaView>
  );
}

export default Profile;
