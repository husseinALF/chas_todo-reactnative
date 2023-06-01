import { useEffect, useState, useContext } from "react";
import {
  View,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { TodosContext } from "../TodosContext";

const Home = ({ navigation }) => {
  const { todos, setTodos } = useContext(TodosContext);
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => navigation.navigate("Add")} title="Add" />
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.todoItem, item.done && styles.doneTodoItem]}
            onPress={() =>
              navigation.navigate("Details", {
                title: item.title,
                desc: item.description,
                id: item.id,
                done: item.done,
              })
            }
          >
            <View style={styles.todoContent}>
              <Text
                style={[styles.todoTitle, item.done && styles.doneTodoTitle]}
              >
                {item.title}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  todoItem: {
    backgroundColor: "#f2f2f2",
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
  doneTodoItem: {
    backgroundColor: "#c3f3c7",
    borderWidth: 2,
    borderColor: "green",
  },
  todoContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  todoTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  doneTodoTitle: {
    textDecorationLine: "line-through",
  },
});

export default Home;
