import React, { useContext } from 'react'
import { Alert, FlatList, Text } from 'react-native'
import { ListItem, Avatar, Button } from 'react-native-elements'
import {
  IconEditUser,
  IconDeleteUser,
  GroupButtonActions,
} from '../../components'
import { users } from '../../data/users'
import UserContext from '../../services/contexts/User'

const ListUsers = (props) => {
  const { state, dispatch } = useContext(UserContext)
  function confirmDelete(user) {
    Alert.alert('Exclusão', 'Deseja excluir o usuário?', [
      {
        text: 'Sim',
        onPress() {
          dispatch({
            type: 'DELETE_USER',
            payload: user,
          })
        },
      },
      {
        text: 'Não',
      },
    ])
  }

  function getActions(item) {
    return (
      <GroupButtonActions>
        <Button
          onPress={() => props.navigation.navigate('UserForm', item)}
          type='clear'
          icon={<IconEditUser />}
        />
        <Button
          onPress={() => confirmDelete(item)}
          type='clear'
          icon={<IconDeleteUser />}
        />
      </GroupButtonActions>
    )
  }

  function getUsers({ item }) {
    return (
      <ListItem bottomDivider>
        <Avatar source={{ uri: item.avatar }} />
        <ListItem.Content>
          <ListItem.Title>{item.name}</ListItem.Title>
          <ListItem.Subtitle>{item.email}</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Content>{getActions(item)}</ListItem.Content>
      </ListItem>
    )
  }

  return (
    <>
      <FlatList
        data={state.users}
        keyExtractor={(user) => user.id.toString()}
        renderItem={getUsers}
      />
    </>
  )
}
export default ListUsers
