import gitHubIcon from './gitHub-black.svg';

const BtnGitHub = ({ link }: any) => {
	return (
		<a href={link} target="_blank" rel="noreferrer" className="btn-outline">
			<img src={gitHubIcon} alt="" />
			GitHub repo
		</a>
	);
};

export default BtnGitHub;