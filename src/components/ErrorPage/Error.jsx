import React from "react";
import ErrorBanner from "../../assets/images/error-404.png";
import { useNavigate } from "react-router";

const Error = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <section className="py-10 container mx-auto px-5">
      <div>
        <div className="flex justify-center items-center">
          <div className="text-center">
            <div className="mb-8 lg:mb-13 flex justify-center items-center">
              <figure>
                <img width={300} src={ErrorBanner} />
              </figure>
            </div>

            <div>
              <h6 className="mb-2 text-4xl sm:text-5xl font-semibold text-[#001931]">
                Oops, page not found!
              </h6>
              <p className="mb-4 text-lg sm:text-xl text-[#627382]">
                The page you are looking for is not available.
              </p>

              <button
                onClick={handleGoBack}
                className="btn border-none shadow-none h-12 px-10 bg-linear-to-r from-[#632EE3] to-[#9F62F2] rounded-sm text-base-100 font-semibold"
              >
                Go Back!
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Error;
