FROM philplckthun/node-yarn

ENV PORT 80
EXPOSE 80

WORKDIR /home
ADD package.json yarn.lock /home/
RUN yarn install --pure-lockfile --no-emoji
ADD . /home/

RUN yarn run build:production
CMD ["node", "./lib/server/index.js"]

