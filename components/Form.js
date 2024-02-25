import { Text, SafeAreaView, StyleSheet, View,Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View>
      <TextInput 
      style={styles.input} 
      placeholder="Input 1"
      />
    <TextInput 
      style={styles.input} 
      placeholder="Input 2"
      />
    <TextInput 
      style={styles.input} 
      placeholder="Input 3"
      />
    <TextInput 
      style={styles.input} 
      placeholder="Input 4"
      />
      <Button 
      title = "Submit" 
      />
      </View>
  );
}


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  input: {
    alignSelf: 'center',   
    height: 30,
    width: 300,
    borderWidth: 1,
    padding: 4,
    margin: 4,
  },
  button: {
    height: 30,
    width: 300,
  }
});
