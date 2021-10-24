import React from 'react'
import { TextInput, View } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';

import { Styles } from '../styles/Styles'
import Color from '../config/Color'

const Addtask = ({
    text,
    setText,
    add = ()=>{}
}) => {
    return (
        <View style={Styles.addTaskContainer}>
            {/* <FontAwesome5 
                name="square" 
                size={19} 
                color={Color.disative}
                style={{paddingLeft: 5}}
            /> */}
            <TextInput
                placeholder='Enter text'
                placeholderTextColor={Color.disative}
                selectionColor={Color.active}
                onChangeText={(t) => setText(t)}
                onSubmitEditing={() => {
                    add(text)
                    setText(null)
                }}
                value={text}
                style={Styles.addTaskInput}
                autoFocus={true}
            />
      </View>
    )
}

export default Addtask
