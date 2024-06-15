import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding Product...");

  const produkData = [
    {
      name: "Product 1",
      picture:
        "https://plus.unsplash.com/premium_photo-1661603403807-aa68bfcc983a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      stock: 100,
      price: 10.0,
      quantity: 1,
    },
    {
      name: "Product 2",
      picture:
        "https://plus.unsplash.com/premium_photo-1661603403807-aa68bfcc983a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      stock: 200,
      price: 20.0,
      quantity: 1,
    },
    {
      name: "Product 3",
      picture:
        "https://plus.unsplash.com/premium_photo-1661603403807-aa68bfcc983a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      stock: 300,
      price: 30.0,
      quantity: 1,
    },
  ];

  for (let i = 0; i < produkData.length; i++) {
    const { name, picture, stock, price, quantity } = produkData[i];
    await prisma.soldProduct.create({
      data: {
        name,
        picture,
        stock,
        price,
        quantity,
      },
    });
  }

  console.log("Seeding product Success.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
