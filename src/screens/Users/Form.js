import React, { useContext, useState } from 'react'
import { Button } from 'react-native'
import { Input } from 'react-native-elements'
import {
  IconInputEmail,
  IconInputAvatar,
  IconInputName,
  ContainerForm,
} from '../../components'
import UserContext from '../../services/contexts/User'

const FormUser = ({ route, navigation }) => {
  const [user, setUser] = useState(route.params ? route.params : {})
  const { dispatch } = useContext(UserContext)
  return (
    <ContainerForm>
      <Input
        label='Nome'
        placeholder='Informe seu nome'
        onChangeText={(name) => setUser({ ...user, name })}
        value={user.name}
        leftIcon={<IconInputName />}
      />
      <Input
        label='Email'
        placeholder='Informe seu nome'
        onChangeText={(email) => setUser({ ...user, email })}
        value={user.email}
        leftIcon={<IconInputEmail />}
      />
      <Input
        label='Avatar'
        placeholder='Cole o link do avatar'
        onChangeText={(avatar) => setUser({ ...user, avatar })}
        value={user.avatar}
        leftIcon={<IconInputAvatar />}
      />
      <Button
        title='Salvar'
        onPress={() => {
          dispatch({
            type: !!user.id ? 'UPDATE_USER' : 'CREATE_USER',
            payload: user,
          })
          navigation.goBack()
        }}
      />
    </ContainerForm>
  )
}

export default FormUser
