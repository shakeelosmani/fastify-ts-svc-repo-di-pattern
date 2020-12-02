import { Container } from 'inversify';
import "reflect-metadata";
import { CustomerService } from '../service/CustomerService';
import { CustomerServiceImpl } from '../service/CustomerServiceImpl';
import { CustomerRepository } from '../repository/CustomerRepository';
import { CustomerRepositoryImpl } from '../repository/impl/CustomerRepositoryImpl';


export const ServiceIdentifier = {
  CUSTOMERSVC: Symbol.for("CustomerService"),
  CUSTOMERREPO: Symbol.for("CustomerRepository")
}

export const DIContainer = new Container();
DIContainer.bind<CustomerRepository>(ServiceIdentifier.CUSTOMERREPO).to(
  CustomerRepositoryImpl
);
DIContainer.bind<CustomerService>(ServiceIdentifier.CUSTOMERSVC).to(CustomerServiceImpl);

