import { OPTIONS, API_MOVIE_ID_URL } from "./constants.js";

export const get_movie = async(id) => {
  try {
    const response = await fetch(API_MOVIE_ID_URL(id), OPTIONS);
    const result = await response.text();
    const results = JSON.parse(result).results;

    return results;
  } catch (error) {
    console.error(error);
  }
}