function LandingCTA() {
  return (
    <section className="w-full max-w-7xl lg:rounded-lg mx-auto py-14 lg:pb-20 px-5 lg:px-0">
      <div className="rounded-2xl mx-auto flex flex-col gap-y-5 justify-center items-center">
        <h3 className="text-3xl md:text-4xl lg:text-5xl max-w-xl lg:max-w-3xl mx-auto font-bold text-gray-900 text-center">
          Curated Homeware for Inspired Living
        </h3>
        <p className="text-sm text-gray-900 max-w-lg mx-auto text-center">
          Discover timeless designs and modern essentials that bring beauty, comfort, and function to every room. At Losode, we blend style with substance to help you create a space you love.
        </p>
        <button className="bg-black w-1/2 md:w-1/3 hover:shadow-lg border border-transparent hover:drop-shadow transition duration-200 lg:w-1/3 text-white font-semibold text-sm lg:text-base rounded px-4 py-4">
          Shop now
        </button>
      </div>
    </section>
  );
}

export default LandingCTA;
