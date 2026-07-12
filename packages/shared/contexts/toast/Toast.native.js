import { Text, Snackbar } from "react-native-paper";

const Toast = ({ toastMessage, handleClose }) => (
  <Snackbar visible={!!toastMessage} onDismiss={handleClose}>
    <Text>{toastMessage}</Text>
  </Snackbar>
);

export default Toast;
