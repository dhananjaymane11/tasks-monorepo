import { Text } from "react-native-paper";
import { textColors, taskColors } from "../../constants";
import { ItemContainer, TaskEditButton } from "./TasksItem.style";

const TasksItem = ({ taskValue, item, toggleTask, handleShowModal }) => {
  return (
    <ItemContainer>
      <TaskEditButton onPress={() => handleShowModal(item._id)}>
        <Text>{item.title}</Text>
      </TaskEditButton>
    </ItemContainer>
  );
};

export default TasksItem;
