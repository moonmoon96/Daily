export async function update() {
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
        const update_data = await response.json();
        console.log(update_data);

        return update_data;

    } catch (error) {
        console.error(error);
    }
}