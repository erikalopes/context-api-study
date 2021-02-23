import React from 'react'
import { View } from 'react-native'
import { Button, Icon } from 'react-native-elements'
import styled from 'styled-components'

export const IconAdd = () => <Icon name='add' size={25} color='#fff' />

export const IconEditUser = () => <Icon name='edit' size={25} color='black' />
export const IconDeleteUser = () => <Icon name='delete' size={25} color='red' />

export const StyledButton = styled(Button).attrs({
  type: 'clear',
  icon: <IconAdd />,
})``

export const GroupButtonActions = styled(View)`
  flex-direction: row;
  align-self: flex-end;
`
