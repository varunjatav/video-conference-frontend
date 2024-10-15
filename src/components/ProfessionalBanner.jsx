import React from "react";

const ProfessionalBanner = () => {
  return (
    <section className="bg-gray-lighter py-14 md:px-24 text-center">
      <h2 className="font-bold text-4xl font-sans">Used By Proffessionals on</h2>
      <div  className="flex lg:flex-row justify-between px-24 pt-10 sm:flex-col sm:gap-5 sm:items-center">
        <div>
          <img
            className="w-32 h-10"
            src="https://www.apollographql.com/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F102461%2F1725898049-contentfull-logo-nebula.png&w=3840&q=75"
            alt="content full png"
            loading="lazy"
          />
        </div>
        <div>
          <img
            className="w-32 h-10"
            src="https://www.iconarchive.com/download/i111594/fa-team/fontawesome-brands/FontAwesome-Brands-Stripe.1024.png"
            alt="stripe png"
            loading="lazy"
          />
        </div>
        <div>
          <img
            className="w-32 h-10"
            src="https://freelogopng.com/images/all_img/1655873659shopify-black-logo.png"
            alt="shopify png"
            loading="lazy"
          />
        </div>
        <div>
          <img
            className="w-32 h-10"
            src="https://www.logo.wine/a/logo/Slack_Technologies/Slack_Technologies-Black-Logo.wine.svg"
            alt="airbnb png"
            loading="lazy"
          />
        </div>

        <div>
          <img
            className="w-32 h-10"
            src="https://cdn.prod.website-files.com/5e21336655fb424f899b94d7/62633a4648abd125687f6f90_Airbnb%20Logo.png"
            alt="airbnb png"
            loading="lazy"
          />
        </div>
      </div>
      <div className="flex lg:flex-row justify-between px-24 pt-10 sm:flex-col sm:gap-5">
        <div className="text-center">
          <h3 className="text-4xl font-bold">
            200K<span className="text-lg">+</span>
          </h3>
          <p className="text-gray text-sm">user using the platform</p>
        </div>
        <div className="text-center">
          <h3 className="text-4xl font-bold">
            98<span className="text-lg">%</span>
          </h3>
          <p className="text-gray text-sm">Revenue Growth</p>
        </div>
        <div className="text-center">
          <h3 className="text-4xl font-bold">
            150<span className="text-lg">+</span>
          </h3>
          <p className="text-gray text-sm">Coperation Companies</p>
        </div>
        <div className="text-center">
          <h3 className="text-4xl font-bold">
            10<span className="text-lg">pd</span>
          </h3>
          <p className="text-gray text-sm">Data served</p>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalBanner;
