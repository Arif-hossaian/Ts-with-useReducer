import React, { useContext } from 'react';
import { ContextCart } from '../../context/Context';

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
    state: { products },
  } = useContext(ContextCart);
  console.log(products);

  return (
    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {products.map((product) => (
        <div key={product.id} className="group relative">
          <div className="w-full min-h-90 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
            <img
              src={product.url}
              alt=""
              className="w-full h-full object-center object-cover lg:w-full lg:h-full"
            />
          </div>

          <div className="mt-4 flex justify-between">
            <div>
              <h3 className="text-sm text-gray-700 dark:text-white">
                <a href={product.name}>
                  <span aria-hidden="true" className="absolute inset-0" />
                  {product.name}
                </a>
              </h3>
            </div>
            <p className="text-sm font-medium text-gray-900 dark:text-white">
              {product.price}
            </p>
          </div>
          <div>{product.description}</div>
        </div>
      ))}
    </div>
  );
};

export default ProductContain;
