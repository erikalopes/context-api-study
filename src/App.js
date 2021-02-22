import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { StyledButton } from './components'
import UserList from './screens/Users/List'
import UserForm from './screens/Users/Form'

const Stack = createStackNavigator()

export default (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='UserList'
        screenOptions={screenOptions}
      >
        <Stack.Screen
          name='UserList'
          component={UserList}
          options={() => {
            return { title: 'Lista', headerRight: () => <StyledButton /> }
          }}
        />
        <Stack.Screen
          name='UserForm'
          component={UserForm}
          options={{ title: 'Formulário de Usuários' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const screenOptions = {
  headerStyle: {
    backgroundColor: '#222',
  },
  headerTintColor: '#fff',
}
