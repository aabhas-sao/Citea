import React, {useState} from 'react';
import {Layout, Text, Input, Button} from '@ui-kitten/components';

const Signup = ({isSignin, setIsSignin}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cPassword, setCPassword] = useState('');

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
      <Input
        placeholder="Confirm password"
        value={cPassword}
        onChangeText={nextValue => setCPassword(nextValue)}
      />

      <Button>Signup</Button>
    </Layout>
  );
};

export default Signup;
