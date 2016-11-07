/**
   _____ _                _       _   _                 _        _           _
  / ____| |              | |     | \ | |               (_)      | |         | |
 | |    | |__  _   _  ___| | __  |  \| | ___  _ __ _ __ _ ___   | |__   ___ | |_
 | |    | '_ \| | | |/ __| |/ /  | . ` |/ _ \| '__| '__| / __|  | '_ \ / _ \| __|
 | |____| | | | |_| | (__|   <   | |\  | (_) | |  | |  | \__ \  | |_) | (_) | |_
  \_____|_| |_|\__,_|\___|_|\_\  |_| \_|\___/|_|  |_|  |_|___/  |_.__/ \___/ \__|

  ~ Chuck Norris can write multi-threaded applications with a single thread! ~
*/

import { getJoke } from './service';
const baseUrl = 'http://api.icndb.com/jokes/random';

getJoke(baseUrl)
  .then((joke) => {
    console.log(joke.categories);
  })
  .catch(err => {
    console.log(err);
  });