FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install --legacy-peer-deps \
    && npm install ajv@6 ajv-keywords@3 --save-exact

COPY . .

ENV HOST=0.0.0.0
EXPOSE 3000
CMD ["npm", "start"]
