FROM node:18

# Set working directory
WORKDIR /usr/src/app

# Copy package.json và package-lock.json
COPY package*.json ./

# Cài dependencies
RUN npm install --legacy-peer-deps

# Cài thêm nodemon global (để container nào cũng chạy được)
RUN npm install -g nodemon
# Copy toàn bộ source code vào container
COPY . .

# Expose port server
EXPOSE 8000

# Start server
CMD ["npm", "run", "dev"]
