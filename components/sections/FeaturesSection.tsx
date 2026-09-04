export default function FeaturesSection() {
  return (
    <section id="features" className="bg-wisher-ink py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top: headline + supporting copy */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-16 lg:mb-20">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-white/40 mb-4">
              The sad truth
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-white">
              People want to gift you well.
              <br />
              <span className="font-fraunces italic font-normal text-wisher-lime">
                They just need a little help.
              </span>
            </h2>
          </div>

          <div className="flex flex-col gap-6 lg:pt-2">
            <p className="text-lg text-white/80 leading-relaxed">
              We have all received a gift that was thoughtful—but not quite
              right. And we have all started a chat wondering, &ldquo;What
              should I get them?&rdquo;
            </p>
            <p className="text-lg text-white/50 leading-relaxed">
              Wisher removes the guessing. You share what would genuinely
              make you happy. Your people choose how to give. Everyone gets
              to be part of the moment.
            </p>
          </div>
        </div>

        {/* Comparison cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Without Wisher */}
          <div className="rounded-3xl bg-wisher-cream p-8 sm:p-10 flex flex-col">
            <p className="text-sm font-bold uppercase tracking-widest text-wisher-forest/40 mb-4">
              Without Wisher
            </p>
            <h3 className="text-3xl sm:text-4xl font-bold text-wisher-forest leading-snug mb-10">
              &ldquo;What do you want for your birthday?&rdquo;
            </h3>

            <div className="flex-1 flex flex-col justify-end gap-3 mb-10">
              <div className="self-start max-w-[80%] rounded-2xl rounded-bl-md bg-white px-4 py-2.5 text-sm text-wisher-forest shadow-sm">
                Really, anything is fine 😅
              </div>
              <div className="self-end max-w-[70%] rounded-2xl rounded-br-md bg-wisher-forest/8 px-4 py-2.5 text-sm text-wisher-forest">
                Okay&hellip; perfume?
              </div>
            </div>

            <p className="text-sm text-wisher-forest/50">
              Guesswork, duplicate gifts, awkward transfers, and wishes left
              unsaid.
            </p>
          </div>

          {/* With Wisher */}
          <div className="rounded-3xl bg-wisher-lime p-8 sm:p-10 flex flex-col">
            <p className="text-sm font-bold uppercase tracking-widest text-wisher-forest/40 mb-4">
              With Wisher
            </p>
            <h3 className="text-3xl sm:text-4xl font-bold text-wisher-forest leading-snug mb-10">
              One link says it beautifully.
            </h3>

            <div className="flex-1 mb-10">
              <div className="rounded-2xl bg-white p-6 shadow-lg">
                <h4 className="font-bold text-wisher-forest mb-1">
                  Amaka&apos;s birthday wishes
                </h4>
                <p className="text-sm text-wisher-forest/50 mb-4">
                  3 wishes &middot; 12 givers
                </p>
                <div className="w-full h-2.5 rounded-full bg-wisher-lime-pale overflow-hidden mb-3">
                  <div
                    className="h-full rounded-full bg-wisher-forest"
                    style={{ width: "38%" }}
                  />
                </div>
                <p className="font-bold text-wisher-forest">
                  ₦186,500 raised
                </p>
              </div>
            </div>

            <p className="text-sm text-wisher-forest/60">
              Clear wishes. Flexible contributions. A shared moment everyone
              can feel.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
