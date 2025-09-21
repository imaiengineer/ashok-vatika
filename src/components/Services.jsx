export default function Services() {
  return (
    <section className="max-w-[1300px] pt-[10rem] mx-auto ">
      <div className="p-4">
        <h2 className="heading-secondary mb-4" id="services">
          Our Services
        </h2>
        <div className="flex mt-8 flex-col md:flex-row gap-4 justify-between items-center">
          <div>
            <div className="rounded-2xl pb-4 overflow-hidden">
              <img
                src="flowers.jpeg"
                alt="flowers_nursery"
                className="w-full aspect-square object-cover transition-all hover:scale-105"
              />
            </div>
            <h3 className="heading-thrice mb-4">Flower Nursery</h3>
            <p className="paragraph">
              Discover a wide variety of vibrant and healthy flowers at Ashok
              Vatika. From seasonal blooms to rare plants, our nursery provides
              fresh options to brighten your home, office, or garden.
            </p>
          </div>
          <div>
            <div className="overflow-hidden pb-4 rounded-2xl">
              <img
                src="garden.jpeg"
                alt="garden_creation"
                className="w-full aspect-square transition-all hover:scale-105"
              />
            </div>
            <h3 className="heading-thrice mb-4">Garden Creation</h3>

            <p className="paragraph">
              We create customized gardens that match your vision. Whether you
              want a cozy balcony garden, a lush lawn, or a landscaped outdoor
              space, our experts bring beauty and harmony to every project.
            </p>
          </div>
          <div>
            <div className="pb-4 rounded-2xl overflow-hidden">
              <img
                src="maintaince.jpeg"
                alt="garden_maintenance"
                className="w-full transition-all aspect-square object-cover hover:scale-105"
              />
            </div>
            <h3 className="heading-thrice mb-4">Garden Maintenance</h3>
            <p className="paragraph">
              Keep your green spaces flourishing with our professional
              maintenance services. We take care of watering, trimming,
              fertilizing, and pest control to ensure your garden always looks
              its best.
            </p>
          </div>
          <div>
            <div className="pb-4 rounded-2xl overflow-hidden">
              <img
                src="customize.jpeg"
                alt="customized_solutions"
                className="transition-all object-cover aspect-square hover:scale-105 w-full"
              />
            </div>
            <h3 className="heading-thrice mb-4">Customized Solutions</h3>
            <p className="paragraph">
              Enhance the look of your residential or commercial property with
              creative landscaping. From pathways and flowerbeds to decorative
              plants and layouts, we design green spaces that add value and
              charm.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
