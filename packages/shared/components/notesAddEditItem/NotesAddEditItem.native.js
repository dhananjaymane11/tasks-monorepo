import { useState } from "react";
import { Button, TextInput } from "react-native-paper";

import { Wrapper, InputRow, ButtonWrapper } from "./NotesAddEditItem.style";

const NotesAddEditItem = ({
  noteToEdit,
  setShowModal,
  addEditNote,
  removeNote,
}) => {
  const [textInput, setTextInput] = useState(
    noteToEdit ? noteToEdit.title : "",
  );
  const [descriptionInput, setDescriptionInput] = useState(
    noteToEdit ? noteToEdit.description : "",
  );
  const [errorText, setErrorText] = useState("");

  const handleAddNote = () => {
    const title = textInput.trim();
    const description = descriptionInput.trim();
    if (!title) {
      setErrorText("Enter valid title");
      return;
    }

    addEditNote({ title, description }, noteToEdit ? noteToEdit._id : null);
    setTextInput("");
    setDescriptionInput("");
  };

  const handleTitleInputChange = (value) => {
    setTextInput(value);
    if (!value) {
      setErrorText("Enter valid title");
    } else {
      setErrorText("");
    }
  };
  const handleDescriptionInputChange = (value) => {
    setDescriptionInput(value);
  };

  return (
    <Wrapper>
      <InputRow>
        <TextInput
          label="Title"
          value={textInput}
          onChange={handleTitleInputChange}
          error={Boolean(errorText)}
        />
      </InputRow>
      <InputRow>
        <TextField
          label="Description"
          value={descriptionInput}
          onChange={handleDescriptionInputChange}
        />
      </InputRow>
      <ButtonWrapper>
        <Button onPress={handleAddNote}>
          {/* <DoneIcon color="success" /> */}success
        </Button>
        {noteToEdit && (
          <Button onPress={() => removeNote(noteToEdit._id)}>
            {/* <DeleteIcon color="error" /> */}error
          </Button>
        )}
        <Button onPress={() => setShowModal(false)}>
          {/* <CloseIcon color="warning" /> */}warning
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default NotesAddEditItem;
