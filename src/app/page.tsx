"use client";
import { useState } from "react";
import {
  Container,
  Grid,
  Pagination,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { ProductCard } from "@/components/ProductCard";
import { mockProducts } from "@/data/mock-products";

const ITEMS_PER_PAGE = 12;

export default function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(mockProducts.length / ITEMS_PER_PAGE);

  const currentProducts = mockProducts.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Container sx={{ py: 4 }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
      >
        <Typography variant="h5" fontWeight="bold">
          Sản phẩm nổi bật
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {mockProducts.length} sản phẩm
        </Typography>
      </Stack>
      <Grid container spacing={3} mb={4}>
        {currentProducts.map((product) => (
          <Grid
            item
            key={product.id}
            xs={6}
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

      <Stack direction="row" justifyContent="center" sx={{ mt: 4, mb: 8 }}>
        <Pagination
          count={totalPages}
          page={page}
          onChange={handlePageChange}
          color="primary"
          size={isMobile ? "small" : "medium"}
          siblingCount={isMobile ? 0 : 1}
          boundaryCount={isMobile ? 1 : 2}
          showFirstButton
          showLastButton
        />
      </Stack>
    </Container>
  );
}
