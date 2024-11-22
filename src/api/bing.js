import axios from 'axios';
import config from '../config';

const BING_SEARCH_API_KEY = config.BING_SEARCH_API_KEY;

export async function getWebResults(query) {
  if (!config.ENABLE_API_QUERIES) {
    console.log('API queries are disabled.');
    return { articles: [], videos: [] };
  }

  try {
    const response = await axios.get('https://api.bing.microsoft.com/v7.0/search', {
      params: { q: query, responseFilter: 'Webpages,Videos', count: 5 },
      headers: { 'Ocp-Apim-Subscription-Key': BING_SEARCH_API_KEY },
    });

    const articles = response.data.webPages?.value || [];
    const videos = response.data.videos?.value || [];
    return { articles, videos };
  } catch (error) {
    console.error('Error fetching web results:', error.response?.data || error.message);
    return { articles: [], videos: [] };
  }
}