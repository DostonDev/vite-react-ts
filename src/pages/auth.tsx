import Login from '@/components/auth/login'
import Register from '@/components/auth/register'
import Social from '@/components/auth/social'
import { Card } from '@/components/ui/card'
import { useAuthState } from '@/stores/auth.store'
import { useUserState } from '@/stores/user.store'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Auth = () => {
	const { authState } = useAuthState()
	const { user } = useUserState()

	const navigate = useNavigate()

	useEffect(() => {
		user && navigate('/')
	}, [user])

	return (
		<div className='w-full h-screen bg-gradient-to-t from-foreground to-background flex items-center justify-center max-md:px-6'>
			<Card className='p-8 lg:w-1/3 md:w-1/2 w-full relative'>
				{authState === 'login' && <Login />}
				{authState === 'register' && <Register />}
				<Social />
			</Card>
		</div>
	)
}

export default Auth
