export async function updateData() {
    try {
        const apiKey = process.env.REACT_APP_API_KEY;
        const urlString = "https://open.api.nexon.com/maplestory/v1/notice-update"


        if (!apiKey) {
            throw new Error('API key is missing');
        }

        const response = await fetch(urlString, {
            headers: {
                "x-nxopen-api-key": apiKey
            }
        });
        const result = await response.json();
        
        const update_data = result.update_notice;

        return update_data;

    } catch (error) {
        console.error(error);
    }
}