import { Customer } from "../entity/customer/customer";
import { CustomerRepository } from '../repository/CustomerRepository';
import { ServiceIdentifier, DIContainer } from '../utils/DIContainer';

import { injectable } from 'inversify';
import { CustomerService } from './CustomerService';

@injectable()
export class CustomerServiceImpl implements CustomerService{
  private _customerRepository: CustomerRepository = DIContainer.get(ServiceIdentifier.CUSTOMERREPO);
  /**
   *
   */
  constructor() {
    
  }
  async findCustomerById(id: number): Promise<Customer> {
    return this._customerRepository.findOneById(id);
  }

  async findAllCustomers(): Promise<Array<Customer>> {
    return this._customerRepository.findAll();
  }
}