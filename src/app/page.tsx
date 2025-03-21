"use client";
import { Container, Grid } from "@mui/material";
import { ProductCard } from "@/components/ProductCard";

const mockProducts = [
  {
    id: "1",
    title: "Áo thun nam cotton cao cấp, form rộng thoáng mát",
    price: 199000,
    originalPrice: 399000,
    image: "/images/products/product-1.png",
    labels: {
      discount: 50,
      freeShipping: true,
      flashSale: true,
      gift: true,
    },
    totalSold: 28400,
  },
  {
    id: "2",
    title: "Quần jean nam form regular fit",
    price: 299000,
    originalPrice: 499000,
    image: "/images/products/product-2.png",
    labels: {
      discount: 40,
      gift: true,
    },
    totalSold: 15600,
  },
  {
    id: "3",
    title: "Áo khoác denim unisex form rộng",
    price: 459000,
    originalPrice: 659000,
    image: "/images/products/product-3.png",
    labels: {
      discount: 30,
      freeShipping: true,
      flashSale: true,
    },
    totalSold: 8900,
  },
  {
    id: "4",
    title: "Áo sơ mi nam dài tay",
    price: 259000,
    image: "/images/products/product-4.png",
    labels: {
      flashSale: true,
    },
    totalSold: 12300,
  },
  {
    id: "5",
    title: "Quần short nam thể thao thoáng mát",
    price: 159000,
    originalPrice: 259000,
    image: "/images/products/product-5.png",
    labels: {
      discount: 35,
      freeShipping: true,
    },
    totalSold: 5600,
  },
  {
    id: "6",
    title: "Áo polo nam có cổ vải cotton cao cấp",
    price: 299000,
    image: "/images/products/product-6.png",
    labels: {
      gift: true,
      freeShipping: true,
    },
    totalSold: 3200,
  },
  {
    id: "7",
    title: "Áo khoác bomber nam nữ form rộng",
    price: 559000,
    originalPrice: 799000,
    image: "/images/products/product-7.png",
    labels: {
      discount: 30,
      flashSale: true,
      freeShipping: true,
    },
    totalSold: 2100,
  },
  {
    id: "8",
    title: "Quần jogger nam nữ thể thao",
    price: 199000,
    image: "/images/products/product-8.png",
    totalSold: 9800,
  },
];

export default function Home() {
  return (
    <Container sx={{ py: 4 }}>
      <Grid container spacing={3}>
        {mockProducts.map((product) => (
          <Grid
            item
            key={product.id}
            xs={12}
            sm={6}
            md={4}
            lg={3}
            sx={{
              display: "flex",
              height: "100%",
            }}
          >
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
