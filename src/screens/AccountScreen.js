import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { signOut } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import styles from '../styles/styles';

const AccountScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      setUsername(currentUser.displayName || 'No Name');
      setUserEmail(currentUser.email || 'No Email');
    }
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigation.reset({
        index: 0,
        routes: [{ name: 'Login' }],
      });
    } catch (err) {
      console.error('Error logging out:', err.message);
    }
  };

  const openPrivacyPolicy = () => {

  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Image
          source={require('../../assets/banner.png')}
          style={styles.logo}
        />
      </View>
      <View style={styles.centeredContainer}>
        <View style={styles.profileCard}>
          <Image source={require('../../assets/profileicon.png')} style={styles.profileImage} />
          <Text style={styles.profileName}>{username}</Text>
          <Text style={styles.profileEmail}>{userEmail}</Text>
          <TouchableOpacity onPress={handleLogout} style={styles.authButton}>
            <Text style={styles.authButtonText}>Log Out</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={openPrivacyPolicy}>
          <Text style={styles.privacyPolicyText}>Privacy Policy</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AccountScreen;