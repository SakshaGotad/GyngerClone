import React from "react";
import Footer from "@/components/Footer"; // Adjust path if needed
import { getData } from "@/lib/getData";

const FooterPage = async () => {
  const response = await getData({
    contentType: "footer",
    params: {
      include_fallback: true,
      include_branch: false,
    },
  });

  console.log(response);
  const footerData = response?.footer_links?.[0]?.footer_data || null;

  return       <Footer data={footerData} />

};

export default FooterPage;
