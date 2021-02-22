import { Button } from 'react-native-elements'
import { Icon } from 'react-native-elements'
import styled from 'styled-components'

export const StyledButton = styled(Button).attrs({
  type: 'clear',
  icon: <Icon name='add' size={25} color='#fff' />,
})
