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
const url_B1F = 'http://172.20.10.2:8081/B1F';
const url_6F = 'http://172.20.10.2:8081/6F';

const App = () => {
    const [showImage, setShowImage] = useState(false);

    const handleButtonClick_B1F = async () => {
      const response = await fetch(url_B1F, {
        method: 'POST'
      });
      const data = await response.text();
      alert(data);
      console.log(data);
    }

    const handleButtonClick_6F = async () => {
      const response = await fetch(url_6F, {
        method: 'POST'
      });
      const data = await response.text();
      alert(data);
      console.log(data);
    }

  return (
      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        >
        <View style={styles.container}>
          <Text style={styles.paragraph}>B1F</Text>
          <Image
              style={styles.image}
              source={require('../assets/S06-4F.jpg')}
              resizeMode="contain"/>
          <TouchableOpacity
              onPress={handleButtonClick_B1F}>
              <Image
                style={{
                  left:125,
                  bottom:200,
                  width: 50,
                  height: 50,
                  borderRadius: 100,
                  overflow: 'hidden',
                }}
                source={require('../assets/No_Smoking.png')}
              />
      </TouchableOpacity>
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
              source={require('../assets/S06-6F_smokingarea.jpg')}
            resizeMode="contain"/>
            <TouchableOpacity
              onPress={handleButtonClick_6F}>
              <Image
                style={{
                  left:155,
                  bottom:272,
                  width: 30,
                  height: 30,
                  borderRadius: 100,
                  overflow: 'hidden',
                }}
                source={require('../assets/No_Smoking.png')}
              />
      </TouchableOpacity>
        <Button
            title={showImage ? 'Hide Image' : 'Show Image'}
            onPress={() => setShowImage(!showImage)}
        /> 
        {showImage && (
        <Image
          source={require('../assets/S06-6F_photo.jpg')}
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