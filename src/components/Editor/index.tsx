import { Image, Text, TouchableOpacity, View } from 'react-native';

interface EditorProps {
  image: string;
  setImage: any;
}

export const Editor = ({ image, setImage }: EditorProps) => {
  const handleRotateImage = async () => {};

  const handleFlipImage = async () => {};

  return (
    <View
      style={{
        alignItems: 'center',
        marginTop: 20,
      }}
    >
      <Image
        source={{
          uri: image,
        }}
        style={{
          width: 250,
          height: 250,
        }}
      />
      <TouchableOpacity
        style={{
          marginTop: 20,
          borderWidth: 1,
          borderColor: '#999',
          width: 150,
          height: 40,
          borderRadius: 10,
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        activeOpacity={0.8}
        onPress={handleRotateImage}
      >
        <Text
          style={{
            color: 'white',
          }}
        >
          Rotacionar
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          marginTop: 20,
          borderWidth: 1,
          borderColor: '#999',
          width: 150,
          height: 40,
          borderRadius: 10,
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        activeOpacity={0.8}
        onPress={handleFlipImage}
      >
        <Text
          style={{
            color: 'white',
          }}
        >
          Girar
        </Text>
      </TouchableOpacity>
    </View>
  );
};
