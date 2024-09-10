export async function pet(ocid : string) {
    try {
        const apiKey = process.env.REACT_APP_API_KEY;
        const urlString = "https://open.api.nexon.com/maplestory/v1/character/pet-equipment?ocid=" + ocid;


        if (!apiKey) {
            throw new Error('API key is missing');
        }

        const response = await fetch(urlString, {
            headers: {
                "x-nxopen-api-key": apiKey
            }
        });
        const pet_data = await response.json();

        return pet_data;

    } catch (error) {
        console.error(error);
    }
}