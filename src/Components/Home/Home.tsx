import React from "react";
import {
  View,
  Text,
  Image,
  StatusBar,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
  Button
} from "react-native";
import styles from "./HomeStyles"


export const Home: React.FC = () => {
    return (
        <View>
            <View style = {styles.Header}>
                <StatusBar backgroundColor="#3959CB"/>
                <View style = {styles.location_image_tabs}>
                    <View style = {styles.location_image}>
                        <Image
                        style={styles.location_icon}
                        source={require("../../Assets/location_icon.png")}/>
                        <Text style={styles.location_text}>HSR Layout, Bangalore</Text>
                        <Image
                        style={styles.location_dropdown}
                        source={require("../../Assets/location_dropdown.png")}/>
                    </View>
                    <View style = {styles.tabs}>
                        <Image
                        style={styles.location_icon}
                        source={require("../../Assets/side_menu.png")}/>
                        <Image
                        style={styles.location_icon}
                        source={require("../../Assets/home.png")}/>
                        <Image
                        style={styles.location_icon}
                        source={require("../../Assets/search.png")}/>
                        <Image
                        style={styles.location_icon}
                        source={require("../../Assets/notification.png")}/>
                        <Image
                        style={styles.location_icon}
                        source={require("../../Assets/inapp_chat.png")}/>
                    </View> 
                </View>
            </View>


        </View>
    );
}