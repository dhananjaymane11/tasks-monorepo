import { useState } from "react";

import { useAuth } from "../auth";
import { ErrorContext } from "./ErrorContext";
import Error from "./Error";

export function ErrorProvider({ children }) {
  const [showModal, setShowModal] = useState(false);
  const { removeTokenFromContext } = useAuth();

  const showErrorPopup = (val) => setShowModal(val);

  return (
    <ErrorContext value={{ showErrorPopup }}>
      {children}

      <Error
        showModal={showModal}
        removeTokenFromContext={removeTokenFromContext}
        setShowModal={setShowModal}
      />
    </ErrorContext>
  );
}
