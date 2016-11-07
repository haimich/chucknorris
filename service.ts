import * as request from 'request';

interface Joke {
  text: string;
  categories?: string[];
}

export function getJoke(baseUrl: string, withCategories?): Promise<Joke> {
  return new Promise((resolve, reject) => {
    request(baseUrl, (err, response, body) => {
      if (err) {
        reject(err);
      } else {
        let parsed = JSON.parse(body).value;
        let joke: Joke = {
          text: parsed.joke
        };

        if (withCategories) {
          joke.categories = parsed.categories;
        }

        resolve(joke);
      }
    });
  });
}