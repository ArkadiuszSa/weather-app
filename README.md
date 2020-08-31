# weather-app

This is an application for checking the weather in a given location

## Features

- search location by phrase
- check basic weather parameters for location
- possibility to display a graph for user-selected parameters (the selected param is marked in blue)
- change of day for which weather is displayed

## Development

Weathers data are obtain using api: https://www.metaweather.com/​
To deal with cors was used proxy: https://cors-anywhere.herokuapp.com

Tech stack: react, redux, reselect, typescript, typesafe-actions redux-observable, jest and nivo charts.

You should first clone repo with command:

```
git clone git@github.com:ArkadiuszSa/weather-app.git
```

After this you should create `.env` file in deployment folder. For development you can copy content of `.env.template` file located int the same folder.

### Development with Docker

To create development docker container you need to run:

```
make build-dev
```

To start development server inside docker you need to run:

```
make dev
```

### Frontend scripts

To install packages you need to run:

```
yarn
```

To run tests you need to run:

```
yarn test
```

To run eslint lint you need to run:

```
yarn eslint
```

To run types check you need to run:

```
yarn check-types
```

You can run types check and eslint with:

```
yarn lint
```
