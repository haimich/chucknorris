import * as request from 'request';

interface Joke {
  text: string;
  categories: string[];
}

export function getJoke(baseUrl: string): Promise<Joke> {
  return new Promise((resolve, reject) => {
    request(baseUrl, (err, response, body) => {
      if (err) {
        reject(err);
      } else {
        let joke = JSON.parse(body);
        resolve({
          text: joke.joke,
          categories: joke.categories
        });
      }
    });
  });
}