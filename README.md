### Howto start

1. Install frontend dependencies `cd frontend` `npm install`
2. Install backend dependencies `cd backend` `npm install`
3. Start both fron and backend: `cd backend` `npm run dev`

### Howto build release application

1. Just build the docker container `docker build -t <something> .`
2. Start the container. It will expose the application on port 8000 `docker run -p 8000 <someting>`