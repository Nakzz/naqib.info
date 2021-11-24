#!/usr/bin/bash

print_usage(){
    echo "TODO: complete"
}

# Get command line args
while getopts "c:h" flag; do
    case "${flag}" in 
    c) COMMAND=${OPTARG};;
    h) print_usage
    exit 1;;
    esac
done

if [ -z "$COMMAND" ]; then
    echo "Error. Set up command using -c flag"
    exit 1;
fi

case "${COMMAND}" in
    "build" )
        echo "Building now"
        # version=$(docker run --rm -v "$(pwd):/repo" gittools/gitversion:5.6.6 /repo | jq -r ".FullSemVer" | sed 's/+/-/')
        # echo "Sem Version: $version"

        # docker run --env-file ./config/.env.prod -p 5000:5000  naqibprio/naqibinfo_cms:0.1.0-94
        (while true; do echo "hahaha"; sleep 1; done)&
        RUNNING_PID=$!
        sleep 2
        kill ${RUNNING_PID}
        echo "killed"
        ;;
    
    "deploy" )
        echo "DEPLOYING TO DOCKERHUB NOW"
        version=$(docker run --rm -v "$(pwd):/repo" gittools/gitversion:5.6.6 /repo | jq -r ".FullSemVer" | sed 's/+/-/')
        echo "Sem Version: $version"
        docker login -u naqibprio -p Id2009170023 

        docker build --progress plain -t naqibprio/naqibinfo_cms:$version ./cms_keystone 

        # run cms with prod url
        (docker run naqibprio/naqibinfo_cms:$version --env-file ./config/.env.prod -p 5000:5000)&
        RUNNING_PID=$!

        docker build --progress plain -t naqibprio/naqibinfo:$version ./client_nextjs 
        kill ${RUNNING_PID}
        echo "Killed Running docker, hoping Client was able to pull information it needed"

        docker push naqibprio/naqibinfo_cms:$version
        docker push naqibprio/naqibinfo:$version

        ;;

    "prod" )
        echo "STARTING FOR PRODUCTION"
        docker-compose -f prod-docker-compose.yml up -d
        ;;

    *) echo "Incorrect command";;
esac
    