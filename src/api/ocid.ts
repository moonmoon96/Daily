const characterName = "준현";
const urlString = "https://open.api.nexon.com/maplestory/v1/character/basic?ocid=a29a4a917f119c67cc89cd557eb32e45efe8d04e6d233bd35cf2fabdeb93fb0d"

export async function ocid() {
    try {
        const apiKey = process.env.REACT_APP_API_KEY;
        
        if (!apiKey) {
            throw new Error('API key is missing');
        }

        const response = await fetch(urlString, {
            headers: {
                "x-nxopen-api-key": apiKey
            }
        });
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}