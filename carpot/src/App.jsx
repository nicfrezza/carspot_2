// App.js
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CarspotScreen from './CarspotScreen'; // importe a tela criada
import InicioScreen from './InicioScreen'; // substitua com a tela de destino

const Stack = createNativeStackNavigator(); // cria uma pilha de telas

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Carspot">
                <Stack.Screen 
                    name="Carspot" 
                    component={CarspotScreen} 
                    options={{ headerShown: false }} // Esconde o header da tela inicial
                />
                <Stack.Screen 
                    name="Inicio" 
                    component={InicioScreen} 
                    options={{ title: 'Página Inicial' }} // Nome da tela de destino
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
