import useLocalStorage from './useLocalStorage';

export const useDarkMode = (key) => {
	const [isOnline, setIsOnline] = useLocalStorage('key');
};
