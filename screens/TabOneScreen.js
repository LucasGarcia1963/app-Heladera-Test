import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { SearchBar } from 'react-native-elements';

export default class TabOneScreen extends React.Component {
  state = {    search: '',  }

  updateSearch = (search) => {
        this.setState({ search });  
      };

  render() {    
    const { search } = this.state;
      
    return (
      <View style={styles.container}>
        <Text style={styles.title}>¿Qué hay en tu heladera?</Text>
        
        <SearchBar 
          inputStyle={styles.search}
          inputContainerStyle={styles.search}
          lightTheme={true}
          platform= "android"
          placeholder="Escribe los ingredientes aquí"        
          onChangeText={this.updateSearch}        
          value={search}      
        />    

        <View style={styles.separator} lightColor="#eee" darkColor="#eee" />
      </View>

      
    );
  }
}



const styles = StyleSheet.create({
  search: {
    backgroundColor: "#eee",
    
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50,
    
  },
  title: {
    fontSize: 23,
    // fontWeight: 'lightbold',
    marginBottom: 20,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
