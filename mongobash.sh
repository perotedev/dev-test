#!/bin/bash
#docker-compose exec mongo /bin/bash
docker-compose exec mongo /bin/bash -c \
    'exec mongo devtest -u root -p example --authenticationDatabase admin'
