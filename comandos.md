*Baixar imagem:*
docker pull (imagem)

*Criar container:*
docker run -d -p 8080:80 dockersamples/static-site [comandos]
          //background
             //porta
-it = interative
--name = definir o nome
--network = defini a rede

*Remover container:*
docker rm (id do container) --force
                            //se ele estiver rodando ainda

*Parar container:*
docker stop (id do container)
docker stop $(docker container ls -q) // para todos os containers

*Pausar container*
docker pause (id do container)

*Despausar Container:*
docker unpause(id do container)

*Listar Containers:*
docker ps
-s mostra o tamanho também
-a mostra todos

*Executar algo no Container:*
docker exec *-it* (id do container) (algo para executar)[bash, por exemplo]

*Verificar a porta:*
docker port (id do container)

*Listar imagens:*
docker images

*Inspecionar:*
docker inspect (id da imagem)

*Verificar camadas:*
docker history (id da imagem)

*Cria a imagem:*
docker build -t (nomeDaImagem) (path [normalmente .])
            //-t para dar o nome

*Remover imagem*
docker rmi (imagem)

*Logar no docker hub*
docker login -u (usuario)

*Enviar imagem pro docker hub*
docker push (nome do usuário/path da imagem:versão)

*Trocar o nome de uma imagem*
docker tag (nome antgo da imagem) (nome novo da imagem)

*Bind Mounts (armazenar arquivos do container no computador)* 
docker run -it --mount type=bind,source=(PATH),target=/app ubuntu bash *
docker run -it -v /Users/hoengen/Documents/dev/docker/volumeDocker:/app ubuntu bash  

*Volumes*
docker run -it --mount source=meu-volume,target=/app ubuntu bash

*tmpfs (somente linux)(serve para arquivos temp)*
docker run -it --tmpfs=/app ubuntu bash

*Verificar volumes*
docker volume ls

*Criar volume*
docker volume create (name)

*Pasta de volumes do docker*
cd /var/lib/docker

**DOCKER FILE**

*FROM*
Define a imagem base

*WORKIDIR*
Defini diretório padrão

*COPY*
Copia do computador para o container

*RUN*
Executa quando a imagem é criada

*ENTRYPOINT*
Executa quando o container for executado a partir da imagem criada

*EXPOSE*
Expõe as portas usadas

*ARG*
Argumento que pode ser passado para o código, apenas usado em tempo de build

*ENV*
Argumento que pode ser passado para o código, utilizado dentro do container posteriormente

**REDE**

*Listar as redes automaticas do docker*
docker network ls

*Criar nova rede*
docker network create --driver (nome do driver) (nome da rede)

*Rede BRIDGE*
Rede especifica para containers

*Rede NONE*
Sem interface de rede para o container

*Rede HOST*
Se conecta a rede do host, tornado desnecessário o mapeamento de porta,
pois você está na rede do host

**DOCKER COMPOSE**
Ferramenta de composição de containers

*Docker-compose up*
Sobe o container

*Docker-compose ps*
Mostra o que foi criado

*Docker-compose down*
Derruba o docker compose

*depends_on*
Faz um arquivo depender do outro, sendo executado apenas depois dele