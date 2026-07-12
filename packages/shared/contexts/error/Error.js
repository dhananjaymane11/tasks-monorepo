import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { Modal } from "../../components";

const Error = ({ showModal, removeTokenFromContext, setShowModal }) => (
  <Modal showModal={showModal} title={"Error"}>
    <div>
      <Typography variant="p">
        Something went wrong. Please try again after some time.
      </Typography>
    </div>
    <Button
      variant="contained"
      sx={{ mt: "20px", width: 120 }}
      onClick={() => {
        removeTokenFromContext();
        setShowModal(false);
      }}
    >
      Exit
    </Button>
  </Modal>
);

export default Error;
