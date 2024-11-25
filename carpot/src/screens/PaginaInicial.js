import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PaginaInicial = () => {
  const navigation = useNavigation();

  const goToNextPage = () => {
    navigation.navigate('Entrar'); // Certifique-se de que a tela 'Entrar' esteja definida nas rotas do seu app
  };

  return (
    <View style={styles.container}>
      {/* Imagem de Fundo */}
      <Image
        source={{ uri: 'https://p1.pxfuel.com/preview/830/773/197/woman-interior-man-car-inside-travel.jpg' }}
        style={styles.backgroundImage}
      />
      {/* Sobreposição de Gradiente */}
      <View style={styles.gradientOverlay} />

      {/* Conteúdo da Página */}
      <View style={styles.contentContainer}>
        <Text style={styles.mainText}>
          Encontre sua{'\n'}
          vaga ideal.{'\n'}
          Onde quer que{'\n'}
          esteja
        </Text>

        {/* Botão Próximo */}
        <TouchableOpacity style={styles.button} onPress={goToNextPage}>
          <Text style={styles.buttonText}>Próximo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    zIndex: -2,
  },
  gradientOverlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: -1,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingHorizontal: 24,
    paddingTop: 48,
  },
  mainText: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: '500',
    lineHeight: 28,
    fontFamily: 'Poppins',
    textAlign: 'left',
    marginBottom: 24,
  },
  button: {
    position: 'absolute',
    bottom: 48,
    right: 24,
    backgroundColor: '#ffffff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  buttonText: {
    color: '#000',
    fontSize: 15,
    fontWeight: '500',
  },
});

export default PaginaInicial;
