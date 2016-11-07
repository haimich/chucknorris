/**
   _____ _                _       _   _                 _        _           _
  / ____| |              | |     | \ | |               (_)      | |         | |
 | |    | |__  _   _  ___| | __  |  \| | ___  _ __ _ __ _ ___   | |__   ___ | |_
 | |    | '_ \| | | |/ __| |/ /  | . ` |/ _ \| '__| '__| / __|  | '_ \ / _ \| __|
 | |____| | | | |_| | (__|   <   | |\  | (_) | |  | |  | \__ \  | |_) | (_) | |_
  \_____|_| |_|\__,_|\___|_|\_\  |_| \_|\___/|_|  |_|  |_|___/  |_.__/ \___/ \__|

  ~ Chuck Norris can write multi-threaded applications with a single thread! ~
*/

import * as express from 'express';
import { getJoke } from './service';
const baseUrl = 'http://api.icndb.com/jokes/random';

let app = express();

app.get('/', async (req, res) => {
  try {
    let joke = await getJoke(baseUrl);
    res.json(joke);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.listen(3000, () => {
  console.log('App listening on port 3000!');
});