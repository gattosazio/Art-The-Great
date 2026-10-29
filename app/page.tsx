"use client";

import Image from "next/image";
import type { CSSProperties, FormEvent, PointerEvent } from "react";
import { useEffect, useRef, useState } from "react";
import { profile } from "@/data/profile";
import {
  siCplusplus,
  siCss,
  siDocker,
  siExpress,
  siGithub,
  siGithubactions,
  siHtml5,
  siJavascript,
  siNextdotjs,
  siNodedotjs,
  siPython,
  siReact,
  siTypescript
} from "simple-icons";
import type { SimpleIcon } from "simple-icons";

const publicBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
type HeroStyle = CSSProperties & {
  "--hero-reveal": string;
  "--mist-opacity": string;
};
type TechSectionStyle = CSSProperties & { "--tech-bg-image": string };

const technologyIcons: Partial<Record<string, SimpleIcon>> = {
  JavaScript: siJavascript,
  TypeScript: siTypescript,
  HTML: siHtml5,
  CSS: siCss,
  React: siReact,
  "Next.js": siNextdotjs,
  "Node.js": siNodedotjs,
  "Express.js": siExpress,
  Python: siPython,
  "C++": siCplusplus,
  GitHub: siGithub,
  "GitHub Actions": siGithubactions,
  "Docker Desktop": siDocker
};

function withBasePath(path: string) {
  return path.startsWith("/") ? `${publicBasePath}${path}` : path;
}

function TechnologyLogo({ technology }: { technology: string }) {
  const icon = technologyIcons[technology];

  if (icon) {
    return (
      <svg className="tech-icon" viewBox="0 0 24 24" aria-hidden="true">
        <path d={icon.path} fill="currentColor" />
      </svg>
    );
  }

  return (
    <span className="tech-icon tech-icon-monogram" aria-hidden="true">
      {technology === "VS Code" ? "VS" : "C"}
    </span>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 2C6.48 2 2 6.58 2 12.22c0 4.5 2.87 8.31 6.84 9.66.5.1.68-.22.68-.49 0-.24-.01-1.03-.01-1.87-2.78.62-3.37-1.21-3.37-1.21-.46-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.35 9.35 0 0 1 12 6.84c.85 0 1.71.12 2.51.36 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.95-2.34 4.82-4.57 5.08.36.32.68.95.68 1.92 0 1.39-.01 2.51-.01 2.85 0 .27.18.59.69.49A10.27 10.27 0 0 0 22 12.22C22 6.58 17.52 2 12 2Z"
        fill="currentColor"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A2.07 2.07 0 1 0 5.3 7.14 2.07 2.07 0 0 0 5.25 3Zm15.19 9.84c0-3.46-1.84-5.07-4.3-5.07-1.98 0-2.87 1.1-3.37 1.88V8.5H9.4c.04.76 0 11.5 0 11.5h3.37v-6.42c0-.34.02-.68.13-.92.27-.68.88-1.38 1.9-1.38 1.35 0 1.9 1.04 1.9 2.56V20H20v-6.8Z"
        fill="currentColor"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M7.75 3h8.5A4.75 4.75 0 0 1 21 7.75v8.5A4.75 4.75 0 0 1 16.25 21h-8.5A4.75 4.75 0 0 1 3 16.25v-8.5A4.75 4.75 0 0 1 7.75 3Zm0 1.5A3.25 3.25 0 0 0 4.5 7.75v8.5a3.25 3.25 0 0 0 3.25 3.25h8.5a3.25 3.25 0 0 0 3.25-3.25v-8.5a3.25 3.25 0 0 0-3.25-3.25h-8.5Zm4.25 2.75A4.75 4.75 0 1 1 7.25 12 4.76 4.76 0 0 1 12 7.25Zm0 1.5A3.25 3.25 0 1 0 15.25 12 3.25 3.25 0 0 0 12 8.75Zm4.88-2.12a1.12 1.12 0 1 1-1.13 1.12 1.12 1.12 0 0 1 1.13-1.12Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ArrowLeftIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M14.5 5.5L8 12l6.5 6.5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M9.5 5.5L16 12l-6.5 6.5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

export default function Home() {
  const worksScrollerRef = useRef<HTMLDivElement>(null);
  const heroFrameRef = useRef<number | null>(null);
  const heroElementRef = useRef<HTMLElement | null>(null);
  const heroRevealTargetRef = useRef(0);
  const heroRevealCurrentRef = useRef(0);
  const [techPaused, setTechPaused] = useState(false);
  const emailContact = profile.contacts.find((contact) => contact.type === "email");
  const socialContacts = profile.contacts.filter((contact) => contact.type !== "email");

  useEffect(() => {
    const node = worksScrollerRef.current;

    if (!node) {
      return;
    }

    const handleWorksWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) {
        return;
      }

      if (node.scrollWidth <= node.clientWidth) {
        return;
      }

      event.preventDefault();
      node.scrollLeft += event.deltaY;
    };

    node.addEventListener("wheel", handleWorksWheel, { passive: false });

    return () => {
      node.removeEventListener("wheel", handleWorksWheel);
    };
  }, []);

  const scrollWorksBy = (direction: "left" | "right") => {
    const node = worksScrollerRef.current;

    if (!node) {
      return;
    }

    const amount = Math.min(380, node.clientWidth * 0.85);
    node.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth"
    });
  };

  const handleInquirySubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!emailContact) {
      throw new Error("An email contact must be configured before submitting an inquiry.");
    }

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "");
    const senderEmail = String(formData.get("email") ?? "");
    const subject = String(formData.get("subject") ?? "");
    const message = String(formData.get("message") ?? "");
    const body = `From: ${name}\nEmail: ${senderEmail}\n\n${message}`;
    const mailto = `mailto:${emailContact.value}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  };

  const animateHeroReveal = () => {
    const hero = heroElementRef.current;

    if (!hero) {
      heroFrameRef.current = null;
      return;
    }

    const current = heroRevealCurrentRef.current;
    const target = heroRevealTargetRef.current;
    const next = current + (target - current) * 0.028;
    const settled = Math.abs(target - next) < 0.08;
    const reveal = settled ? target : next;
    const mistOpacity = Math.min(0.58, reveal / 120);

    heroRevealCurrentRef.current = reveal;
    hero.style.setProperty("--hero-reveal", `${reveal}%`);
    hero.style.setProperty("--mist-opacity", `${mistOpacity}`);

    if (settled) {
      if (target === 0) {
        hero.removeAttribute("data-mist-active");
      }

      heroFrameRef.current = null;
      return;
    }

    heroFrameRef.current = requestAnimationFrame(animateHeroReveal);
  };

  const scheduleHeroReveal = (hero: HTMLElement, target: number) => {
    heroElementRef.current = hero;
    heroRevealTargetRef.current = target;

    if (target > 0) {
      hero.setAttribute("data-mist-active", "true");
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      heroRevealCurrentRef.current = target;
      hero.style.setProperty("--hero-reveal", `${target}%`);
      hero.style.setProperty("--mist-opacity", `${Math.min(0.58, target / 120)}`);

      if (target === 0) {
        hero.removeAttribute("data-mist-active");
      }

      return;
    }

    if (heroFrameRef.current === null) {
      heroFrameRef.current = requestAnimationFrame(animateHeroReveal);
    }
  };

  const handleHeroPointerMove = (event: PointerEvent<HTMLElement>) => {
    if (event.pointerType !== "mouse") {
      return;
    }

    const hero = event.currentTarget;
    const bounds = hero.getBoundingClientRect();
    const pointerPosition = (event.clientX - bounds.left) / bounds.width;
    const reveal = Math.max(0, Math.min(92, ((pointerPosition - 0.4) / 0.42) * 92));

    scheduleHeroReveal(hero, reveal);
  };

  const handleHeroPointerLeave = (event: PointerEvent<HTMLElement>) => {
    if (event.pointerType === "mouse") {
      scheduleHeroReveal(event.currentTarget, 0);
    }
  };

  return (
    <>
      <div className="site-header-shell">
        <header className="site-header">
          <a className="brand" href="#home" aria-label="ARTURO home">
            <Image
              src={withBasePath("/arturo_logo.png")}
              alt="ARTURO"
              width={2000}
              height={2000}
              className="brand-logo"
              priority
            />
          </a>
          <nav className="site-nav" aria-label="Primary">
            {profile.navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={item.href === "#contact" ? "nav-link nav-link-contact" : "nav-link"}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="header-spacer" aria-hidden="true" />
        </header>
      </div>

      <main className="page-shell">
        <section
          className="hero"
          id="home"
          aria-label="Introduction"
          style={{ "--hero-reveal": "0%", "--mist-opacity": "0" } as HeroStyle}
          onPointerMove={handleHeroPointerMove}
          onPointerLeave={handleHeroPointerLeave}
        >
          <div className="hero-artwork" aria-hidden="true">
            <Image
              src={withBasePath("/under_first_page.png")}
              alt=""
              fill
              priority
              sizes="100vw"
              className="hero-art hero-art-under"
            />
            <Image
              src={withBasePath("/first_page.png")}
              alt=""
              fill
              priority
              sizes="100vw"
              className="hero-art hero-art-cover"
            />
            <div className="hero-mist" />
          </div>
          <div className="hero-shade" aria-hidden="true" />
          <div className="hero-content">
            <h1>{profile.intro.title}</h1>
            <p className="hero-role">{profile.role}</p>
            <p className="lead">{profile.intro.description}</p>
            <div className="hero-actions">
              <a className="button button-solid" href="#works">
                View works
              </a>
              <a className="button button-ghost" href="#contact">
                Contact
              </a>
            </div>
          </div>
          <span className="hero-caption" aria-hidden="true">
            Move right to reveal
          </span>
        </section>

      <section
        className="content-section tech-section"
        id="stack"
        aria-labelledby="tech-heading"
        style={{ "--tech-bg-image": `url("${withBasePath("/about_me.jpg")}")` } as TechSectionStyle}
      >
        <div className="section-heading tech-heading">
          <h2 id="tech-heading">Tools of the trade</h2>
          <button
            className="tech-toggle"
            type="button"
            aria-pressed={techPaused}
            onClick={() => setTechPaused((paused) => !paused)}
          >
            {techPaused ? "Resume" : "Pause"} carousel
          </button>
        </div>
        <div
          className="tech-marquee"
          data-paused={techPaused}
          aria-label="Technologies Arturo works with"
        >
          <div className="tech-track">
            <ul className="tech-list">
              {profile.technologies.map((technology) => (
                <li className="tech-item" key={technology}>
                  <TechnologyLogo technology={technology} />
                  <span>{technology}</span>
                </li>
              ))}
            </ul>
            <ul className="tech-list" aria-hidden="true">
              {profile.technologies.map((technology) => (
                <li className="tech-item" key={`${technology}-repeat`}>
                  <TechnologyLogo technology={technology} />
                  <span>{technology}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="content-section" id="works">
        <div className="section-heading">
          <h2>Selected works</h2>
        </div>
        <div className="works-viewport">
          <button
            className="works-arrow works-arrow-left"
            type="button"
            aria-label="Scroll projects left"
            onClick={() => scrollWorksBy("left")}
          >
            <ArrowLeftIcon />
          </button>
          <div
            className="works-scroller"
            ref={worksScrollerRef}
          >
            <div className="works-grid">
              {profile.works.map((work, index) => (
                <a
                  className="work-card"
                  key={`${work.title}-${index}`}
                  href={work.link.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="work-card-surface">
                    <div className="work-image-wrap">
                      <Image
                        src={withBasePath(work.image.src)}
                        alt={work.image.alt}
                        width={720}
                        height={420}
                        className="work-image"
                      />
                    </div>
                    <div className="work-card-body">
                      <p className="work-type">{work.type}</p>
                      <h3>{work.title}</h3>
                      <p>{work.description}</p>
                      <span className="work-link">{work.link.label}</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
          <button
            className="works-arrow works-arrow-right"
            type="button"
            aria-label="Scroll projects right"
            onClick={() => scrollWorksBy("right")}
          >
            <ArrowRightIcon />
          </button>
        </div>
      </section>

      <section className="content-section contact-section" id="contact">
        <div className="section-heading">
          <h2>Let&apos;s connect</h2>
          <p className="contact-note">Open to work, collaboration, and freelance projects.</p>
        </div>
        <div className="contact-list">
          <form className="contact-form" onSubmit={handleInquirySubmit}>
            <div className="contact-fields">
              <label className="contact-field">
                <span>Your name</span>
                <input autoComplete="name" name="name" required />
              </label>
              <label className="contact-field">
                <span>Your email</span>
                <input autoComplete="email" name="email" type="email" required />
              </label>
              <label className="contact-field contact-field-full">
                <span>Subject</span>
                <input name="subject" required maxLength={120} />
              </label>
              <label className="contact-field contact-field-full">
                <span>Your message</span>
                <textarea name="message" rows={6} required maxLength={5000} />
              </label>
            </div>
            <div className="contact-submit-row">
              <button className="button button-solid" type="submit">
                Open email to send
              </button>
              <p className="contact-form-note">
                Your email app will open with your message ready to send.
              </p>
            </div>
          </form>

          <div className="contact-details">
            {emailContact ? (
              <a className="contact-email-link" href={emailContact.href}>
                Or email me directly
                <span>{emailContact.value}</span>
              </a>
            ) : null}
            <div className="social-links" aria-label="Social links">
              {socialContacts.map((contact) => (
                <a
                  className="social-link"
                  key={contact.label}
                  href={contact.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={contact.label}
                  title={contact.label}
                >
                  {contact.type === "github" ? (
                    <GitHubIcon />
                  ) : contact.type === "linkedin" ? (
                    <LinkedInIcon />
                  ) : (
                    <InstagramIcon />
                  )}
                  <span className="social-label">{contact.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
      </main>
    </>
  );
}
