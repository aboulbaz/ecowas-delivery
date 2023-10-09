# # Use the official Node.js image as the base image
FROM node:18-alpine as builder

# Set the working directory in the container
WORKDIR /app

COPY . ./

# Copy package.json and package-lock.json to the working directory

# Install project dependencies
RUN npm install

# # # Build the Next.js application
RUN npm run build

# ###############################################################

# # Stage 2: Serve the built application

FROM node:18-alpine

# # Set the working directory in the container
WORKDIR /app

# # Copy the built application from the previous stage
COPY --from=builder /app .

# # Expose the port that Next.js uses (default: 3000)
EXPOSE 3000

# # Run the Next.js application
CMD ["npm", "start"]
