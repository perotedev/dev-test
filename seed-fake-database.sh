#!/bin/bash
INIT="\e[01;33mPopulando as collections do MongoDB\e[00m 👀\n"
FINISH="\e[01;32mFake-database semeado com sucesso!\e[00m 😎"
COLLECTION_FINISH="\e[01;36mCollection populada:\e[00m"

echo -e "\n$INIT"

# Popula Pessoa
docker-compose exec mongo /bin/bash -c \
    'exec mongo devtest -u root -p example --authenticationDatabase admin ../../database-scripts/fake-pessoas.js'
echo -e "$COLLECTION_FINISH Pessoa ✅\n"

# Popula Aluno
docker-compose exec mongo /bin/bash -c \
    'exec mongo devtest -u root -p example --authenticationDatabase admin ../../database-scripts/fake-alunos.js'
echo -e "$COLLECTION_FINISH Aluno ✅\n"

echo -e "$FINISH\n"