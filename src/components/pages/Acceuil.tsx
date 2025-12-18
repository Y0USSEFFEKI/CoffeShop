import React from 'react';
import TemplateAccueil from '../templates/TemplateAccueil';

interface AcceuilProps {
	onGetStarted?: () => void;
}

const Acceuil: React.FC<AcceuilProps> = ({onGetStarted}) => {
	const handleGetStarted = () => {
		if (onGetStarted) {
			onGetStarted();
		} else {
			console.log('Get started pressed');
		}
	};

	return (
		<TemplateAccueil
			headline="Coffee so good, your taste buds will love it"
			subheadline="The best grain, the finest roast, the most powerful flavor."
			activePage={1}
			onGetStarted={handleGetStarted}
		/>
	);
};

export default Acceuil;
