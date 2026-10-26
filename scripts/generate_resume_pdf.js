import { PDFDocument, rgb, StandardFonts } from 'pdf-lib'
import fs from 'fs'
import path from 'path'

async function generateResume() {
  const doc = await PDFDocument.create()
  
  const fontRegular = await doc.embedFont(StandardFonts.Helvetica)
  const fontBold = await doc.embedFont(StandardFonts.HelveticaBold)
  const fontOblique = await doc.embedFont(StandardFonts.HelveticaOblique)

  // Color Palette
  const darkNavy = rgb(0.06, 0.09, 0.16)     // #0F172A
  const primaryViolet = rgb(0.43, 0.16, 0.85) // #6D28D9
  const accentBlue = rgb(0.11, 0.31, 0.85)    // #1D4ED8
  const textBody = rgb(0.15, 0.20, 0.28)      // #263347
  const textMuted = rgb(0.35, 0.42, 0.52)     // #596B85
  const lineDivider = rgb(0.85, 0.88, 0.93)   // #D9E1ED
  const pillBg = rgb(0.93, 0.94, 0.98)        // #EEF0FA
  const pillBorder = rgb(0.80, 0.82, 0.94)    // #CCD1F0

  const pageWidth = 595.28
  const pageHeight = 841.89
  const marginX = 36
  const contentWidth = pageWidth - (marginX * 2)

  let currentPage = doc.addPage([pageWidth, pageHeight])
  let cursorY = pageHeight - 36
  let pageNumber = 1

  function checkPageBreak(requiredHeight) {
    if (cursorY - requiredHeight < 40) {
      // Draw footer on previous page
      drawFooter(currentPage, pageNumber)
      
      // New Page
      currentPage = doc.addPage([pageWidth, pageHeight])
      pageNumber++
      cursorY = pageHeight - 40
      
      // Running header on page 2+
      currentPage.drawText('AQEEB H J — Senior Android & Flutter Developer | Mobile Application Lead', {
        x: marginX,
        y: cursorY,
        size: 8,
        font: fontOblique,
        color: textMuted
      })
      currentPage.drawLine({
        start: { x: marginX, y: cursorY - 5 },
        end: { x: pageWidth - marginX, y: cursorY - 5 },
        thickness: 0.5,
        color: lineDivider
      })
      cursorY -= 20
    }
  }

  function drawFooter(page, pNum) {
    page.drawLine({
      start: { x: marginX, y: 28 },
      end: { x: pageWidth - marginX, y: 28 },
      thickness: 0.5,
      color: lineDivider
    })
    page.drawText(`Aqeeb H J — Curriculum Vitae | Page ${pNum} of 2`, {
      x: marginX,
      y: 18,
      size: 7.5,
      font: fontRegular,
      color: textMuted
    })
    page.drawText('+91 8073804900  •  aqeeb.pasha.hnp@gmail.com  •  github.com/aqeeb421', {
      x: pageWidth - marginX - 250,
      y: 18,
      size: 7.5,
      font: fontRegular,
      color: textMuted
    })
  }

  function drawSectionHeader(title) {
    checkPageBreak(32)
    cursorY -= 8
    currentPage.drawText(title.toUpperCase(), {
      x: marginX,
      y: cursorY,
      size: 10.5,
      font: fontBold,
      color: primaryViolet
    })
    cursorY -= 4
    currentPage.drawLine({
      start: { x: marginX, y: cursorY },
      end: { x: pageWidth - marginX, y: cursorY },
      thickness: 1.2,
      color: primaryViolet
    })
    cursorY -= 12
  }

  function drawBullet(text, boldPrefix = '') {
    const bulletIndent = 12
    const textWidth = contentWidth - bulletIndent
    const fullText = boldPrefix ? `${boldPrefix} ${text}` : text
    
    // Split into lines based on character estimate
    const words = fullText.split(' ')
    let currentLine = ''
    const lines = []

    for (const word of words) {
      const testLine = currentLine ? `${currentLine} ${word}` : word
      const width = fontRegular.widthOfTextAtSize(testLine, 8.5)
      if (width > textWidth) {
        lines.push(currentLine)
        currentLine = word
      } else {
        currentLine = testLine
      }
    }
    if (currentLine) lines.push(currentLine)

    checkPageBreak(lines.length * 11 + 4)

    // Bullet dot
    currentPage.drawCircle({
      x: marginX + 4,
      y: cursorY - 3,
      size: 1.8,
      color: primaryViolet
    })

    // Draw lines
    lines.forEach((line, idx) => {
      if (idx === 0 && boldPrefix) {
        // Draw bold prefix then rest
        currentPage.drawText(boldPrefix, {
          x: marginX + bulletIndent,
          y: cursorY,
          size: 8.5,
          font: fontBold,
          color: darkNavy
        })
        const prefixWidth = fontBold.widthOfTextAtSize(boldPrefix + ' ', 8.5)
        const restOfFirstLine = line.slice(boldPrefix.length).trim()
        currentPage.drawText(restOfFirstLine, {
          x: marginX + bulletIndent + prefixWidth,
          y: cursorY,
          size: 8.5,
          font: fontRegular,
          color: textBody
        })
      } else {
        currentPage.drawText(line, {
          x: marginX + bulletIndent,
          y: cursorY,
          size: 8.5,
          font: fontRegular,
          color: textBody
        })
      }
      cursorY -= 11
    })
    cursorY -= 2
  }

  // ==================== HEADER ====================
  // Name
  currentPage.drawText('AQEEB H J', {
    x: marginX,
    y: cursorY,
    size: 20,
    font: fontBold,
    color: darkNavy
  })

  // Executive Badge Right Aligned
  const badgeText = 'LEAD MOBILE ENGINEER • 12+ PRODUCTION APPS'
  const badgeWidth = fontBold.widthOfTextAtSize(badgeText, 7.5) + 16
  currentPage.drawRectangle({
    x: pageWidth - marginX - badgeWidth,
    y: cursorY - 2,
    width: badgeWidth,
    height: 18,
    color: pillBg,
    borderColor: pillBorder,
    borderWidth: 1
  })
  currentPage.drawText(badgeText, {
    x: pageWidth - marginX - badgeWidth + 8,
    y: cursorY + 3,
    size: 7.5,
    font: fontBold,
    color: primaryViolet
  })

  cursorY -= 16

  // Subtitle
  currentPage.drawText('Senior Android & Flutter Developer  |  Mobile Application Lead', {
    x: marginX,
    y: cursorY,
    size: 11,
    font: fontBold,
    color: accentBlue
  })

  cursorY -= 14

  // Contact Info Line
  const contactLine = 'Hassan & Bengaluru, Karnataka, India  |  +91 8073804900  |  aqeeb.pasha.hnp@gmail.com'
  currentPage.drawText(contactLine, {
    x: marginX,
    y: cursorY,
    size: 8.5,
    font: fontRegular,
    color: textBody
  })

  cursorY -= 12

  // Web Links Line
  const linksLine = 'Portfolio: aqeebhj-portfolio.netlify.app  |  GitHub: github.com/aqeeb421  |  LinkedIn: aqeeb-pasha-94790a151'
  currentPage.drawText(linksLine, {
    x: marginX,
    y: cursorY,
    size: 8.5,
    font: fontRegular,
    color: primaryViolet
  })

  cursorY -= 8
  currentPage.drawLine({
    start: { x: marginX, y: cursorY },
    end: { x: pageWidth - marginX, y: cursorY },
    thickness: 0.8,
    color: lineDivider
  })
  cursorY -= 8

  // ==================== EXECUTIVE SUMMARY ====================
  drawSectionHeader('Executive Summary')
  const summaryText = [
    'Results-driven Senior Mobile Application Developer & Technical Lead with 7+ years of experience architecting, building, and delivering 12+ production mobile applications across public governance, enterprise operations, telemedicine, and consumer marketplaces. Deep specialization in Native Android (Kotlin, Java, Android SDK) and Cross-Platform Flutter (Dart) ecosystems.',
    'Proven track record owning complete mobile lifecycles: from requirement formulation, REST API integration, and hardware sensor pipelines (CameraX, Audio, GPS) to offline-first synchronization engines (Room DB + WorkManager), hardware-backed security (Android Keystore, RSA/AES-256, Root Detection), and Google Play Console release management. Certified in Cybersecurity & Ethical Hacking.'
  ]

  summaryText.forEach(p => {
    const words = p.split(' ')
    let currentLine = ''
    for (const word of words) {
      const testLine = currentLine ? `${currentLine} ${word}` : word
      if (fontRegular.widthOfTextAtSize(testLine, 8.5) > contentWidth) {
        currentPage.drawText(currentLine, { x: marginX, y: cursorY, size: 8.5, font: fontRegular, color: textBody })
        cursorY -= 11
        currentLine = word
      } else {
        currentLine = testLine
      }
    }
    if (currentLine) {
      currentPage.drawText(currentLine, { x: marginX, y: cursorY, size: 8.5, font: fontRegular, color: textBody })
      cursorY -= 11
    }
    cursorY -= 3
  })

  // ==================== TECHNICAL SKILLS & KEYWORDS ====================
  drawSectionHeader('Technical Skills & Industry Competencies')
  
  const skillCategories = [
    { label: 'Mobile Platforms:', skills: 'Native Android (Kotlin, Java), Android SDK, Flutter, Dart, XML Layouts, Material Design 3, Coroutines, Flow, StateFlow, LiveData' },
    { label: 'Architecture & Design:', skills: 'Clean Architecture, MVVM, MVI, Repository Pattern, Multi-Module Projects, Single Source of Truth, Dependency Injection' },
    { label: 'Offline-First & Data:', skills: 'Room Database, SQLite, WorkManager (Idempotent Sync, Constraints, Backoff), EncryptedSharedPreferences, Conflict Resolution' },
    { label: 'Security & Integrity:', skills: 'Android Keystore (RSA/AES-256-GCM), Root Detection (RootBeer), SSL Certificate Pinning, SafetyNet/Play Integrity, ProGuard/R8' },
    { label: 'Hardware & Media:', skills: 'CameraX API, Audio/Video Streaming Pipelines, Continuous Foreground Services, Location/GPS Geofencing, WhatsApp Cloud' },
    { label: 'Cloud, APIs & Tooling:', skills: 'RESTful APIs, Retrofit 2, OkHttp, JSON/Moshi, Firebase (FCM, Crashlytics, Auth), Google Play Console, App Store Connect, Git, Gradle DSL' }
  ]

  skillCategories.forEach(sc => {
    checkPageBreak(13)
    currentPage.drawText(sc.label, {
      x: marginX,
      y: cursorY,
      size: 8.5,
      font: fontBold,
      color: darkNavy
    })
    const labelW = fontBold.widthOfTextAtSize(sc.label + ' ', 8.5)
    
    // Wrap skills text
    const words = sc.skills.split(' ')
    let line = ''
    let isFirstLine = true
    for (const w of words) {
      const testLine = line ? `${line} ${w}` : w
      const availableWidth = isFirstLine ? (contentWidth - labelW) : contentWidth
      if (fontRegular.widthOfTextAtSize(testLine, 8.5) > availableWidth) {
        currentPage.drawText(line, {
          x: isFirstLine ? (marginX + labelW) : marginX,
          y: cursorY,
          size: 8.5,
          font: fontRegular,
          color: textBody
        })
        cursorY -= 11
        line = w
        isFirstLine = false
      } else {
        line = testLine
      }
    }
    if (line) {
      currentPage.drawText(line, {
        x: isFirstLine ? (marginX + labelW) : marginX,
        y: cursorY,
        size: 8.5,
        font: fontRegular,
        color: textBody
      })
      cursorY -= 12
    }
  })

  // ==================== PROFESSIONAL EXPERIENCE ====================
  drawSectionHeader('Professional Experience')

  // Job 1
  checkPageBreak(30)
  currentPage.drawText('Capulus Technology Pvt. Ltd.', {
    x: marginX,
    y: cursorY,
    size: 10,
    font: fontBold,
    color: darkNavy
  })
  currentPage.drawText('May 2022 – Present  |  Hassan & Bengaluru, India', {
    x: pageWidth - marginX - fontBold.widthOfTextAtSize('May 2022 – Present  |  Hassan & Bengaluru, India', 8.5),
    y: cursorY,
    size: 8.5,
    font: fontBold,
    color: textMuted
  })
  cursorY -= 12

  currentPage.drawText('Android Application Developer Lead / Senior Mobile Application Developer', {
    x: marginX,
    y: cursorY,
    size: 9,
    font: fontBold,
    color: primaryViolet
  })
  cursorY -= 13

  drawBullet('Spearheaded end-to-end mobile architecture and development across public safety, enterprise, and commercial ecosystems, delivering 12+ production applications.', 'Lead Architecture & Lifecycle:')
  drawBullet('Engineered high-concurrency native Android apps using Kotlin and Java, alongside cross-platform consumer apps using Flutter and Dart.', 'Dual Native & Flutter:')
  drawBullet('Architected 100% offline-first local data storage using Room DB as the single source of truth, integrated with WorkManager for guaranteed background synchronization.', 'Offline-First Sync Engine:')
  drawBullet('Implemented hardware-backed Android Keystore cryptography (RSA/AES-256), secure credential handling, runtime root detection, and SSL certificate pinning.', 'Enterprise Security:')
  drawBullet('Integrated complex hardware sensors including CameraX video/photo pipeline, continuous foreground services, and location/GPS geofencing.', 'Hardware & Media Pipeline:')
  drawBullet('Managed Google Play Console and App Store release pipelines: configured ProGuard/R8 obfuscation, signed release bundles (.aab), and tracked crash analytics via Firebase Crashlytics.', 'Store Deployment & DevOps:')

  // Job 2
  checkPageBreak(30)
  cursorY -= 4
  currentPage.drawText('Wizmindz', {
    x: marginX,
    y: cursorY,
    size: 10,
    font: fontBold,
    color: darkNavy
  })
  currentPage.drawText('August 2019 – April 2022  |  Karnataka, India', {
    x: pageWidth - marginX - fontBold.widthOfTextAtSize('August 2019 – April 2022  |  Karnataka, India', 8.5),
    y: cursorY,
    size: 8.5,
    font: fontBold,
    color: textMuted
  })
  cursorY -= 12

  currentPage.drawText('Junior Android Developer', {
    x: marginX,
    y: cursorY,
    size: 9,
    font: fontBold,
    color: accentBlue
  })
  cursorY -= 13

  drawBullet('Developed native Android applications using Java and Android SDK with modern Material Design principles.', 'Native Android UI:')
  drawBullet('Engineered Click-to-Call telecommunications applications and CRM management suites with automatic call logging and audio record handling.', 'Telecom & CRM:')
  drawBullet('Implemented business workflows, dynamic RecyclerView layouts, and REST API data integration with Retrofit.', 'API & Data Binding:')
  drawBullet('Conducted memory profiling, resolved regression bottlenecks, and supported production bug fixes and updates.', 'Performance & Debugging:')

  // ==================== KEY FLAGSHIP PROJECTS ====================
  drawSectionHeader('Key Production & Flagship Projects (12+ Apps Delivered)')

  const projects = [
    {
      title: 'BharathFix Ecosystem (Home Services Platform)',
      stack: 'Flutter, Dart, Provider, Google Play Store, REST APIs, Firebase',
      badge: 'Live on Play Store & Web',
      bullets: [
        'Multi-app synchronized architecture spanning consumer Android app on Google Play, technician fulfillment app, governance admin dashboard, and web platform (bharathfix.netlify.app).',
        'Implemented real-time GPS technician tracking, automated job dispatching, end-to-end booking lifecycle, dynamic pricing engine, and payment gateway.'
      ]
    },
    {
      title: 'KSP PQRS — Karnataka State Police Citizen Safety App',
      stack: 'Native Android, Java, Kotlin, Android SDK, Location Services, REST APIs',
      badge: 'Google Play Store Live: com.capulustech.ksppqrs',
      bullets: [
        'Official citizen-facing public safety platform on Google Play Store with emergency SOS panic triggers, nearest police station geolocation, and digital e-Lost lost-property reporting.',
        'High-security REST API communication, automated status tracking, and citizen complaint lifecycle.'
      ]
    },
    {
      title: 'DoctorPlus & PatientApp (Telemedicine Suite)',
      stack: 'Native Android, Java, CameraX, Foreground Services, Audio/Video, REST',
      badge: 'Telemedicine Platform • GitHub',
      bullets: [
        'Dual-sided telehealth mobile ecosystem connecting certified physicians with patients. Engineered real-time video/audio streaming via foreground services.',
        'Built electronic prescription generation, diagnostic record vault, and doctor consultation scheduling.'
      ]
    },
    {
      title: 'Fresh Chicken Hassan (Hyperlocal Commerce)',
      stack: 'Flutter / PWA, Android App, WhatsApp Cloud Protocol, Netlify',
      badge: 'Production • Play Store & Netlify PWA',
      bullets: [
        'Farm-to-doorstep fresh ordering platform with 1-tap WhatsApp checkout and automated address formatting (fresh-chikens.netlify.app).',
        'Sub-90-minute delivery routing, QR code order verification, and responsive cross-platform layout.'
      ]
    },
    {
      title: 'KSP BWC — Evidence Collection Tool',
      stack: 'Native Android, CameraX, Android Keystore, AES-256, Offline Sync, Root Detection',
      badge: 'Police Field Tool • High Security',
      bullets: [
        'Dedicated police-facing field tool for Body-Worn Camera (BWC) incident photo and video evidence capture.',
        '100% offline-first local storage with vector conflict resolution and hardware-backed Android Keystore AES/RSA encryption.'
      ]
    },
    {
      title: 'KisanBharath EcoMart & VegBags Grocery',
      stack: 'Native Android, Kotlin, Room DB, Retrofit, MVVM Architecture',
      badge: 'Agri-Commerce & Grocery Marketplace',
      bullets: [
        'Empowered rural producers and urban consumers with direct agricultural and grocery trade, inventory caching, and live order tracking.'
      ]
    }
  ]

  projects.forEach(proj => {
    checkPageBreak(38)
    currentPage.drawText(proj.title, {
      x: marginX,
      y: cursorY,
      size: 9.5,
      font: fontBold,
      color: darkNavy
    })
    
    // Badge
    const bW = fontBold.widthOfTextAtSize(proj.badge, 7.5)
    currentPage.drawText(proj.badge, {
      x: pageWidth - marginX - bW,
      y: cursorY,
      size: 7.5,
      font: fontBold,
      color: primaryViolet
    })
    cursorY -= 11

    // Stack line
    currentPage.drawText(`Tech Stack: ${proj.stack}`, {
      x: marginX,
      y: cursorY,
      size: 8,
      font: fontOblique,
      color: textMuted
    })
    cursorY -= 11

    proj.bullets.forEach(b => {
      drawBullet(b)
    })
    cursorY -= 2
  })

  // ==================== EDUCATION & CERTIFICATION ====================
  drawSectionHeader('Education, Certification & Languages')
  
  checkPageBreak(40)
  currentPage.drawText('Bachelor of Engineering (B.E.) — Computer Science & Engineering', {
    x: marginX,
    y: cursorY,
    size: 9,
    font: fontBold,
    color: darkNavy
  })
  currentPage.drawText('2019', {
    x: pageWidth - marginX - fontBold.widthOfTextAtSize('2019', 8.5),
    y: cursorY,
    size: 8.5,
    font: fontBold,
    color: textMuted
  })
  cursorY -= 11

  currentPage.drawText('Government Engineering College, Hassan  |  Affiliated to Visvesvaraya Technological University (VTU)', {
    x: marginX,
    y: cursorY,
    size: 8.5,
    font: fontRegular,
    color: textBody
  })
  cursorY -= 14

  currentPage.drawText('Professional Certification: Cybersecurity and Ethical Hacking', {
    x: marginX,
    y: cursorY,
    size: 8.5,
    font: fontBold,
    color: primaryViolet
  })
  cursorY -= 12

  currentPage.drawText('Languages: English (Professional Working), Kannada (Native / Fluent), Hindi (Working Proficiency)', {
    x: marginX,
    y: cursorY,
    size: 8.5,
    font: fontRegular,
    color: textBody
  })

  // Draw footer on last page
  drawFooter(currentPage, pageNumber)

  const pdfBytes = await doc.save()
  fs.writeFileSync(path.resolve('public/Aqeeb_HJ_Resume.pdf'), pdfBytes)
  console.log(`Successfully generated updated resume PDF: ${pdfBytes.length} bytes, ${pageNumber} pages.`)
}

generateResume().catch(console.error)
