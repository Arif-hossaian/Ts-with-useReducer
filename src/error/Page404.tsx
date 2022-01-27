import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const Page404: React.FC = () => {
  return (
    <div className="nc-Page404">
      <Helmet>
        <title>404 | Show Demo data</title>
      </Helmet>
      <div className="container relative pt-5 pb-16 lg:pb-20 lg:pt-5">
        <header className="text-center max-w-2xl mx-auto space-y-2 my-24">
          <img
            src="https://i.ibb.co/gVZ03mL/undraw-Page-not-found-re-e9o6.png"
            alt=""
          />
          <span className="block text-sm text-neutral-800 sm:text-base dark:text-neutral-200 tracking-wider font-medium">
            THE PAGE YOU WERE LOOKING FOR DOESN'T EXIST.{' '}
          </span>
          <div className="pt-8">
            <Link to="/">
              <button>Return Home Page</button>
            </Link>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Page404;
