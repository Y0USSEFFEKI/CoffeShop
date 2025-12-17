import React from 'react';
import TemplateAccueil from '../templates/TemplateAccueil';

const Acceuil: React.FC = () => {
	const handleGetStarted = () => {
		// Navigation ou action à implémenter
		console.log('Get started pressed');
	};

	return (
		<TemplateAccueil
			headline="Coffee so good, your taste buds will love it"
			subheadline="The best grain, the finest roast, the most powerful flavor."
			activePage={1}
			onGetStarted={handleGetStarted}
			// backgroundSource, logoSource, heroSource peuvent être surchargés si besoin
		/>
	);
};

export default Acceuil;