FROM mongo:5.0.1 as base
VOLUME /store

FROM build as dev
RUN /bin/bash -c 'apt-get update && apt-get install -y nano'