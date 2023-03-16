import { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
  Image,
} from "react-native";
import { styles } from "./styles";
import Logo from "../../../assets/Logo.png";
import Task from "../../components/task";
import React from "react";

interface IParticipantProps {
  text: string;
  isDone: boolean;
}

export default function Home() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([] as IParticipantProps[]);

  function handleAddTask() {
    if (task === "") {
      Alert.alert("Erro", "Digite uma tarefa");
      return;
    }
    setList([...list, { text: task, isDone: false}]);
    setTask("");
  }

  function handleTaskRemove(index: number) {
    Alert.alert("Remover", "", [
      { text: "Não", style: "cancel" },
      { text: "Sim", onPress: () => remove(index) },
    ]);
  }

  function remove(index: number) {
    const aux = [...list];
    aux.splice(index, 1);
    setList(aux);
  }

  function sumReducer() {
    return list.reduce((acc, cur) => {
      if (cur.isDone) {
        return acc + 1;
      }
      return acc;
    }, 0);
  }

  function updateTask(index: number) {
    const aux = [...list];
    aux[index].isDone = !aux[index].isDone;
    setList(aux);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={Logo} style={styles.image} />
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor={"#808080"}
            onChangeText={setTask}
            value={task}
          ></TextInput>
          <TouchableOpacity onPress={handleAddTask} style={styles.button}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.spaceView}>
          <Text style={styles.create}>Criadas</Text>
          <View style={styles.counter}>
            <Text style={styles.number}>{list.length}</Text>
          </View>
        </View>
        <View style={styles.spaceView}>
          <Text style={styles.finished}>Concluídas</Text>
          <View style={styles.counter}>
            <Text style={styles.number}>{sumReducer()}</Text>
          </View>
        </View>
      </View>
      <View style={styles.hr} />

      <FlatList
        data={list}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <Task
            key={index}
            text={item.text}
            onRemove={() => handleTaskRemove(index)}
            isDone={item.isDone}
            updateTask={() => updateTask(index)}
          />
        )}
      />
    </View>
  );
}
