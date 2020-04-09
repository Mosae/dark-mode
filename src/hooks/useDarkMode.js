import React, { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = (key) => {
	const [enableDarkMode, setEnableDarkMode] = useLocalStorage('key');

	useEffect(() => {
		const className = 'dark-mode';
		const bodyElement = window.document.body;
		if (enableDarkMode) {
			bodyElement.classList.add(className);
		} else {
			bodyElement.className.remove(className);
		}
	}, [enableDarkMode]);
	return [enableDarkMode, setEnableDarkMode];
};

export default useDarkMode;
