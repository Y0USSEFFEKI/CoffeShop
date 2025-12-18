import React, {useState} from 'react';
import TemplateLogin from '../templates/TemplateLogin';

interface LoginProps {
	onLoginSuccess?: () => void;
	onGoToSignup?: () => void;
}

const Login: React.FC<LoginProps> = ({onLoginSuccess, onGoToSignup}) => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	return (
		<TemplateLogin
			username={username}
			password={password}
			onChangeUsername={setUsername}
			onChangePassword={setPassword}
			onLogin={() => {
				if (onLoginSuccess) {
					onLoginSuccess();
				} else {
					console.log('Login with', {username, password});
				}
			}}
			onSignUp={() => {
				if (onGoToSignup) {
					onGoToSignup();
				} else {
					console.log('Navigate to sign up');
				}
			}}
		/>
	);
};

export default Login;
