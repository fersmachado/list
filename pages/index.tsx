import type { NextPage } from 'next'
import Button from '../src/atomic/atoms/Button'
import Input from '../src/atomic/atoms/Input'

import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <Button text="OK"></Button>
      <Input text="ola"/>
    </div>
  )
}

export default Home
