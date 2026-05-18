"use client";

import Image from "next/image";
import { useRef, type WheelEvent } from "react";
import { profile } from "@/data/profile";

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

export default function Home() {
  const worksScrollerRef = useRef<HTMLDivElement>(null);
  const emailContact = profile.contacts.find((contact) => contact.type === "email");
  const socialContacts = profile.contacts.filter((contact) => contact.type !== "email");

  const handleWorksWheel = (event: WheelEvent<HTMLDivElement>) => {
    const node = worksScrollerRef.current;

    if (!node || Math.abs(event.deltaY) <= Math.abs(event.deltaX)) {
      return;
    }

    if (node.scrollWidth <= node.clientWidth) {
      return;
    }

    event.preventDefault();
    node.scrollLeft += event.deltaY;
  };

  return (
    <>
      <div className="site-header-shell">
        <header className="site-header">
          <a className="brand" href="#home">
            {profile.name}
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
      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="eyebrow">{profile.role}</p>
          <h1>{profile.intro.title}</h1>
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

        <div className="portrait-card">
          <div className="portrait-stack">
            <div className="portrait-rings" aria-hidden="true" />
            <div className="portrait-frame">
              <Image
                src={profile.portrait.src}
                alt={profile.portrait.alt}
                className="portrait-image"
                width={520}
                height={520}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="content-section about-section" id="about">
        <div className="section-heading">
          <p className="eyebrow">About me</p>
          <h2>Simple background, clear focus.</h2>
        </div>
        <div className="info-grid">
          <article className="info-card">
            <h3>Education</h3>
            <ul>
              {profile.about.education.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="info-card">
            <h3>Hobbies</h3>
            <ul>
              {profile.about.hobbies.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="content-section" id="works">
        <div className="section-heading">
          <p className="eyebrow">Works</p>
          <h2>Selected work.</h2>
        </div>
        <div
          className="works-scroller"
          ref={worksScrollerRef}
          onWheel={handleWorksWheel}
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
                      src={work.image.src}
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
      </section>

      <section className="content-section contact-section" id="contact">
        <div className="section-heading">
          <p className="eyebrow">Contact</p>
          <h2>Let&apos;s connect.</h2>
        </div>
        <div className="contact-list">
          {emailContact ? (
            <a className="contact-card contact-email" href={emailContact.href}>
              <span>{emailContact.label}</span>
              <strong>{emailContact.value}</strong>
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
                {contact.type === "github" ? <GitHubIcon /> : <LinkedInIcon />}
              </a>
            ))}
          </div>
        </div>
      </section>
      </main>
    </>
  );
}
