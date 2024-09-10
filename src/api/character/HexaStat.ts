export async function hexaStat(ocid : string) {
    try {
        const apiKey = process.env.REACT_APP_API_KEY;
        const urlString = "https://open.api.nexon.com/maplestory/v1/character/hexamatrix-stat?ocid=" + ocid;


        if (!apiKey) {
            throw new Error('API key is missing');
        }

        const response = await fetch(urlString, {
            headers: {
                "x-nxopen-api-key": apiKey
            }
        });
        const hexaStat_data = await response.json();

        return hexaStat_data;

    } catch (error) {
        console.error(error);
    }
}