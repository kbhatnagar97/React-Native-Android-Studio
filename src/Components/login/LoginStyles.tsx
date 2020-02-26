import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    body: {
      marginLeft: 30,
      marginRight: 30
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
      marginTop: 250
    },
  
    Input_Info: {
      borderBottomColor: "lightgrey",
      borderBottomWidth: 2
    },
  
    Field_Password: {
      color: "lightgrey",
      marginTop: 20
    },
  
    Input_Password: {
      borderBottomColor: "lightgrey",
      borderBottomWidth: 2
    },
  
    Button: {
      marginTop: 20,
      marginLeft: 10,
      marginRight: 10,
      height: 55,
      color: "white"
    },

    SubmitButtonStyle: {
 
        marginTop:20,
        paddingTop:15,
        paddingBottom:15,
        marginLeft:20,
        marginRight:20,
        backgroundColor:'#3959CB',
        borderRadius:20,
        borderWidth: 1,
        borderColor: '#fff',
        color: "white"
    },

    Button_Text:{
        color:'#fff',
        textAlign:'center',
    }
  
  });

  export default styles;