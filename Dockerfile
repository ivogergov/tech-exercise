FROM node:slim
RUN apt-get update
RUN apt-get install libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb -y

WORKDIR /usr/app
RUN npm install -g ts-node
COPY ./ ./

RUN npm install

# Run tests & display all results
RUN npm run test -- --watchAll=false --coverage --silent --json > test-results.json

# Show test-results.json
RUN cat test-results.json

CMD ["npm", "start"]
