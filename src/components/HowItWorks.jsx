const steps = [
  {
    id: 1,
    heading: "Consultation & Planning",
    text: "We begin by understanding your space, needs, and vision. Our experts listen carefully and prepare a customized plan to create or maintain your garden.",
    image: "planning.png",
  },
  {
    id: 2,
    heading: "Garden Design & Selection",
    text: "Based on your preferences, we design layouts and help you select the right plants, flowers, and landscaping elements, giving you a clear picture before work begins.",
    image: "design.png",
  },
  {
    id: 3,
    heading: "Setup & Installation",
    text: "Our team handles soil preparation, planting, and decorative setup with precision, ensuring your garden is beautiful, sustainable, and ready to flourish.",
    image: "setup.png",
  },
  {
    id: 4,
    heading: "Ongoing Care & Maintenance",
    text: "We provide regular watering, trimming, fertilization, and pest control so your garden stays lush and thriving throughout the year.",
    image: "maintenance.png",
  },
];

export default function HowItWorks() {
  return (
    <section className="max-w-7xl mx-auto px-4 pt-[10rem]">
      <h2 className="heading-secondary mb-4">How It Works</h2>

      {steps.map((value) => (
        <Steps stepsData={value} key={value.id} />
      ))}
    </section>
  );
}

function Steps({ stepsData }) {
  return (
    <>
      {stepsData.id % 2 === 0 ? (
        <StepCardEven stepsData={stepsData} />
      ) : (
        <StepCardOdd stepsData={stepsData} />
      )}
    </>
  );
}

function StepCardOdd({ stepsData }) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 items-center pt-8 mb-12">
      <div>
        <h2 className="font-bold text-7xl text-gray-500">0{stepsData.id}</h2>
        <h3 className="font-bold text-3xl uppercase tracking-tighter text-gray-700 py-4">
          {stepsData.heading}
        </h3>
        <p className="paragraph">{stepsData.text}</p>
      </div>
      <div className="flex justify-center">
        <img
          src={stepsData.image}
          alt={stepsData.image}
          className="w-full md:w-[70%]"
        />
      </div>
    </div>
  );
}

function StepCardEven({ stepsData }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center mb-12">
      <div className="flex justify-center md:justify-between row-start-2 md:row-start-1 md:col-start-1">
        <img
          src={stepsData.image}
          alt={stepsData.image}
          className="w-full md:w-[70%]"
        />
      </div>
      <div>
        <h2 className="font-bold text-7xl text-gray-500">0{stepsData.id}</h2>
        <h3 className="font-bold text-3xl uppercase tracking-tighter text-gray-700 py-4">
          {stepsData.heading}
        </h3>
        <p className="paragraph">{stepsData.text}</p>
      </div>
    </div>
  );
}
