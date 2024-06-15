import { Router } from "express";
import {
  getInvoices,
  getInvoiceById,
  createInvoice,
  // updateInvoice,
  // deleteInvoice,
  // getAllProducts,
} from "../controllers/invoiceController";

const router = Router();

router.get("/invoices", getInvoices);
router.get("/invoices/:id", getInvoiceById);
router.post("/invoices", createInvoice);
// router.put("/invoices/:id", updateInvoice);
// router.delete("/invoices/:id", deleteInvoice);
// router.get("/products", getAllProducts);

export default router;
