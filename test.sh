# docker-compose up -d --force-recreate client
# docker logs $(docker ps -aqf "name=client_nextjs")

docker-compose build client
docker-compose up -d --force-recreate client
docker logs $(docker ps -aqf "name=client")


# docker run -it $(docker ps -aqf "name=cms_keystone") /bin/sh