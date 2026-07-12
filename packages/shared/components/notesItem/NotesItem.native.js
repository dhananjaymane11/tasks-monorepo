import { Text } from "react-native-paper";

import {
  NotesBox,
  NoteText,
  NoteDescription,
  NoteEditLink,
} from "./NotesItem.style";

const NotesItem = ({ item, handleShowModal }) => {
  return (
    <NotesBox>
      <NoteText>
        <NoteEditLink onClick={() => handleShowModal(item._id)}>
          <Text>{item.title}</Text>
        </NoteEditLink>
      </NoteText>
      <NoteDescription>
        <NoteEditLink onClick={() => handleShowModal(item._id)}>
          <Text>{item.description}</Text>
        </NoteEditLink>
      </NoteDescription>
    </NotesBox>
  );
};

export default NotesItem;
