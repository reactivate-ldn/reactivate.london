FROM philplckthun/node-yarn

ENV PORT 80
ENV NODE_ENV "production"

EXPOSE 80
WORKDIR /home

ADD package.json yarn.lock /home/
RUN yarn install --pure-lockfile --no-emoji

ADD . /home/

RUN yarn run build:assets \
  && yarn run build:server \
  && yarn run build:client

CMD ["node", "./lib/server/index.js"]

