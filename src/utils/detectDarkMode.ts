const detectDarkMode = () => {
	if (
		window.matchMedia &&
		window.matchMedia('(prefers-color-scheme: dark)').matches
	) {
		return false;
	}
    return true;
};

export default detectDarkMode;
