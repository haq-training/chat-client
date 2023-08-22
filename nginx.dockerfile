# Bundle static assets with nginx
FROM nginx:1.21.4-alpine as production
ENV NODE_ENV production
# Copy built assets from builder
COPY build /usr/share/nginx/html
# Add your nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
RUN chmod -R 777 /etc/nginx/
RUN chmod -R 777 /usr/share/nginx/
# Expose port
EXPOSE 80
# Start nginx
CMD ["nginx", "-g", "daemon off;"]
