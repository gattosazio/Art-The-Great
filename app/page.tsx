"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { faOpenai } from "@fortawesome/free-brands-svg-icons";
import emailjs from "@emailjs/browser";
import type { FormEvent } from "react";
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
const emailJsConfig = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
};

const FlexCarousel = dynamic(() => import("@/components/FlexCarousel"), {
  ssr: false,
  loading: () => <div className="works-carousel-loading" aria-hidden="true" />
});
const GhostCursor = dynamic(() => import("@/components/GhostCursor"), { ssr: false });
const Lanyard = dynamic(() => import("@/components/Lanyard"), {
  ssr: false,
  loading: () => <LanyardPoster />
});

const WORKS_PER_PAGE = 5;

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

function LanyardPoster() {
  return (
    <div className="hero-lanyard-poster" aria-hidden="true">
      <Image
        src={withBasePath("/my_love.jpg")}
        alt=""
        fill
        sizes="(max-width: 680px) 25vw, 19vw"
        priority
      />
    </div>
  );
}

function TechnologyLogo({ technology }: { technology: string }) {
  if (technology === "OpenAI") {
    const [width, height, , , pathData] = faOpenai.icon;
    const paths = Array.isArray(pathData) ? pathData : [pathData];

    return (
      <svg className="tech-icon" viewBox={`0 0 ${width} ${height}`} aria-hidden="true">
        {paths.map((path) => (
          <path key={path} d={path} fill="currentColor" />
        ))}
      </svg>
    );
  }

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

export default function Home() {
  const formCooldownUntilRef = useRef(0);
  const formCooldownTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [techPaused, setTechPaused] = useState(false);
  const [lanyardReady, setLanyardReady] = useState(false);
  const [ghostCursorReady, setGhostCursorReady] = useState(false);
  const [worksNearViewport, setWorksNearViewport] = useState(false);
  const [formStatus, setFormStatus] = useState("");
  const [emailCopyStatus, setEmailCopyStatus] = useState("");
  const [formOnCooldown, setFormOnCooldown] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [activeWorkIndex, setActiveWorkIndex] = useState(0);
  const viewedWorkIndicesRef = useRef(new Set<number>([0]));
  const [allWorksViewed, setAllWorksViewed] = useState(false);
  const [worksPage, setWorksPage] = useState(0);
  const worksSectionRef = useRef<HTMLElement | null>(null);
  const emailContact = profile.contacts.find((contact) => contact.type === "email");
  const socialContacts = profile.contacts.filter((contact) => contact.type !== "email");
  const activeWork = profile.works[activeWorkIndex] ?? profile.works[0];
  const worksPageCount = Math.ceil(profile.works.length / WORKS_PER_PAGE);
  const visibleWorks = profile.works.slice(
    worksPage * WORKS_PER_PAGE,
    (worksPage + 1) * WORKS_PER_PAGE
  );
  const firstVisibleWork = worksPage * WORKS_PER_PAGE + 1;
  const lastVisibleWork = Math.min((worksPage + 1) * WORKS_PER_PAGE, profile.works.length);
  const workCarouselItems = profile.works.map((work) => ({
    src: withBasePath(work.image.src),
    alt: work.image.alt,
    title: work.title,
    subtitle: work.type,
    description: work.description,
    href: work.link.href
  }));

  useEffect(() => {
    return () => {
      if (formCooldownTimerRef.current !== null) {
        clearTimeout(formCooldownTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const lanyardTimer = window.setTimeout(() => setLanyardReady(true), 350);
    const pointerSupportsCursor = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const cursorTimer = pointerSupportsCursor
      ? window.setTimeout(() => setGhostCursorReady(true), 1200)
      : null;

    return () => {
      window.clearTimeout(lanyardTimer);
      if (cursorTimer !== null) window.clearTimeout(cursorTimer);
    };
  }, []);

  useEffect(() => {
    const section = worksSectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setWorksNearViewport(true);
        observer.disconnect();
      },
      { rootMargin: "500px 0px" }
    );
    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const handleWorkChange = (index: number) => {
    if (index < 0 || index >= profile.works.length) {
      return;
    }

    setActiveWorkIndex(index);
    viewedWorkIndicesRef.current.add(index);

    if (viewedWorkIndicesRef.current.size >= profile.works.length) {
      setAllWorksViewed(true);
    }
  };

  const handleCopyEmail = async () => {
    if (!emailContact) {
      return;
    }

    try {
      if (!navigator.clipboard?.writeText) {
        throw new Error("Clipboard access is unavailable in this browser.");
      }

      await navigator.clipboard.writeText(emailContact.value);
      setEmailCopyStatus("Email copied to clipboard.");
    } catch {
      setEmailCopyStatus("Couldn't copy automatically. You can select and copy the email address.");
    }
  };

  const handleInquirySubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    if (String(formData.get("website") ?? "").trim()) {
      setFormStatus("This inquiry was blocked. Leave the website field blank.");
      return;
    }

    const remainingCooldown = formCooldownUntilRef.current - Date.now();
    if (remainingCooldown > 0) {
      setFormStatus(`Please wait ${Math.ceil(remainingCooldown / 1000)} seconds before sending another message.`);
      return;
    }

    const name = String(formData.get("name") ?? "").trim();
    const senderEmail = String(formData.get("email") ?? "").trim();
    const subject = String(formData.get("subject") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    if (name.length < 2) {
      setFormStatus("Please enter a name with at least 2 characters.");
      return;
    }

    if (subject.length < 3) {
      setFormStatus("Please enter a subject with at least 3 characters.");
      return;
    }

    if (message.length < 20) {
      setFormStatus("Please make your message at least 20 characters long.");
      return;
    }

    const { serviceId, templateId, publicKey } = emailJsConfig;
    if (!serviceId || !templateId || !publicKey) {
      setFormStatus("Message sending isn't configured for this build. Please use the email address shown on this page.");
      return;
    }

    setIsSending(true);
    setFormStatus("Sending your message…");

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: name,
          reply_to: senderEmail,
          subject,
          message
        },
        { publicKey }
      );

      form.reset();
      formCooldownUntilRef.current = Date.now() + 30_000;
      setFormOnCooldown(true);
      setFormStatus("Message sent. Thanks for reaching out.");
      if (formCooldownTimerRef.current !== null) {
        clearTimeout(formCooldownTimerRef.current);
      }
      formCooldownTimerRef.current = setTimeout(() => {
        formCooldownUntilRef.current = 0;
        setFormOnCooldown(false);
      }, 30_000);
    } catch (error) {
      console.error("EmailJS contact submission failed.", error instanceof Error ? error.message : "Unknown EmailJS error");
      setFormStatus("Your message wasn't sent. Please try again or use the email address shown on this page.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      <div className="site-header-shell">
        <header className="site-header">
          <a className="brand" href="#home" aria-label="ARTURO home">
            <Image
              src={withBasePath("/arturo_logo-2.png")}
              alt="ARTURO"
              width={2000}
              height={2000}
              className="brand-logo"
              priority
            />
            <span className="brand-name">Arturo Inc.</span>
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
        </header>
      </div>

      <main className="page-shell">
        <div className="intro-stack-surface">
          {ghostCursorReady ? (
            <GhostCursor
              color="#d6d6d3"
              size={36}
              trailLength={16}
              inertia={0.28}
              turbulence={0.35}
              drift={0.12}
              detail={0.7}
              brightness={0.6}
              bloomStrength={0.2}
              bloomRadius={0.35}
              grainIntensity={0.02}
              fadeDelayMs={180}
              fadeDurationMs={700}
              clickPuff={false}
              intro={false}
              targetPixels={300000}
              maxDevicePixelRatio={1.5}
              zIndex={10}
            />
          ) : null}
          <section
            className="hero"
            id="home"
            aria-label="Introduction"
          >
            <div className="hero-artwork" aria-hidden="true">
              <Image
                src={withBasePath("/first_page.png")}
                alt=""
                fill
                priority
                sizes="100vw"
                className="hero-art"
              />
            </div>
            <div className="hero-shade" aria-hidden="true" />
            <div className="hero-layout">
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
              <div className="hero-lanyard-stage">
                {lanyardReady ? (
                  <Lanyard
                    frontImage={withBasePath("/my_love.jpg")}
                    backImage={withBasePath("/my_photo.jpg")}
                    size={0.58}
                    mobileSize={0.24}
                    anchor={0.63}
                    strapLength={0.35}
                    breeze={0.82}
                    intro
                  />
                ) : (
                  <LanyardPoster />
                )}
                <p className="hero-lanyard-hint" aria-hidden="true">
                </p>
              </div>
            </div>
          </section>

          <section
            className="content-section tech-section"
            id="stack"
            aria-labelledby="tech-heading"
          >
            <Image
              className="tech-section-background"
              src={withBasePath("/about_me.webp")}
              alt=""
              fill
              sizes="100vw"
              loading="lazy"
            />
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
        </div>

        <div className="lower-sections">
        <section
          className="content-section experience-section"
          id="experience"
          aria-labelledby="experience-heading"
        >
          <div className="section-heading">
            <h2 id="experience-heading">Places I&apos;ve made my mark</h2>
          </div>
          <ol
            className="experience-list"
          >
          {profile.experience.map((item) => (
            <li
              className="experience-item"
              data-current={item.endDate === "Present"}
              key={`${item.organization}-${item.startDate}`}
            >
              <p className="experience-dates">
                <time dateTime={item.startDate}>
                  {new Date(`${item.startDate}-01T00:00:00`).toLocaleDateString("en", {
                    month: "short",
                    year: "numeric",
                    timeZone: "UTC"
                  })}
                </time>
                {" – "}
                {item.endDate === "Present" ? (
                  <span>Present</span>
                ) : (
                  <time dateTime={item.endDate}>
                    {new Date(`${item.endDate}-01T00:00:00`).toLocaleDateString("en", {
                      month: "short",
                      year: "numeric",
                      timeZone: "UTC"
                    })}
                  </time>
                )}
              </p>
              <span className="experience-marker" aria-hidden="true" />
              <span className="experience-logo-frame">
                <Image
                  className="experience-logo"
                  src={withBasePath(item.logo.src)}
                  alt={item.logo.alt}
                  width={64}
                  height={64}
                />
              </span>
              <div className="experience-details">
                <h3>{item.role}</h3>
                <p className="experience-organization">{item.organization}</p>
                <p className="experience-location">{item.location}</p>
                {item.highlights ? (
                  <ul className="experience-highlights">
                    {item.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section
        className="content-section"
        id="works"
        aria-labelledby="works-heading"
        ref={worksSectionRef}
      >
        <div className="section-heading works-heading">
          <h2 id="works-heading">Arts and Crafts</h2>
        </div>
        <div className="works-viewport">
          {!allWorksViewed ? (
            <>
              <div className="works-carousel-frame">
                {worksNearViewport ? (
                  <FlexCarousel
                    items={workCarouselItems}
                    preset="arch"
                    intro="bloom"
                    cardHeight={0.58}
                    gap={16}
                    fit="landscape"
                    radius={2}
                    bend={0.16}
                    reach={0.46}
                    curl="twist"
                    dispersion={0.45}
                    squeeze={0.12}
                    focusOnClick
                    captions={false}
                    captureWheel
                    ariaLabel="Selected project previews"
                    onChange={handleWorkChange}
                  />
                ) : (
                  <Image
                    className="works-carousel-poster"
                    src={withBasePath(activeWork.image.src)}
                    alt={activeWork.image.alt}
                    fill
                    sizes="(max-width: 680px) 100vw, 90vw"
                  />
                )}
              </div>
              <div className="works-project-info">
                {activeWork ? (
                  <div className="works-project-copy">
                    <p className="works-project-meta">
                      {String(activeWorkIndex + 1).padStart(2, "0")} / {String(profile.works.length).padStart(2, "0")}
                      {" · "}
                      {activeWork.type}
                    </p>
                    <h3>{activeWork.title}</h3>
                    <p>{activeWork.description}</p>
                  </div>
                ) : null}
                {activeWork ? (
                  <a className="button button-ghost works-project-link" href={activeWork.link.href} target="_blank" rel="noreferrer">
                    {activeWork.link.label}
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        d="M7 17 17 7M8 7h9v9"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.8"
                      />
                    </svg>
                  </a>
                ) : null}
              </div>
            </>
          ) : (
            <>
              <ol
                className="works-project-list"
                aria-label="Projects on this page"
                key={worksPage}
              >
                {visibleWorks.map((work) => (
                  <li className="works-project-row" key={work.title}>
                    <div className="works-project-row-copy">
                      <p className="works-project-meta">{work.type}</p>
                      <h3>{work.title}</h3>
                      <p>{work.description}</p>
                      <a href={work.link.href} target="_blank" rel="noreferrer">
                        {work.link.label}
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                          <path
                            d="M7 17 17 7M8 7h9v9"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.8"
                          />
                        </svg>
                      </a>
                    </div>
                    <Image
                      className="works-project-row-image"
                      src={withBasePath(work.image.src)}
                      alt={work.image.alt}
                      width={240}
                      height={150}
                    />
                  </li>
                ))}
              </ol>
              {worksPageCount > 1 ? (
                <nav className="works-pagination" aria-label="Project list pages">
                  <p aria-live="polite" aria-atomic="true">
                    Projects {firstVisibleWork}–{lastVisibleWork} of {profile.works.length}
                  </p>
                  <div className="works-pagination-controls">
                    <button
                      type="button"
                      onClick={() => setWorksPage((page) => page - 1)}
                      disabled={worksPage === 0}
                      aria-label="Show previous projects"
                    >
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          d="M19 12H5m0 0 7 7m-7-7 7-7"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.8"
                        />
                      </svg>
                      Previous
                    </button>
                    <span>
                      Page {worksPage + 1} of {worksPageCount}
                    </span>
                    <button
                      type="button"
                      onClick={() => setWorksPage((page) => page + 1)}
                      disabled={worksPage === worksPageCount - 1}
                      aria-label="Show more projects"
                    >
                      Next
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          d="M5 12h14m0 0-7-7m7 7-7 7"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.8"
                        />
                      </svg>
                    </button>
                  </div>
                </nav>
              ) : null}
            </>
          )}
        </div>
      </section>

      <section className="content-section contact-section" id="contact">
        <div className="section-heading">
          <h2>Let&apos;s connect</h2>
          <p className="contact-note">Open to work, collaboration, and freelance projects.</p>
        </div>
        <div className="contact-list">
          <form className="contact-form" onSubmit={handleInquirySubmit} aria-busy={isSending}>
            <div className="contact-fields">
              <label className="contact-field contact-trap" aria-hidden="true">
                <span>Leave this field empty</span>
                <input name="website" tabIndex={-1} autoComplete="off" />
              </label>
              <label className="contact-field">
                <span>Your name</span>
                <input autoComplete="name" name="name" required minLength={2} maxLength={80} />
              </label>
              <label className="contact-field">
                <span>Your email</span>
                <input autoComplete="email" name="email" type="email" required maxLength={254} />
              </label>
              <label className="contact-field contact-field-full">
                <span>Subject</span>
                <input name="subject" required minLength={3} maxLength={120} />
              </label>
              <label className="contact-field contact-field-full">
                <span>Your message</span>
                <textarea name="message" rows={6} required minLength={20} maxLength={5000} />
              </label>
            </div>
            <div className="contact-submit-row">
              <button className="button button-solid" type="submit" disabled={formOnCooldown || isSending}>
                {isSending ? "Sending message…" : formOnCooldown ? "Please wait before sending again" : "Send message"}
              </button>
              <p className="contact-form-note">
                I will read your message and respond as soon as possible. Please allow a few days for a reply.
              </p>
            </div>
            <p className="contact-status" role="status" aria-live="polite">
              {formStatus}
            </p>
          </form>

          <div className="contact-details">
            {emailContact ? (
              <div className="contact-email-link">
                <span>Email address</span>
                <button
                  className="contact-email-copy"
                  type="button"
                  onClick={handleCopyEmail}
                  aria-label={`Copy ${emailContact.value} to clipboard`}
                >
                  {emailContact.value}
                </button>
                <span className="contact-status" role="status" aria-live="polite">
                  {emailCopyStatus}
                </span>
              </div>
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
      </div>
      </main>
      <footer className="site-footer">
        <p>© 2026 Art Sumondong</p>
      </footer>
    </>
  );
}
