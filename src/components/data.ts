export async function get_api() {
	try {
			const rm = await fetch('https://rickandmortyapi.com/api/character/2').then((res) => {
				return res.json();
			});
			return rm.data;
	} catch (error) {
		console.log(error);
	}
}