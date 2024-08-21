const apiUrlHead = `http://${window.location.hostname}:8008`; // Updated to match the curl command's port

export async function api_post(script) {
    const url = `${apiUrlHead}/shell?script=${encodeURIComponent(script)}`;

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json',
                'x-api-key': 'lok' // Added API key as per curl command
            },
            body: ''  // Sending an empty body as per the curl command
        });

        console.log(response);

        if (!response.ok) {
            const errorDetail = await response.json();
            throw new Error(`Error: ${response.status}, ${errorDetail.detail}`);
        }

        const result = await response.json();
        const finalRes = {
            head: 'ox-db : ',
            res: result
        };
        return finalRes;

    } catch (error) {
        console.error('Error:', error);
        return { error: error.message };
    }
}



