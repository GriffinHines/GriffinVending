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

// Griffin Vending — Nightlife Vape Vending
// Single-file React landing page. TailwindCSS required by host app.
// Libraries available: framer-motion, lucide-react. No external images required.

export default function GriffinVendingSite() {
  const [venue, setVenue] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const features = [
    {
      icon: <ScanLine className="h-6 w-6" aria-hidden />,
      title: "Instant ID Check",
      desc: "2‑step age verification (ID scan + selfie match) keeps every vend compliant.",
    },
    {
      icon: <CreditCard className="h-6 w-6" aria-hidden />,
      title: "Cashless Only",
      desc: "Tap, chip, or mobile wallet with PCI‑aligned gateways and auto‑refund on failed vends.",
    },
    {
      icon: <Gauge className="h-6 w-6" aria-hidden />,
      title: "Real‑Time Inventory",
      desc: "Low‑stock alerts, planograms, and auto‑reorder thresholds to prevent stockouts.",
    },
    {
      icon: <SunMoon className="h-6 w-6" aria-hidden />,
      title: "Nightlife‑Proof",
      desc: "Low‑light UI, anti‑jam vend, tamper sensors, and armored doors for busy venues.",
    },
  ];

  const steps = [
    { num: "01", title: "Place the Machine", desc: "We site, install, and brand a machine to fit your venue and clientele." },
    { num: "02", title: "Verify & Vend", desc: "Guests pass the age‑gate, pay cashless, and receive the product in seconds." },
    { num: "03", title: "Share Revenue", desc: "Weekly payouts with transparent, exportable reports in your portal." },
  ];

  const locations = [
    { district: "Midtown", venue: "Club Neon (Lobby)", city: "Atlanta, GA" },
    { district: "Old Fourth Ward", venue: "Velvet Room (VIP)", city: "Atlanta, GA" },
    { district: "Buckhead", venue: "Skyline Lounge (Entrance)", city: "Atlanta, GA" },
    { district: "Edgewood", venue: "Basement Bar (Patio)", city: "Atlanta, GA" },
  ];

  const handleSubmit = (e) => {
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
            {/* Replace gradient cube with your actual logo image in /public */}
            <img
              src="/griffin-logo2.jpg"
              alt="Griffin Vending logo"
              className="h-10 w-auto object-contain rounded-lg"
            />
            <span className="font-semibold tracking-wide">Griffin Vending</span>
          </a>
          <div className="hidden md:flex items-center gap-6 text-sm text-neutral-300">
            <a href="#features" className="hover:text-white">Features</a>
       {/*  <a href="#locations" className="hover:text-white">Locations</a> */}
            <a href="#how" className="hover:text-white">How it works</a>
            <a href="#compliance" className="hover:text-white">Compliance</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-2xl bg-white/10 px-4 py-2 text-sm font-medium hover:bg-white/20">
            <Smartphone className="h-4 w-4" /> Host a Machine
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section id="home" className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60rem_40rem_at_50%_-10%,rgba(168,85,247,0.20),transparent_60%)]" />
        <div className="mx-auto grid max-w-7xl px-4 py-20 md:py-28 lg:grid-cols-2 lg:gap-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              Nightlife‑Ready <span className="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent">Vape Vending</span>
            </h1>
            <p className="mt-5 max-w-xl text-neutral-300">
              Cashless, compliant machines for clubs and late‑night venues. Unlock new revenue without slowing the party.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-fuchsia-500 to-indigo-500 px-5 py-3 font-medium shadow-lg shadow-fuchsia-900/30">
                Get a Machine <ArrowRight className="h-4 w-4 transition -translate-x-0 group-hover:translate-x-0.5" />
              </a>
              <a href="#features" className="inline-flex items-center gap-2 rounded-2xl border border-white/15 px-5 py-3 font-medium hover:bg-white/10">
                Explore Features
              </a>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-6 text-xs text-neutral-400">
              <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4"/> Age‑gate & audit logs</span>
              <span className="inline-flex items-center gap-2"><CreditCard className="h-4 w-4"/> Tap‑to‑pay first</span>
              <span className="inline-flex items-center gap-2"><Clock className="h-4 w-4"/> 24/7 monitoring</span>
            </div>
          </motion.div>

          {/* Device Mock */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="mt-12 lg:mt-0">
            <div className="mx-auto max-w-md rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl">
              <div className="aspect-[3/5] rounded-2xl bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 p-4">
                <div className="flex items-center justify-between">
                  <div className="h-7 w-24 rounded-lg bg-white/10" />
                  <div className="h-7 w-7 rounded-lg bg-white/10" />
                </div>
                <div className="mt-4 grid grid-cols-3 gap-3">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <div key={i} className="h-20 rounded-xl bg-gradient-to-br from-violet-400/20 to-fuchsia-400/20 ring-1 ring-inset ring-white/10" />
                  ))}
                </div>
                <div className="mt-4 h-16 rounded-xl bg-white/5 ring-1 ring-inset ring-white/10" />
                <div className="mt-3 flex items-center justify-between">
                  <div className="h-8 w-28 rounded-lg bg-white/10" />
                  <div className="h-10 w-10 rounded-full bg-white/10" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="border-t border-white/10 bg-neutral-950/60">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">Capabilities</p>
            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Built for Busy Nights</h2>
            <p className="mt-3 text-neutral-300">Fast, compliant, and data‑driven from the first vend.</p>
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
     {/* LOCATIONS 
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
            <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4"/> Weekly ACH payouts, exportable CSVs.</li>
            <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4"/> Remote price updates and SKU swaps.</li>
            <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4"/> Machine health alerts (door, tilt, temperature).</li>
          </ul>
        </div>
      </section>

      {/* COMPLIANCE */}
      <section id="compliance" className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="grid items-start gap-10 lg:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">Compliance</p>
              <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Age‑Restricted Sales, Done Right</h2>
              <p className="mt-4 text-neutral-300">
                Griffin Vending uses multi‑factor age verification with consent capture, audit logs,
                and SKU restrictions per jurisdiction. We keep data minimal, encrypted at rest, and
                retained only as required for compliance.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <ShieldCheck className="h-6 w-6" />
                  <div className="mt-2 font-semibold">ID + Liveness</div>
                  <div className="text-sm text-neutral-300">Government ID scan plus selfie match.</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <Clock className="h-6 w-6" />
                  <div className="mt-2 font-semibold">Audit & Retention</div>
                  <div className="text-sm text-neutral-300">Time‑stamped consent, venue, SKU, outcome.</div>
                </div>
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold">Operator Portal Snapshot</h3>
              <div className="mt-4 grid grid-cols-2 gap-4 text-sm text-neutral-300">
                <div className="rounded-xl border border-white/10 bg-neutral-900 p-4">
                  <div className="text-neutral-400">Gross Sales (7d)</div>
                  <div className="mt-2 text-2xl font-bold">$12,740</div>
                </div>
                <div className="rounded-xl border border-white/10 bg-neutral-900 p-4">
                  <div className="text-neutral-400">Vends</div>
                  <div className="mt-2 text-2xl font-bold">1,983</div>
                </div>
                <div className="rounded-xl border border-white/10 bg-neutral-900 p-4">
                  <div className="text-neutral-400">Refunds</div>
                  <div className="mt-2 text-2xl font-bold">0.7%</div>
                </div>
                <div className="rounded-xl border border-white/10 bg-neutral-900 p-4">
                  <div className="text-neutral-400">Uptime</div>
                  <div className="mt-2 text-2xl font-bold">99.7%</div>
                </div>
              </div>
              <p className="mt-4 text-xs text-neutral-500">*Sample data for illustration only.</p>
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
              <label className="text-sm text-neutral-300" htmlFor="venue">Venue name</label>
              <input id="venue" value={venue} onChange={(e)=>setVenue(e.target.value)} required placeholder="e.g., Skyline Lounge" className="mt-1 w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-3 outline-none ring-white/0 focus:ring-2" />
            </div>
            <div>
              <label className="text-sm text-neutral-300" htmlFor="email">Your email</label>
              <input id="email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required placeholder="you@venue.com" className="mt-1 w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-3 outline-none ring-white/0 focus:ring-2" />
            </div>
            <div>
              <label className="text-sm text-neutral-300" htmlFor="message">Message</label>
              <textarea id="message" value={message} onChange={(e)=>setMessage(e.target.value)} rows={4} placeholder="Estimated foot traffic, hours, and where the machine would go…" className="mt-1 w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-3 outline-none ring-white/0 focus:ring-2" />
            </div>
            <div className="flex items-center justify-between gap-4">
              <button type="submit" className="rounded-2xl bg-gradient-to-r from-fuchsia-500 to-indigo-500 px-6 py-3 font-medium">
                Send Inquiry
              </button>
              <div className="flex items-center gap-4 text-sm text-neutral-400">
                <a href="mailto:hello@griffinvending.com" className="inline-flex items-center gap-2 hover:text-white"><Mail className="h-4 w-4"/> hello@griffinvending.com</a>
                <span className="inline-flex items-center gap-2"><Phone className="h-4 w-4"/> (678) 628‑9974</span>
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
              <div>Nightlife vape vending • Atlanta, GA</div>
            </div>
            <div className="flex gap-6">
              <a href="#features" className="hover:text-white">Features</a>
              <a href="#compliance" className="hover:text-white">Compliance</a>
              <a href="#contact" className="hover:text-white">Contact</a>
            </div>
          </div>
          <p className="mt-6 text-xs leading-relaxed text-neutral-500">
            Disclaimer: Products are intended for adult consumers of legal age only. Availability and SKU mix vary by
            jurisdiction. Age verification, advertising, and data retention practices are implemented to support compliance
            but do not constitute legal advice. Operators should confirm local laws and required permits.
          </p>
          <p className="mt-4 text-xs">© {new Date().getFullYear()} Griffin Vending. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
