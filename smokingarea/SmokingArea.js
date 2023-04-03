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
              onPress={() => alert('지하1층 흡연신고가 접수되었습니다.') }>
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
              onPress={() => alert('6층 흡연신고가 접수되었습니다.') }>
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
