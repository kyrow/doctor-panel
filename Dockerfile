FROM node:20-alpine
ENV GENERATE_SOURCEMAP=false
ENV NODE_OPTIONS=--max_old_space_size=2048 

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

EXPOSE 8080

CMD [ "npm", "run", "preview" ]