import React from 'react';
import {SafeAreaView} from 'react-native';
import {Button, Text} from '@ui-kitten/components';
import {signOut} from '../../firebase/auth';
import styles from '../../styles';

const ProfileScreen = () => {
  return (
    <SafeAreaView>
      <Button
        appearance="ghost"
        onPress={() => {
          <Text style={{...styles.heading, ...styles.textCenter}}>Hello </Text>;
          signOut();
        }}>
        sign out
      </Button>
    </SafeAreaView>
  );
};

export default ProfileScreen;
