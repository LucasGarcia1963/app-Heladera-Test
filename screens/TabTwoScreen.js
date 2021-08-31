import * as React from 'react';
import { StyleSheet, View, Image, ScrollView, Dimensions } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text } from '../components/Themed';

const { width } = Dimensions.get("window");
const height = width * 0.6;
const images = [
  "https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=2000&h=1000&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F21%2F2018%2F02%2F14%2Frecetas-4115-spaghetti-boloesa-facil-2000.jpg",
  "https://media-cdn.tripadvisor.com/media/photo-s/1a/6b/34/a6/filet-de-merluza-con.jpg",
  "https://static.vecteezy.com/system/resources/previews/002/098/214/non_2x/burger-and-fries-free-photo.jpg",
  "https://avanti.com.uy/wp-content/uploads/2021/04/Ravioles-de-Verdura-con-Salsa-Rosa-2.jpg"
]

export default class TabTwoScreen extends React.Component {
  render() {

    return (
      <View style={{ marginTop: 50 }, width, height}>
        <Text style={styles.title}>comida</Text>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          pagingEnabled horizontal style={{ width, height }}>
          {
            images.map((image, index) => (

              <Image
                key={index}
                source={{ uri: image }}
                style={styles.image} />
            ))
          }
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width,
    height,
    resizeMode: 'cover',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
