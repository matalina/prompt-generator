import { Handler } from '@netlify/functions';

export const handler: Handler = async (event, context) => {
    const response = await fetch(`http://api.unsplash.com/photos/random?collections=w86QgkX5lAw&client_id=${process.env.ACCESS_KEY}`, {
    method: 'get',
    headers: {
      Authorization: `Client-ID ${process.env.ACCESS_KEY}`
    }
  });
  const data = await response.json();

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  }
}
