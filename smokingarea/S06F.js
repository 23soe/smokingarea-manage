import React , {useState} from 'react';
import { 
  Image, 
  StyleSheet, 
  View, 
  Text, 
  Modal,
  ScrollView,
  Dimensions,
  TouchableOpacity} from 'react-native';
import {ref, update, on, onValue} from 'firebase/database';
import {db} from './firebaseConfig';

const {width : SCREEN_WIDTH} = Dimensions.get("window");

const App = () => {

    let num_B1F=0;
    let num_6F=0;
    onValue(ref(db,'S06/'),(snapshot)=>{
      const data = snapshot.val();
      num_B1F = data.지하1층;
      num_6F = data.지상6층;
    })
   
    const handleButtonClick_B1F = () => {
      num_B1F++;
      update(ref(db,'S06/'),{
        지하1층 :num_B1F
      })
      .then(()=>console.log('S06-B1F 흡연신고 접수되었습니다.'))
      .catch(error => console.log(error));
      alert("S06-B1F 흡연신고 접수완료")
    }

   

    const handleButtonClick_6F = () => {
      num_6F++;
      update(ref(db,'S06/'),{
        지상6층:num_6F
      })
      .then(()=>console.log('S06-6F 흡연신고 접수되었습니다.'))
      .catch(error => console.log(error));
      alert("S06-6F 흡연신고 접수완료")
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
            left:115,
            bottom:300,
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
              source={require('../assets/S06-4F.jpg')}
              resizeMode="contain"/>
          <TouchableOpacity
              >
              <Image
                style={{
                  right:160,
                  bottom:280,
                  width: 65,
                  height: 65,
                  borderRadius: 100,
                  overflow: 'hidden',
                }}
                source={require('../assets/Smoking.jpg')}
              />
      </TouchableOpacity>
      </View>


        <View style={styles.container}>
          <Text style={styles.paragraph}>6F</Text>
          <Image
              style={styles.image}
              source={require('../assets/S06-6F_smokingarea.jpg')}
            resizeMode="contain"/>
            <TouchableOpacity
              >
              <Image
                style={{
                  left:15,
                  bottom:340,
                  width: 65,
                  height: 65,
                  borderRadius: 100,
                  overflow: 'hidden',
                }}
                source={require('../assets/Smoking.jpg')}
              />
      </TouchableOpacity>
    
            <TouchableOpacity
              onPress={handleButtonClick_6F}>
              <Image
                style={{
                  left:155,
                  bottom:320,
                  width: 50,
                  height: 50,
                  borderRadius: 100,
                  overflow: 'hidden',
                }}
                source={require('../assets/No_Smoking.png')}
              />
      </TouchableOpacity>
     
      </View>
    </ScrollView>
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
    paddingTop:30,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;