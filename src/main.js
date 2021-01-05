import App from './App.svelte';

const flag = [
	110, 4, 2, -10, -7, 17, -14, 21, -40, 35, -67, 57, 8, -65, 44, -17, -30, 68, -21, -42, -2, 48, 18, -3, -63, 74, 0
]; // Maybe think more ?

const app = new App({
	target: document.body,
	props: {
		cats: [
			[
				{
					name: 'Simple Cat',
					src: 'https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png',
					desc: 'See at this cat!'
				},
				{
					name: 'Angry cat',
					src: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/41CF/production/_109474861_angrycat-index-getty3-3.jpg',
					desc: 'This cat so angry, because he is hangry.'
				}
			],
			[
				{
					name: 'Strange Cat',
					src: 'https://i.ytimg.com/vi/1Ne1hqOXKKI/maxresdefault.jpg',
					desc: 'This cat see in something, maybe on food?'
				},
				{
					name: 'COVID-19 Cat',
					src: 'https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=675.0&fit=crop',
					desc: 'This cat secured of COVID-19!'
				}
			],
		],
		flag
	}
});

export default app;