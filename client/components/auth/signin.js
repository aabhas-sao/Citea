import React, {useState} from 'react';
import {Layout, Text, Input, Button} from '@ui-kitten/components';

const Signin = ({setIsSignin, isSignin}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Layout>
      <Text>Sign in</Text>
      <Input
        placeholder="Enter email"
        value={email}
        onChangeText={nextValue => setEmail(nextValue)}
      />
      <Input
        placeholder="Enter password"
        value={password}
        onChangeText={nextValue => setPassword(nextValue)}
      />

      <Button
        onPress={() => {
          console.log('click');
        }}>
        Sign in
      </Button>
      <Button
        appearance="ghost"
        onPress={() => {
          console.log('click');
        }}>
        Don't have a BYOB account
      </Button>
    </Layout>
  );
};

export default Signin;
