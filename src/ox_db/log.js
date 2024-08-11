const apiUrlHead = "http://127.0.0.1:8000";

export async function api_post(script) {
    const url = `${apiUrlHead}/run?script=${encodeURIComponent(script)}`;
    
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json'
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
            head:'ox-db : ',
            res:result
        }
        return finalRes

    } catch (error) {
        console.error('Error:', error);
        return { error: error.message };
    }
}


// Example usage:
export let pushData = {
    data: "data",
    embeddings: true,
    description: "from ox-ai.studio api call",
    metadata: { source:"ox-ai.studio.api" },
    key: "key"
};

// push(pushData).then(response => {
//     console.log('Response:', response);
// });
