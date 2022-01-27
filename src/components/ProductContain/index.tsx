import React, { useContext } from 'react';
import { ContextCart } from '../../context/Context';
import { Types } from '../../context/reducer/Reducer';
import Rating from '../ProductFilter/Rating/Rating';

const ProductContain = () => {
  const productList = [
    {
      id: 1,
      name: 'Basic Tee',

      imageSrc:
        'https://res.cloudinary.com/arifscloud/image/upload/v1641451588/pizza_r6uuue.png',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
      description: 'fgkljdflgdnf gfdgjhdfgjd',
    },
    {
      id: 2,
      name: 'Basic Tee',

      imageSrc:
        'https://res.cloudinary.com/arifscloud/image/upload/v1641451588/pizza_r6uuue.png',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
      description: 'fgkljdflgdnf gfdgjhdfgjd',
    },
    {
      id: 3,
      name: 'Basic Tee',

      imageSrc:
        'https://res.cloudinary.com/arifscloud/image/upload/v1641451588/pizza_r6uuue.png',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
      description: 'fgkljdflgdnf gfdgjhdfgjd',
    },
    {
      id: 4,
      name: 'Basic Tee',

      imageSrc:
        'https://res.cloudinary.com/arifscloud/image/upload/v1641451588/pizza_r6uuue.png',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
      description: 'fgkljdflgdnf gfdgjhdfgjd',
    },
    {
      id: 5,
      name: 'Basic Tee',

      imageSrc:
        'https://res.cloudinary.com/arifscloud/image/upload/v1641451588/pizza_r6uuue.png',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
      description: 'fgkljdflgdnf gfdgjhdfgjd',
    },
    {
      id: 6,
      name: 'Basic Tee',
      href: '#',
      imageSrc:
        'https://res.cloudinary.com/arifscloud/image/upload/v1641451588/pizza_r6uuue.png',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
      description: 'fgkljdflgdnf gfdgjhdfgjd',
    },
  ];
  const {
    state: { products}, dispatch
  } = useContext(ContextCart);
  console.log(products, Array.isArray(products));

  return (
    <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
      {products ? (
        products.map((product) => (
          <div key={product.id} className="group relative">
            <div className="w-full min-h-90 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
              <img
                src={product.image}
                alt={product.image}
                className="w-full h-full object-center object-cover"
              />
            </div>

            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700 dark:text-white">
                  <span aria-hidden="true" className="absolute inset-0" />
                  {product.name}
                </h3>
              </div>
              <p className="text-sm font-medium text-green-700">
                {product.price}
              </p>
            </div>
            <div className='flex justify-between'>
            <p className=" mt-1 text-sm font-light text-red-700">
              Stock Available:- {product.inStock}
            </p>
            <p className=" mt-1 text-sm font-light text-red-700">
              <Rating rate={product.ratings}/>
            </p>
            </div>
            
            <button
              className="m-1 my-4 w-full bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg"
            >
              Buy now
            </button>
          </div>
        ))
      ) : (
        <p className="mt-auto flex justify-center items-center text-red-400">
          loading...
        </p>
      )}
    </div>
  );
};

export default ProductContain;
