import { useState } from "react";

import { ToastContext } from "./ToastContext";
import Toast from "./Toast";

export function ToastProvider({ children }) {
  const [toastMessage, setToastMessage] = useState("");

  const handleClose = () => {
    setToastMessage("");
  };

  return (
    <ToastContext value={{ setToastMessage }}>
      {children}

      <Toast toastMessage={toastMessage} handleClose={handleClose} />
    </ToastContext>
  );
}
