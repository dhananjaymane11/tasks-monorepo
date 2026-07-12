import { View } from "react-native";
import { Text, Button } from "react-native-paper";
import { Modal } from "../../components";

const Error = ({ showModal, removeTokenFromContext, setShowModal }) => (
  <Modal showModal={showModal} title={"Error"}>
    <View>
      <Text>Something went wrong. Please try again after some time.</Text>
    </View>
    <Button
      mode="contained"
      onPress={() => {
        removeTokenFromContext();
        setShowModal(false);
      }}
    >
      Exit
    </Button>
  </Modal>
);

export default Error;
