import { useEffect } from 'react';
import { View, Animated, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CarspotScreen = () => {
    const navigation = useNavigation();
    const slideAnim = new Animated.Value(-100); // Valor inicial para a animação

    useEffect(() => {
        // Inicia a animação ao carregar o componente
        Animated.timing(slideAnim, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true,
        }).start();

        // Redireciona para outra tela após 1.5 segundos
        const timer = setTimeout(() => {
            navigation.navigate('Inicio'); // Altere 'Inicio' para o nome da sua tela de destino
        }, 1500);

        // Limpa o timer ao desmontar o componente
        return () => clearTimeout(timer);
    }, [navigation, slideAnim]); // Adiciona dependências para evitar avisos do React

    return (
        <View style={styles.container}>
            <Animated.Image
                source={{ uri: 'https://i.pinimg.com/564x/c5/4e/6c/c54e6c8246c3e4f4a98f8fc813cfbd21.jpg' }}
                style={[styles.image, { transform: [{ translateY: slideAnim }] }]}
                resizeMode="cover"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    image: {
        width: '80%',
        height: '80%',
    },
});

export default CarspotScreen;
