import React, { useEffect, useState } from 'react'
import { getJwt } from './getJwt'

interface Props {}

const Translation: React.FC<Props> = () => {
  const [jwt, setJwt] = useState('')

  useEffect(() => {
    const initializeTranslation = async () => {
      const jwt = await getJwt()
      setJwt(jwt)

      // Add SpeechRecognition initialization
    }
    initializeTranslation()
  }, [])

  return (
    <div>
      <p>Token: {jwt}</p>
    </div>
  )
}

export default Translation
