# Use the official Node.js image as the base image
FROM node:18-alpine as builder

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the entire project to the working directory
COPY . .

# Build the NestJS application
RUN npm run build

# Stage 2: Serve the built application
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the built application from the previous stage
COPY --from=builder /app .

# Expose the port that NestJS uses (default: 5000)
EXPOSE 5000

# Run the NestJS application
CMD ["node", "dist/src/main.js"]
