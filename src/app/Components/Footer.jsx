"use client";

const Footer = () => {
  return (
    <header className="w-full bg-[#19191B] text-white">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-6">
        {/* Logo block */}
        <div className="pt-6 flex flex-col items-center text-center">
          <div className="leading-tight">
            <div
              style={{ fontFamily: "Playfair Display, serif" }}
              className="text-white font-extrabold text-[22px] md:text-[24px]"
            >
              Noir
            </div>
            <div className="mt-1 flex items-center justify-center">
              <span className="text-[10px] md:text-[12px] tracking-widest uppercase text-[#D2AA6D] font-medium">
                furniture
              </span>
              <span className="ml-2 inline-block h-[1px] bg-[#D2AA6D] w-10 md:w-16 align-middle" />
            </div>
          </div>

          {/* Tagline */}
          <p className="mt-4 max-w-2xl text-center text-[12px] md:text-[14px] text-white/70 leading-relaxed">
            Discover premium-quality, handcrafted sofas designed for comfort and style.
            <br />
            Elevate your living space with timeless elegance and exceptional durability.
          </p>
        </div>

        {/* Primary nav row */}
        <div className="mt-6 border-t border-white/15" />
        <nav className="py-3">
          <div className="grid grid-cols-12 items-center">
            <div className="col-span-12 md:col-span-4 flex justify-start gap-6 md:gap-8 flex-wrap">
              <a href="#" className="text-[11px] md:text-[12px] uppercase tracking-wider hover:opacity-80">
                PRODUCTS
              </a>
              <a href="#" className="text-[11px] md:text-[12px] uppercase tracking-wider hover:opacity-80">
                ABOUT US
              </a>
              <a href="#" className="text-[11px] md:text-[12px] uppercase tracking-wider hover:opacity-80">
                PREORDER
              </a>
            </div>

            <div className="hidden md:col-span-4 md:flex md:justify-center" />

            <div className="col-span-12 md:col-span-4 mt-3 md:mt-0 flex md:justify-end gap-6 items-center flex-wrap">
              <a href="tel:+6601973546048" className="text-[11px] md:text-[12px] uppercase tracking-wider text-white/90 hover:opacity-80">
                +6601973546048
              </a>
              <a href="mailto:ISMAILURJK3@GMAIL.COM" className="text-[11px] md:text-[12px] uppercase tracking-wider text-white/90 hover:opacity-80">
                ISMAILURJK3@GMAIL.COM
              </a>
            </div>
          </div>
        </nav>

        {/* Secondary nav row */}
        <div className="border-t border-white/15" />
        <div className="py-3">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-center">
            <a href="#" className="text-[11px] md:text-[12px] uppercase tracking-wider hover:opacity-80">
              TERMS &amp; CONDITIONS
            </a>
            <a href="#" className="text-[11px] md:text-[12px] uppercase tracking-wider hover:opacity-80">
              DELIVERY &amp; RETURNS
            </a>
            <a href="#" className="text-[11px] md:text-[12px] uppercase tracking-wider hover:opacity-80">
              PRIVACY POLICY
            </a>
          </div>
        </div>
      </div>

      {/* Hero typographic banner */}
      <div className="relative overflow-hidden">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-6">
          <div className="relative h-[120px] md:h-[160px] lg:h-[220px] overflow-hidden">
            <h1
              aria-hidden
              className="absolute left-0 w-full leading-none select-none pointer-events-none"
              style={{
                top: "-35%",
                fontFamily: "Playfair Display, serif",
                fontSize: "16vw",
                lineHeight: 0.8,
                fontWeight: 900,
                color: "rgba(255,255,255,0.08)",
                textTransform: "uppercase",
                letterSpacing: "-0.02em",
              }}
            >
              NOIR FURNITURE
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Footer;
