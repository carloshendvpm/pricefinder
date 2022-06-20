import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Avatar } from 'react-native-paper'
import HeaderConcorrenteAdmin from '../../shared/components/HeaderConcorrenteAdmin';
import { useFonts, Poppins_700Bold, Poppins_500Medium, Poppins_400Regular } from '@expo-google-fonts/poppins';

import Ionicons from 'react-native-vector-icons/Ionicons'
import CategoryCard from '../../shared/components/CategoryCard';
export default function Categorias() {

  let [fontsLoaded, error] = useFonts({
    Poppins_700Bold,
    Poppins_500Medium,
    Poppins_400Regular,
  });

 return (
   <View>
     <HeaderConcorrenteAdmin
     title="Categorias"
     />
     <CategoryCard
     tipo="Carne"
     bg="red"
     icon="food-drumstick"
     navigation="Produtos"
     />
     <CategoryCard
     tipo="Aves"
     bg="blue"
     navigation="Produtos"
     />
     <CategoryCard
     tipo="Bebidas"
     bg="orange"
     icon="beer"
     navigation="Produtos"
     />
     <CategoryCard
     tipo="Hortifruti"
     bg="green"
     icon="fruit-cherries"
     navigation="Produtos"
     />
   </View>
  );
}
