import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import Checkbox from 'expo-checkbox'

export default function App() {
  const [value, setValue] = useState('')
  const [task, setTask] = useState([
    { id: 1, title: 'HTML', isDone: true },
    { id: 2, title: 'React', isDone: true },
    { id: 3, title: 'Css', isDone: false },
    { id: 2, title: 'ReactNative', isDone: true },
    { id: 2, title: 'JS', isDone: true },
  ])
  return (
    <View style={styles.container}>
      <TextInput
        style={[globalStyles.border, styles.input]}
        value={value}
        onChangeText={setValue}
      />
      <View style={{ width: '60%' }}>
        {task.map((t) => {
          return (
            <View key={t.id} style={[styles.boxTask]}>
              <Checkbox value={t.isDone} onValueChange={() => {}} />
              <Text>{t.title}</Text>
            </View>
          )
        })}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0e17',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '60%',
    backgroundColor: '#fff',
    fontSize: 18,
    paddingVertical: 4,
    paddingHorizontal: 4,
    marginBottom: 15,
  },
  boxTask: {
    flexDirection: 'row',
    backgroundColor: '#fffffe',
    justifyContent: 'space-between',
    paddingVertical: 4,
    paddingHorizontal: 4,
    marginVertical: 3,
  },
})

const globalStyles = StyleSheet.create({
  border: {
    borderStyle: 'solid',
    //  borderBottomColor: 'red',
    borderWidth: 1,
    //  borderRadius: 8,
  },
})
