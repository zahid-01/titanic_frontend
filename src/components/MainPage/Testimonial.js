import React from "react";
import MotionComponent from "../Header/Animation";

const Testimonial = () => {
  return (
    <MotionComponent>
      <section class="bg-white">
        <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <h2 class="text-center text-4xl font-bold  text-gray-900 sm:text-5xl">
            Read trusted reviews from our customers
          </h2>

          <div class="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-12">
            <blockquote class="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
              <div class="flex items-center gap-4">
                <img
                  alt="Man"
                  src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                  class="h-14 w-14 rounded-full object-cover"
                />

                <div>
                  <div class="flex justify-center gap-1 text-green-500">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>

                  <p class="mt-0.5 text-lg font-medium text-gray-900">
                    Paul Starr
                  </p>
                </div>
              </div>

              <p class="mt-4 text-gray-700">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa
                sit rerum incidunt, a consequuntur recusandae ab saepe illo est
                quia obcaecati neque quibusdam eius accusamus error officiis
                atque voluptates magnam!
              </p>
            </blockquote>

            <blockquote class="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
              <div class="flex items-center gap-4">
                <img
                  alt="Man"
                  src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                  class="h-14 w-14 rounded-full object-cover"
                />

                <div>
                  <div class="flex justify-center gap-1 text-green-500">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>

                  <p class="mt-0.5 text-lg font-medium text-gray-900">
                    Paul Starr
                  </p>
                </div>
              </div>

              <p class="mt-4 text-gray-700">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa
                sit rerum incidunt, a consequuntur recusandae ab saepe illo est
                quia obcaecati neque quibusdam eius accusamus error officiis
                atque voluptates magnam!
              </p>
            </blockquote>

            <blockquote class="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
              <div class="flex items-center gap-4">
                <img
                  alt="Man"
                  src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                  class="h-14 w-14 rounded-full object-cover"
                />

                <div>
                  <div class="flex justify-center gap-1 text-green-500">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>

                  <p class="mt-0.5 text-lg font-medium text-gray-900">
                    Paul Starr
                  </p>
                </div>
              </div>

              <p class="mt-4 text-gray-700">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa
                sit rerum incidunt, a consequuntur recusandae ab saepe illo est
                quia obcaecati neque quibusdam eius accusamus error officiis
                atque voluptates magnam!
              </p>
            </blockquote>
          </div>
        </div>
      </section>
    </MotionComponent>
  );
};

export default Testimonial;
