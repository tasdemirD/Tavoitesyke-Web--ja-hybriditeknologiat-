import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [age, setAge] = useState('')
  const [lowerLimit, setLLimit] = useState(0)
  const [upperLimit, setULimit] = useState(0)

  const calculate = () => {
    const lowerResult = (220 - age) *  0.65;
    setLLimit(lowerResult)

    const upperResult = (220 - age) *  0.85;
    setULimit(upperResult)
  }

  return (
    <View style={styles.container}>
      <Text>Age</Text>
      <TextInput
      style={styles.field}
      placeholder='Enter age'
      keyboardType='decimal-pad'
      value={age}
      onChangeText={text => setAge(text)}
      />

      <Text>Limits</Text>
      <Text style={styles.field}>{lowerLimit} - {upperLimit}</Text>

      <Button title='Calculate' onPress={calculate}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50,
    marginLeft: 13,
    marginRight: 13
  },
  field: {
    marginBottom: 10
  }
});
