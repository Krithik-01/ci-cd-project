# Stage 1: Build the React app
FROM node:16-alpine as build-stage

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies for React app
RUN npm install

# Copy the rest of your application code
COPY . .

# Build the React app
RUN npm run build

# Stage 2: Set up NGINX to serve the React app
FROM nginx:alpine as production-stage

# Copy the build folder from the build stage to the NGINX directory for serving
COPY --from=build-stage /app/build /usr/share/nginx/html

# Expose port 80 (NGINX default port)
EXPOSE 80

# NGINX configuration (to serve React app)
CMD ["nginx", "-g", "daemon off;"]
