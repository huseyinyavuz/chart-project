export const API_URL = 'http://5cfa8babf26e8c00146d095e.mockapi.io/chart';

export const fetchData = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      return data;
    } catch (e) {
      console.log(e);
    }
};