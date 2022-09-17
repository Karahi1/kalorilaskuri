import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import RadioForm from 'react-native-simple-radio-button';
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';

export default function App() {
  const [weight, setWeight] = useState(0)
  const [intensity, setIntensity] = useState(1.3)
  const [gender, setGender] = useState('female')
  const [calories, setCalories] = useState(0)

  const intensities = [
    { label: 'light', value: 1.3 },
    { label: 'usual', value: 1.5 },
    { label: 'moderate', value: 1.7 },
    { label: 'hard', value: 2 },
    { label: 'very hard', value: 2.2 },
  ]

  const genders = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
  ]

  const calculate = () => {
    let result = 0

    if (gender === 'male') {
      result = (879 + 10.2 * weight) * intensity
    } else {
      result = (795 + 7.18 * weight) * intensity
    }
    setCalories(result)
  }

  return (
    <View style={styles.container}>
      <Text>Weight</Text>
      <TextInput placeholder='Enter weight...' value={weight} onChangeText={text => setWeight(text)} keyboardType='number-pad' />
      <Text>Intensity</Text>
      <Picker 
        style={styles.picker}
        onValueChange={(itemValue) => setIntensity(itemValue)}
        selectedValue={intensity}>
        {
          intensities.map((intensity, index) => {
            <Picker.Item label={intensity.label} value={intensity.value} />
          })
        }
      </Picker>
      <Text>Gender</Text>
      <RadioForm
        buttonSize={10}
        radio_props={genders}
        initial={0}
        onPress={(value) => setGender(value)}
      />
      <Text>{calories.toFixed(0)}</Text>
      <Button title="Calculate" onPress={calculate} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  picker: {
    marginVertical: 30,
    width: 300,
    padding: 10,
    borderWidth: 1,
    borderColor: "#666",
  }
});


