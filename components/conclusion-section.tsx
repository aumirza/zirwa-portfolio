const ConclusionSection = () => {
  return (
    <div className="max-w-4xl flex  py-10 items-center  justify-between text-gray-300 font-inter">
      <div className="flex flex-col justify-center gap-5">
        <div className="flex flex-row items-end justify-start gap-2">
          <div className="relative font-black text-3xl md:text-4xl">
            Conclusion
          </div>
          <div className="bg-goldenrod w-28 h-2" />
        </div>
        <div className="flex  flex-col md:flex-row items-center justify-between gap-5">
          <div className="text-sm lg:text-base">
            By adopting a playful mindset, individuals are encouraged to break
            free from conventional thinking patterns and embrace curiosity,
            experimentation, and risk-taking. Play allows for the freedom to
            explore unconventional ideas, challenge assumptions, and generate
            novel solutions. It promotes a relaxed and open state of mind, which
            is conducive to generating fresh insights and making unexpected
            connections. Having a countdown experience enables the users to stay
            consistent and focused.
          </div>
          <img
            className="h-52 lg:h-64 object-cover z-[1]"
            alt=""
            src="/animation-2@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default ConclusionSection;
