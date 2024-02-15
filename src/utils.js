

export const getMessage = async (inputMessage, setInputMessage) => {
    const options = {
        method: "POST",
        body: JSON.stringify({
            prompt: inputMessage, // Changed to match your Lambda function expectation
        }),
        headers: {
            "Content-Type": "application/json"
        }
    };

    try {
        const temp_input = inputMessage;
        setInputMessage(""); // Reset input message

        const response = await fetch('your gateway url', options); //API Gateway endpoint

        if (!response.ok) {
            setInputMessage(temp_input); // Restore input message if request fails
            throw new Error('Network response was not ok: ' + response.statusText);
        }

        const data = await response.json();
        console.log(data); // Log the response data

    } catch (error) {
        console.error('Fetch error:', error);
    }
};
