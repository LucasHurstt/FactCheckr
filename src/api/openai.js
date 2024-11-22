import axios from 'axios';
import config from '../config';

const OPENAI_API_KEY = config.OPENAI_API_KEY;

export async function analyzeContentUsingGPT(articles, userQuery) {
  if (!config.ENABLE_API_QUERIES) {
    console.log('API queries are disabled.');
    return { summary: 'API queries are currently disabled.', sources: [] };
  }

  try {
    const context = articles.map(article => `${article.name}: ${article.snippet}`).join('\n\n');
    const prompt = `Based on the following content, provide a factual response to the question: ${userQuery}\nContent:\n${context} include True. or False. before the response.`;

    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-4',
        messages: [{ role: 'user', content: prompt }],
        max_tokens: 300,
        temperature: 0.5,
      },
      {
        headers: { 'Authorization': `Bearer ${OPENAI_API_KEY}`, 'Content-Type': 'application/json' },
      }
    );

    const summary = response.data.choices[0].message.content.trim();
    return { summary, sources: articles };
  } catch (error) {
    console.error('Error querying OpenAI GPT API:', error.response?.data || error.message);
    return { summary: 'Unable to generate a response at this time.', sources: [] };
  }
}