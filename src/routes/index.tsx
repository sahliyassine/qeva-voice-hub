import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "qeva — Vos rendez-vous se confirment seuls." },
      {
        name: "description",
        content:
          "L’agent vocal IA qui appelle vos clients à votre place. En français, 24h/24, branché sur votre standard 3CX. Hébergé en Europe.",
      },
      { property: "og:title", content: "qeva — Agent vocal IA pour PME" },
      {
        property: "og:description",
        content:
          "Automatisez la confirmation de RDV par téléphone. Voix française, 3CX natif, RGPD.",
      },
    ],
  }),
});

const nav = [
  { label: "Produit", href: "#solution" },
  { label: "Pricing", href: "#pricing" },
  { label: "À propos", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const diffs = [
  "Voix française",
  "3CX native",
  "Hébergé en Europe",
  "Backup humain 24/7",
];

const stats = [
  { v: "1,11 €/min", l: "coût moyen d’un téléconseiller humain" },
  { v: "~30%", l: "turnover annuel dans les call centers" },
  { v: "20-40%", l: "taux de no-show sur RDV non confirmés" },
];

const solutions = [
  {
    t: "Confirmation de RDV",
    d: "Votre client reçoit un appel calme et naturel pour confirmer ou modifier son créneau.",
  },
  {
    t: "Relance et qualification",
    d: "qeva relance vos prospects, qualifie vos leads, libère vos commerciaux pour les vraies conversations.",
  },
  {
    t: "Disponible 24/7",
    d: "Pas de pause déjeuner, pas de week-end, pas de turnover.",
  },
];

const steps = [
  {
    t: "Intégration 3CX",
    d: "On se branche sur votre standard téléphonique existant en quelques jours.",
  },
  {
    t: "Personnalisation du script",
    d: "On adapte la voix et le discours de qeva à votre marque et vos use cases.",
  },
  {
    t: "Lancement contrôlé",
    d: "Premiers appels test, ajustements, puis montée en charge progressive.",
  },
  {
    t: "Pilotage",
    d: "Dashboard temps réel : volumes, conversion, transcripts, coût par appel.",
  },
];

const whys = [
  {
    t: "Intégration 3CX native",
    d: "Pas besoin de migrer vers Twilio. On se branche sur le standard pro européen utilisé par 600 000 entreprises.",
  },
  {
    t: "Hébergé en Europe",
    d: "AWS Frankfurt, données dédiées par client, conforme RGPD. Pas de transit hors UE.",
  },
  {
    t: "Voix française native",
    d: "Ton naturel, pas un accent anglo qui sent l’IA.",
  },
  {
    t: "Backup humain 24/7",
    d: "Si qeva touche ses limites, un téléconseiller humain prend le relais. Aucun SaaS US n’offre ça.",
  },
];

const plans = [
  {
    name: "Démarrage",
    setup: "Setup à partir de 1 500 €",
    price: "1,00 €",
    unit: "/min",
    sub: "Idéal pour tester",
    cta: "Démarrer",
    highlight: false,
  },
  {
    name: "Standard",
    setup: "Setup à partir de 1 500 €",
    price: "0,90 €",
    unit: "/min",
    sub: "Pour la production",
    cta: "Demander une démo",
    highlight: true,
  },
  {
    name: "Volume",
    setup: "Sur devis",
    price: "Négocié",
    unit: "selon volume",
    sub: "Pour gros volumes (>10 000 min/mois)",
    cta: "Nous contacter",
    highlight: false,
  },
];

const founders = [
  {
    n: "Yassine Sahli",
    r: "Co-fondateur, commercial & déploiement",
    b: "8 ans d’entrepreneuriat dans le commerce et la logistique. Connaît le terrain de la gestion des équipes téléphoniques.",
  },
  {
    n: "Sofian Hakmi",
    r: "Co-fondateur, tech & opérations",
    b: "10 ans dans les call centers. A construit qeva pour son propre besoin avant d’en faire un produit.",
  },
];

function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`font-bold tracking-tight text-sienna lowercase ${className}`}>
      qeva
    </span>
  );
}

function Index() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="#" aria-label="qeva accueil">
            <Logo className="text-2xl" />
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm text-foreground/70 transition-colors hover:text-foreground"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="hidden rounded-md bg-sienna px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 md:inline-block"
          >
            Demander une démo
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-24 md:pt-32 md:pb-32">
        <h1 className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl lg:text-[5.5rem]">
          Vos rendez-vous se{" "}
          <span className="text-sienna">confirment seuls.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-foreground/70 md:text-xl">
          L’agent vocal IA qui appelle vos clients à votre place. En français,
          24h/24, branché directement sur votre standard téléphonique.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-6">
          <a
            href="#contact"
            className="rounded-md bg-sienna px-6 py-3.5 text-base font-medium text-primary-foreground shadow-sm transition-all hover:opacity-90 hover:shadow-md"
          >
            Demander une démo
          </a>
          <a
            href="#how"
            className="text-base font-medium text-foreground transition-colors hover:text-sienna"
          >
            Comment ça marche →
          </a>
        </div>
        <div className="mt-16 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-foreground/60">
          {diffs.map((d, i) => (
            <span key={d} className="flex items-center gap-3">
              <span>{d}</span>
              {i < diffs.length - 1 && (
                <span className="text-foreground/30">·</span>
              )}
            </span>
          ))}
        </div>
      </section>

      {/* PROBLEM */}
      <section className="border-t border-border/50">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <h2 className="max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">
            Vos équipes passent leurs journées au téléphone.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground/70">
            Confirmer un RDV. Relancer un client. Qualifier un lead. Des tâches
            répétitives, ingrates à recruter, coûteuses à gérer. Et quand vous
            avez enfin formé quelqu’un, il part 6 mois plus tard.
          </p>
          <div className="mt-16 grid gap-10 border-t border-border/60 pt-12 md:grid-cols-3">
            {stats.map((s) => (
              <div key={s.v}>
                <div className="text-4xl font-bold text-sienna md:text-5xl">
                  {s.v}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                  {s.l}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section id="solution" className="border-t border-border/50">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <h2 className="max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">
            qeva appelle à votre place.
          </h2>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {solutions.map((s) => (
              <div
                key={s.t}
                className="rounded-xl border border-border/60 bg-card p-8 transition-colors hover:border-sienna/40"
              >
                <h3 className="text-xl font-bold">{s.t}</h3>
                <p className="mt-4 leading-relaxed text-foreground/70">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW */}
      <section id="how" className="border-t border-border/50">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <h2 className="max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">
            4 étapes pour automatiser vos appels.
          </h2>
          <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <div key={s.t} className="relative">
                <div className="text-sm font-semibold text-sienna">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-3 text-lg font-bold">{s.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                  {s.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="border-t border-border/50">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <h2 className="max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">
            Pourquoi qeva, pas un concurrent américain.
          </h2>
          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {whys.map((w) => (
              <div
                key={w.t}
                className="rounded-xl border border-border/60 bg-card p-8"
              >
                <h3 className="text-xl font-bold">{w.t}</h3>
                <p className="mt-4 leading-relaxed text-foreground/70">{w.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="border-t border-border/50">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <h2 className="mx-auto max-w-3xl text-center text-4xl font-bold tracking-tight md:text-5xl">
            Tarification simple, prévisible.
          </h2>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {plans.map((p) => (
              <div
                key={p.name}
                className={`relative rounded-xl border bg-card p-8 ${
                  p.highlight
                    ? "border-sienna shadow-lg shadow-sienna/10"
                    : "border-border/60"
                }`}
              >
                {p.highlight && (
                  <div className="absolute -top-3 left-8 rounded-full bg-sienna px-3 py-1 text-xs font-medium text-primary-foreground">
                    Recommandé
                  </div>
                )}
                <div className="text-sm font-semibold uppercase tracking-wider text-foreground/60">
                  {p.name}
                </div>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-bold">{p.price}</span>
                  <span className="text-sm text-foreground/60">{p.unit}</span>
                </div>
                <p className="mt-2 text-sm text-foreground/70">{p.setup}</p>
                <p className="mt-6 text-sm text-foreground/80">{p.sub}</p>
                <a
                  href="#contact"
                  className={`mt-8 block w-full rounded-md py-3 text-center text-sm font-medium transition-opacity hover:opacity-90 ${
                    p.highlight
                      ? "bg-sienna text-primary-foreground"
                      : "border border-foreground/20 text-foreground hover:border-sienna hover:text-sienna"
                  }`}
                >
                  {p.cta}
                </a>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-sm italic text-foreground/60">
            Pas de seuil minimum de volume. Tarif comparé à 1,11 €/min pour un
            téléconseiller humain équivalent.
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="border-t border-border/50">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <h2 className="max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">
            Bâti par des opérationnels, pas des consultants.
          </h2>
          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {founders.map((f) => (
              <div
                key={f.n}
                className="rounded-xl border border-border/60 bg-card p-8"
              >
                <h3 className="text-xl font-bold">{f.n}</h3>
                <div className="mt-1 text-sm text-muted-foreground">{f.r}</div>
                <p className="mt-5 leading-relaxed text-foreground/70">{f.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEMO */}
      <section className="border-t border-border/50">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Écoutez qeva en action.
          </h2>
          <div className="mt-12 max-w-2xl rounded-xl border border-border/60 bg-card p-6">
            <div className="flex items-center gap-4">
              <button
                aria-label="Lecture démo"
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sienna text-primary-foreground transition-opacity hover:opacity-90"
              >
                <svg
                  width="14"
                  height="16"
                  viewBox="0 0 14 16"
                  fill="currentColor"
                >
                  <path d="M0 0l14 8L0 16V0z" />
                </svg>
              </button>
              <div className="flex-1">
                <div className="h-1.5 w-full rounded-full bg-foreground/10">
                  <div className="h-full w-0 rounded-full bg-sienna" />
                </div>
                <div className="mt-2 flex justify-between text-xs text-foreground/50">
                  <span>0:00</span>
                  <span>1:24</span>
                </div>
              </div>
            </div>
          </div>
          <p className="mt-6 max-w-2xl text-sm text-foreground/70">
            Démo audio anonymisée d’un appel de confirmation de RDV en
            production.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-block text-base font-medium text-sienna hover:underline"
          >
            Demander la démo complète →
          </a>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="border-t border-border/50">
        <div className="mx-auto max-w-3xl px-6 py-24 md:py-32">
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Voyez qeva sur votre cas d’usage.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-foreground/70">
            Nous prenons 30 minutes pour comprendre votre activité et vous
            montrer qeva sur un scénario concret.
          </p>

          {submitted ? (
            <div className="mt-12 rounded-xl border border-sienna/40 bg-accent p-8">
              <h3 className="text-xl font-bold text-sienna">Demande reçue.</h3>
              <p className="mt-3 text-foreground/80">
                Nous revenons vers vous sous 24h ouvrées.
              </p>
            </div>
          ) : (
            <form
              className="mt-12 grid gap-5"
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
            >
              <div className="grid gap-5 md:grid-cols-2">
                <Field label="Nom complet" name="name" required />
                <Field
                  label="Email pro"
                  name="email"
                  type="email"
                  required
                />
                <Field label="Société" name="company" required />
                <SelectField
                  label="Secteur"
                  name="sector"
                  options={[
                    "Énergie",
                    "Services techniques",
                    "Immobilier",
                    "Automobile",
                    "Médecine privée",
                    "Autre",
                  ]}
                />
              </div>
              <Field
                label="Volume mensuel estimé d’appels"
                name="volume"
              />
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Message <span className="text-foreground/50">(optionnel)</span>
                </label>
                <textarea
                  name="message"
                  rows={4}
                  className="w-full rounded-md border border-input bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-sienna focus:ring-2 focus:ring-sienna/20"
                />
              </div>
              <button
                type="submit"
                className="mt-2 rounded-md bg-sienna px-6 py-3.5 text-base font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Demander une démo
              </button>
            </form>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border/50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex flex-col gap-10 md:flex-row md:justify-between">
            <div>
              <Logo className="text-2xl" />
              <p className="mt-4 max-w-xs text-sm text-foreground/60">
                qeva — Construit en France et au Maroc · Hébergé en Europe
              </p>
            </div>
            <div className="grid grid-cols-2 gap-10 text-sm md:grid-cols-3">
              <div className="space-y-3">
                <div className="text-xs font-semibold uppercase tracking-wider text-foreground/50">
                  Légal
                </div>
                <a className="block text-foreground/80 hover:text-sienna" href="#">
                  Mentions légales
                </a>
                <a className="block text-foreground/80 hover:text-sienna" href="#">
                  Confidentialité
                </a>
                <a className="block text-foreground/80 hover:text-sienna" href="#">
                  CGV
                </a>
              </div>
              <div className="space-y-3">
                <div className="text-xs font-semibold uppercase tracking-wider text-foreground/50">
                  Contact
                </div>
                <a
                  className="block text-foreground/80 hover:text-sienna"
                  href="mailto:contact@qeva.ai"
                >
                  contact@qeva.ai
                </a>
                <a
                  className="block text-foreground/80 hover:text-sienna"
                  href="https://linkedin.com/in/yassinesahli"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-border/50 pt-6 text-xs text-foreground/50">
            © {new Date().getFullYear()} qeva. Tous droits réservés.
          </div>
        </div>
      </footer>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium">
        {label}
        {required && <span className="ml-1 text-sienna">*</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full rounded-md border border-input bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-sienna focus:ring-2 focus:ring-sienna/20"
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium">{label}</label>
      <select
        name={name}
        defaultValue=""
        className="w-full rounded-md border border-input bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-sienna focus:ring-2 focus:ring-sienna/20"
      >
        <option value="" disabled>
          Sélectionner…
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
