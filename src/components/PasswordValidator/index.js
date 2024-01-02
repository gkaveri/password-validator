// Write your code here
import {useState} from 'react'

import {Container, Para, Header, Input} from './styledComponents'

const PasswordValidator = () => {
  const [inputValue, setInputValue] = useState('')
  const [errorMessage, setErrorMessage] = useState('Your password must be at least 8 characters')

  const handleInputChange = event => {
    const value = event.target.value
    setInputValue(value)

    if (value.length > 0 && value.length < 8) {
      setErrorMessage('Your password must be at least 8 characters')
    } else {
      setErrorMessage('')
    }
  }

  return (
    <Container>
      <Header>Password Validator</Header>
      <Para>Check how strong and secure is your password</Para>
      <Input type="password" value={inputValue} onChange={handleInputChange} />
      {errorMessage && <div style={{color: 'red'}}>{errorMessage}</div>}
    </Container>
  )
}

export default PasswordValidator
