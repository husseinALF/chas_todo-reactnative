import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import Details from "./screens/Details";
import Add from "./screens/Add";
import { TodosProvider, TodosContext } from "./TodosContext";
import { useState, useContext } from "react";

const Stack = createNativeStackNavigator();

export default function App({ navigation }) {
  // const { handleAddTodo } = useContext(TodosContext);
  return (
    <TodosProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Todos">
          <Stack.Group>
            <Stack.Screen
              name="Todos"
              component={Home}
              options={({ navigation, route }) => ({
                headerRight: () => (
                  <Button
                    title="Add"
                    onPress={() => navigation.navigate("Add")}
                  />
                ),
              })}
            />

            <Stack.Screen name="Details" component={Details} />
          </Stack.Group>
          <Stack.Group screenOptions={{ presentation: "modal" }}>
            <Stack.Screen
              name="Add"
              component={Add}
              options={({ navigation }) => ({
                headerRight: () => <Button title="Done" />,
              })}
            />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </TodosProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
