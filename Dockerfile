FROM node:16
WORKDIR /var/app
COPY . .
RUN npm i
RUN npm run build
ENTRYPOINT ["npm", "run"]
EXPOSE 3000
CMD ["start"]
