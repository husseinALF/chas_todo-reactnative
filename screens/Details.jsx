import { useContext, useEffect, useState } from "react";
import { TodosContext } from "../TodosContext";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const Details = ({ navigation, route }) => {
  const { title, desc, id, done } = route.params;
  const { deleteTodo, updateDone } = useContext(TodosContext);

  useEffect(() => {
    navigation.setOptions({
      title: title,
      desc: desc,
      id: id,
      done: done,
      deleteTodo: deleteTodo,
    });
  }, [route]);

  const handleDone = () => {
    updateDone(id, true);
  };

  const handleDelete = () => {
    deleteTodo(id);
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.desc}>{desc}</Text>
      </View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity
          style={styles.leftButton}
          onPress={() => {
            handleDone();
            navigation.navigate("Todos");
          }}
        >
          <FontAwesome5 name={"check"} size={30} color={"green"} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.rightButton}
          onPress={() => {
            handleDelete();
            navigation.navigate("Todos");
          }}
        >
          <FontAwesome5 name={"trash-alt"} size={30} color={"red"} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomContainer: {
    position: "absolute",
    flexDirection: "row",
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#f2f2f2",
  },
  leftButton: {
    marginRight: "auto",
  },
  rightButton: {
    marginLeft: "auto",
  },
  title: {
    fontSize: 30,
    marginVertical: 50,
    fontWeight: "bold",
  },
  desc: {
    paddingHorizontal: 20,
  },
});

export default Details;
