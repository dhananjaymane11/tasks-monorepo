import { useState } from "react";
import { Button, TextInput } from "react-native-paper";

import { tasksSelectOptions } from "../../constants";
import { Wrapper, InputRow, ButtonWrapper } from "./TasksAddEditItem.style";

const TasksAddEditItem = ({
  addEditTask,
  taskToEdit,
  removeTask,
  setShowModal,
}) => {
  const [input, setInput] = useState(taskToEdit ? taskToEdit.title : "");
  const [selectedPriority, setSelectedPriority] = useState(
    taskToEdit ? taskToEdit.priority : 1,
  );
  const [errorText, setErrorText] = useState("");

  const handleInputChange = (e) => {
    const value = e?.target?.value;
    setInput(value);
    if (!value) {
      setErrorText("Enter valid task");
    } else {
      setErrorText("");
    }
  };

  const handleAddTask = () => {
    const title = input.trim();
    if (!title) {
      setErrorText("Enter valid task");
      return;
    }

    addEditTask(
      { title, priority: +selectedPriority },
      taskToEdit ? taskToEdit._id : null,
    );
    setErrorText("");
    setInput("");
  };

  return (
    <Wrapper>
      <InputRow>
        <TextInput
          label="What would you like to do?"
          value={input}
          onChangeText={(text) => handleInputChange(text)}
          error={Boolean(errorText)}
        />
      </InputRow>
      <ButtonWrapper>
        <Button onPress={handleAddTask}>
          {/* <DoneIcon color="success" /> */}
          success
        </Button>
        {taskToEdit && (
          <Button onPress={() => removeTask(taskToEdit._id)}>
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

export default TasksAddEditItem;
