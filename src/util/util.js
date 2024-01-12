export async function sendRequest(requestData) {
  const { method, path, body } = requestData;

  try {
    const response = await fetch(`http://localhost:5000${path}`, {
      method,
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const responseData = await response.json();

    return responseData;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
