  import React, { useState } from "react";
  import Header from "./components/Header/Header";

  const ProductDetail = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
      <>
        <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
        <div className="h-[1000px]">
          <h3>sdawfawf</h3>
        </div>
      </>
    );
  };

  export default ProductDetail;
