import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { CreateInvoiceRequest } from "../models/Invoice";

const prisma = new PrismaClient();

export const createInvoice = async (req: Request, res: Response) => {
  const {
    invoice_number,
    customer_name,
    salesperson_name,
    product_sold,
    invoice_notes,
    total_amount,
    invoice_date,
  } = req.body as CreateInvoiceRequest;

  try {
    const newInvoice = await prisma.invoice.create({
      data: {
        invoice_number,
        customer_name,
        salesperson_name,
        invoice_notes,
        total_amount,
        invoice_date: new Date(invoice_date),
        products_sold: {
          create: product_sold.map((product) => ({
            name: product.name,
            picture: product.picture,
            stock: product.stock,
            price: product.price,
            quantity: product.quantity,
            // invoice_number,
          })),
        },
      },
    });
    res.status(201).json(newInvoice);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

export const getInvoices = async (req: Request, res: Response) => {
  try {
    const invoices = await prisma.invoice.findMany({
      include: {
        products_sold: true,
      },
    });

    if (invoices.length === 0) {
      return res.status(404).json({ message: "No invoices found" });
    }

    res.json(invoices);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const getInvoiceById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const invoice = await prisma.invoice.findUnique({
      where: { id },

      include: { products_sold: true },
    });

    if (!invoice) {
      return res.status(404).json({ message: "Invoice not found" });
    }

    res.json(invoice);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};
