const grpc = require('grpc')

const services = require('../server/proto/dummy_grpc_pb')

const main = () => {
  const client = new services.DummyServiceClient(
    'localhost:50052',
    grpc.credentials.createInsecure()
  )
  console.log('Client running')
}

main()
