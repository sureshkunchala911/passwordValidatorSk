import {useState} from 'react'

import {
  Container,
  CardContainer,
  Heading,
  Para,
  Input,
  ErrorMessage,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPass] = useState('')
  const ErrMessage = password.length < 8

  const onChangePassword = event => {
    setPass(event.target.value)
  }

  return (
    <Container>
      <CardContainer>
        <Heading>Password Validator</Heading>
        <Para>Check how strong and secure is your password</Para>
        <Input type="password" value={password} onChange={onChangePassword} />
        {ErrMessage && (
          <ErrorMessage>
            Your password must be at least 8 characters
          </ErrorMessage>
        )}
      </CardContainer>
    </Container>
  )
}

export default PasswordValidator
