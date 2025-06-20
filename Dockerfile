FROM node:20 AS build

WORKDIR /app

# Install root dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the entire frontend directory (including index.html, src/, public/, etc.)
COPY frontend ./frontend

# Build the frontend
RUN cd frontend && npm install && npm run build

# Copy the rest of the backend code
COPY . .

# Set NODE_ENV to production
ENV NODE_ENV=production

EXPOSE 3000

CMD ["npm", "run", "start"]