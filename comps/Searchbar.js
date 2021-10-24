import React from 'react'
import { View, TextInput } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

import { Styles } from '../styles/Styles'
import Color from '../config/Color'

const Searchbar = ({
    searchTask,
    setSearchTask
}) => {
    return (
        <View style={Styles.inputWrapper}>
            <AntDesign 
                name="search1" 
                size={20} 
                color={Color.disative} 
                style={{paddingLeft: 5}} 
            />
            <TextInput
                placeholder={'Search'}
                placeholderTextColor={Color.disative}
                selectionColor={Color.active}
                onChangeText={(t) => setSearchTask(t)}
                // onSubmitEditing={() => {
                //     setSearchTask(null)
                // }}
                onFocus={() => setSearchTask(null)}
                value={searchTask}
                style={Styles.searchInput}
            />
      </View>
    )
}

export default Searchbar
