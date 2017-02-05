FROM philplckthun/node-yarn

ENV PORT 80
ENV BABEL_ENV "production"
ENV NODE_ENV "production"

EXPOSE 80
RUN mkdir -p /home
WORKDIR /home

ADD package.json yarn.lock /home/
RUN yarn install --pure-lockfile --no-emoji

ADD . /home/

RUN cd /home \
  && yarn run build:assets \
  && yarn run build:server \
  && yarn run build:client

CMD ["node", "./lib/server/index.js"]

