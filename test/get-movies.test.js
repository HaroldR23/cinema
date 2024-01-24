import { get_movies } from "../javascript/get-movies";
import {describe, expect, test, jest} from '@jest/globals';
describe("get_movies", () => {
   it("get_movies function returns a parsed response successfully", async () => {
    const mockData = [
            {id: "1", movie: "title_1"},
            {id: "2", movie: "title_2"},
            {id: "3", movie: "title_3"}
        ]
    const mockFetchAPI = {
        text: jest.fn().mockResolvedValue(JSON.stringify({results: mockData})),
    }
    global.fetch = jest.fn().mockResolvedValue(mockFetchAPI);

    const movies = await get_movies();

    expect(movies).toEqual(mockData)
    expect(global.fetch).toBeCalledTimes(1);
   });

   it("get_movies function returns undefined when something went wrong", async () => {
    const mockError = new Error("Something went wrong");

    const mockFetchAPI = {
        text: jest.fn().mockRejectedValue(mockError),
    }
    global.fetch = jest.fn().mockResolvedValue(mockFetchAPI);

    const movies = await get_movies();

    expect(movies).toBeUndefined();
    expect(global.fetch).toBeCalledTimes(1);
   });

   it("get_movies function returns a property message when gets an empty movies list", async () => {
    const mockData = []
    const emptyResultsMsg = "There are not movies available."
    const mockFetchAPI = {
        text: jest.fn().mockResolvedValue(JSON.stringify({results: mockData})),
    }
    global.fetch = jest.fn().mockResolvedValue(mockFetchAPI);

    const movies = await get_movies();

    expect(movies).toEqual(emptyResultsMsg)
    expect(global.fetch).toBeCalledTimes(1);
   });
});
