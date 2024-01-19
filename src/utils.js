

export const getMessage = async (inputMessage, setInputMessage) => {
    const options = {
        method: "POST",
        body: JSON.stringify({
            message: inputMessage
        }),
        headers: {
            "Content-Type": "application/json"
        }
    };

    try {
        const temp_input = inputMessage;
        setInputMessage("");

        const response = await fetch('http://localhost:4000/v1/chat/completions', options);

        if (!response.ok) {
            setInputMessage(temp_input);
            throw new Error('Network response was not ok ' + response.statusText);
        }

        const data = await response.json();
        console.log(data);

    } catch (error) {
        console.error('Fetch error:', error);
    }
};
