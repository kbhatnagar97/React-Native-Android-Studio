import { StyleSheet } from "react-native";
import { Directions } from "react-native-gesture-handler";
import { Profiler } from "react";

const styles = StyleSheet.create({
    Header: {     
        display:"flex",
        flexDirection: "row"
    },

    location_image_tabs: {
        height: 80,
        flex:1,
        backgroundColor: "#3C57CC",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
    },

    location_image: {
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

    tabs: {
        backgroundColor: "#3C57CC",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around"
    }

});


export default styles;