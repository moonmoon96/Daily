import { baseDate } from "../../utils/Date";

export async function dojang() {
    try {
        const apiKey = process.env.REACT_APP_API_KEY;
        const urlString = "https://open.api.nexon.com/maplestory/v1/ranking/dojang?date=" + baseDate + "&difficulty=1"


        if (!apiKey) {
            throw new Error('API key is missing');
        }

        const response = await fetch(urlString, {
            headers: {
                "x-nxopen-api-key": apiKey
            }
        });
        const result = await response.json();

        const dojang_data = result.ranking;

        return dojang_data;

    } catch (error) {
        console.error(error);
    }
}