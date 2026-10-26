import './style.css'
import confetti from 'canvas-confetti'
import {
  createIcons,
  Smartphone,
  Shield,
  Layers,
  Code2,
  Terminal,
  ExternalLink,
  Mail,
  Phone,
  Download,
  CheckCircle,
  Database,
  Lock,
  Camera,
  Cpu,
  MapPin,
  Calendar,
  Briefcase,
  Award,
  ChevronRight,
  Menu,
  X,
  Play,
  Share2,
  Activity,
  Check,
  Send,
  Sparkles
} from 'lucide'

// High-Definition Brand SVGs
const GITHUB_SVG = `<svg class="brand-svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>`
const LINKEDIN_SVG = `<svg class="brand-svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>`
const WHATSAPP_SVG = `<svg class="brand-svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>`

// Application Projects Data
const projectsData = [
  {
    id: 'bharathfix',
    title: 'BharathFix Ecosystem',
    category: 'playstore',
    badge: 'Google Play • Live',
    badgeClass: 'playstore',
    description: 'Complete on-demand home maintenance ecosystem consisting of a customer application on Google Play Store, technician fulfillment app, governance admin panel, and customer web platform.',
    highlights: [
      'Multi-app synchronized architecture (Customer, Technician, Admin, Web)',
      'Real-time technician geolocation tracking & automated job dispatch',
      'End-to-end booking lifecycle, pricing calculator, and payment gateway'
    ],
    tech: ['Flutter', 'Dart', 'Provider', 'Google Play Store', 'REST APIs', 'Firebase'],
    links: [
      { label: 'Google Play Store', url: 'https://play.google.com/store/apps/details?id=com.bharatfix.customerapp', isPlay: true },
      { label: 'Web Portal', url: 'https://bharathfix.netlify.app/', isWeb: true }
    ],
    accent: '#0284c7'
  },
  {
    id: 'ksppqrs',
    title: 'KSP PQRS (Citizen Safety App)',
    category: 'playstore',
    badge: 'Google Play • Public App',
    badgeClass: 'playstore',
    description: 'Official citizen-facing public safety and grievance redressal mobile application for the Karnataka State Police. Features emergency SOS triggers, nearest police station geolocation, citizen incident reporting, and digital e-Lost property reporting.',
    highlights: [
      'Citizen incident reporting and digital e-Lost lost-property workflows',
      'Emergency SOS panic triggers and nearest police station locator',
      'Secure backend REST API communication and citizen complaint tracking'
    ],
    tech: ['Native Android', 'Java & Kotlin', 'Android SDK', 'Location APIs', 'REST APIs', 'Play Store'],
    links: [
      { label: 'Google Play Store', url: 'https://play.google.com/store/apps/details?id=com.capulustech.ksppqrs', isPlay: true }
    ],
    accent: '#2563eb'
  },
  {
    id: 'doctorplus',
    title: 'DoctorPlus & PatientApp',
    category: 'health',
    badge: 'Telemedicine • Public',
    badgeClass: 'github',
    description: 'Dual-sided telehealth mobile ecosystem connecting certified physicians with patients. Engineered real-time audio/video consultations, electronic health record workflows, and prescription management.',
    highlights: [
      'Foreground service audio/video streaming with mic & camera controls',
      'Electronic prescription generation and diagnostic record vault',
      'Real-time doctor schedule slots & instant patient token booking'
    ],
    tech: ['Native Android', 'Java', 'CameraX', 'Foreground Services', 'Audio Streaming', 'REST'],
    links: [
      { label: 'Doctor App Repo', url: 'https://github.com/aqeeb421/Doctor-App', isGit: true },
      { label: 'Patient App Repo', url: 'https://github.com/aqeeb421/Patient-App', isGit: true }
    ],
    accent: '#059669'
  },
  {
    id: 'freshchicken',
    title: 'Fresh Chicken Hassan',
    category: 'commerce',
    badge: 'Production • Web & Play Store',
    badgeClass: 'playstore',
    description: 'Hyperlocal farm-to-doorstep fresh poultry platform. Built as a high-speed progressive web platform and converted into a native Android application with 1-tap WhatsApp checkout.',
    highlights: [
      'Zero-friction 1-tap WhatsApp ordering with address auto-formatting',
      'Dynamic catalog featuring customizable cuts, weights, and live pricing',
      'Sub-90-minute delivery routing & QR code order verification'
    ],
    tech: ['Flutter / PWA', 'Android App', 'WhatsApp Cloud Protocol', 'Netlify', 'Location Services'],
    links: [
      { label: 'Live Platform', url: 'https://fresh-chikens.netlify.app/', isWeb: true },
      { label: 'GitHub Repository', url: 'https://github.com/aqeeb421/fresh_chicken_hassan', isGit: true }
    ],
    accent: '#e11d48'
  },
  {
    id: 'kspbwc',
    title: 'KSP BWC (Evidence Collection Tool)',
    category: 'enterprise',
    badge: 'Police Field Tool • Secure',
    badgeClass: 'enterprise',
    description: 'Dedicated police-facing field tool developed for incident evidence collection with body-worn cameras. Enables on-site capturing and indexing of scene photos and video with tamper-proof cryptographic local storage and synchronization.',
    highlights: [
      'BWC high-integrity incident photo and video capture pipeline',
      '100% offline-first local data caching and auto-sync for remote areas',
      'Android Keystore RSA/AES encryption and device root detection'
    ],
    tech: ['Native Android', 'CameraX / Video', 'Offline Sync', 'Android Keystore', 'AES/RSA', 'Root Detection'],
    links: [
      { label: 'Field Architecture Details', url: '#architecture', isInternal: true }
    ],
    accent: '#7c3aed'
  },
  {
    id: 'ecomart',
    title: 'KisanBharath EcoMart',
    category: 'commerce',
    badge: 'Marketplace • Open Source',
    badgeClass: 'github',
    description: 'Agricultural commerce & classifieds marketplace empowering rural producers to trade livestock, produce, and heavy machinery without intermediary markups.',
    highlights: [
      'Location-based classified radius discovery (Fine Location APIs)',
      'Optimized multimedia compression for low-bandwidth rural networks',
      'Direct buyer-to-seller calling and in-app negotiation flow'
    ],
    tech: ['Native Android', 'Java', 'Location APIs', 'SQLite', 'REST APIs'],
    links: [
      { label: 'GitHub Repository', url: 'https://github.com/aqeeb421/ecomart', isGit: true }
    ],
    accent: '#d97706'
  },
  {
    id: 'vegbags',
    title: 'VegBags Mobile Grocery',
    category: 'commerce',
    badge: 'E-Grocery • Open Source',
    badgeClass: 'github',
    description: 'Lightweight, rapid-order daily essentials and vegetable delivery Android app with persistent cart states and offline shopping list capabilities.',
    highlights: [
      'Offline-persistent shopping cart architecture',
      'Dynamic unit calculations (kg, grams, bundles)',
      'Streamlined address and delivery timeslot picker'
    ],
    tech: ['Native Android', 'Java', 'Android SDK', 'Local Persistence'],
    links: [
      { label: 'GitHub Repository', url: 'https://github.com/aqeeb421/vegbags', isGit: true }
    ],
    accent: '#16a34a'
  },
  {
    id: 'restoapp',
    title: 'RestoApp Dining Suite',
    category: 'commerce',
    badge: 'Hospitality Tech • Open Source',
    badgeClass: 'github',
    description: 'Interactive restaurant reservation and menu explorer application with dynamic table layouts, dietary filtering, and reservation confirmations.',
    highlights: [
      'Interactive restaurant table seat booking interface',
      'Custom category filter and dietary preference tagging',
      'Seamless booking confirmation flow'
    ],
    tech: ['Native Android', 'Java', 'Material Design', 'REST API'],
    links: [
      { label: 'GitHub Repository', url: 'https://github.com/aqeeb421/RestoApp', isGit: true }
    ],
    accent: '#6366f1'
  }
]

// Render the entire DOM with the Picto Professional Glassmorphism Layout
document.querySelector('#app').innerHTML = `
  <!-- Ambient 3D Mesh Elements for Glassmorphic Depth -->
  <div class="ambient-mesh-wrap">
    <div class="mesh-orb mesh-orb-1"></div>
    <div class="mesh-orb mesh-orb-2"></div>
    <div class="mesh-orb mesh-orb-3"></div>
    <div class="mesh-orb mesh-orb-4"></div>
  </div>

  <div class="main-wrapper">
    <!-- Header / Navigation Bar (Picto Style) -->
    <header class="site-header" id="header">
      <div class="container nav-wrapper">
        <a href="#" class="nav-logo">
          <div class="logo-badge">A</div>
          <span>Aqeeb H J</span>
        </a>

        <nav>
          <ul class="nav-menu" id="navMenu">
            <li><a href="#hero" class="nav-link active">Home</a></li>
            <li><a href="#about" class="nav-link">About</a></li>
            <li><a href="#projects" class="nav-link">Projects</a></li>
            <li><a href="#architecture" class="nav-link">Architecture</a></li>
            <li><a href="#skills" class="nav-link">Skills</a></li>
            <li><a href="#experience" class="nav-link">Experience</a></li>
            <li class="mobile-nav-item">
              <button class="btn btn-secondary btn-sm" id="drawerResumeBtn" style="width:100%; justify-content:center;">
                <i data-lucide="award"></i>
                <span>View ATS Resume</span>
              </button>
            </li>
            <li class="mobile-nav-item">
              <a href="/Aqeeb_HJ_Resume.pdf" download="Aqeeb_HJ_Resume.pdf" class="btn btn-outline-primary btn-sm" id="drawerPdfBtn" style="width:100%; justify-content:center;">
                <i data-lucide="download"></i>
                <span>Download PDF CV</span>
              </a>
            </li>
          </ul>
        </nav>

        <div class="nav-actions">
          <button class="btn btn-secondary btn-sm desktop-only-btn" id="navViewResumeBtn" title="Preview modern ATS resume">
            <i data-lucide="award"></i>
            <span>View CV</span>
          </button>
          <a href="/Aqeeb_HJ_Resume.pdf" download="Aqeeb_HJ_Resume.pdf" class="btn btn-outline-primary btn-sm desktop-only-btn" id="navResumeBtn" title="Download official PDF resume">
            <i data-lucide="download"></i>
            <span>PDF</span>
          </a>
          <a href="#contact" class="btn btn-primary btn-sm nav-contact-btn">
            <span>Contact</span>
          </a>
          <button class="mobile-toggle" id="mobileMenuToggle" aria-label="Toggle navigation menu">
            <span class="hamburger-bar"></span>
            <span class="hamburger-bar"></span>
            <span class="hamburger-bar"></span>
          </button>
        </div>
      </div>
    </header>

    <!-- Mobile Drawer Backdrop Overlay -->
    <div class="menu-backdrop" id="menuBackdrop"></div>

    <!-- Hero Section (Picto Personal Portfolio Style) -->
    <section class="hero-section" id="hero">
      <div class="container hero-grid">
        <div class="hero-content">
          <div class="status-pill">
            <span class="pulse-dot"></span>
            <span>Available for Lead & Senior Roles</span>
            <span class="pill-divider">•</span>
            <span class="pill-loc">12+ Production Apps</span>
          </div>

          <div class="greeting-text">Hello, I’m</div>
          
          <h1 class="hero-title">
            Aqeeb H J
          </h1>

          <p class="hero-tagline">
            I’m a <span class="highlight-purple">Senior Android & Flutter Developer</span> and <span class="highlight-blue">Mobile Application Lead</span> based in Karnataka, India. With 7+ years of professional experience delivering <strong>12+ live applications</strong> across enterprise and commercial sectors, I architect resilient native mobile solutions (Kotlin & Java), scalable Flutter cross-platform ecosystems, offline-first sync engines, and hardware security.
          </p>

          <div class="hero-actions">
            <a href="#contact" class="btn btn-primary">
              <i data-lucide="send"></i>
              <span>Say Hello!</span>
            </a>
            <a href="#projects" class="btn btn-secondary">
              <i data-lucide="smartphone"></i>
              <span>View 12+ Projects</span>
            </a>
            <button class="btn btn-secondary" id="heroViewResumeBtn">
              <i data-lucide="award"></i>
              <span>View Resume</span>
            </button>
            <a href="/Aqeeb_HJ_Resume.pdf" download="Aqeeb_HJ_Resume.pdf" class="btn btn-outline-primary" id="heroResumeBtn">
              <i data-lucide="download"></i>
              <span>Download CV</span>
            </a>
          </div>

          <!-- Hero Stats Bar (Picto Style) -->
          <div class="hero-stats-card">
            <div class="stat-item">
              <span class="stat-number purple">7+</span>
              <span class="stat-label">Years Experience</span>
            </div>
            <div class="stat-item">
              <span class="stat-number blue">12+</span>
              <span class="stat-label">Live & Prod Apps</span>
            </div>
            <div class="stat-item">
              <span class="stat-number green">100%</span>
              <span class="stat-label">Offline-First Tech</span>
            </div>
            <div class="stat-item">
              <span class="stat-number amber">Dual</span>
              <span class="stat-label">Android & Flutter</span>
            </div>
          </div>
        </div>

        <!-- Hero Right: Professional Studio Portrait Avatar Card -->
        <div class="hero-image-wrapper">
          <div class="avatar-card">
            <img src="/aqeeb_avatar.jpg" alt="Aqeeb H J — Mobile Application Lead" class="avatar-img" />
          </div>

          <!-- Floating Badges -->
          <div class="avatar-floating-badge badge-top-left">
            <div class="badge-icon purple">
              <i data-lucide="award"></i>
            </div>
            <div class="badge-text">
              <h6>Mobile App Lead</h6>
              <span>Capulus Technology</span>
            </div>
          </div>

          <div class="avatar-floating-badge badge-bottom-right">
            <div class="badge-icon blue">
              <i data-lucide="smartphone"></i>
            </div>
            <div class="badge-text">
              <h6>Native & Flutter</h6>
              <span>Kotlin • Java • Dart</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Tech Ticker Strip -->
    <div class="tech-ticker-bar">
      <div class="ticker-item"><i data-lucide="smartphone"></i><span>Android SDK</span></div>
      <div class="ticker-item"><i data-lucide="code-2"></i><span>Kotlin & Java</span></div>
      <div class="ticker-item"><i data-lucide="layers"></i><span>Flutter & Dart</span></div>
      <div class="ticker-item"><i data-lucide="database"></i><span>Room Database</span></div>
      <div class="ticker-item"><i data-lucide="cpu"></i><span>WorkManager Sync</span></div>
      <div class="ticker-item"><i data-lucide="camera"></i><span>CameraX & Foreground</span></div>
      <div class="ticker-item"><i data-lucide="lock"></i><span>Android Keystore (AES/RSA)</span></div>
      <div class="ticker-item"><i data-lucide="shield"></i><span>RootBeer Integrity</span></div>
      <div class="ticker-item"><i data-lucide="play"></i><span>Google Play Console</span></div>
      <div class="ticker-item"><i data-lucide="activity"></i><span>Firebase Crashlytics</span></div>
    </div>

    <!-- About Section -->
    <section class="about-section" id="about">
      <div class="container">
        <div class="section-header">
          <div class="section-tag">About Me</div>
          <h2>Senior Mobile Engineer & Application Lead</h2>
          <p>Delivering high-availability mobile platforms for public governance and high-growth commercial enterprises.</p>
        </div>

        <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap:1.8rem; margin-top:2.5rem;">
          <div class="skill-card">
            <div class="skill-header">
              <div class="skill-icon"><i data-lucide="briefcase"></i></div>
              <h4>End-to-End Ownership</h4>
            </div>
            <p style="font-size:0.92rem; color:var(--text-body); line-height:1.6;">
              Independently owning complete mobile lifecycles from architecture design, API contract formulation, hardware integration, to signing and release on Google Play Console and Apple App Store Connect.
            </p>
          </div>

          <div class="skill-card">
            <div class="skill-header">
              <div class="skill-icon" style="color:var(--accent-blue); background:#E0F2FE;"><i data-lucide="shield"></i></div>
              <h4>Enterprise Security</h4>
            </div>
            <p style="font-size:0.92rem; color:var(--text-body); line-height:1.6;">
              Certified in Cybersecurity and Ethical Hacking. Experienced in hardware-backed Android Keystore key generation, RSA/AES-256 data protection, RootBeer root detection, and SSL certificate pinning.
            </p>
          </div>

          <div class="skill-card">
            <div class="skill-header">
              <div class="skill-icon" style="color:var(--accent-emerald); background:#DCFCE7;"><i data-lucide="database"></i></div>
              <h4>Offline-First Systems</h4>
            </div>
            <p style="font-size:0.92rem; color:var(--text-body); line-height:1.6;">
              Architecting fault-tolerant local data engines using Room DB and SQLite as the Single Source of Truth, paired with WorkManager idempotent background syncing for zero-connectivity environments.
            </p>
          </div>

          <div class="skill-card">
            <div class="skill-header">
              <div class="skill-icon" style="color:var(--accent-amber); background:#FEF3C7;"><i data-lucide="award"></i></div>
              <h4>Store Releases & Scale</h4>
            </div>
            <p style="font-size:0.92rem; color:var(--text-body); line-height:1.6;">
              Published 12+ production applications. Managing release management on Play Console (tracks, .aab, rollouts), ProGuard/R8 obfuscation, and crash monitoring with >99.5% crash-free sessions.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Flagship & Public Projects Section -->
    <section class="projects-section" id="projects">
      <div class="container">
        <div class="section-header">
          <div class="section-tag">Portfolio</div>
          <h2>Featured Applications & Case Studies</h2>
          <p>Explore production applications live on the Play Store, open-source repositories, and enterprise platforms.</p>
        </div>

        <!-- Filter Bar -->
        <div class="filter-bar-wrapper">
          <button class="filter-pill active" data-filter="all">All Projects (8)</button>
          <button class="filter-pill" data-filter="playstore">Play Store & Live</button>
          <button class="filter-pill" data-filter="health">Telemedicine</button>
          <button class="filter-pill" data-filter="commerce">E-Commerce & Marketplaces</button>
          <button class="filter-pill" data-filter="enterprise">Enterprise Systems</button>
        </div>

        <!-- Projects Grid -->
        <div class="projects-grid" id="projectsGrid"></div>
      </div>
    </section>

    <!-- Architecture & System Design Section -->
    <section class="arch-section" id="architecture">
      <div class="container">
        <div class="section-header">
          <div class="section-tag">System Design</div>
          <h2>Mobile Architectural Blueprints</h2>
          <p>Detailed engineering patterns implemented across production Android & Flutter platforms.</p>
        </div>

        <div class="arch-layout">
          <!-- Left: Tab Controls -->
          <div class="arch-nav-column">
            <div class="arch-tab-card active" data-arch="offline-sync">
              <h4>
                <i data-lucide="database"></i>
                <span>Offline-First Sync Engine</span>
              </h4>
              <p>Single Source of Truth caching with conflict resolution and automated background reconciliation.</p>
            </div>

            <div class="arch-tab-card" data-arch="security-keystore">
              <h4>
                <i data-lucide="lock"></i>
                <span>Hardware Keystore & Security</span>
              </h4>
              <p>AES-256-GCM hardware key protection, root detection, and SSL certificate pinning.</p>
            </div>

            <div class="arch-tab-card" data-arch="media-hardware">
              <h4>
                <i data-lucide="camera"></i>
                <span>Realtime Media & Hardware Pipeline</span>
              </h4>
              <p>Body-Worn Camera (BWC) evidence capture, foreground streaming services, and edge compression.</p>
            </div>
          </div>

          <!-- Right: Architecture Display Stage -->
          <div class="arch-stage-card">
            <!-- Panel 1: Offline Sync -->
            <div class="arch-panel active" id="arch-offline-sync">
              <h3 style="color:var(--text-heading); font-size:1.4rem;">Offline-First Architecture with Room DB & WorkManager</h3>
              <p style="color:var(--text-muted); font-size:0.95rem;">
                Enables field agents and consumers to capture records seamlessly in zero-connectivity environments with guaranteed background synchronization upon network recovery.
              </p>

              <div class="pipeline-diagram">
                <div class="pipeline-node">
                  <span class="node-number">1</span>
                  <div class="node-info">
                    <h5>UI Layer (XML Layouts & Flutter Widgets)</h5>
                    <p>Subscribes to reactive Kotlin StateFlow / LiveData; never waits for network response.</p>
                  </div>
                </div>
                <div class="node-arrow"><i data-lucide="chevron-right"></i></div>

                <div class="pipeline-node">
                  <span class="node-number">2</span>
                  <div class="node-info">
                    <h5>Repository Layer (Single Source of Truth)</h5>
                    <p>Writes mutations immediately to encrypted local Room DB and assigns temporary sync UUID.</p>
                  </div>
                </div>
                <div class="node-arrow"><i data-lucide="chevron-right"></i></div>

                <div class="pipeline-node">
                  <span class="node-number">3</span>
                  <div class="node-info">
                    <h5>WorkManager Sync Engine</h5>
                    <p>Enqueues idempotent background worker with exponential backoff and battery/network constraints.</p>
                  </div>
                </div>
                <div class="node-arrow"><i data-lucide="chevron-right"></i></div>

                <div class="pipeline-node">
                  <span class="node-number">4</span>
                  <div class="node-info">
                    <h5>Conflict Resolution & Backend API</h5>
                    <p>Reconciles vector timestamps and updates local SQLite status to SYNCED without blocking UI.</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Panel 2: Hardware Keystore -->
            <div class="arch-panel" id="arch-security-keystore">
              <h3 style="color:var(--text-heading); font-size:1.4rem;">Android Keystore Cryptography & Tamper Defense</h3>
              <p style="color:var(--text-muted); font-size:0.95rem;">
                Defense-in-depth protection guaranteeing that sensitive authorization tokens and field evidence cannot be extracted even on compromised devices.
              </p>

              <div class="pipeline-diagram">
                <div class="pipeline-node">
                  <span class="node-number">1</span>
                  <div class="node-info">
                    <h5>Hardware-Backed Key Generation</h5>
                    <p>Generates RSA/AES-256 keys inside Android Keystore TEE (Trusted Execution Environment).</p>
                  </div>
                </div>
                <div class="node-arrow"><i data-lucide="chevron-right"></i></div>

                <div class="pipeline-node">
                  <span class="node-number">2</span>
                  <div class="node-info">
                    <h5>Encrypted Data Vault (AES-GCM)</h5>
                    <p>User credentials and sensitive offline records encrypted with authenticated AES-GCM cipher.</p>
                  </div>
                </div>
                <div class="node-arrow"><i data-lucide="chevron-right"></i></div>

                <div class="pipeline-node">
                  <span class="node-number">3</span>
                  <div class="node-info">
                    <h5>Root & Integrity Verification</h5>
                    <p>RootBeer binary inspection + SafetyNet/Play Integrity API prevents execution on rooted devices.</p>
                  </div>
                </div>
                <div class="node-arrow"><i data-lucide="chevron-right"></i></div>

                <div class="pipeline-node">
                  <span class="node-number">4</span>
                  <div class="node-info">
                    <h5>Network Security & SSL Pinning</h5>
                    <p>Strict Network Security Config with public key hash pinning prevents MitM proxy interception.</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Panel 3: Media & Hardware -->
            <div class="arch-panel" id="arch-media-hardware">
              <h3 style="color:var(--text-heading); font-size:1.4rem;">High-Throughput Edge Media & Telephony Pipeline</h3>
              <p style="color:var(--text-muted); font-size:0.95rem;">
                Reliable capture pipeline supporting continuous video/audio evidence logging and telemedicine streaming without OS task killing.
              </p>

              <div class="pipeline-diagram">
                <div class="pipeline-node">
                  <span class="node-number">1</span>
                  <div class="node-info">
                    <h5>CameraX & Audio Hardware Interface</h5>
                    <p>Asynchronous frame capture with hardware level 3 support and dynamic rotation stabilization.</p>
                  </div>
                </div>
                <div class="node-arrow"><i data-lucide="chevron-right"></i></div>

                <div class="pipeline-node">
                  <span class="node-number">2</span>
                  <div class="node-info">
                    <h5>Continuous Foreground Services</h5>
                    <p>Foreground service with persistent notification guarantees zero Android OS background termination.</p>
                  </div>
                </div>
                <div class="node-arrow"><i data-lucide="chevron-right"></i></div>

                <div class="pipeline-node">
                  <span class="node-number">3</span>
                  <div class="node-info">
                    <h5>Edge Compression & Watermarking</h5>
                    <p>Injects cryptographically signed GPS/timestamp watermark and encodes video at optimal bitrates.</p>
                  </div>
                </div>
                <div class="node-arrow"><i data-lucide="chevron-right"></i></div>

                <div class="pipeline-node">
                  <span class="node-number">4</span>
                  <div class="node-info">
                    <h5>Chunked Multipart Resumable Upload</h5>
                    <p>Transfers large media payloads over flaky 3G/4G connections with automatic block resume.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Technical Skills Matrix -->
    <section class="skills-section" id="skills">
      <div class="container">
        <div class="section-header">
          <div class="section-tag">Skills</div>
          <h2>Technical Arsenal & Competencies</h2>
          <p>Core technologies, architectural patterns, and production toolchains.</p>
        </div>

        <div class="skills-grid">
          <!-- Card 1: Native Android -->
          <div class="skill-card">
            <div class="skill-header">
              <div class="skill-icon"><i data-lucide="smartphone"></i></div>
              <h4>Native Android</h4>
            </div>
            <div class="skill-chips">
              <span class="skill-tag">Kotlin</span>
              <span class="skill-tag">Java</span>
              <span class="skill-tag">Android SDK</span>
              <span class="skill-tag">Material Design</span>
              <span class="skill-tag">XML View System</span>
              <span class="skill-tag">Coroutines & Flow</span>
              <span class="skill-tag">Room DB</span>
              <span class="skill-tag">WorkManager</span>
              <span class="skill-tag">CameraX</span>
              <span class="skill-tag">Retrofit</span>
              <span class="skill-tag">Data Binding</span>
            </div>
          </div>

          <!-- Card 2: Flutter Cross-Platform -->
          <div class="skill-card">
            <div class="skill-header">
              <div class="skill-icon" style="color:var(--accent-blue); background:#E0F2FE;"><i data-lucide="layers"></i></div>
              <h4>Flutter & Cross-Platform</h4>
            </div>
            <div class="skill-chips">
              <span class="skill-tag">Dart</span>
              <span class="skill-tag">Flutter SDK</span>
              <span class="skill-tag">Provider</span>
              <span class="skill-tag">GoRouter</span>
              <span class="skill-tag">Responsive UI</span>
              <span class="skill-tag">Android & iOS Deployments</span>
              <span class="skill-tag">PWA</span>
              <span class="skill-tag">Localization (i18n)</span>
            </div>
          </div>

          <!-- Card 3: Security & Architecture -->
          <div class="skill-card">
            <div class="skill-header">
              <div class="skill-icon" style="color:var(--primary); background:var(--primary-light);"><i data-lucide="shield"></i></div>
              <h4>Security & Architecture</h4>
            </div>
            <div class="skill-chips">
              <span class="skill-tag">Clean Architecture</span>
              <span class="skill-tag">MVVM & MVI</span>
              <span class="skill-tag">Multi-Module Design</span>
              <span class="skill-tag">Android Keystore</span>
              <span class="skill-tag">RSA / AES-256</span>
              <span class="skill-tag">Root Detection</span>
              <span class="skill-tag">SSL Pinning</span>
              <span class="skill-tag">ProGuard / R8</span>
            </div>
          </div>

          <!-- Card 4: DevOps & Release -->
          <div class="skill-card">
            <div class="skill-header">
              <div class="skill-icon" style="color:var(--accent-amber); background:#FEF3C7;"><i data-lucide="terminal"></i></div>
              <h4>DevOps & Tooling</h4>
            </div>
            <div class="skill-chips">
              <span class="skill-tag">Google Play Console</span>
              <span class="skill-tag">App Store Connect</span>
              <span class="skill-tag">TestFlight</span>
              <span class="skill-tag">Firebase FCM</span>
              <span class="skill-tag">Crashlytics</span>
              <span class="skill-tag">Gradle DSL</span>
              <span class="skill-tag">Git / GitHub</span>
              <span class="skill-tag">Postman</span>
              <span class="skill-tag">Android Profiler</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Professional Experience Timeline -->
    <section class="experience-section" id="experience">
      <div class="container">
        <div class="section-header">
          <div class="section-tag">Experience</div>
          <h2>Professional Career Journey</h2>
          <p>Over 7 years of progressive ownership leading mobile engineering across government and private tech companies.</p>
        </div>

        <div class="timeline-list">
          <!-- Role 1 -->
          <div class="timeline-row">
            <div class="timeline-marker"></div>
            <div class="timeline-box">
              <div class="timeline-heading">
                <div>
                  <h3>Android Application Developer Lead / Senior Mobile Developer</h3>
                  <span class="timeline-company">Capulus Technology Pvt. Ltd.</span>
                </div>
                <span class="timeline-period">May 2022 – Present</span>
              </div>

              <ul class="timeline-bullet-list">
                <li>Lead developer independently responsible for end-to-end architecture, technical implementation, and store releases for public and enterprise mobile systems.</li>
                <li>Developed native Android applications using Java and Kotlin, and cross-platform applications using Flutter and Dart.</li>
                <li>Architected 100% offline-first local data storage with Room DB and automated background synchronization using WorkManager.</li>
                <li>Implemented application security including Android Keystore encryption (RSA/AES), secure credential handling, and root detection.</li>
                <li>Managed Android and iOS production builds, signing, and Google Play Store / Apple App Store releases.</li>
              </ul>
            </div>
          </div>

          <!-- Role 2 -->
          <div class="timeline-row">
            <div class="timeline-marker"></div>
            <div class="timeline-box">
              <div class="timeline-heading">
                <div>
                  <h3>Junior Android Developer</h3>
                  <span class="timeline-company">Wizmindz</span>
                </div>
                <span class="timeline-period">August 2019 – April 2022</span>
              </div>

              <ul class="timeline-bullet-list">
                <li>Developed native Android applications using Java and Android SDK with modern Material Design principles.</li>
                <li>Engineered Click-to-Call telecommunications applications and CRM management suites.</li>
                <li>Implemented application UI, business workflows, and REST API/data integration.</li>
                <li>Debugged application issues and supported regression testing, maintenance, and feature enhancements.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact & Connect Hub (Picto Style) -->
    <section class="contact-section" id="contact">
      <div class="container">
        <div class="contact-card-container">
          <div class="section-tag">Let's Connect</div>
          <h2>Ready to Collaborate on Your Next Mobile App?</h2>
          <p>Whether you're looking for a Lead Mobile Engineer, Senior Android/Flutter Developer, or strategic consulting on offline architectures, feel free to reach out.</p>

          <div class="contact-links-grid">
            <a href="https://wa.me/918073804900?text=Hi%20Aqeeb,%20I%20reviewed%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20mobile%20development%20opportunity!" target="_blank" class="contact-link-pill whatsapp-btn">
              ${WHATSAPP_SVG}
              <span>WhatsApp Chat</span>
            </a>

            <button class="contact-link-pill copy-contact-btn" data-type="email" data-val="aqeeb.pasha.hnp@gmail.com">
              <i data-lucide="mail"></i>
              <span>aqeeb.pasha.hnp@gmail.com</span>
            </button>

            <a href="https://www.linkedin.com/in/aqeeb-pasha-94790a151" target="_blank" class="contact-link-pill">
              ${LINKEDIN_SVG}
              <span>LinkedIn Profile</span>
            </a>

            <a href="https://github.com/aqeeb421" target="_blank" class="contact-link-pill">
              ${GITHUB_SVG}
              <span>GitHub Profile</span>
            </a>

            <a href="/Aqeeb_HJ_Resume.pdf" download="Aqeeb_HJ_Resume.pdf" class="contact-link-pill cv-btn" id="contactCvBtn">
              <i data-lucide="download"></i>
              <span>Download Official CV</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Interactive Resume Preview Modal -->
    <div class="resume-modal" id="resumeModal">
      <div class="resume-modal-dialog">
        <div class="resume-modal-header">
          <h4>
            <i data-lucide="award" style="color:var(--primary);"></i>
            <span>Aqeeb H J — Curriculum Vitae (ATS Redesigned)</span>
          </h4>
          <div class="resume-modal-actions">
            <button class="btn btn-secondary btn-sm" id="modalPrintBtn" title="Print or Save as PDF">
              <i data-lucide="download"></i>
              <span>Print / Save PDF</span>
            </button>
            <a href="/Aqeeb_HJ_Resume.pdf" download="Aqeeb_HJ_Resume.pdf" class="btn btn-primary btn-sm" id="modalDownloadBtn" title="Download official PDF">
              <i data-lucide="download"></i>
              <span>Download PDF</span>
            </a>
            <button class="modal-close-btn" id="modalCloseBtn" aria-label="Close modal">
              <i data-lucide="x"></i>
            </button>
          </div>
        </div>
        <div class="resume-modal-body">
          <iframe src="/resume.html" id="resumeIframe" title="Aqeeb H J Resume Preview"></iframe>
        </div>
      </div>
    </div>

    <!-- Toast Notification for Copying -->
    <div class="toast-notice" id="copyToast">
      <i data-lucide="check" style="color:#34D399;"></i>
      <span id="toastMsg">Copied to clipboard!</span>
    </div>

    <!-- Footer -->
    <footer class="site-footer">
      <div class="container footer-inner">
        <div class="footer-signature">
          © ${new Date().getFullYear()} <strong>Aqeeb H J</strong> — Senior Android & Flutter Developer • Mobile Application Lead
        </div>
        <div class="footer-socials">
          <a href="https://github.com/aqeeb421" target="_blank" class="footer-social-link" title="GitHub">${GITHUB_SVG}</a>
          <a href="https://www.linkedin.com/in/aqeeb-pasha-94790a151" target="_blank" class="footer-social-link" title="LinkedIn">${LINKEDIN_SVG}</a>
          <a href="mailto:aqeeb.pasha.hnp@gmail.com" class="footer-social-link" title="Email"><i data-lucide="mail"></i></a>
        </div>
      </div>
    </footer>
  </div>
`

// Render Project Cards dynamically with filtering
function renderProjects(filter = 'all') {
  const container = document.getElementById('projectsGrid')
  if (!container) return

  const filtered = filter === 'all' 
    ? projectsData 
    : projectsData.filter(p => p.category === filter)

  container.innerHTML = filtered.map(project => `
    <article class="project-card" style="--card-gradient: linear-gradient(135deg, ${project.accent}, ${project.accent}88); --card-glow: ${project.accent}25;">
      <div class="card-top">
        <div class="card-icon" style="color: ${project.accent}; background: ${project.accent}15">
          <i data-lucide="${project.category === 'playstore' ? 'smartphone' : project.category === 'health' ? 'activity' : project.category === 'enterprise' ? 'shield' : 'code-2'}"></i>
        </div>
        <span class="badge-pill ${project.badgeClass}">${project.badge}</span>
      </div>

      <h3>${project.title}</h3>
      <p>${project.description}</p>

      <ul class="project-features">
        ${project.highlights.map(h => `
          <li>
            <i data-lucide="check"></i>
            <span>${h}</span>
          </li>
        `).join('')}
      </ul>

      <div class="project-tech-tags">
        ${project.tech.map(t => `<span class="tech-chip">${t}</span>`).join('')}
      </div>

      <div class="card-footer">
        ${project.links.map(l => `
          <a href="${l.url}" ${l.isInternal ? '' : 'target="_blank" rel="noopener noreferrer"'} class="card-link-btn">
            ${l.isGit ? GITHUB_SVG : l.isPlay ? '<i data-lucide="play"></i>' : l.isWeb ? '<i data-lucide="external-link"></i>' : '<i data-lucide="chevron-right"></i>'}
            <span>${l.label}</span>
          </a>
        `).join('')}
      </div>
    </article>
  `).join('')

  createIcons({
    icons: {
      Smartphone,
      Shield,
      Layers,
      Code2,
      Terminal,
      ExternalLink,
      Mail,
      Phone,
      Download,
      CheckCircle,
      Database,
      Lock,
      Camera,
      Cpu,
      MapPin,
      Calendar,
      Briefcase,
      Award,
      ChevronRight,
      Menu,
      X,
      Play,
      Share2,
      Activity,
      Check,
      Send,
      Sparkles
    }
  })
}

// Project Filter Buttons Logic
function setupProjectFilter() {
  const buttons = document.querySelectorAll('.filter-pill')
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'))
      btn.classList.add('active')
      const filter = btn.getAttribute('data-filter')
      renderProjects(filter)
    })
  })
}

// Architecture Tabs Switcher Logic
function setupArchitectureTabs() {
  const tabCards = document.querySelectorAll('.arch-tab-card')
  tabCards.forEach(card => {
    card.addEventListener('click', () => {
      tabCards.forEach(c => c.classList.remove('active'))
      card.classList.add('active')

      const arch = card.getAttribute('data-arch')
      document.querySelectorAll('.arch-panel').forEach(panel => {
        panel.classList.remove('active')
      })
      const targetPanel = document.getElementById(`arch-${arch}`)
      if (targetPanel) targetPanel.classList.add('active')
    })
  })
}

// Clipboard Copy Toast Feedback
function setupClipboardCopy() {
  const copyButtons = document.querySelectorAll('.copy-contact-btn')
  const toast = document.getElementById('copyToast')
  const toastMsg = document.getElementById('toastMsg')

  copyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const val = btn.getAttribute('data-val')
      const type = btn.getAttribute('data-type')
      if (!val) return

      navigator.clipboard.writeText(val).then(() => {
        if (toastMsg) {
          toastMsg.textContent = type === 'email' ? 'Email copied: ' + val : 'Phone copied: ' + val
        }
        if (toast) {
          toast.classList.add('show')
          setTimeout(() => {
            toast.classList.remove('show')
          }, 3000)
        }
      }).catch(err => {
        console.error('Copy failed:', err)
      })
    })
  })
}

// Sticky Header & Active Nav Scroll Spy & Mobile Drawer
function setupNavbarBehavior() {
  const toggleBtn = document.getElementById('mobileMenuToggle')
  const navMenu = document.getElementById('navMenu')
  const backdrop = document.getElementById('menuBackdrop')

  function openMenu() {
    if (!navMenu || !toggleBtn) return
    navMenu.classList.add('open')
    toggleBtn.classList.add('active')
    if (backdrop) backdrop.classList.add('open')
    document.body.style.overflow = 'hidden'
  }

  function closeMenu() {
    if (!navMenu || !toggleBtn) return
    navMenu.classList.remove('open')
    toggleBtn.classList.remove('active')
    if (backdrop) backdrop.classList.remove('open')
    document.body.style.overflow = ''
  }

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation()
      if (navMenu.classList.contains('open')) {
        closeMenu()
      } else {
        openMenu()
      }
    })

    if (backdrop) {
      backdrop.addEventListener('click', closeMenu)
    }

    // Smooth scroll for all navigation links
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href')
        if (href && href.startsWith('#')) {
          e.preventDefault()
          closeMenu()

          const targetElem = document.querySelector(href)
          if (targetElem) {
            const headerOffset = 76
            const elementPosition = targetElem.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            })
          }
        }
      })
    })

    // Also close on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu.classList.contains('open')) {
        closeMenu()
      }
    })
  }

  // Hook up drawer resume button to modal
  const drawerResumeBtn = document.getElementById('drawerResumeBtn')
  const modal = document.getElementById('resumeModal')
  if (drawerResumeBtn && modal) {
    drawerResumeBtn.addEventListener('click', () => {
      closeMenu()
      modal.classList.add('active')
      document.body.style.overflow = 'hidden'
    })
  }

  // Hook up drawer PDF button to close menu
  const drawerPdfBtn = document.getElementById('drawerPdfBtn')
  if (drawerPdfBtn) {
    drawerPdfBtn.addEventListener('click', () => {
      closeMenu()
    })
  }
}

// Resume Preview Modal Logic
function setupResumeModal() {
  const modal = document.getElementById('resumeModal')
  const openButtons = [
    document.getElementById('navViewResumeBtn'),
    document.getElementById('heroViewResumeBtn')
  ]
  const closeBtn = document.getElementById('modalCloseBtn')
  const printBtn = document.getElementById('modalPrintBtn')
  const iframe = document.getElementById('resumeIframe')

  if (!modal) return

  openButtons.forEach(btn => {
    if (!btn) return
    btn.addEventListener('click', () => {
      modal.classList.add('active')
      document.body.style.overflow = 'hidden'
    })
  })

  function closeModal() {
    modal.classList.remove('active')
    document.body.style.overflow = ''
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal)

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal()
  })

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal()
    }
  })

  if (printBtn && iframe) {
    printBtn.addEventListener('click', () => {
      try {
        iframe.contentWindow.focus()
        iframe.contentWindow.print()
      } catch (err) {
        window.open('/resume.html', '_blank')
      }
    })
  }
}

// Celebration Confetti on Resume Download
function setupConfetti() {
  const resumeButtons = [
    document.getElementById('navResumeBtn'),
    document.getElementById('heroResumeBtn'),
    document.getElementById('contactCvBtn'),
    document.getElementById('modalDownloadBtn'),
    document.getElementById('drawerPdfBtn')
  ]

  resumeButtons.forEach(btn => {
    if (!btn) return
    btn.addEventListener('click', () => {
      confetti({
        particleCount: 85,
        spread: 65,
        origin: { y: 0.8 },
        colors: ['#7c3aed', '#0284c7', '#059669', '#f59e0b']
      })
    })
  })
}

// Initialize all DOM events
document.addEventListener('DOMContentLoaded', () => {
  renderProjects('all')
  setupProjectFilter()
  setupArchitectureTabs()
  setupClipboardCopy()
  setupNavbarBehavior()
  setupConfetti()
  setupResumeModal()
})

// Trigger initial execution
renderProjects('all')
setupProjectFilter()
setupArchitectureTabs()
setupClipboardCopy()
setupNavbarBehavior()
setupConfetti()
setupResumeModal()

createIcons({
  icons: {
    Smartphone,
    Shield,
    Layers,
    Code2,
    Terminal,
    ExternalLink,
    Mail,
    Phone,
    Download,
    CheckCircle,
    Database,
    Lock,
    Camera,
    Cpu,
    MapPin,
    Calendar,
    Briefcase,
    Award,
    ChevronRight,
    Menu,
    X,
    Play,
    Share2,
    Activity,
    Check,
    Send,
    Sparkles
  }
})
