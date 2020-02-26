import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    body: {
      marginLeft: 30,
      marginRight: 30,
      display: "flex",
      justifyContent:"space-around"
    },

    View_Block: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
    },
  
    Heading_login: {
      fontSize: 40,
      textAlign: "center",
      color: "#3959CB",
      fontWeight: "bold",
      marginTop: 30
    },
  
    Field_Info: {
      color: "lightgrey",
      marginTop: 100
    },
  
    Input_Info: {
      borderBottomColor: "lightgrey",
      borderBottomWidth: 2
    },
  
    Field_Password: {
      color: "lightgrey",
      marginTop: 20,
    },
  
    Input_Password: {
      borderBottomColor: "lightgrey",
      borderBottomWidth: 2,
      marginBottom: 30

    },
  
  });

  export default styles;