import { baseDate } from "../../utils/Date";

export async function overall() {
    try {
        const apiKey = process.env.REACT_APP_API_KEY;
        const urlString = "https://open.api.nexon.com/maplestory/v1/ranking/overall?date=" + baseDate + "&world_type=0"


        if (!apiKey) {
            throw new Error('API key is missing');
        }

        const response = await fetch(urlString, {
            headers: {
                "x-nxopen-api-key": apiKey
            }
        });
        const result = await response.json();

        const overall_data = result.ranking;

        return overall_data;

    } catch (error) {
        console.error(error);
    }
}