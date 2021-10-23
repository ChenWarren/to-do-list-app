import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView, Text, View, Button } from 'react-native';


import Searchbar from './comps/Searchbar';
import Addtask from './comps/Addtask';
import Color from './config/Color';
import { Styles } from './styles/Styles';

export default function App() {
  const [searchTask, setSearchTask] = useState()
  const [ task, setTask ] = useState('')

  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.title}>
        <Text style={Styles.titleText}>TASK LIST</Text>
        <Button color={Color.active} title={'Add'}/>
      </View>
      <Searchbar 
        searchTask={searchTask} 
        setSearchTask={setSearchTask}
      />
      <View style={Styles.list}>
      </View>  
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

