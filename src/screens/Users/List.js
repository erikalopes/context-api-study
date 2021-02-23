import * as React from 'react'
import { FlatList } from 'react-native'
import { ListItem, Avatar } from 'react-native-elements'
import { users } from '../../data/users'

const ListUsers = (props) => {
  function getUsers({ item }) {
    return (
      <ListItem bottomDivider>
        <Avatar source={{ uri: item.avatar }} />
        <ListItem.Content>
          <ListItem.Title>{item.name}</ListItem.Title>
          <ListItem.Subtitle>{item.email}</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
    )
  }

  return (
    <>
      <FlatList
        data={users}
        keyExtractor={(user) => user.id.toString()}
        renderItem={getUsers}
      />
    </>
  )
}
export default ListUsers
