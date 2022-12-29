import React from 'react'
import logo from './logo.svg'
import './App.css'
import { Amplify } from 'aws-amplify'
import { AmplifyProvider, Authenticator, Button, Flex, Image, Text, View } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import aws_exports from './aws-exports'

Amplify.configure(aws_exports)

const theme = {
  name: 'cra-my-theme',
  tokens: {
    colors: {
      font: {
        primary: { value: '#008080' },
      },
    },
  },
}

function App() {
  return (
    <AmplifyProvider theme={theme}>
      <Authenticator>
        {({ signOut, user }) => (
          <Flex
            direction="column"
            justifyContent="flex-start"
            alignItems="center"
            alignContent="flex-start"
            wrap="nowrap"
            gap="1rem"
            textAlign="center"
          >
            <View width="100%">
              <Image src={logo} alt="logo" width={240} height={240} />
            </View>

            {user && (
              <View width="100%">
                <Text>Hello {user.username}</Text>
                <Button onClick={signOut}>
                  <Text>Sign Out</Text>
                </Button>
              </View>
            )}

            <View width="100%">
              <Text>
                Edit <code>src/App.tsx</code> and save to reload.
              </Text>
            </View>
          </Flex>
        )}
      </Authenticator>
    </AmplifyProvider>
  )
}

export default App
