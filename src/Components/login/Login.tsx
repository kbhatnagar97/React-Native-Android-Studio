import React from "react";
import {useNavigation} from '@react-navigation/native'
import {
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
  Button
} from "react-native";
import styles from "./LoginStyles";
import Axios from "axios";

export const Login: React.FC = () => {
  const navigation = useNavigation()
  const [Username, setUsername] = React.useState("");
  const [Password, setPassword] = React.useState("");

  const Button_pressed = () => {
    Axios.post(
      "http://tradenapp-env.us-east-1.elasticbeanstalk.com//api/v1/api-token-auth/",
      {
        username: Username,
        password: Password
      }
    )
      .then(function(response) {
        ToastAndroid.show("Login Successful", ToastAndroid.SHORT);
        console.log("Pass");
        navigation.navigate("Home")
      })
      .catch(function(error) {
        ToastAndroid.show("Login credentials Incorrect", ToastAndroid.SHORT);
        console.log("Fail");
      });
  };

  return (
    <View style={styles.Main_block}>
      <StatusBar backgroundColor="white"/>
      <View style={styles.body}>
        <View style={styles.Heading_block}>
          <Text style={styles.Heading_login}>Login</Text>
        </View>
        <View style={styles.View_Block}>
          <View>
            <Text style={styles.Field_Info}>EMAIL ADDRESS / PHONE NUMBER</Text>
          </View>
          <View>
            <TextInput
              style={styles.Input_Info}
              placeholder="eg: sulthan@tradenapp.com or +91 7550169360"
              onChangeText={text => setUsername(text)}
            />
          </View>
          <View>
            <Text style={styles.Field_Password}>PASSWORD</Text>
          </View>
          <View>
            <TextInput
              style={styles.Input_Password}
              placeholder="Password"
              secureTextEntry = {true}
              onChangeText={text => setPassword(text)}
            />
          </View>
          <View>
            <Button
              onPress={() => Button_pressed()}
              title="Login"
              color="#3959CB"
            />
          </View>
        </View>
      </View>
    </View>
  );
};
