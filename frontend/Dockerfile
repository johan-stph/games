# Use the official Nginx image from Docker Hub
FROM nginx:stable


# Copy the build files from the local machine to the container
COPY dist /usr/share/nginx/html

# Copy custom Nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 8080 for the container
EXPOSE 8080

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
