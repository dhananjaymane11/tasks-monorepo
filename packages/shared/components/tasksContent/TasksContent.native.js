import { useMemo } from "react";
import { Text } from "react-native-paper";

import TasksItem from "../tasksItem/TasksItem";
import { tasksSelectOptions, textColors } from "../../constants";
import { BoxWrapper, TasksBox } from "./TasksContent.style";

const TasksContent = ({ tasks, toggleTask, handleShowModal }) => {
  const groupedTasksMap = useMemo(() => {
    const map = {};
    for (const item of tasks) {
      if (!map[item.priority]) {
        map[item.priority] = [];
      }
      map[item.priority].push(item);
    }
    return map;
  }, [tasks]);

  return (
    <BoxWrapper>
      {tasksSelectOptions.map((option) => {
        const optionTasks = groupedTasksMap[option.value] || [];

        return (
          <TasksBox key={option.value}>
            <Text>{option.label}</Text>

            {optionTasks.length === 0 && <Text>No tasks</Text>}

            {optionTasks.map((item) => (
              <TasksItem
                key={item._id}
                taskValue={option.value}
                item={item}
                toggleTask={toggleTask}
                handleShowModal={handleShowModal}
              />
            ))}
          </TasksBox>
        );
      })}
    </BoxWrapper>
  );
};

export default TasksContent;
