import { View } from "react-native";
import { Text, Button } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

import { TopBar } from "../../components";

function Profile({ onLogout }) {
  return (
    <SafeAreaView>
      <TopBar />
      <Text>Profile</Text>
      <Button mode="contained" onPress={onLogout}>
        Logout
      </Button>
    </SafeAreaView>
  );
}

export default Profile;
