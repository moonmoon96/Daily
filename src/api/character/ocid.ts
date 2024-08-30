export async function ocid(characterName : string) {
    try {
        const apiKey = process.env.REACT_APP_API_KEY;
        const urlString = "https://open.api.nexon.com/maplestory/v1/id?character_name=" + characterName;


        if (!apiKey) {
            throw new Error('API key is missing');
        }

        const response = await fetch(urlString, {
            headers: {
                "x-nxopen-api-key": apiKey
            }
        });
        
        const data = await response.json();
        const ocid = data.ocid;
        console.log(ocid);

        return ocid;
        
    } catch (error) {
        console.error(error);
    }
}