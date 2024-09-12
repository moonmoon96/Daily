export async function union(ocid : string) {
    try {
        const apiKey = process.env.REACT_APP_API_KEY;
        const urlString = "https://open.api.nexon.com/maplestory/v1/user/union?ocid=" + ocid;


        if (!apiKey) {
            throw new Error('API key is missing');
        }

        const response = await fetch(urlString, {
            headers: {
                "x-nxopen-api-key": apiKey
            }
        });
        const union_data = await response.json();

        return union_data;

    } catch (error) {
        console.error(error);
    }
}