import {
  createNativeStackNavigator,
  createBottomTab,
} from "@react-navigation/native-stack";
import Ionicons from "react-native-vector-icons/Ionicons";

// import Cadastro from "../pages/Cadastro";
import BemVindo from "../pages/BemVindo";
import Login from "../pages/Login";
// import CadastroNovoConcorrente from "../pages/CadastroNovoConcorrente";
import Home from "../pages/Home";
import Categorias from "../pages/Categorias";
import Produtos from "../pages/Produtos";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ConcorrentesAdminView from "../pages/ConcorrentesAdminView";
import AddNewConcorrente from "../pages/AddNewConcorrente";
import AddNewProduto from "../pages/AddNewProduto";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
export function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#d2d2d2",
        },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Perfil"
        component={CadastroNovoConcorrente}
        options={{ 
          headerShown: false,
          tabBarIcon:({ color, size }) => (
            <Ionicons name="person-circle-outline" size={size} color={color}/>
          ) 
        }}
      />
    </Tab.Navigator>
  );
}

export default function MainRoutes() {
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="BemVindo"
                component = {BemVindo}
                options= {{headerShown : false}}
            />
              {/* <Stack.Screen
                name="Cadastro"
                component = {Cadastro}
                options= {{headerShown : false}}
            /> */}
            <Stack.Screen
                name="Login"
                component = {Login}
                options= {{headerShown : false}}
            />
             <Stack.Screen
                name="TabRoutes"
                component = {TabRoutes}
                options= {{headerShown : false}}
            />
            <Stack.Screen
                name="Categorias"
                component = {Categorias}
                options= {{headerShown : false}}
            />
            <Stack.Screen
                name="Produtos"
                component = {Produtos}
                options= {{headerShown : false}}
            />
            <Stack.Screen
                name="Home"
                component = {Home}
                options= {{headerShown : false}}
            />
            <Stack.Screen
                name="ConcorrentesAdminView"
                component={ConcorrentesAdminView}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="AddNewConcorrente"
                component={AddNewConcorrente}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="AddNewProduto"
                component={AddNewProduto}
                options={{ headerShown: false }}
            />
            
        </Stack.Navigator>
    )
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BemVindo"
        component={BemVindo}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Cadastro"
        component={Cadastro}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TabRoutes"
        component={TabRoutes}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Categorias"
        component={Categorias}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Produtos"
        component={Produtos}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
  
    </Stack.Navigator>
  );
}

