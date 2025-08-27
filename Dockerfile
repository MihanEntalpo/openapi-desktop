FROM electronuserland/builder:latest
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
ENTRYPOINT ["npm", "run"]
