export async function getapi() {
	try {
			const rickandmorty = await fetch('https://rickandmortyapi.com/api/character/').then((res) => {
				return res.json();
			});
			return rickandmorty.data;
	} catch (error) {
		console.log(error);	
	}
}