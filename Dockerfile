FROM node:18

WORKDIR ./app

COPY tailwind.config.ts .
COPY postcss.config.js .


COPY package* .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm","run","dev"]






