FROM node:20 AS build

WORKDIR /app

# Install root dependencies and frontend dependencies
COPY package.json package-lock.json ./
RUN npm install
COPY frontend/package.json frontend/package-lock.json ./frontend/
RUN cd frontend && npm install npm run build

# Copy backend and frontend build
COPY . .

# Set NODE_ENV to production
ENV NODE_ENV=production

# Expose port (match your backend/server.js)
EXPOSE 3000

# Start the backend (which serves the frontend build)
CMD ["npm", "run", "start"]