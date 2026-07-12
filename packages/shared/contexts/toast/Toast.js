import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Slide from "@mui/material/Slide";

const SlideTransition = (props) => {
  return <Slide {...props} direction="up" />;
};

const Toast = ({ toastMessage, handleClose }) => (
  <Snackbar
    anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
    autoHideDuration={5000}
    open={!!toastMessage}
    onClose={handleClose}
    slots={{ transition: SlideTransition }}
  >
    <Alert
      severity="success"
      variant="filled"
      sx={{ width: "100%", color: "white" }}
    >
      {toastMessage}
    </Alert>
  </Snackbar>
);

export default Toast;
