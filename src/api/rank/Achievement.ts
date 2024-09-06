import { baseDate } from "../../utils/Date";

export async function achievement() {
    try {
        const apiKey = process.env.REACT_APP_API_KEY;
        const urlString = "https://open.api.nexon.com/maplestory/v1/ranking/achievement?date" + baseDate;


        if (!apiKey) {
            throw new Error('API key is missing');
        }

        const response = await fetch(urlString, {
            headers: {
                "x-nxopen-api-key": apiKey
            }
        });
        const result = await response.json();

        const achievement_data = result.ranking;

        return achievement_data;

    } catch (error) {
        console.error(error);
    }
}