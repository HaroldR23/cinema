export const API_URL = 'https://moviesdatabase.p.rapidapi.com/titles/random?list=top_rated_english_250';
export const API_MOVIE_ID_URL = (id) => `https://moviesdatabase.p.rapidapi.com/titles/${id}?info=base_info`;
export const OPTIONS = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a6b23c2e90msh13880ab2be34b01p164b78jsn0ad9cf299109',
		'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
	}
};
