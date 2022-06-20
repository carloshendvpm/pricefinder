import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "./styles";

export default function CadastroNovoProduto() {
  return (
    <View style={styles.container}>
      <Text>Tela de Cadastro de Novo Produto</Text>
    </View>
  );
}
