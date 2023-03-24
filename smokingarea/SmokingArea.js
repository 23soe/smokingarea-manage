import React , {useState} from 'react';
import { 
  Image, 
  StyleSheet, 
  View, 
  Text, 
  Button,
  ScrollView,
  Dimensions} from 'react-native';

const {width : SCREEN_WIDTH} = Dimensions.get("window");

const App = () => {
    const [showImage, setShowImage] = useState(false);

  return (
      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        >
        <View style={styles.container}>
        <Text style={styles.paragraph}>B1F</Text>
        </View>
        <View style={styles.container}>
        <Text style={styles.paragraph}>4F</Text>
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
        <View style={styles.container}>
        <Text style={styles.paragraph}>6F</Text>
        <Image
            style={styles.image}
            source={require('../assets/s06-6F_smokingarea.jpg')}
            resizeMode="contain"/>
        <Button
            title={showImage ? 'Hide Image' : 'Show Image'}
            onPress={() => setShowImage(!showImage)}
        /> 
        {showImage && (
        <Image
          source={require('../assets/s06-6f_photo.jpg')}
          style={styles.image}
          resizeMode="contain"
        />
      )}
      </View>
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width:SCREEN_WIDTH,
  },
  paragraph: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;
