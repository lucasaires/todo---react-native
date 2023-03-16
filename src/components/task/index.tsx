import React from "react";
import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { CheckBox } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { styles } from "./styles";

interface ITaskProps {
  key: number;
  text: string;
  isDone: boolean;
  onRemove: (isSelected: boolean) => void;
  updateTask: (index: number) => void;
}

export default function Task({
  key,
  text,
  onRemove,
  isDone,
  updateTask,
}: ITaskProps) {
  const [isSelected, setSelection] = useState(false);

  function handleTaskDone() {
    setSelection(!isSelected);
    updateTask(key);
  }

  return (
    <View style={styles.container}>
      <CheckBox checked={isDone} onPress={handleTaskDone} />
      <Text style={!isDone ? styles.content : styles.contentDone}>{text}</Text>

      <TouchableOpacity
        style={styles.trash}
        onPress={() => {
          onRemove(isSelected);
        }}
      >
        <Icon name="trash" size={22} color="#808080" />
      </TouchableOpacity>
    </View>
  );
}
