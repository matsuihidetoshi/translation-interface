import React from 'react'

interface Props {
  language: string
}

const Translation: React.FC<Props> = ({ language }) => {
  return <p>Language: {language}</p>
}

export default Translation
