import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import SignIn from './signin';
import Signup from './signup';

const AuthScreen = () => {
  const [isSignin, setIsSignin] = useState(true);

  if (isSignin) {
    return (
      <SafeAreaView>
        <SignIn isSignin={isSignin} setIsSignin={setIsSignin} />
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView>
      <Signup isSignin={isSignin} setIsSignin={setIsSignin} />
    </SafeAreaView>
  );
};

export default AuthScreen;
