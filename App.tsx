

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

const App = () => {
  return (
    <View>
      <Text style={styles.hello}>
        Hello world!
      </Text>
    </View>
);
}

const styles = StyleSheet.create({
  hello : {
    display: "flex" ,
    color: "red",
    marginTop: 100,
    justifyContent: "center",
    textAlign: "center"
  }

})
  

export default App;
