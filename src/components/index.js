import React from 'react'
import { Button, Icon } from 'react-native-elements'
import styled from 'styled-components'

const IconAdd = () => <Icon name='add' size={25} color='#fff' />

export const StyledButton = styled(Button).attrs({
  type: 'clear',
  icon: <IconAdd />,
})``
