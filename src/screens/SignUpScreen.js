import React, { useState } from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
  Image,
} from 'react-native';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import styles from '../styles/styles';

const SignUpScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      await updateProfile(userCredential.user, {
        displayName: username,
      });

      navigation.reset({
        index: 0,
        routes: [{ name: 'MainTabs' }],
      });
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <Image source={require('../../assets/banner.png')} style={styles.logo} />
        </View>
        <View style={styles.authContainer}>
          <View style={styles.authBlock}>
            <Text style={styles.authHeaderText}>Create An Account</Text>
            {error && <Text style={styles.error}>{error}</Text>}
            <TextInput
              style={styles.authInput}
              placeholder="Username"
              placeholderTextColor="#d0d0d0"
              value={username}
              autoCapitalize="words"
              onChangeText={setUsername}
              keyboardAppearance="dark"
            />
            <TextInput
              style={styles.authInput}
              placeholder="Email"
              placeholderTextColor="#d0d0d0"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              keyboardAppearance="dark"
            />
            <TextInput
              style={styles.authInput}
              placeholder="Password"
              placeholderTextColor="#d0d0d0"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              keyboardAppearance="dark"
            />
            <TouchableOpacity onPress={handleSignUp} style={styles.authButton}>
              <Text style={styles.authButtonText}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.authORText}>Already have an account? Log In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default SignUpScreen;