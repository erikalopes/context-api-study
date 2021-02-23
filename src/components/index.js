import React from 'react'
import { View } from 'react-native'
import { Button, Icon } from 'react-native-elements'
import StyledIcon from 'react-native-vector-icons/FontAwesome'

import styled from 'styled-components'

export const IconAdd = () => <Icon name='add' size={25} color='#fff' />
export const IconEditUser = () => <Icon name='edit' size={25} color='black' />
export const IconDeleteUser = () => <Icon name='delete' size={25} color='red' />
export const IconInputName = () => (
  <StyledIcon name='user' size={25} color='black' />
)
export const IconInputEmail = () => (
  <StyledIcon name='envelope' size={23} color='black' />
)
export const IconInputAvatar = () => (
  <StyledIcon name='cloud-upload' size={25} color='black' />
)

export const StyledButton = styled(Button).attrs({
  type: 'clear',
  icon: <IconAdd />,
})``

export const GroupButtonActions = styled(View)`
  flex-direction: row;
  align-self: flex-end;
`
export const ContainerForm = styled(View)`
  flex: 1;
  margin: 20px;
`
