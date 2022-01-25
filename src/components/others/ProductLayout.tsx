import React from 'react';
import ProductContain from '../ProductContain';
import ProductFilter from '../ProductFilter';

const ProductLayout: React.FC = () => {
  return (
    <section className="products-page mt-24">
      <div className="container">
        <ProductFilter />
        <ProductContain />
      </div>
    </section>
  );
};

export default ProductLayout;
