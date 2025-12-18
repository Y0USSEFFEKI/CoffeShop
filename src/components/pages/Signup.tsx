import React, {useState} from 'react';
import TemplateSignup from '../templates/TemplateSignup';

interface SignupProps {
	onSignupSuccess?: () => void;
	onGoToLogin?: () => void;
}

const Signup: React.FC<SignupProps> = ({onSignupSuccess, onGoToLogin}) => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [country, setCountry] = useState('');
	const [town, setTown] = useState('');

	return (
		<TemplateSignup
			username={username}
			password={password}
			country={country}
			town={town}
			onChangeUsername={setUsername}
			onChangePassword={setPassword}
			onChangeCountry={setCountry}
			onChangeTown={setTown}
			onSubmit={() => {
				if (onSignupSuccess) {
					onSignupSuccess();
				} else {
					console.log('Signup with', {username, password, country, town});
				}
			}}
			onGoToLogin={() => {
				if (onGoToLogin) {
					onGoToLogin();
				} else {
					console.log('Go to login');
				}
			}}
		/>
	);
};

export default Signup;
