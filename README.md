# Time Tracker

Track your daily routine and get an overview on how much time you spend on each task.

## Getting started

```
git clone https://github.com/leeyt54/Time.git
npm i && cd client && npm i && cd ..
```

You will need to add a file called `keys.js` inside a folder called `config`
E.g.
```
config/key.js
```

Inside `keys.js` file, paste this in
```
module.exports = {
  mongoURI: "[YOUR_CONNECTION_STRING]"
};
```

Replace [YOUR_CONNECTION_STRING] with your MongoDB connection string

Then, you can run the app using
```
npm run dev
```

The frontend will run on `localhost:3000` and the backend will run on `localhost:5000`
