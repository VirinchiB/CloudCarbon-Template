FROM node:alpine
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
RUN npm i
RUN npm install react-bootstrap bootstrap@5.1.3
CMD ["npm", "run", "build"]