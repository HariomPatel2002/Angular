FROM node:18

WORKDIR /node_hotels

# Copy only package files first (allows caching)
COPY package*.json ./

# Install dependencies inside the Linux container
RUN npm install

# Now copy the rest of your project
COPY . .

EXPOSE 5000

CMD ["node", "server.js"]
