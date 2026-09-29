"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const stats = [
  { value: "80%", label: "good vibes,\nall day long" },
  { value: "0%", label: "boring stuff\nin the can" },
  { value: "100%", label: "you, but a little\nmore fizzy" },
];

function Sparkle({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 36 36" aria-hidden="true">
      <path d="M18 0c2.3 10.3 7.7 15.7 18 18-10.3 2.3-15.7 7.7-18 18C15.7 25.7 10.3 20.3 0 18 10.3 15.7 15.7 10.3 18 0Z" fill="currentColor" />
    </svg>
  );
}

function FizzCan() {
  return (
    <svg className="can-svg" viewBox="0 0 360 620" role="img" aria-label="A bright pink Itz Fizz sparkling drink can">
      <defs>
        <linearGradient id="canBody" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="#c72258" />
          <stop offset=".18" stopColor="#f54878" />
          <stop offset=".53" stopColor="#ff7896" />
          <stop offset=".8" stopColor="#f34b7b" />
          <stop offset="1" stopColor="#bd1f54" />
        </linearGradient>
        <linearGradient id="canTop" x1="0" x2="0" y1="0" y2="1">
          <stop stopColor="#e5e1db" />
          <stop offset=".45" stopColor="#fff" />
          <stop offset="1" stopColor="#a9a7a4" />
        </linearGradient>
        <filter id="canShadow" x="-40%" y="-20%" width="180%" height="160%">
          <feGaussianBlur stdDeviation="15" />
        </filter>
      </defs>
      <ellipse cx="184" cy="583" rx="104" ry="20" fill="#302b36" opacity=".19" filter="url(#canShadow)" />
      <path d="M96 69c0-17 37-30 84-30s84 13 84 30l17 48-9 399c-1 22-37 39-92 39s-91-17-92-39l-9-399 17-48Z" fill="url(#canBody)" />
      <path d="M96 69c0-17 37-30 84-30s84 13 84 30-37 30-84 30-84-13-84-30Z" fill="url(#canTop)" />
      <ellipse cx="180" cy="68" rx="69" ry="18" fill="#b7b4b2" />
      <ellipse cx="180" cy="66" rx="61" ry="13" fill="#e8e6e3" />
      <path d="M163 65c9-7 31-8 38-1 5 5-3 15-15 16-13 1-31-8-23-15Z" fill="#969492" />
      <path d="M108 119c21 9 122 9 144 0" fill="none" stroke="#ff99ad" strokeWidth="3" opacity=".7" />
      <path d="M105 514c29 16 122 17 150 0" fill="none" stroke="#a91c4b" strokeWidth="5" opacity=".34" />
      <path d="M123 119v372" stroke="#ff9db3" strokeWidth="6" opacity=".24" />
      <g fill="#fff8ed" textAnchor="middle" fontFamily="Arial, sans-serif">
        <text x="180" y="212" fontSize="16" fontWeight="700" letterSpacing="5">SPARKLING</text>
        <text x="180" y="276" fontSize="58" fontWeight="900" letterSpacing="-5">itz</text>
        <text x="180" y="327" fontSize="38" fontWeight="900" letterSpacing="-2">FIZZ</text>
        <text x="180" y="367" fontSize="12" fontWeight="700" letterSpacing="4">PINK GRAPEFRUIT</text>
        <text x="180" y="465" fontSize="14" fontWeight="700" letterSpacing="3">GOOD MOOD INSIDE</text>
      </g>
      <g fill="#fff" opacity=".9">
        <circle cx="137" cy="405" r="4" /><circle cx="155" cy="427" r="2.5" />
        <circle cx="212" cy="402" r="3" /><circle cx="230" cy="425" r="5" />
        <circle cx="187" cy="443" r="2.5" /><circle cx="143" cy="454" r="2" />
      </g>
      <path d="M258 155c8 14 10 35 8 56M262 478c-3 13-9 22-16 29" fill="none" stroke="#fff" strokeWidth="5" strokeLinecap="round" opacity=".42" />
    </svg>
  );
}

export default function Home() {
  const heroRef = useRef(null);
  const canRef = useRef(null);
  const headlineRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const context = gsap.context(() => {
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const headline = headlineRef.current?.querySelectorAll(".headline-line");
      const statItems = statsRef.current?.querySelectorAll(".stat");

      if (!reducedMotion) {
        gsap.fromTo(headline, { y: 34, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.9, stagger: 0.12, ease: "power3.out", delay: 0.12,
        });
        gsap.fromTo(".intro-reveal", { y: 18, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.75, stagger: 0.12, ease: "power2.out", delay: 0.38,
        });
        gsap.fromTo(statItems, { y: 24, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.65, stagger: 0.16, ease: "power2.out", delay: 0.55,
        });
        gsap.fromTo(canRef.current.querySelector(".can-svg"), { y: 60, rotate: -13, scale: 0.88, opacity: 0 }, {
          y: 0, rotate: -7, scale: 1, opacity: 1, duration: 1.2, ease: "power3.out", delay: 0.15,
        });
        gsap.to(canRef.current, {
          y: 145,
          rotate: 13,
          scale: 0.78,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "+=1250",
            scrub: 0.8,
            pin: true,
            anticipatePin: 1,
          },
        });
      }
    }, heroRef);

    return () => context.revert();
  }, []);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Itz Fizz home">
          <span className="brand-mark"><Sparkle /></span>
          <span>itz fizz<span className="brand-period">.</span></span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#story">The good stuff</a>
          <a href="#flavors">Our flavors</a>
        </nav>
        <a className="header-cta" href="#flavors">Find your fizz <span aria-hidden="true">↗</span></a>
      </header>

      <section className="hero" id="top" ref={heroRef} aria-labelledby="hero-title">
        <div className="hero-grain" aria-hidden="true" />
        <div className="hero-glow hero-glow-one" aria-hidden="true" />
        <div className="hero-glow hero-glow-two" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow intro-reveal"><span className="eyebrow-dot" /> A LITTLE EXTRA SPARKLE</p>
          <h1 id="hero-title" ref={headlineRef}>
            <span className="headline-line">WELCOME</span>
            <span className="headline-line headline-accent">ITZ FIZZ<span className="headline-star">✳</span></span>
          </h1>
          <p className="hero-description intro-reveal">Big, bright bubbles. Zero blah. Meet your new favorite little pick-me-up.</p>
          <a className="primary-button intro-reveal" href="#story">Get to know the fizz <span aria-hidden="true">↘</span></a>

          <div className="stats" ref={statsRef} aria-label="Why you'll love Itz Fizz">
            {stats.map((stat) => (
              <div className="stat" key={stat.value}>
                <strong>{stat.value}</strong>
                <span>{stat.label.split("\n").map((line) => <span key={line}>{line}</span>)}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="product-stage" aria-label="Itz Fizz pink grapefruit sparkling drink">
          <div className="orbit orbit-outer" aria-hidden="true" />
          <div className="orbit orbit-inner" aria-hidden="true" />
          <div className="product-sparkle sparkle-a"><Sparkle /></div>
          <div className="product-sparkle sparkle-b"><Sparkle /></div>
          <div className="product-sparkle sparkle-c"><Sparkle /></div>
          <div className="product-tag">A GOOD<br />MOOD IN<br />EVERY SIP</div>
          <div className="can-wrap" ref={canRef}><FizzCan /></div>
          <span className="stage-caption">PINK GRAPEFRUIT · 12 FL OZ</span>
        </div>

        <div className="scroll-note"><span /> SCROLL FOR THE GOOD STUFF</div>
        <div className="hero-index" aria-hidden="true">01 <span /> 03</div>
      </section>

      <section className="story-section" id="story">
        <div className="story-topline"><span>THE FEEL-GOOD FIZZ</span><Sparkle /></div>
        <div className="story-content">
          <p className="section-kicker">NOT YOUR AVERAGE BUBBLY</p>
          <h2>Life&apos;s too short<br />for <em>flat</em> feelings.</h2>
          <p className="story-copy">We made a sparkling little sidekick for the in-between moments. Crisp fruit, happy bubbles, and a bright lift whenever your day needs one.</p>
          <a className="text-link" href="#flavors">A closer look <span aria-hidden="true">↗</span></a>
        </div>
        <div className="story-art" aria-hidden="true"><span className="story-sun" /><span className="story-ring" /><span className="story-word">GOOD<br />MOOD</span><Sparkle /></div>
      </section>

      <section className="flavor-section" id="flavors">
        <p className="section-kicker">PICK YOUR HAPPY</p>
        <h2>Meet you at <em>first sip.</em></h2>
        <div className="flavor-card">
          <div className="flavor-bubble">01 / THE ORIGINAL</div>
          <div className="mini-can"><FizzCan /></div>
          <div className="flavor-info"><span>BRIGHT · JUICY · BUBBLY</span><h3>Pink Grapefruit</h3><p>Sunshine in a can, with a little citrus wink.</p></div>
          <span className="flavor-arrow" aria-hidden="true">↗</span>
        </div>
        <footer className="site-footer"><a className="brand" href="#top"><span className="brand-mark"><Sparkle /></span><span>itz fizz<span className="brand-period">.</span></span></a><span>Stay bright. Stay bubbly.</span><span>© ITZ FIZZ 2026</span></footer>
      </section>
    </main>
  );
}
