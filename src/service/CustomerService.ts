import { Customer } from "../entity/customer/customer";

export interface CustomerService {
  findCustomerById(id: number): Promise<Customer>;
  findAllCustomers(): Promise<Array<Customer>>;
}