import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
	apiKey: 'AIzaSyDxQ7jAOM9Y7zSlXAp9JPD6j9EJxjosTiw',
	authDomain: 'gym-trainings.firebaseapp.com',
	projectId: 'gym-trainings',
	storageBucket: 'gym-trainings.appspot.com',
	messagingSenderId: '1024349342561',
	appId: '1:1024349342561:web:999caab25bcd118c585320',
}
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

export { auth, db }
