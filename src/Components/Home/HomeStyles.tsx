import { StyleSheet } from "react-native";
import { Directions } from "react-native-gesture-handler";

const styles = StyleSheet.create({
    Header: {        
        display:"flex",
        flexDirection: "row"
    },

    location_image_tabs: {
        flex: 1,
        backgroundColor: "#3C57CC",
        display: "flex",
        justifyContent: "center",
        flexDirection: "row"
    },

    location_image: {
        flex: 1,
        backgroundColor: "#3C57CC",
        display: "flex",
        justifyContent: "center",
        flexDirection: "row"
    },

    location_icon: {
        height: 20,
        width: 20,
        marginTop: 10,
        marginBottom: 20,
        marginRight: 5,
    },

    location_text: {
        color: "white",
        margin: 10,
    },

    location_dropdown: {
        height: 20,
        width: 20,
        margin: 10,
    },


});


export default styles;