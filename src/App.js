import * as React from 'react'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import UserList from './screens/Users/List'
import UserForm from './screens/Users/Form'
import { StyledButton } from './components'

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar translucent backgroundColor='transparent' />

      <Stack.Navigator
        initialRouteName='UserList'
        screenOptions={screenOptions}
      >
        <Stack.Screen
          name='UserList'
          component={UserList}
          options={({ navigation }) => {
            return {
              title: 'Lista',
              headerRight: () => (
                <StyledButton onPress={() => navigation.navigate('UserForm')} />
              ),
            }
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

export default App
