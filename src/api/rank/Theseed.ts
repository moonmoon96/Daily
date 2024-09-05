import { baseDate } from "../../utils/Date";

export async function theseed() {
    try {
        const apiKey = process.env.REACT_APP_API_KEY;
        const urlString = "https://open.api.nexon.com/maplestory/v1/ranking/theseed?date=" + baseDate;


        if (!apiKey) {
            throw new Error('API key is missing');
        }

        const response = await fetch(urlString, {
            headers: {
                "x-nxopen-api-key": apiKey
            }
        });
        const result = await response.json();

        const theseed_data = result.ranking;

        return theseed_data;

    } catch (error) {
        console.error(error);
    }
}