import { get_movie } from "../javascript/get-movie";
import {describe, expect, test, jest} from '@jest/globals';
describe("get_movie", () => {
   it("get_movie function returns a parsed response successfully", async () => {
    const mockData = {id: "1", movie: "title_1"};
        
    const mockFetchAPI = {
        text: jest.fn().mockResolvedValue(JSON.stringify({results: mockData})),
    }
    global.fetch = jest.fn().mockResolvedValue(mockFetchAPI);

    const movies = await get_movie();

    expect(movies).toEqual(mockData)
    expect(global.fetch).toBeCalledTimes(1);
   });

   it("get_movie function returns undefined when something went wrong", async () => {
    const mockError = new Error("Something went wrong");

    const mockFetchAPI = {
        text: jest.fn().mockRejectedValue(mockError),
    }
    global.fetch = jest.fn().mockResolvedValue(mockFetchAPI);

    const movies = await get_movie();

    expect(movies).toBeUndefined();
    expect(global.fetch).toBeCalledTimes(1);
   });
});
