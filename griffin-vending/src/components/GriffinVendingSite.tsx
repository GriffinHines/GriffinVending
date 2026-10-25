"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  CreditCard,
  ScanLine,
  Gauge,
  SunMoon,
  MapPin,
  Building2,
  Clock,
  ArrowRight,
  Smartphone,
  Mail,
  Phone,
  CheckCircle2,
} from "lucide-react";

// Griffin Vending — Mystery Box Vending
// Single-file React landing page. TailwindCSS required by host app.
// Libraries available: framer-motion, lucide-react. No external images required.

export default function GriffinVendingSite() {
  const [venue, setVenue] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const features = [
    {
      icon: <ScanLine className="h-6 w-6" aria-hidden />,
      title: "Surprise in Every Box",
      desc: "A rotating assortment of sealed surprise boxes makes every purchase a reveal.",
    },
    {
      icon: <CreditCard className="h-6 w-6" aria-hidden />,
      title: "Easy Cashless Checkout",
      desc: "Quick, convenient card and mobile-wallet payments.",
    },
    {
      icon: <Gauge className="h-6 w-6" aria-hidden />,
      title: "Real-Time Inventory",
      desc: "Track stock and refresh the mix to keep customers curious.",
    },
    {
      icon: <SunMoon className="h-6 w-6" aria-hidden />,
      title: "Made for High-Traffic Venues",
      desc: "A compact entertainment experience for bars, lounges, and other busy locations.",
    },
  ];

  const steps = [
    {
      num: "01",
      title: "Place the Machine",
      desc: "We site, install, and brand a machine to fit your venue and clientele.",
    },
    {
      num: "02",
      title: "Verify & Vend",
      desc: "Guests pick a mystery box, pay cashless, and discover their surprise.",
    },
    {
      num: "03",
      title: "Share Revenue",
      desc: "We work with venue partners on clear revenue-sharing terms.",
    },
  ];

  const locations = [
    { district: "Midtown", venue: "Club Neon (Lobby)", city: "Atlanta, GA" },
    { district: "Old Fourth Ward", venue: "Velvet Room (VIP)", city: "Atlanta, GA" },
    { district: "Buckhead", venue: "Skyline Lounge (Entrance)", city: "Atlanta, GA" },
    { district: "Edgewood", venue: "Basement Bar (Patio)", city: "Atlanta, GA" },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const subject = encodeURIComponent("Venue Inquiry – Griffin Vending");
    const body = encodeURIComponent(
      `Venue: ${venue}\nEmail: ${email}\n\n${message}\n\n— Sent from griffinvending.com`
    );

    window.location.href = `mailto:hello@griffinvending.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 selection:bg-fuchsia-500/40">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-white/10 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/70">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <a href="#home" className="flex items-center gap-2">
            <img
              src="/griffin-logo2.jpg"
              alt="Griffin Vending logo"
              className="h-10 w-auto rounded-lg object-contain"
            />
            <span className="font-semibold tracking-wide">Griffin Vending</span>
          </a>

          <div className="hidden items-center gap-6 text-sm text-neutral-300 md:flex">
            <a href="#features" className="hover:text-white">
              Features
            </a>
            {/* <a href="#locations" className="hover:text-white">Locations</a> */}
            <a href="#how" className="hover:text-white">
              How it works
            </a>
            <a href="#mystery" className="hover:text-white">
              Compliance
            </a>
            <a href="#giving-back" className="hover:text-white">
              Giving Back
            </a>
            <a href="#contact" className="hover:text-white">
              Contact
            </a>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-2xl bg-white/10 px-4 py-2 text-sm font-medium hover:bg-white/20"
          >
            <Smartphone className="h-4 w-4" /> Host a Machine
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section id="home" className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60rem_40rem_at_50%_-10%,rgba(168,85,247,0.20),transparent_60%)]" />

        <div className="mx-auto grid max-w-7xl px-4 py-20 md:py-28 lg:grid-cols-2 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              {" "}
              <span className="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent">
                Mystery Box Vending
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-neutral-300">
              Trading cards, toys, novelties, adult items, jewelry. The mystery box could be anything. Bring surprise-box vending to your venue and give guests something to talk about.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-fuchsia-500 to-indigo-500 px-5 py-3 font-medium shadow-lg shadow-fuchsia-900/30"
              >
                Get a Machine{" "}
                <ArrowRight className="h-4 w-4 transition -translate-x-0 group-hover:translate-x-0.5" />
              </a>

              <a
                href="#features"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/15 px-5 py-3 font-medium hover:bg-white/10"
              >
                Explore Features
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-6 text-xs text-neutral-400">
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="h-4 w-4" /> Surprise-box experience
              </span>
              <span className="inline-flex items-center gap-2">
                <CreditCard className="h-4 w-4" /> Tap-to-pay first
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4" /> Rotating surprises
              </span>
            </div>
          </motion.div>

          {/* Family Guy mystery box GIF replaces the vending machine illustration */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-12 flex items-center lg:mt-0"
          >
            <figure className="w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4 shadow-2xl">
              <img
                src="/family-guy-mystery-box.gif"
                alt="Family Guy mystery box scene: the mystery box could be anything"
                className="h-auto w-full rounded-2xl"
              />
              <figcaption className="mt-3 text-center text-sm italic text-neutral-300">
              </figcaption>
            </figure>
          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="border-t border-white/10 bg-neutral-950/60">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">Capabilities</p>
            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Built for Busy Venues</h2>
            <p className="mt-3 text-neutral-300">An unexpected experience guests will want to try.</p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <div key={f.title} className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow">
                <div className="mb-3 inline-flex rounded-xl bg-white/10 p-2">{f.icon}</div>
                <h3 className="font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-neutral-300">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*
      LOCATIONS
      <section id="locations" className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">Where to Find Us</p>
              <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Featured Nightlife Partners</h2>
            </div>
            <a href="#contact" className="hidden sm:inline-flex items-center gap-2 rounded-2xl border border-white/15 px-4 py-2 text-sm hover:bg-white/10">
              <Building2 className="h-4 w-4"/> Add your venue
            </a>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {locations.map((l) => (
              <div key={l.venue} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="flex items-center gap-2 text-neutral-300"><MapPin className="h-4 w-4"/> {l.district}</div>
                <div className="mt-2 font-semibold">{l.venue}</div>
                <div className="text-sm text-neutral-400">{l.city}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* HOW IT WORKS */}
      <section id="how" className="border-t border-white/10 bg-neutral-950/60">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">Operator Flow</p>
            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">From Install to Payout</h2>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {steps.map((s) => (
              <div key={s.num} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="text-sm text-neutral-400">Step {s.num}</div>
                <div className="mt-1 text-lg font-semibold">{s.title}</div>
                <p className="mt-2 text-neutral-300">{s.desc}</p>
              </div>
            ))}
          </div>

          <ul className="mt-8 space-y-2 text-sm text-neutral-400">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4" /> Revenue-sharing options for venue partners.
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4" /> Fresh mystery-box assortments.
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4" /> Simple placement and ongoing restocking.
            </li>
          </ul>
        </div>
      </section>

      {/* THE MYSTERY */}
      <section id="mystery" className="border-t border-white/10">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-16 lg:grid-cols-[3fr_2fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-fuchsia-300">What's in the box?</p>
            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Customized inventory to fit your venue</h2>
            <p className="mt-4 text-neutral-300">Items generally sell for between $15 to $25 a pop. The contents of the boxes can be adjusted depending on your clientele.</p>
            <p className="mt-4 text-sm text-neutral-400">Box contents and available selections may vary by machine. Product details and terms will be displayed at the point of sale.</p>
            <a href="#contact" className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-fuchsia-500 to-indigo-500 px-5 py-3 font-medium">Bring the mystery to your venue <ArrowRight className="h-4 w-4" /></a>
          </div>
          <figure className="mx-auto w-fit max-w-full rounded-3xl border border-white/10 bg-white/5 p-2 shadow-xl">
            <img src="/pokemon-mystery-pack.png" alt="Pokémon trading card mystery package" className="block h-80 w-auto max-w-full rounded-xl object-contain" />
          </figure>
        </div>
      </section>

      {/* GIVING BACK */}
      <section id="giving-back" className="border-t border-white/10 bg-neutral-950/60">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-8 text-center shadow-xl">
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">Giving Back</p>

            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
              10% of Profits Go to <a href="https://www.charitywater.org" className="text-blue-600 underline underline-offset-4 hover:text-blue-700">Charity: Water</a>
            </h2>

            <p className="mt-4 text-neutral-300">
              Every Griffin Vending machine helps support clean water projects around the world.
              We donate 10% of profits to Charity: water to help bring safe, clean drinking water
              to communities in need.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 rounded-2xl border border-white/15 px-5 py-3 text-sm text-neutral-300">
              <CheckCircle2 className="h-4 w-4" />
              Vend with purpose. Support clean water.
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="border-t border-white/10 bg-neutral-950/60">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">Get Started</p>
            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Host a Griffin Vending Machine</h2>
            <p className="mt-3 text-neutral-300">Tell us about your venue and we’ll follow up with next steps.</p>
          </div>

          <form onSubmit={handleSubmit} className="mx-auto mt-8 max-w-2xl space-y-4">
            <div>
              <label className="text-sm text-neutral-300" htmlFor="venue">
                Venue name
              </label>
              <input
                id="venue"
                value={venue}
                onChange={(e) => setVenue(e.target.value)}
                required
                placeholder="e.g., Skyline Lounge"
                className="mt-1 w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-3 outline-none ring-white/0 focus:ring-2"
              />
            </div>

            <div>
              <label className="text-sm text-neutral-300" htmlFor="email">
                Your email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="you@venue.com"
                className="mt-1 w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-3 outline-none ring-white/0 focus:ring-2"
              />
            </div>

            <div>
              <label className="text-sm text-neutral-300" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                placeholder="Estimated foot traffic, hours, and where the machine would go…"
                className="mt-1 w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-3 outline-none ring-white/0 focus:ring-2"
              />
            </div>

            <div className="flex items-center justify-between gap-4">
              <button
                type="submit"
                className="rounded-2xl bg-gradient-to-r from-fuchsia-500 to-indigo-500 px-6 py-3 font-medium"
              >
                Send Inquiry
              </button>

              <div className="flex items-center gap-4 text-sm text-neutral-400">
                <a
                  href="mailto:hello@griffinvending.com"
                  className="inline-flex items-center gap-2 hover:text-white"
                >
                  <Mail className="h-4 w-4" /> hello@griffinvending.com
                </a>

                <span className="inline-flex items-center gap-2">
                  <Phone className="h-4 w-4" /> (678) 628-9974
                </span>
              </div>
            </div>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-10 text-sm text-neutral-400">
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-2">
              <div className="font-semibold text-neutral-200">Griffin Vending</div>
              <div>Mystery box vending • Atlanta, GA</div>
            </div>

            <div className="flex gap-6">
              <a href="#features" className="hover:text-white">
                Features
              </a>
              <a href="#mystery" className="hover:text-white">
                Compliance
              </a>
              <a href="#giving-back" className="hover:text-white">
                Giving Back
              </a>
              <a href="#contact" className="hover:text-white">
                Contact
              </a>
            </div>
          </div>

          <p className="mt-6 text-xs leading-relaxed text-neutral-500">
            Mystery box contents vary. Product descriptions, prices, and any applicable purchase terms should be disclosed at the machine. Venue operators should confirm applicable local rules and permits.
          </p>

          <p className="mt-4 text-xs">© {new Date().getFullYear()} Griffin Vending. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
