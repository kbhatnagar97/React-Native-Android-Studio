import React from "react";
import { View, Text, StatusBar, TextInput, TouchableOpacity } from "react-native";
import styles from "./LoginStyles";

export const Login: React.FC = () => {
  const [Email, setEmail] = React.useState("");
  const [Password, setPassword] = React.useState("");

  return (
    <View style={styles.body}>
      <StatusBar backgroundColor="white" />
      <View>
        <Text style={styles.Heading_login}>Login</Text>
      </View>
      <View>
        <View>
          <Text style={styles.Field_Info}>EMAIL ADDRESS / PHONE NUMBER</Text>
        </View>
        <View>
          <TextInput
            style={styles.Input_Info}
            placeholder="eg: sulthan@tradenapp.com or +91 7550169360"
          />
        </View>
        <View>
          <Text style={styles.Field_Password}>PASSWORD</Text>
        </View>
        <View>
          <TextInput style={styles.Input_Password} placeholder="Password" />
        </View>
      </View>
      <View>
        <TouchableOpacity
            style={styles.SubmitButtonStyle}>

            <Text style={styles.Button_Text}> Login </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
