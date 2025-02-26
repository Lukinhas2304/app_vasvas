import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
 
    viewScroll:{
      flex:1,
      backgroundColor:'gray',
    },
   
    viewPrincipal:{
      alignItems:'center',
      justifyContent:'center',
      marginBottom: 20
    },
   
    viewImage:{
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'black',
      padding: 15,
      marginTop: 40,
      borderRadius: 15,
      height: 600
    },
   
    textoPrincipal:{
      fontSize:40,
      fontWeight:'bold',
      color:'white',
      backgroundColor:'black',
      width: 1920,
      textAlign:'center',
      height: 70
    },
   
    imagem:{
      marginTop: 15,
      marginBottom: 20,
      width: 300,
      height: 300,
      borderRadius: 20
    },

    input:{
      borderColor:"gray",
      borderWidth: 2,
      color: 'white',
      borderRadius: 6,
      marginTop: 10,
      padding: 10
    },

    botao:{
      backgroundColor: '#ff4655',
      color: 'white',
      padding: 10,
      borderRadius: 6,
      borderColor: 'black',
      borderWidth: 2,
      width:200,
      textAlign: 'center',
      marginTop: 20
    }
   
  })

  export default styles;