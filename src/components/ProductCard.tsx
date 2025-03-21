"use client";
import { useState } from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Chip,
  Stack,
  Box,
  styled,
  SvgIcon,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { Product } from "@/types/product";
import { styled as muiStyled } from "@mui/material/styles";

const StyledCard = styled(Card)({
  width: "183px",
  borderRadius: "8px",
  position: "relative",
  transition: "transform 0.2s",
  "&:hover": {
    transform: "translateY(-4px)",
  },
});

const ImageContainer = styled(Box)({
  position: "relative",
  height: 179,
  width: "100%",
});

const TopLabelContainer = styled(Stack)({
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: 1,
});

const BottomLabelContainer = styled(Stack)({
  position: "absolute",
  bottom: 0,
  left: 0,
  zIndex: 1,
  display: "flex",
  flexDirection: "row",
  gap: "0px",
});

const WishlistButton = styled(IconButton)({
  position: "absolute",
  top: 8,
  right: 8,
  width: 32,
  height: 32,
  zIndex: 1,
  backgroundColor: "rgba(255, 255, 255, 0.8)",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 1)",
  },
});

const ShippingChip = muiStyled(Chip)({
  backgroundColor: "#00a650",
  color: "white",
  height: "20px",
  borderRadius: 0,
  "& .MuiChip-label": {
    fontWeight: 700,
    fontSize: "10px",
  },
  "& .MuiChip-icon": {
    color: "white",
    "& img": {
      width: "14px",
      height: "12px",
    },
  },
});

const GiftChip = styled(Chip)({
  backgroundColor: "#FFE2B8",
  color: "#CC7600",
  height: "20px",
  borderRadius: "0px 8px 0px 0px",
  "& .MuiChip-label": {
    fontWeight: 510,
    fontSize: "10px",
  },
  "& .MuiChip-icon": {
    "& img": {
      width: "12px",
      height: "12px",
    },
  },
});

interface FlashSaleLabelProps {
  isFlashSale?: boolean;
}

const FlashSaleLabel = styled("div")<FlashSaleLabelProps>(
  ({ isFlashSale }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 6px",
    marginTop: "-12px",
    marginBottom: "8px",
    height: "18px",
    minHeight: "18px",
    backgroundColor: isFlashSale ? "#FFE7ED" : "transparent",
    borderRadius: isFlashSale ? "6px" : "0",
  })
);

const FlashSaleTime = styled(Typography)({
  color: "#E62F59",
  fontSize: "10px",
  fontWeight: 510,
});

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const formatPrice = (price: number) => {
    const formattedNumber = price
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return (
      <span>
        <span style={{ fontWeight: 700 }}>₫</span> {formattedNumber}
      </span>
    );
  };

  const formatSoldCount = (count: number) => {
    return count >= 1000 ? `${(count / 1000).toFixed(1)}k` : count.toString();
  };

  return (
    <StyledCard elevation={2}>
      <ImageContainer>
        <Image
          src={product.image}
          alt={product.title}
          fill
          style={{ objectFit: "cover" }}
        />

        <TopLabelContainer>
          {product.labels?.discount && (
            <Chip
              label={`-${product.labels.discount}%`}
              size="small"
              color="error"
              sx={{
                borderRadius: "8px 0 6px 0",
                backgroundColor: "#F04438",
                fontWeight: 700,
                height: "24px",
                "& .MuiChip-label": {
                  px: 1,
                  fontSize: "10px",
                },
              }}
            />
          )}
        </TopLabelContainer>

        <BottomLabelContainer>
          {product.labels?.freeShipping && (
            <ShippingChip
              icon={
                <div className="flex items-center">
                  <Image
                    src="/icons/shipping.svg"
                    width={14}
                    height={12}
                    alt="shipping"
                  />
                </div>
              }
              label="FREE"
              size="small"
            />
          )}
          {product.labels?.gift && (
            <GiftChip
              icon={
                <div className="flex items-center">
                  <Image
                    src="/icons/gift.svg"
                    width={12}
                    height={12}
                    alt="gift"
                  />
                </div>
              }
              label="Quà tặng"
              size="small"
            />
          )}
        </BottomLabelContainer>

        <WishlistButton
          onClick={() => setIsWishlisted(!isWishlisted)}
          size="small"
        >
          {isWishlisted ? (
            <FavoriteIcon
              color="error"
              sx={{
                height: 16,
                width: 16,
              }}
            />
          ) : (
            <FavoriteBorderIcon
              sx={{
                height: 16,
                width: 16,
              }}
            />
          )}
        </WishlistButton>
      </ImageContainer>

      <CardContent
        sx={{
          padding: 1,
          "&:last-child": {
            paddingBottom: "8px",
          },
        }}
      >
        <Stack spacing={1}>
          <FlashSaleLabel isFlashSale={product.labels?.flashSale}>
            {product.labels?.flashSale && (
              <>
                <Image
                  src="/icons/flashsale.svg"
                  width={61}
                  height={14}
                  alt="flash sale"
                />
                <FlashSaleTime>•20:20•12/12</FlashSaleTime>
              </>
            )}
          </FlashSaleLabel>

          <Typography
            variant="subtitle2"
            sx={{
              minHeight: "40px",
              gap: "4px",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              mb: 1,
            }}
          >
            {product.title}
          </Typography>
          <div className="mt-2">
            <Typography
              variant="h6"
              color="#F79009"
              fontWeight="700"
              sx={{
                paddingTop: "2px",
                fontSize: "14px",
              }}
            >
              {formatPrice(product.price)}
            </Typography>
          </div>

          {product.totalSold && (
            <Typography variant="caption" color="text.secondary">
              {formatSoldCount(product.totalSold)} đã bán
            </Typography>
          )}
        </Stack>
      </CardContent>
    </StyledCard>
  );
}
