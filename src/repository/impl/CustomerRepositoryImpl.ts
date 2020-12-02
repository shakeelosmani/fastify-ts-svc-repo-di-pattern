import { injectable } from "inversify";
import { Customer } from "../../entity/customer/customer";
import { CustomerRepository } from "../CustomerRepository";
import { DbConnection } from "../../utils/connection";
import { FieldInfo, MysqlError } from "mysql";


@injectable()
export class CustomerRepositoryImpl implements CustomerRepository {

  private _dbConnection: DbConnection;

  /**
   *
   */
  constructor() {
    this._dbConnection = new DbConnection();
  }

  async findOneById(id: number): Promise<Customer> {
    return new Promise((resolve, reject) => {
      this._dbConnection.connection.query(
        "SELECT * FROM `customers` WHERE `customerNumber` = ?",
        [id],
        (
          error: MysqlError | null,
          res: any,
          fields: Array<FieldInfo> | undefined
        ) => {
          if (!error) {
            return resolve(new Customer(res[0]));
          } else {
            return reject(error);
          }
        }
      );
    });
  }
  
  async findAll(): Promise<Array<Customer>> {
    return new Promise((resolve, reject) => {
      this._dbConnection.connection.query("SELECT * FROM `customers`", (error: MysqlError | null, res: any, fields: Array<FieldInfo> | undefined) => {
        if (!error) {
          const customers:Array<Customer> = [];
          res.map((customer: any) => {
            customers.push(new Customer(customer));
          });
          return resolve(customers);
        }
        else {
          return reject(error);
        }
      });
    });
  }

}