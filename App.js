import {StyleSheet, Text, TextInput, Image, View, ScrollView, TouchableOpacity} from 'react-native'

import styles from './estilos/styles'
 
export default function App(){
  return(
 
    <ScrollView showsVerticalScrollIndicator = {false} style = {styles.viewScroll}>
 
      <View style = {styles.viewPrincipal}>
 
        <Text style = {styles.textoPrincipal}> Login </Text>
 
        <View style = {styles.viewImage}>
 
          <Image style = {styles.imagem} 

            source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxhjYniqXU_9z5dMfSIK0eh-yn8A-qeE9Nmw&s'}}>

          </Image>

          <TextInput placeholder='Username' style = {styles.input}></TextInput>
          <TextInput placeholder='Password' style = {styles.input}></TextInput>

          <TouchableOpacity style = {styles.botao}>Login</TouchableOpacity>
 
        </View>
 
       
 
      </View>
 
    </ScrollView>
 
  )
}