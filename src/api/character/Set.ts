export async function set(ocid : string) {
    try {
        const apiKey = process.env.REACT_APP_API_KEY;
        const urlString = "https://open.api.nexon.com/maplestory/v1/character/set-effect?ocid=" + ocid;


        if (!apiKey) {
            throw new Error('API key is missing');
        }

        const response = await fetch(urlString, {
            headers: {
                "x-nxopen-api-key": apiKey
            }
        });
        const set_data = await response.json();

        return set_data;

    } catch (error) {
        console.error(error);
    }
}