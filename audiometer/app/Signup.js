// Signup.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity} from 'react-native';
import {Picker} from '@react-native-picker/picker'; 
// import './locales/i18n'; 
import {useTranslation} from 'react-i18next'; 
const Signup = () => {
  const {t,i18n} =useTranslation(); 
  // const [currentLanguage, setLanguage] = useState('en'); 
  // const changeLanguage= value=>{
  //   i18n.changeLanguage(value)
  //   .then(()=>setLanguage(value))
  //   .catch(err => console.log(err)); 
  // }
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userType, setUserType] = useState('user');
  const [age, setAge] = useState('');

  const handleSignup = () => {
    // Implement user registration logic here
    console.log('Signing up with:', name, email, age, password, confirmPassword, userType);
    // Add your user registration logic here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>{t('Name')}</Text>
      <TextInput
        style={styles.input}
        placeholder={t('Enter your name')}
        onChangeText={text => setName(text)}
        value={name}
        textAlign="left"
        color="white"
        placeholderTextColor="grey"
      />

      <Text style={styles.subtitle}>{t('Email')}</Text>
      <TextInput
        style={styles.input}
        placeholder={t('Enter your email id')}
        onChangeText={text => setEmail(text)}
        value={email}
        textAlign="left"
        color="white"
        placeholderTextColor="grey"
      />

      <Text style={styles.subtitle}>{t('Age')}</Text>
      <TextInput
        style={styles.input}
        placeholder={t('Enter your Age')}
        onChangeText={text => setAge(text)}
        value={age}
        textAlign="left"
        color="white"
        placeholderTextColor="grey"
      />

      <Text style={styles.subtitle}>{t('Password')}</Text>
      <TextInput
        style={styles.input}
        placeholder={t('Enter your password')}
        onChangeText={text => setPassword(text)}
        value={password}
        textAlign="left"
        color="white"
        placeholderTextColor="grey"
      />

      <Text style={styles.subtitle}>{t('Confirm Password')}</Text>
      <TextInput
        style={styles.input}
        placeholder={t('Confirm Password')}
        onChangeText={text => setConfirmPassword(text)}
        value={confirmPassword}
        textAlign="left"
        color="white"
        placeholderTextColor="grey"
      />

      <Text style={styles.subtitle}>{t('User Type')}</Text>
      <Picker
        selectedValue={userType}
        style={styles.picker}
        itemStyle={styles.pickerItem}
        onValueChange={itemValue => setUserType(itemValue)}
      >
        <Picker.Item style={styles.pickerItem} label={t('User')} value="user" />
        <Picker.Item label={t('Educator')} value="educator" />
      </Picker>

      <TouchableOpacity style={styles.Button} onPress={handleSignup}>
        <Text style={styles.buttonText}>{t('Sign Up')}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 20,
    justifyContent: 'flex-start',
  },
  subtitle: {
    fontSize: 18,
    color: 'white',
    marginBottom: 10,
    textAlign: 'left',
  },
  picker: {
    height: 50,
    width: '100%',
    backgroundColor: 'white',
    color: 'black',
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  pickerItem: {
    color: 'black',
  },
  input: {
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '100%',
    color: 'white',
    fontStyle: 'italic',
  },
  Button: {
    backgroundColor: '#D4AF37',
    marginTop: 20,
    borderRadius: 10,
    paddingVertical: 5,
    width: '50%',
    alignSelf: 'center',
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Signup;
