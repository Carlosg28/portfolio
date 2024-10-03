import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: "Bachelor's Degree of Computer Science",
		description: '',
		location: 'NYC, U.S',
		logo: Assets.Unknown,
		name: '',
		organization: 'Hunter College',
		period: { from: new Date(2023, 0, 20), to: new Date() },
		shortDescription: '',
		slug: 'dummy-education-item',
		subjects: ['Algorithm', 'Calculus', 'Python', 'C++', 'Java', 'Japanese']
	}
];

export const title = 'Education';
