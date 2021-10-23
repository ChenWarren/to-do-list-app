import React from 'react'
import { TextInput, View } from 'react-native'

import { Styles } from '../styles/Styles'
import Color from '../config/Color'

const Addtask = () => {
    return (
        <View style={Styles.inputWrapper}>
            <TextInput
            placeholder='Enter task'
            placeholderTextColor={Color.disative}
            onChange={setTask}
            value={task}
            style={Styles.taskInput}
            />
      </View>
    )
}

export default Addtask
