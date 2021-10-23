import { StyleSheet, Platform } from "react-native";
import Color from "../config/Color";

export const Styles = StyleSheet.create({
    btnWrapper: {
      height: 40,
      backgroundColor: Color.active,
      borderRadius: 5,
      margin: 10
    },
    container: {
      flex: 1,
      backgroundColor: Color.primary,
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      alignItems: 'center'
    },
    inputWrapper: {
      width: '95%',
      flexDirection: 'row',
      margin: 10,
      padding: 5,
      backgroundColor: Color.pageBG,
      borderRadius: 10,
    },
    list: {
      width: '95%',
      margin: 10,
      padding: 10,
    //   backgroundColor: Color.pageBG,
    //   borderRadius: 10,
    },
    searchInput: {
      margin: 5,
      color: Color.secondary,
      fontSize: 18,
    },
    taskInput: {
      width: '95%',
      height: 40,
      margin: 10,
      color: Color.secondary,
      borderBottomWidth: 1,
      borderColor: Color.disative,
    },
    title:{
      height: 45,
      width: '100%',
      flexDirection: 'row',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      paddingHorizontal: 15,
    },
    titleText:{
      fontWeight: 'bold', 
      fontSize: 24, 
      paddingVertical: 10, 
      color: Color.secondary,
    }
  });
  