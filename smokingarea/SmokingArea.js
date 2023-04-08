const alertContent = '흡연구역 신고가 접수되었습니다.';
const React = require('react');
const { useState } = require('react');
const { 
  Image, 
  StyleSheet, 
  View, 
  Text, 
  Button,
  ScrollView,
  Dimensions,
  TouchableOpacity} = require('react-native');
const {width : SCREEN_WIDTH} = Dimensions.get("window");

const sendAlertToServer = () => {
  const data = { reportType: 'smokingArea', locattion: 'B1F'}
  fetch('http://localhost:3000', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({alertContent}),
  })
  .then(response => console.log('신고가 접수되었습니다.'))
  .then(data => console.log(data))
  .catch(error => console.log('신고 접수 중 오류가 발생했습니다.'));
};

alert(alertContent);
sendAlertToServer();

const SmokingArea = () => {
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
              onPress={() => alert(alertContent) }>
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
              source={require('../assets/s06-6F_smokingarea.jpg')}
            resizeMode="contain"/>
            <TouchableOpacity
              onPress={() => alert(alertContent) }>
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

module.exports = SmokingArea;