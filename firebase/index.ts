import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import { info } from '../util/log'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FB_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FB_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FB_DB_URL,
  projectId: process.env.NEXT_PUBLIC_FB_PROJ_ID,
  storageBucket: process.env.NEXT_PUBLIC_FB_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FB_MSG_ID,
  appId: process.env.NEXT_PUBLIC_FB_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FB_MEASURE_ID,
}

export const init = (): void => {
  console.log(process.env)
  if (firebase.apps.length > 0) {
    info('Firebase already initialized, skipping init()')
    return
  }
  firebase.initializeApp(firebaseConfig)
  info('Firebase initialized.')
}

export default firebase
