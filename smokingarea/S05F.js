import React , {useState} from 'react';
import { 
  Image, 
  StyleSheet, 
  View, 
  Text, 
  Button,
  ScrollView,
  Dimensions,
  TouchableOpacity} from 'react-native';

  const {width : SCREEN_WIDTH} = Dimensions.get("window");
const App = () => {
    const [showImage, setShowImage] = useState(false);


  return (

<View style={styles.container}>
          <Text style={styles.paragraph}>{"\n"}4F</Text>
          <Image
              style={styles.image}
              source={require('../assets/S06-4F_smokingarea.jpg')}
              resizeMode="contain"/>
          <Button
              title={showImage ? 'Hide Image' : 'Show Image'}
              onPress={() => setShowImage(!showImage)}
          /> 
          {showImage && (
          <Image
            source={require('../assets/S06-4F_photo.jpg')}
            style={styles.image}
            resizeMode="contain" 
          />
        )}
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'white',
  },
  image: {
    flex:1,
    width:SCREEN_WIDTH,
    alignItems: 'center',
    justifyContent: 'center',
  },
  paragraph: {
    paddingTop:20,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default App;