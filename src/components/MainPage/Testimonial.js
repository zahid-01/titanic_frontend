import React from "react";
import MotionComponent from "../Header/Animation";

const Testimonial = () => {
  return (
    <MotionComponent>
      <section className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <h2 className="text-center text-4xl font-bold  text-gray-900 sm:text-5xl">
            Read trusted reviews from our customers
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-12">
            <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
              <div className="flex items-center gap-4">
                <img
                  alt="Man"
                  src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                  className="h-14 w-14 rounded-full object-cover"
                />

                <div>
                  <div className="flex justify-center gap-1 text-green-500">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>

                  <p className="mt-0.5 text-lg font-medium text-gray-900">
                    Basit
                  </p>
                </div>
              </div>

              <p className="mt-4 text-gray-700">
                Efficient and Reliable: <br />
                "The printer has transformed our daily operations. The speed,
                quality, and reliability make them indispensable tools for our
                team. Highly recommended!"
              </p>
            </blockquote>

            <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
              <div className="flex items-center gap-4">
                <img
                  alt="Man"
                  src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                  className="h-14 w-14 rounded-full object-cover"
                />

                <div>
                  <div className="flex justify-center gap-1 text-green-500">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>

                  <p className="mt-0.5 text-lg font-medium text-gray-900">
                    Zahid
                  </p>
                </div>
              </div>

              <p className="mt-4 text-gray-700">
                Sleek and Powerful:
                <br />
                "The photocopier from Titanic Services not only look sleek in
                our office but also deliver exceptional performance. Fast,
                user-friendly, and a game-changer for our document management."
              </p>
            </blockquote>

            <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
              <div className="flex items-center gap-4">
                <img
                  alt="Man"
                  src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                  className="h-14 w-14 rounded-full object-cover"
                />

                <div>
                  <div className="flex justify-center gap-1 text-green-500">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>

                  <p className="mt-0.5 text-lg font-medium text-gray-900">
                    Mateen
                  </p>
                </div>
              </div>

              <p className="mt-4 text-gray-700">
                Top-notch Quality:
                <br />
                "Impressed with the outstanding print quality and reliability of
                the printer and photocopier. They have become essential to our
                workflow, ensuring professional results every time."
              </p>
            </blockquote>
          </div>
        </div>
      </section>
    </MotionComponent>
  );
};

export default Testimonial;
