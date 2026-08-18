"use client";

import { useState } from "react";
import type { ChangeEvent } from "react";
import type { CvLanguage, CvProfile } from "@/share/model/cvProfile";

type CvLanguageSwitcherProps = {
  profiles: Record<CvLanguage, CvProfile>;
};

const animationClasses = [
  "cug-cv-animate-1",
  "cug-cv-animate-2",
  "cug-cv-animate-3",
  "cug-cv-animate-4",
  "cug-cv-animate-5"
];

function isCvLanguage(value: string): value is CvLanguage {
  return value === "vi" || value === "en";
}

export function CvLanguageSwitcher({ profiles }: CvLanguageSwitcherProps) {
  const [language, setLanguage] = useState<CvLanguage>("vi");
  const profile = profiles[language];

  function handleLanguageChange(event: ChangeEvent<HTMLSelectElement>) {
    if (isCvLanguage(event.target.value)) {
      setLanguage(event.target.value);
    }
  }

  return (
    <section className="cug-cv-page">
      <div className="cug-cv-language-bar cug-cv-animate cug-cv-animate-1">
        <label className="cug-cv-language-field">
          <span>{profile.labels.languageLabel}</span>
          <select
            className="cug-cv-language-select"
            onChange={handleLanguageChange}
            value={language}
          >
            <option value="vi">{profile.labels.languageOptions.vi}</option>
            <option value="en">{profile.labels.languageOptions.en}</option>
          </select>
        </label>
      </div>

      <div className="cug-cv-hero cug-cv-animate cug-cv-animate-1">
        <div className="cug-cv-hero-copy">
          <p className="cug-eyebrow">{profile.labels.eyebrow}</p>
          <h1 className="cug-cv-title">{profile.fullName}</h1>
          <p className="cug-cv-role">{profile.title}</p>
          <p className="cug-cv-objective">{profile.objective}</p>
        </div>
        <div className="cug-cv-hero-panel" aria-label={profile.labels.quickInfo}>
          <span className="cug-cv-avatar" aria-hidden="true">
            VBC
          </span>
          <dl className="cug-cv-quick-list">
            <div>
              <dt>{profile.labels.location}</dt>
              <dd>{profile.location}</dd>
            </div>
            <div>
              <dt>{profile.labels.birthDate}</dt>
              <dd>{profile.birthDate}</dd>
            </div>
            <div>
              <dt>{profile.labels.gender}</dt>
              <dd>{profile.gender}</dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="cug-cv-grid">
        <aside className="cug-cv-sidebar">
          <section className="cug-cv-section cug-cv-animate cug-cv-animate-2">
            <h2 className="cug-cv-section-title">{profile.labels.contact}</h2>
            <div className="cug-cv-contact-list">
              {profile.contacts.map((contact) => (
                <div className="cug-cv-contact-item" key={contact.label}>
                  <span>{contact.label}</span>
                  <strong>{contact.value}</strong>
                </div>
              ))}
            </div>
          </section>

          <section className="cug-cv-section cug-cv-animate cug-cv-animate-3">
            <h2 className="cug-cv-section-title">{profile.labels.skills}</h2>
            <div className="cug-cv-skill-stack">
              {profile.skillGroups.map((group) => (
                <div className="cug-cv-skill-group" key={group.title}>
                  <h3>{group.title}</h3>
                  <div className="cug-cv-chip-list">
                    {group.skills.map((skill) => (
                      <span className="cug-cv-chip" key={skill}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="cug-cv-section cug-cv-animate cug-cv-animate-4">
            <h2 className="cug-cv-section-title">{profile.labels.education}</h2>
            <div className="cug-cv-education">
              <strong>{profile.education.school}</strong>
              <span>{profile.education.period}</span>
              <p>{profile.education.major}</p>
              <p>GPA: {profile.education.gpa}</p>
            </div>
          </section>
        </aside>

        <div className="cug-cv-main">
          <section className="cug-cv-section cug-cv-animate cug-cv-animate-2">
            <div className="cug-cv-section-heading">
              <p className="cug-eyebrow">{profile.labels.strengthsEyebrow}</p>
              <h2 className="cug-cv-section-title">{profile.labels.strengths}</h2>
            </div>
            <div className="cug-cv-strength-grid">
              {profile.strengths.map((strength, index) => (
                <article
                  className={`cug-cv-strength-card cug-cv-animate ${
                    animationClasses[index % animationClasses.length]
                  }`}
                  key={strength}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{strength}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="cug-cv-section cug-cv-animate cug-cv-animate-3">
            <div className="cug-cv-section-heading">
              <p className="cug-eyebrow">{profile.labels.experienceEyebrow}</p>
              <h2 className="cug-cv-section-title">{profile.labels.experience}</h2>
            </div>
            <div className="cug-cv-timeline">
              {profile.experiences.map((experience, index) => (
                <article
                  className={`cug-cv-timeline-item cug-cv-animate ${
                    animationClasses[index % animationClasses.length]
                  }`}
                  key={`${experience.company}-${experience.period}`}
                >
                  <div className="cug-cv-timeline-marker" aria-hidden="true" />
                  <div>
                    <p className="cug-cv-period">{experience.period}</p>
                    <h3>{experience.role}</h3>
                    <p className="cug-cv-company">{experience.company}</p>
                    <ul className="cug-cv-bullet-list">
                      {experience.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="cug-cv-section cug-cv-animate cug-cv-animate-4">
            <div className="cug-cv-section-heading">
              <p className="cug-eyebrow">{profile.labels.projectsEyebrow}</p>
              <h2 className="cug-cv-section-title">{profile.labels.projects}</h2>
            </div>
            <div className="cug-cv-project-grid">
              {profile.projects.map((project) => (
                <article className="cug-cv-project-card" key={project.name}>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <div className="cug-cv-chip-list">
                    {project.stack.map((item) => (
                      <span className="cug-cv-chip cug-cv-chip-soft" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="cug-cv-section cug-cv-animate cug-cv-animate-5">
            <div className="cug-cv-final-grid">
              <div>
                <h2 className="cug-cv-section-title">
                  {profile.labels.certificates}
                </h2>
                <div className="cug-cv-chip-list">
                  {profile.certificates.map((certificate) => (
                    <span className="cug-cv-chip" key={certificate}>
                      {certificate}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="cug-cv-section-title">{profile.labels.references}</h2>
                <ul className="cug-cv-reference-list">
                  {profile.references.map((reference) => (
                    <li key={reference}>{reference}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
