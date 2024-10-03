import { Platform } from '$lib/types';
import { getSkills } from './skills';
import { onMount } from 'svelte';

export const title = 'Home';

export const name = 'Carlos';

export const lastName = 'Garcia';


export let fullName = '';
const japaneseName = "カルロス がえーシア"; // Your Japanese name
export const englishName = "Carlos Garcia"; // Your English name

const typingEffect = (text: string, delay: number): Promise<void> => {
	return new Promise((resolve) => {
		let index = 0;
		const interval = setInterval(() => {
			if (index < text.length) {
				fullName += text.charAt(index);
				index++;
			} else {
				clearInterval(interval);
				resolve(); // Resolve the promise when done typing
			}
		}, delay);
	});
};

export const transitionToEnglish = async () => {
	console.log("transitionin...")
	await typingEffect(japaneseName, 100); // Adjust delay for typing speed
	await new Promise(resolve => setTimeout(resolve, 1000)); // Pause before switching
	fullName = ''; // Clear the current text
	await typingEffect(englishName, 100); // Type out the English name
};



export const description =
	"I enjoy challenging myself with fun and useful projects. \nInterested in developing AI-driven applications and game \ndev. I like to study Japanese, and play games in my free time. :)";

export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://github.com/Carlosg28' },
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/'
	},
	// {
	// 	platform: Platform.StackOverflow,
	// 	link: 'https://stackoverflow.com/'
	// },
	{
		platform: Platform.Email,
		link: 'cygn333@gmail.com'
	}
];

export const skills = getSkills('js', 'css', 'html', 'reactjs', 'sass', 'svelte', 'ts','py');
