import { useEffect, useState } from "react";
import Brand from "../Brand/Brand";

const Brands = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetch("brands.json")
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);
  return (
    <div className="mt-32 mb-32">
      <h1 className="text-center text-5xl font-bold mb-16 text-[#00ADB5]">Brands</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container rounded-2xl border-2 border-[#00ADB5] mx-auto  gap-10 bg-gradient-to-r from--50 to--200 ">
        {brands.map((brand) => (
          <Brand key={brand.id} brand={brand}></Brand>
        ))}
      </div>
    </div>
  );
};

export default Brands;