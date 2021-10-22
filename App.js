import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Platform, SafeAreaView, StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import Color from './config/Color';

export default function App() {
  const [searchTask, setSearchTask] = useState()
  const [ task, setTask ] = useState('')

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.title}>
        <Text style={{fontWeight: 'bold', fontSize: 24, paddingVertical: 10, color: Color.secondary,}}>TASK LIST</Text>
        <Button color={Color.active} title={'Add'}/>
      </View>
      <View style={styles.inputWrapper}>
        <AntDesign name="search1" size={18} color={Color.disative} style={{paddingTop: 10, paddingLeft: 10}} />
        <TextInput
          placeholder={'Search'}
          placeholderTextColor={Color.disative}
          onChange={setSearchTask}
          value={searchTask}
          style={styles.searchInput}
        />
      </View>
      <View style={styles.inputWrapper}>
        <TextInput
          placeholder='Enter task'
          placeholderTextColor={Color.disative}
          onChange={setTask}
          value={task}
          style={styles.taskInput}
        />

      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
    padding: 10,
    backgroundColor: Color.pageBG,
    borderRadius: 10,
  },
  searchInput: {
    margin: 10,
    color: Color.secondary,
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
  }
});
