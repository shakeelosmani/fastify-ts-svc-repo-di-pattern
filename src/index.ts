import  { fastify, FastifyReply, FastifyRequest } from 'fastify';
import { CustomerService } from './service/CustomerService';
import { ServiceIdentifier, DIContainer } from './utils/DIContainer';

const server = fastify();


server.get('/ping', async (req: FastifyRequest, rep: FastifyReply) => {
    return `pong at ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`;
});

server.get('/customer', async (req: FastifyRequest, rep: FastifyReply) => {
    const cs = DIContainer.get<CustomerService>(ServiceIdentifier.CUSTOMERSVC);
    const customers = await cs.findAllCustomers();
    return customers;
})

server.get('/customer/:customerId', async (req:FastifyRequest, res: FastifyReply) => {
    const cs = DIContainer.get<CustomerService>(ServiceIdentifier.CUSTOMERSVC);
    const customer = await cs.findCustomerById((<any> req.params).customerId)
    return customer;
});

server.listen(8082, (err, addr) => {
    if(err) {
        console.error(err);
        process.exit(1);
    } 

    console.log(`server started at ${addr}`);
})