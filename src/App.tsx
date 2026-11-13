import { useEffect, useRef, useState, type ReactNode } from 'react';
import { certifications, credentialBadges, education, monthLabel, profile, publications, roles, type Certification } from './data';

const worlds = ['Start', 'Foundations', 'Experience', 'Cloud & AI', 'Power-ups', 'Connect'];
const worldNames = ['Hello, world.', 'The foundation zone', 'The enterprise dungeon', 'The cloud kingdom', 'The power-up room', 'The next adventure'];
const portrait = `${import.meta.env.BASE_URL}portrait.jpg`;
type ModalContent = { title: string; content: ReactNode };

function Icon({ name, size = 20 }: { name: 'arrow' | 'code' | 'cloud' | 'weight' | 'bolt' | 'external' | 'mail' | 'flag'; size?: number }) {
  const paths = {
    arrow: <path d="M4 12h15m-6-6 6 6-6 6" />,
    code: <path d="m8 6-6 6 6 6m8-12 6 6-6 6M14 3l-4 18" />,
    cloud: <path d="M7 18a5 5 0 0 1-1-10 6 6 0 0 1 11-2 6 6 0 0 1 0 12Z" />,
    weight: <><path d="M7 12h10M4 7v10M7 5v14M17 5v14M20 7v10" /></>,
    bolt: <path d="m13 2-9 12h7l-1 8 10-13h-7z" />,
    external: <path d="M14 3h7v7m0-7L10 14M10 4H4v16h16v-6" />,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 6 9 7 9-7" /></>,
    flag: <><path d="M5 22V2m0 1h14l-3 5 3 5H5" /></>,
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}

function PixelCloud({ className = '' }: { className?: string }) {
  return <div className={`pixel-cloud ${className}`} aria-hidden="true"><i /><i /><i /></div>;
}

function Scenery({ index }: { index: number }) {
  return <div className={`scenery scenery-${index}`} aria-hidden="true">
    <PixelCloud className="cloud-one" /><PixelCloud className="cloud-two" /><PixelCloud className="cloud-three" />
    <div className="mountain mountain-one" /><div className="mountain mountain-two" />
    <div className="hill hill-one" /><div className="hill hill-two" />
    <div className="terrain"><div className="grass" /><div className="earth" /></div>
    <div className="scene-props">
      {index === 0 && <><div className="tiny-flower" /><div className="pipe"><span /></div><div className="block-stack"><span /><span /><span /></div></>}
      {index === 1 && <><div className="pixel-tree"><i /><b /></div><div className="book-stack"><i /><i /><i /></div></>}
      {index === 2 && <><div className="server-rack"><i /><i /><i /><i /></div><div className="cable" /><span className="prop-note">IT DEPARTMENT<br />YES, WE TRIED RESTARTING.</span></>}
      {index === 3 && <><div className="pipe blue-pipe"><span /></div><div className="satellite"><Icon name="cloud" size={66} /></div></>}
      {index === 4 && <><div className="gym-rack"><i /><b /><Icon name="weight" size={94} /></div><span className="prop-note">DEPLOY. RECOVER. REPEAT.</span></>}
      {index === 5 && <><div className="finish-flag"><i /><b>NC</b></div><div className="pipe"><span /></div></>}
    </div>
  </div>;
}

function Avatar({ walking, jumping }: { walking: boolean; jumping: boolean }) {
  return <div className={`avatar ${walking ? 'walking' : ''} ${jumping ? 'jumping' : ''}`} aria-hidden="true">
    <div className="avatar-shadow" />
    <div className="avatar-person">
      <div className="avatar-head"><img src={portrait} alt="" /></div>
      <div className="avatar-neck" /><div className="avatar-body"><span>&lt;/&gt;</span></div>
      <div className="arm arm-left" /><div className="arm arm-right" />
      <div className="leg leg-left" /><div className="leg leg-right" />
    </div>
  </div>;
}

function TardisFlyby({ onComplete }: { onComplete: () => void }) {
  return <div className="tardis-lane" aria-hidden="true">
    <div className="tardis-flyby" onAnimationEnd={onComplete}>
      <svg viewBox="0 0 90 130" width="76" height="110">
        <path d="M37 15V5h13v10" fill="#d9ffff" stroke="#255577" strokeWidth="3" />
        <path d="M33 5h21M32 15h23" stroke="#183d64" strokeWidth="4" />
        <path d="m15 26 12-10h36l12 10" fill="#326c98" stroke="#153656" strokeWidth="3" />
        <path d="M10 28h70v94H10z" fill="#235589" stroke="#142f50" strokeWidth="4" />
        <path d="M70 31h9v89h-9z" fill="#153d6b" />
        <path d="M7 25h76v17H7z" fill="#132f4d" stroke="#40759d" strokeWidth="3" />
        <text x="45" y="36" textAnchor="middle" fill="#f3f5dd" fontFamily="monospace" fontSize="8" fontWeight="bold">POLICE BOX</text>
        <path d="M17 47h25v69H17zm30 0h19v69H47z" fill="#306b9f" stroke="#163b62" strokeWidth="3" />
        <path d="M20 50h19v24H20zm30 0h13v24H50z" fill="#c1e7e5" />
        <path d="M29 50v24m27-24v24M20 62h19m11 0h13" stroke="#376c94" strokeWidth="2" />
        <path d="M20 81h19v13H20z" fill="#e9e9d8" />
        <path d="M23 85h13m-13 4h10" stroke="#587686" strokeWidth="2" />
        <path d="M50 81h13v13H50zm-30 20h19v12H20zm30 0h13v12H50z" fill="#245484" stroke="#163b62" strokeWidth="2" />
        <path d="M44 83v11" stroke="#eee1ac" strokeWidth="3" />
        <path d="M6 121h78v6H6z" fill="#183c64" stroke="#142f50" strokeWidth="3" />
      </svg>
    </div>
  </div>;
}

function Tags({ items }: { items: string[] }) {
  return <div className="tags">{items.map(item => <span key={item}>{item}</span>)}</div>;
}

function OfficialCredentialLink({ url }: { url: string }) {
  return <a className="credential-link" href={url} target="_blank" rel="noopener noreferrer">Official certification page <Icon name="external" size={14} /></a>;
}

function CertificationBadge({ cert }: { cert: Certification }) {
  return cert.badge
    ? <img className="certification-badge" src={`${import.meta.env.BASE_URL}${credentialBadges[cert.badge]}`} alt={`${cert.title} badge`} width={64} height={64} />
    : <span className="certification-badge neutral-badge" aria-hidden="true"><Icon name="flag" size={28} /></span>;
}

function CredentialList() {
  const [filter, setFilter] = useState('All');
  return <>
    <p className="muted">Explore the skills, requirements, and learning paths on each issuing organization's official page.</p>
    <div className="filters" aria-label="Filter certifications">{['All', 'AI', 'Cloud', 'DevOps', 'People'].map(item =>
      <button key={item} className={filter === item ? 'selected' : ''} aria-pressed={filter === item} onClick={() => setFilter(item)}>{item}</button>)}</div>
    <div className="credential-list">{certifications.filter(cert => filter === 'All' || cert.category === filter).map(cert =>
      <article key={cert.title}>
        <CertificationBadge cert={cert} />
        <div><h3>{cert.title}</h3><p>{cert.issuer} · Issued {monthLabel(cert.issued)}</p><OfficialCredentialLink url={cert.url} /></div>
      </article>,
    )}</div>
  </>;
}

function Resume({ openCredentials }: { openCredentials: () => void }) {
  return <main className="resume" id="resume-content">
    <div className="resume-actions"><span className="eyebrow">THE SHORTCUT. ALL THE SUBSTANCE.</span><button className="button dark" onClick={() => window.print()}>Print / save PDF <Icon name="arrow" /></button></div>
    <header className="resume-header">
      <div><p className="eyebrow">ENGINEERING · CLOUD · AI</p><h1>{profile.fullName}</h1><p className="resume-title">{profile.title} at {profile.company}</p><p>{profile.location}</p>
        <div className="resume-links"><a href={`mailto:${profile.email}`}>Email</a><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a><a href={profile.github} target="_blank" rel="noreferrer">GitHub</a></div>
        <p className="print-contact">{profile.email} · {profile.linkedin} · {profile.github}</p>
      </div><img src={portrait} alt="Nikos Chelmis" />
    </header>
    <section><h2>Profile</h2><p>{profile.summary}</p><Tags items={['C# / .NET', 'Microsoft Azure', 'AI adoption', 'Cloud-native architecture', 'Engineering leadership', 'Governance & delivery']} /></section>
    <section><h2>Experience</h2>{roles.map(role => <article className="resume-role" key={role.role + role.company}>
      <div className="resume-role-heading"><h3>{role.role} <span>· {role.company}</span></h3><span>{role.period}</span></div><p className="muted">{role.team}</p>
      <ul>{role.points.map(point => <li key={point}>{point}</li>)}</ul>
    </article>)}</section>
    <section><h2>Earlier work & projects</h2><h3>Independent Developer <span className="muted">· Oct 2011 - Nov 2013</span></h3><p>Built Windows Forms applications for small businesses, including gym membership and financial tracking, retail inventory management, and a jewelry product showcase.</p></section>
    <section><h2>Education</h2>{education.map(item => <article key={item.degree} className="education-row"><h3>{item.degree}</h3><p>{item.school} · {item.date}</p></article>)}</section>
    <section><div className="section-title"><h2>Certifications & learning</h2><button className="text-button no-print" onClick={openCredentials}>Explore credentials <Icon name="arrow" /></button></div>
      <p className="muted">Certifications, training, and professional development. Follow each link for the issuer's program details.</p>
      <div className="resume-certifications">{certifications.map(cert => <article key={cert.title}><CertificationBadge cert={cert} /><div><h3>{cert.title}</h3><p>{cert.issuer} · Issued {monthLabel(cert.issued)}</p><OfficialCredentialLink url={cert.url} /></div></article>)}</div>
    </section>
    <section><h2>Publications</h2><ul>{publications.map(item => <li key={item}>{item}</li>)}</ul></section>
    <section><h2>Beyond the keyboard</h2><p>Gym enthusiast, gamer, and bookworm. Native Greek; full professional proficiency in English.</p></section>
    <footer>Built with curiosity. And probably after a workout.</footer>
  </main>;
}

export function App() {
  const [mode, setMode] = useState<'game' | 'resume'>('game');
  const [active, setActive] = useState(0);
  const [walking, setWalking] = useState(false);
  const [jumping, setJumping] = useState(false);
  const [flyby, setFlyby] = useState<'ready' | 'flying' | 'done'>('ready');
  const [collected, setCollected] = useState<string[]>([]);
  const [modal, setModal] = useState<ModalContent | null>(null);
  const [reducedMotion, setReducedMotion] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const [compact, setCompact] = useState(() => window.matchMedia('(max-width: 1000px), (max-height: 740px)').matches);
  const stacked = reducedMotion || compact;
  const track = useRef<HTMLDivElement>(null);
  const journey = useRef<HTMLElement>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const walkTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const jumpTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const savedProgress = useRef(0);
  const lastFocus = useRef<HTMLElement | null>(null);

  const goTo = (index: number) => {
    const target = Math.max(0, Math.min(worlds.length - 1, index));
    if (stacked) {
      document.getElementById(`world-${target}`)?.scrollIntoView({ behavior: 'instant', block: 'start' });
    } else {
      const range = (journey.current?.offsetHeight ?? 0) - window.innerHeight;
      window.scrollTo({ top: target / (worlds.length - 1) * range, behavior: 'smooth' });
    }
  };

  const openModal = (content: ModalContent) => {
    lastFocus.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    setModal(content);
  };
  const openCredentials = () => openModal({ title: 'The power-up collection', content: <CredentialList /> });

  const switchMode = () => {
    if (mode === 'game') {
      savedProgress.current = window.scrollY;
      setFlyby(current => current === 'flying' ? 'done' : current);
      setMode('resume');
      window.scrollTo({ top: 0, behavior: 'instant' });
    } else {
      setMode('game');
      requestAnimationFrame(() => window.scrollTo({ top: savedProgress.current, behavior: 'instant' }));
    }
  };

  const jump = () => {
    if (jumpTimer.current) clearTimeout(jumpTimer.current);
    setJumping(true);
    jumpTimer.current = setTimeout(() => setJumping(false), 650);
  };

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(media.matches);
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    const media = window.matchMedia('(max-width: 1000px), (max-height: 740px)');
    const update = () => setCompact(media.matches);
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    if (!modal) return;
    const element = dialog.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    element?.showModal();
    return () => {
      element?.close();
      document.body.style.overflow = previousOverflow;
      lastFocus.current?.focus({ preventScroll: true });
    };
  }, [modal]);

  useEffect(() => {
    if (mode !== 'game') return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const range = (journey.current?.offsetHeight ?? 0) - window.innerHeight;
      const progress = range > 0 ? Math.max(0, Math.min(1, window.scrollY / range)) : 0;
      if (!stacked && range > 0 && window.scrollY >= range - 2) {
        setFlyby(current => current === 'ready' ? 'flying' : current);
      } else if (window.scrollY <= 2) {
        setFlyby('ready');
      }
      if (stacked) {
        const sections = Array.from(document.querySelectorAll<HTMLElement>('.world'));
        const nearest = sections.reduce((best, section, index) =>
          Math.abs(section.getBoundingClientRect().top - 100) < Math.abs(sections[best].getBoundingClientRect().top - 100) ? index : best, 0);
        setActive(nearest);
        if (nearest === worlds.length - 1 && sections[nearest].getBoundingClientRect().top <= 110) {
          setFlyby(current => current === 'ready' ? 'flying' : current);
        }
        return;
      }
      if (track.current) track.current.style.transform = `translate3d(${-progress * (worlds.length - 1) * window.innerWidth}px, 0, 0)`;
      setActive(Math.round(progress * (worlds.length - 1)));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
      if (!stacked) {
        setWalking(true);
        if (walkTimer.current) clearTimeout(walkTimer.current);
        walkTimer.current = setTimeout(() => setWalking(false), 140);
      }
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(frame);
      if (walkTimer.current) clearTimeout(walkTimer.current);
    };
  }, [mode, stacked]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (mode !== 'game' || modal || event.altKey || event.ctrlKey || event.metaKey) return;
      if (event.target instanceof HTMLElement && event.target.closest('button, a, input, textarea, select, [contenteditable="true"]')) return;
      if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
        event.preventDefault();
        goTo(active + (event.key === 'ArrowRight' ? 1 : -1));
      }
      if (event.code === 'Space' && !stacked) {
        event.preventDefault();
        jump();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  useEffect(() => () => {
    if (jumpTimer.current) clearTimeout(jumpTimer.current);
  }, []);

  const openRole = (index: number) => {
    const role = roles[index];
    openModal({ title: role.role, content: <><p className="eyebrow">{role.company} · {role.period}</p><p>{role.team}</p><ul className="detail-points">{role.points.map(point => <li key={point}>{point}</li>)}</ul><Tags items={role.tags} /></> });
  };

  return <div className={`app ${reducedMotion ? 'reduced-motion' : ''} ${stacked ? 'stacked-layout' : ''} ${mode === 'resume' ? 'resume-mode' : ''}`}>
    <a className="skip-link" href={mode === 'game' ? '#world-0' : '#resume-content'}>Skip to content</a>
    <header className="site-header">
      <button className="brand" onClick={() => mode === 'resume' ? switchMode() : goTo(0)} aria-label="Nikos Chelmis, adventure start"><span className="brand-mark">n<span>c</span><i /></span><span>NIKOS CHELMIS<span className="brand-sub">ENGINEER. LEADER. PLAYER ONE.</span></span></button>
      {mode === 'game' && <nav aria-label="Worlds" className="desktop-nav">{worlds.map((world, index) => <button key={world} onClick={() => goTo(index)} aria-current={active === index ? 'step' : undefined}><span>{String(index + 1).padStart(2, '0')}</span>{world}</button>)}</nav>}
      <button className="resume-toggle" onClick={switchMode}>{mode === 'game' ? 'Quick CV' : 'Back to adventure'}<Icon name={mode === 'game' ? 'external' : 'arrow'} size={16} /></button>
    </header>

    {mode === 'resume' ? <Resume openCredentials={openCredentials} /> : <>
      <main className="journey" ref={journey} aria-label="Interactive career adventure">
        <div className="game-viewport">
          <div className="world-status"><span className="live-dot" /> WORLD {String(active + 1).padStart(2, '0')} <span className="status-divider">/</span> <span>{worldNames[active]}</span></div>
          <div className="world-track" ref={track}>
            {worlds.map((_, index) => <section key={index} id={`world-${index}`} className={`world world-${index}`} aria-labelledby={`world-title-${index}`} inert={!stacked && active !== index}>
              <Scenery index={index} />
              {index === 5 && flyby === 'flying' && !reducedMotion && <TardisFlyby onComplete={() => setFlyby('done')} />}
              <div className="world-content">
                {index === 0 && <div className="hero-layout">
                  <div className="hero-copy">
                    <h1 id="world-title-0">Nikos<br /><span>Chelmis<span className="title-dot">.</span></span></h1>
                    <p className="hero-tagline">Build. Lift. <span>Level up.</span></p>
                    <p className="hero-description">Principal Consultant at Microsoft.<br />I build cloud platforms, lead engineering teams,<br className="desktop-break" /> and occasionally lift things that aren't servers.</p>
                    <div className="hero-actions"><button className="button dark" onClick={() => goTo(1)}>Let's explore <Icon name="arrow" /></button><span className="small-hint">6 worlds. One career.<br />Zero boss fights required.</span></div>
                    <div className="hero-meta"><span><i className="location-dot" /> ATHENS, GREECE</span><span><Icon name="code" size={15} /> CODE WITH PURPOSE</span></div>
                  </div>
                  <div className="hero-art">
                    <div className="floating-label label-cloud"><Icon name="cloud" /> CLOUD & AI</div>
                    <div className="portrait-card">
                      <div className="portrait-top"><span>PLAYER 01</span><span className="portrait-led">● ONLINE</span></div>
                      <div className="portrait-frame"><img src={portrait} alt="Portrait of Nikos Chelmis" /><div className="photo-grid" /></div>
                      <div className="portrait-bottom"><strong>NIKOS CHELMIS</strong><span>Principal Consultant @ Microsoft</span><div className="player-stats"><span>CLASS <b>Engineer</b></span><span>SPECIAL <b>Cloud + AI</b></span></div></div>
                    </div>
                    <div className="floating-label label-gym"><Icon name="weight" /> HEAVY WORKLOADS? I'M IN.</div>
                    <button className="question-block" aria-label="Discover an IT department Easter egg" onClick={() => openModal({ title: 'A ticket from the basement', content: <><p className="terminal-line">&gt; diagnose --problem "the internet is broken"</p><p>The tiny blinking box is doing its best. So is the IT department.</p><p className="muted">This adventure runs without a server. One less thing to restart.</p></> })}>?</button>
                    <div className="decorative-coins" aria-hidden="true"><i /><i /><i /></div>
                  </div>
                </div>}
                {index === 1 && <>
                  <div className="chapter-heading"><p className="eyebrow">01 / STRONG FOUNDATIONS</p><h2 id="world-title-1">Every build starts<br />with a <em>solid base.</em></h2><p>Before the cloud platforms, there was curiosity. And a lot of C#.</p></div>
                  <div className="foundation-grid">
                    <div className="paper-card"><span className="card-kicker"><Icon name="code" /> THE KNOWLEDGE TREE</span>{education.map(item => <div className="degree" key={item.degree}><span>{item.date}</span><h3>{item.degree}</h3><p>{item.school}</p></div>)}</div>
                    <div className="paper-card warm-card"><span className="card-kicker"><Icon name="weight" /> AN UNEXPECTED ORIGIN STORY</span><h3>Yes, I built<br />software for a gym.</h3><p>As an independent developer, I built Windows Forms tools for gym memberships and finances, alongside retail and inventory applications.</p><span className="mono-note">2011–2013 · BEFORE IT WAS A THEME</span><button className="research-button" onClick={() => openRole(5)}>Then came cloud & big-data research <Icon name="arrow" size={21} /></button></div>
                  </div>
                </>}
                {index === 2 && <>
                  <div className="chapter-heading"><p className="eyebrow">02 / REAL-WORLD MISSIONS</p><h2 id="world-title-2">Mission-critical.<br /><em>Not mission impossible.</em></h2><p>Banking platforms, complex integrations, and teams that make things happen.</p></div>
                  <div className="experience-grid">{[4, 3, 2].map((roleIndex, i) => <button className="mission-card" key={roleIndex} onClick={() => openRole(roleIndex)}><span className="mission-level">CHECKPOINT 0{i + 1}{roles[roleIndex].logo && <img className="company-logo" src={`${import.meta.env.BASE_URL}${roles[roleIndex].logo}`} alt={`${roles[roleIndex].company} logo`} />}</span><span className="mission-date">{roles[roleIndex].period}</span><h3>{roles[roleIndex].company}</h3><p>{roles[roleIndex].role}</p><span className="mission-summary">{['Banking APIs, backend platforms, and .NET modernization.', 'Enterprise architecture, delivery leadership, and consulting.', 'Digital banking, the Cosmos transition, and Azure migration.'][i]}</span><span className="mission-link">Open mission brief <Icon name="arrow" size={17} /></span></button>)}</div>
                </>}
                {index === 3 && <>
                  <div className="chapter-heading"><p className="eyebrow">03 / A HIGHER ALTITUDE</p><h2 id="world-title-3">Less cloud talk.<br /><em>More real impact.</em></h2><p>Engineering leadership at Microsoft. Turning ambitious plans into working systems.</p></div>
                  <div className="cloud-layout"><div className="microsoft-card"><span className="microsoft-logo" aria-hidden="true"><i /><i /><i /><i /></span><span className="card-kicker">MICROSOFT · INDUSTRY SOLUTIONS</span><h3>Principal Consultant</h3><p className="mono-note">FEB 2025 — PRESENT</p><p>Leading cross-functional teams across enterprise cloud, AI, and financial services.</p><button className="text-button" onClick={() => openRole(0)}>Explore the role <Icon name="arrow" /></button><div className="previous-role"><span>PREVIOUS CHECKPOINT</span><button onClick={() => openRole(1)}>Senior Technical Consultant <Icon name="arrow" size={15} /></button><small>Oct 2022 - Feb 2025</small></div></div><div className="ability-list">{[
                    ['cloud', 'Cloud-native architecture', 'Azure, APIs, event-driven systems, and platform modernization.'],
                    ['bolt', 'AI with responsibility', 'Enterprise AI adoption with security, governance, and compliance built in.'],
                    ['flag', 'People are the platform', 'Mentoring engineers, shaping strategy, and owning delivery end to end.'],
                  ].map(([icon, title, text]) => <article key={title}><span className="ability-icon"><Icon name={icon as 'cloud' | 'bolt' | 'flag'} size={25} /></span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></div>
                </>}
                {index === 4 && <>
                  <div className="chapter-heading"><p className="eyebrow">04 / NEVER STOP TRAINING</p><h2 id="world-title-4">New skills.<br /><em>More reps.</em></h2><p>Learning is a habit. Pick up a badge to explore a recent credential.</p></div>
                  <div className="badge-grid">{certifications.slice(0, 6).map(cert => <button className={`badge-card ${collected.includes(cert.title) ? 'collected' : ''}`} key={cert.title} onClick={() => {
                    setCollected(old => old.includes(cert.title) ? old : [...old, cert.title]);
                    openModal({ title: cert.title, content: <><CertificationBadge cert={cert} /><p>{cert.issuer} · Issued {monthLabel(cert.issued)}</p><OfficialCredentialLink url={cert.url} /></> });
                  }}><CertificationBadge cert={cert} /><span><small>{cert.category.toUpperCase()} · {monthLabel(cert.issued)}</small><h3>{cert.title}</h3></span><span className="badge-plus">{collected.includes(cert.title) ? '✓' : '+'}</span></button>)}</div>
                  <div className="badge-footer"><button className="text-button" onClick={openCredentials}>View all {certifications.length} credentials & history <Icon name="arrow" size={18} /></button><span>NO FINISH LINE FOR LEARNING.</span></div>
                </>}
                {index === 5 && <div className="finish-layout"><div><p className="eyebrow">05 / CHECKPOINT REACHED</p><h2 id="world-title-5">Great things<br />aren't built <em>solo.</em></h2><p className="finish-description">Have an interesting challenge?<br />Let's turn a good conversation into something that works.</p><div className="contact-actions"><a className="button dark" href={`mailto:${profile.email}`}><Icon name="mail" /> Say hello <Icon name="arrow" /></a><a className="button light" href={profile.linkedin} target="_blank" rel="noreferrer"><img className="social-logo" src={`${import.meta.env.BASE_URL}logos/linkedin-mark.png`} alt="" width={18} height={18} />LinkedIn</a><a className="button light" href={profile.github} target="_blank" rel="noreferrer"><img className="social-logo" src={`${import.meta.env.BASE_URL}logos/github-mark.png`} alt="" width={18} height={18} />GitHub</a></div><button className="text-button" onClick={switchMode}>Prefer the classic version? View & print my CV <Icon name="arrow" size={18} /></button></div><div className="finish-card"><span className="finish-star">✦</span><p className="eyebrow">ADVENTURE COMPLETE</p><h3>Still curious.<br />Still building.<br />Still lifting.</h3><div className="finish-card-bottom"><span>NIKOS CHELMIS</span><Icon name="weight" /></div><button onClick={() => goTo(0)}>Play it again <span>↺</span></button></div></div>}
              </div>
              {stacked && <Avatar walking={false} jumping={false} />}
            </section>)}
          </div>
          {!stacked && <Avatar walking={walking} jumping={jumping} />}
          <div className="ground-caption" aria-hidden="true"><span>{['A LITTLE CURIOSITY GOES A LONG WAY.', 'GOOD FOUNDATIONS. BETTER BUILDS.', 'HIGH AVAILABILITY. LOW DRAMA.', 'BUILDING ABOVE THE BASELINE.', 'TRAIN YOUR MODELS. AND YOUR MUSCLES.', 'THANKS FOR TAKING THE SCENIC ROUTE.'][active]}</span><span>DESIGNED TO KEEP MOVING →</span></div>
        </div>
      </main>
      <footer className="game-hud">
        <div className="hud-controls"><span className="keycap">↓</span><span className="scroll-hint">Scroll to explore</span><span className="hud-divider" /><button onClick={() => goTo(active - 1)} disabled={active === 0} aria-label="Previous world" className="keycap">←</button><button onClick={() => goTo(active + 1)} disabled={active === 5} aria-label="Next world" className="keycap">→</button><button className="jump-button" onClick={jump} disabled={stacked}><Icon name="bolt" size={14} /> Jump <kbd>SPACE</kbd></button></div>
        <div className="world-dots" aria-label="World navigation">{worlds.map((world, i) => <button key={world} aria-label={`Go to ${world}`} aria-current={active === i ? 'step' : undefined} onClick={() => goTo(i)}><span /></button>)}</div>
        <div className="hud-right"><span className="collect-count" aria-live="polite"><i className="mini-coin" /> {String(collected.length).padStart(2, '0')} <span>/ 06</span></span><span className="hud-divider" /><button className="motion-toggle" onClick={() => {
          setReducedMotion(value => !value);
          requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: 'instant' }));
        }} aria-pressed={reducedMotion}>{reducedMotion ? 'Motion off' : 'Motion on'}<span className={`toggle-track ${reducedMotion ? 'off' : ''}`}><i /></span></button></div>
      </footer>
    </>}
    {modal && <dialog ref={dialog} className="detail-dialog" aria-labelledby="dialog-title" onCancel={() => setModal(null)} onClose={() => setModal(null)} onClick={event => {
      if (event.target === event.currentTarget) {
        const box = event.currentTarget.getBoundingClientRect();
        if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) setModal(null);
      }
    }}><div className="dialog-heading"><p className="eyebrow">A LITTLE MORE DETAIL</p><button autoFocus aria-label="Close details" onClick={() => setModal(null)}>×</button></div><h2 id="dialog-title">{modal.title}</h2><div className="dialog-body">{modal.content}</div></dialog>}
  </div>;
}
