import { OPTIONS, API_URL } from "./constants.js";

export const get_movies = async() => {
  try {
    const response = await fetch(API_URL, OPTIONS);
    const result = await response.text();
    const results = JSON.parse(result).results;
    const emptyResultsMsg = "There are not movies available."

    if(!results.length) return emptyResultsMsg
  
    return results;
  } catch (error) {
    console.error(error);
  }
}