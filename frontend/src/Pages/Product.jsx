import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadscrum from "../Components/Breadcrums/Breadscrum";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox";
import RelatedProducts from "../Components/RelatedProducts/RelatedProducts";

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { Id } = useParams();
  const cleanProductId = Id.replace(/\D/g, "");
  const numericProductId = Number(cleanProductId);
  const product = all_product.find((e) => e.id === numericProductId);

  return (
    <div>
      <Breadscrum product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProducts product={product} />
    </div>
  );
};

export default Product;
