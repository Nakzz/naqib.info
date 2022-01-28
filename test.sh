# docker-compose up -d --force-recreate client
# docker logs $(docker ps -aqf "name=client_nextjs")

docker-compose build cms
docker-compose up -d --force-recreate cms
docker logs $(docker ps -aqf "name=cms_keystone")


# docker run -it $(docker ps -aqf "name=cms_keystone") /bin/sh