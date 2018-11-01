docker build . -t hypnobox/github-search
docker run -p 8080:80 hypnobox/github-search