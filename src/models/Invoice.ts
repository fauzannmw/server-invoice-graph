export interface SoldProduct {
  id: number;
  name: string;
  picture: string;
  stock: number;
  price: number;
  quantity: number;
}

export interface CreateInvoiceRequest {
  invoice_number: string;
  customer_name: string;
  salesperson_name: string;
  product_sold: SoldProduct[];
  invoice_notes: string;
  total_amount: number;
  invoice_date: string;
}
