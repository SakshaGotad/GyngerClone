
import React from "react";
import { getData } from "@/lib/getData";
import ProductsClient from "../Products";

export default async function ProductsServer() {
  const response = await getData({
    contentType: "product_section",
    params: {
      include_fallback: true,
      include_branch: false,
    },
  });

  const products = response?.[0]?.products?.gynger_products ?? [];

  return <ProductsClient products={products} />;
}
