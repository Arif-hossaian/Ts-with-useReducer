import React, { useState } from 'react';
import Slider from 'rc-slider';
import Tooltip from 'rc-tooltip';
import Checkbox from './Checkbox';
import Rating from './Rating/Rating';

const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);
const { Handle } = Slider;

const handle = (props: {
  [x: string]: any;
  value: any;
  dragging: any;
  index: any;
}) => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={value}
      visible={dragging}
      placement="top"
      key={index}
    >
      <Handle value={value} {...restProps} />
    </Tooltip>
  );
};

export interface CheckboxProps {
  type: any;
  label?: any;
  onChange?: any;
  id: any;
  name: any;
  count: any;
}

const productsTypes = [
  {
    id: '1',
    name: 'T-Shirts',
    count: '172',
  },
  {
    id: '2',
    name: 'Sweatshirts',
    count: '131',
  },
  {
    id: '3',
    name: 'Tank Tops',
    count: '56',
  },
  {
    id: '4',
    name: 'Dress shirts',
    count: '8',
  },
];

const ProductFilter = () => {
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [rate, setRate] = useState(3);
  return (
    <form className="products-filter">
      <button
        type="button"
        onClick={() => setFiltersOpen(!filtersOpen)}
        className={`products-filter__menu-btn ${
          filtersOpen ? 'products-filter__menu-btn--active' : ''
        }`}
      >
        Add Filter <i className="icon-down-open"></i>
      </button>

      <div
        className={`products-filter__wrapper ${
          filtersOpen ? 'products-filter__wrapper--open' : ''
        }`}
      >
        <div className="products-filter__block">
          <button type="button">Product type</button>
          <div className="products-filter__block__content">
            {productsTypes.map((type) => (
              <Checkbox
                key={type.id}
                name="product-type"
                label={type.name}
                type={undefined}
                onChange={undefined}
              />
            ))}
          </div>
        </div>

        <div className="products-filter__block">
          <button type="button">Rating of Products</button>
          <div className="products-filter__block__content">
            <Rating rate={rate} setRate={setRate} />
          </div>
        </div>

        <button className="mt-1 w-full bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg">
          Clear Filter
        </button>
      </div>
    </form>
  );
};

export default ProductFilter;
