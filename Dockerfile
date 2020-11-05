FROM node:15.1.0 AS frontend

COPY ./frontend /frontend
WORKDIR /frontend

RUN npm install && npm run build

FROM node:15.1.0 AS backend

COPY ./backend /app
COPY --from=frontend /frontend/build /app/build
WORKDIR /app

RUN npm install
EXPOSE 8000

CMD ["npm", "start"]