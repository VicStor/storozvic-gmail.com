const grpc = require('grpc')
const main = () => {
  const server = new grpc.Server()

  server.bind('127.0.0.1:50052', grpc.ServerCredentials.createInsecure())

  server.start()
  console.log('server running')
}

main()
