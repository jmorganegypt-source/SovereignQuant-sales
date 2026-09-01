import { motion } from "framer-motion";

const EASE = [0.76, 0, 0.24, 1];

const TIERS = [
  {
    id: "pack",
    name: "Walk-forward pack",
    priceLabel: "A$799",
    period: "three reports",
    tagline: "The desk product.",
    href: "https://buy.stripe.com/9B64gz4p8cOs7y02cYes004",
    features: [
      "Three customer CSVs in",
      "Three branded HTML reports out",
      "IS / OOS split, equity, drawdown",
      "Research only — no live orders",
    ],
    locked: [],
    dominant: true,
    cta: "Pay A$799",
  },
  {
    id: "sheet",
    name: "CSV tearsheet",
    priceLabel: "A$199",
    period: "one report",
    tagline: "One file. One artefact.",
    href: "https://buy.stripe.com/cNibJ108S6q4aKc9Fqes002",
    features: [
      "One broker or OHLCV CSV",
      "One branded HTML report",
      "No custody, no API keys",
    ],
    locked: ["Three-file pack discount"],
    dominant: false,
    cta: "Pay A$199",
  },
  {
    id: "pdf",
    name: "Black & Gold Vol. I",
    priceLabel: "A$29",
    period: "once",
    tagline: "Doctrine PDF.",
    href: "https://buy.stripe.com/3cIcN5dZIg0EdWog3Oes001",
    features: ["Illustrated doctrine PDF", "Not a trading signal"],
    locked: [],
    dominant: false,
    cta: "Pay A$29",
  },
  {
    id: "professional",
    name: "Professional licence",
    priceLabel: "US$499",
    period: "/ year",
    tagline: "Offline workstation key.",
    href: "https://buy.stripe.com/14A8wPdZI7u86tW18Ues003",
    features: [
      "Annual offline licence",
      "Key issued after payment",
      "You run it on your machine",
    ],
    locked: ["We do not hold funds"],
    dominant: false,
    cta: "Pay US$499 / yr",
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="px-6 md:px-12 py-32 md:py-48 border-t border-white/10" data-testid="pricing-section">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease: EASE }}
        className="mb-20"
      >
        <p className="text-xs uppercase tracking-[0.3em] text-[#F59E0B] font-bold mb-6">
          Live Stripe · SOVEREIGN. QUANT
        </p>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-none tracking-tight uppercase font-black">
          Pay for the <span className="text-outline-red">report.</span>
        </h2>
        <p className="mt-6 max-w-xl text-base md:text-lg text-zinc-400">
          Not a free zip. A walk-forward pack, a single tearsheet, a doctrine PDF,
          or a yearly offline licence. No signals. No custody. No live tickets.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {TIERS.map((tier, i) => (
          <motion.div
            key={tier.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: i * 0.08, ease: EASE }}
            whileHover={{ y: -8 }}
            className={`relative flex flex-col border p-8 md:p-10 transition-[border-color,box-shadow] duration-300 ${
              tier.dominant
                ? "bg-[#111827] border-[#F59E0B]/50 shadow-[0_0_60px_-15px_rgba(245,158,11,0.35)]"
                : "bg-[#151B24] border-white/10 hover:border-white/25"
            }`}
            data-testid={`pricing-card-${tier.id}`}
          >
            {tier.dominant && (
              <span className="absolute -top-px right-8 bg-[#F59E0B] text-black text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1">
                Primary
              </span>
            )}

            <h3 className="font-display text-2xl md:text-3xl font-light uppercase">{tier.name}</h3>
            <p className="mt-2 text-xs uppercase tracking-[0.2em] text-zinc-500">{tier.tagline}</p>

            <div className="mt-8 flex items-end gap-2">
              <span className="font-display text-4xl md:text-5xl font-black tabular" data-testid={`pricing-price-${tier.id}`}>
                {tier.priceLabel}
              </span>
              <span className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-2">
                {tier.period}
              </span>
            </div>

            <ul className="mt-8 space-y-3 text-sm flex-1">
              {tier.features.map((f, j) => (
                <li key={j} className="flex items-start gap-3 text-zinc-300">
                  <span className="text-[#10B981] mt-0.5">+</span> {f}
                </li>
              ))}
              {tier.locked.map((f, j) => (
                <li key={`l-${j}`} className="flex items-start gap-3 text-zinc-600 line-through">
                  <span className="text-zinc-700 mt-0.5">—</span> {f}
                </li>
              ))}
            </ul>

            <a
              href={tier.href}
              className={`mt-10 w-full text-center font-bold uppercase tracking-wider px-8 py-4 active:scale-95 transition-[background-color,transform,color] duration-200 ${
                tier.dominant
                  ? "bg-[#F59E0B] text-black hover:bg-[#e0b84a]"
                  : "bg-white text-black hover:bg-zinc-200"
              }`}
              data-testid={`buy-${tier.id}-button`}
            >
              {tier.cta}
            </a>
          </motion.div>
        ))}
      </div>

      <p className="mt-8 text-[10px] uppercase tracking-[0.15em] text-zinc-600 leading-relaxed max-w-3xl" data-testid="pricing-plain-terms">
        After pay: Stripe receipt, then email CSVs to reports@sovereignquant.com.au.
        Reports describe the file you sent. Not financial product advice. Not AFSL advice.
        Trading can lose money.
      </p>
    </section>
  );
};
