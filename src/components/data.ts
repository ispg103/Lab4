export async function get_api() {
	try {
			const weapon = await fetch('https://valorant-api.com/v1/weapons').then((res) => {
				return res.json();
			});
			return weapon.data;
	} catch (error) {
		console.log(error);
	}
}