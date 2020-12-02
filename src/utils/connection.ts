import mysql, {Connection} from 'mysql';

export class DbConnection {
  private host: string = 'localhost';
  private userName: string = 'root';
  private password: string = 'root';
  private dbName: string = 'classicmodels';

  public connection: Connection;

  /**
   *
   */
  constructor() {
    this.connection = mysql.createConnection({
      host: this.host,
      user: this.userName,
      password: this.password,
      database: this.dbName
    });
  }

}