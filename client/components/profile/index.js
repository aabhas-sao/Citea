import React from 'react';
import {SafeAreaView} from 'react-native';
import {Button} from '@ui-kitten/components';
import {signOut} from '../../firebase/auth';

const ProfileScreen = () => {
  return (
    <SafeAreaView>
      <Button
        appearance="ghost"
        onPress={() => {
          signOut();
        }}>
        sign out
      </Button>
    </SafeAreaView>
  );
};

export default ProfileScreen;
