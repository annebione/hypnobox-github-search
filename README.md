# @hypnobox/Github-search

> Github repository search app provided for hypnobox using React, Redux, Redux Logic, Styled Components and Redux Router.

## Requires

* Docker 
* Jest (for test running)
* Yarn (dependency management)


## Running

Run ```run.sh``` or:

```sh
docker build . -t hypnobox/github-search
```

and then:

```sh
docker run -p 8080:80 hypnobox/github-search
```

Go to ```localhost:8080```.

### Running locally (Outside docker)

```sh
npm run start
```

## Running tests

Run 

```sh
npm run test
```

##  Generating docs

Run 

```sh
npm run docs
```

This app is powered by [Create React App](https://github.com/facebook/create-react-app)
