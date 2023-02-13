import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Inicio from "./componentes/Inicio";

const Menu = createBottomTabNavigator().Navigator;
const Itens = createBottomTabNavigator().Screen;


export default function App() {
  return (
    <NavigationContainer>
        <Menu>
          <Itens name="Inicio" componentes={Inicio} />
        </Menu>
    </NavigationContainer>
  );
}


