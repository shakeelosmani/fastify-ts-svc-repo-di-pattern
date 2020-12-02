export class Customer {
  public customerNumber: number = 0;
  public customerName: string = '';
  public phone: string = '';

  /**
   *
   */
  constructor(data?: any) {
    if(data) {
      this.customerName = data.customerName;
      this.customerNumber = data.customerNumber;
      this.phone = data.phone;
    }
    
  }
}