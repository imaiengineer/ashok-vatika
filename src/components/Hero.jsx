export default function Hero() {
  return (
    <div className="flex pt-5 md:flex-row flex-col justify-between items-center h-[70vh] tracking-tighter">
      <div>
        <h1 className="text-xl sm:text-4xl uppercase text-green-500 font-bold">
          Where Every Flower Tells a Story
        </h1>
        <p className="text-gray-600 mt-4 capitalize md:text-2xl font-semibold">
          Ashok Vatika brings you timeless beauty with stunning gardens, fresh
          blooms, and dedicated care for your green spaces.
        </p>
        <div className="mt-3">
          <a
            href="#"
            className="uppercase text-sm md:text-2xl font-bold bg-green-500 text-white p-2 rounded-xl"
          >
            Book Consultation
          </a>
        </div>
      </div>
      <div className="justify-self-end">
        <img src="hero.png" alt="hero" className="w-full" />
      </div>
    </div>
  );
}
