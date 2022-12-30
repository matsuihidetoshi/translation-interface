import { Auth } from 'aws-amplify'
import { CognitoUser } from '@aws-amplify/auth'

export const getJwt = async () => {
  const user: CognitoUser = await Auth.currentAuthenticatedUser()
  const session = user.getSignInUserSession()
  const idToken = session?.getIdToken()
  const jwt = idToken?.getJwtToken()
  return jwt || ''
}
