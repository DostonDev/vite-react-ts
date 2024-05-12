import { auth } from '@/firebase'
import {
	GoogleAuthProvider,
	signInWithPopup,
} from 'firebase/auth'
import { useState } from 'react'
import { FaGoogle } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'
import FillLoading from '../shared/fill-loading'
import { Button } from '../ui/button'
import { Separator } from '../ui/separator'

const Social = () => {
	const [isLoading, setIsLoading] = useState(false)

	const navigate = useNavigate()

	const onGoogle = () => {
		setIsLoading(true)
		const googleProvider = new GoogleAuthProvider()
		signInWithPopup(auth, googleProvider)
			.then(() => {
				navigate('/')
			})
			.finally(() => setIsLoading(false))
	}



	return (
		<>
			{isLoading && <FillLoading />}
			<Separator className='my-3' />
				<Button
					className='h-12 w-full'
					variant={'destructive'}
					disabled={isLoading}
					onClick={onGoogle}
				>
					<FaGoogle className='mr-2' />
					<span>Sign in with Google</span>
				</Button>
		</>
	)
}

export default Social
