import { Customer } from '../entity/customer/customer';

export interface CustomerRepository {
  findOneById(id: number): Promise<Customer>;
  findAll(): Promise<Array<Customer>>;
}