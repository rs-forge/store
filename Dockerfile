FROM mongo:5.0.1
VOLUME /store
RUN /bin/bash -c 'apt-get update && apt-get install -y nano'