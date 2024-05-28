import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import { Editor } from './src/components/Editor';

export default function App() {
  const [image, setImage] = useState<string | null>(null);

  const handleChooseImage = async () => {};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Manipulando Imagens</Text>
      {image && <Editor image={image} setImage={setImage} />}
      <View
        style={{
          marginVertical: 20,
        }}
      />
      <Button
        title='Escolha uma imagem'
        color={'#000'}
        onPress={handleChooseImage}
      />
      <StatusBar style='light' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    alignItems: 'center',
    paddingTop: 60,
  },
  title: {
    color: '#fff',
    fontSize: 18,
  },
});
