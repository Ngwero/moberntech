(() => {
  const path = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  const is = (name) => path === name || (name === "index.html" && (path === "" || path === "index.html"));

  const active = (name) => (is(name) ? ' aria-current="page"' : "");
  const currentClass = (name) => (is(name) ? " is-current" : "");

  function headerHTML() {
    return `
    <header class="site-header">
      <div class="header-pill">
        <a class="logo" href="index.html" aria-label="Mobenertech home">
          <img class="logo-img" src="logo.png" alt="mobenertech" width="200" height="103" />
        </a>

        <nav class="main-nav" aria-label="Primary">
          <div class="nav-item has-mega">
            <button type="button" class="nav-link${currentClass("about.html")}" aria-expanded="false" aria-haspopup="true">
              About
              <svg class="nav-caret" width="10" height="6" viewBox="0 0 10 6" aria-hidden="true"><path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round"/></svg>
            </button>
            <div class="mega" hidden>
              <div class="mega-panel">
                <div class="mega-inner">
                  <div class="mega-col">
                    <h3>About us</h3>
                    <a href="about.html"><span>Overview</span><small>Who we are</small></a>
                    <a href="about.html#mission"><span>Mission</span><small>Our purpose</small></a>
                    <a href="about.html#strategy"><span>Strategy</span><small>Transform &amp; Grow</small></a>
                    <a href="about.html#uganda"><span>Uganda &amp; the world</span><small>Global footprint</small></a>
                  </div>
                  <div class="mega-col">
                    <h3>Company</h3>
                    <a href="about.html#data"><span>Main data</span><small>Company figures</small></a>
                    <a href="about.html#ethics"><span>Ethics &amp; compliance</span><small>How we work</small></a>
                    <a href="about.html#partners"><span>Partnerships</span><small>Alliances</small></a>
                    <a href="contact.html"><span>Contact us</span><small>Get in touch</small></a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="nav-item has-mega">
            <button type="button" class="nav-link${currentClass("services.html")}" aria-expanded="false" aria-haspopup="true">
              Services
              <svg class="nav-caret" width="10" height="6" viewBox="0 0 10 6" aria-hidden="true"><path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round"/></svg>
            </button>
            <div class="mega" hidden>
              <div class="mega-panel">
                <div class="mega-inner">
                  <div class="mega-col">
                    <h3>Business</h3>
                    <a href="services.html#sme"><span>SME</span><small>Growing companies</small></a>
                    <a href="services.html#corporate"><span>Corporate</span><small>Enterprise</small></a>
                    <a href="services.html#cloud"><span>Cloud &amp; platforms</span><small>MobeCloud</small></a>
                  </div>
                  <div class="mega-col">
                    <h3>Solutions</h3>
                    <a href="services.html#networks"><span>Networks</span><small>MobeNet</small></a>
                    <a href="services.html#consumers"><span>Digital products</span><small>Apps &amp; portals</small></a>
                    <a href="services.html#global"><span>Global delivery</span><small>Worldwide</small></a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <a class="nav-link" href="sustainability.html"${active("sustainability.html")}>Sustainability</a>
          <a class="nav-link" href="news.html"${active("news.html")}>News</a>
          <a class="nav-link" href="careers.html"${active("careers.html")}>Careers</a>
        </nav>

        <div class="header-actions">
          <a class="nav-cta" href="contact.html">
            Contact
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M7 17L17 7M17 7H9M17 7v8" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
          <button class="menu-btn" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-drawer">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
      <div class="nav-backdrop" id="nav-backdrop" hidden></div>
    </header>

    <div class="mobile-drawer" id="mobile-drawer" hidden>
      <div class="mobile-drawer-inner">
        <details class="mobile-group">
          <summary>About</summary>
          <div class="mobile-links">
            <a href="about.html">Overview</a>
            <a href="about.html#mission">Mission</a>
            <a href="about.html#strategy">Strategy</a>
            <a href="about.html#uganda">Uganda &amp; the world</a>
          </div>
        </details>
        <details class="mobile-group">
          <summary>Services</summary>
          <div class="mobile-links">
            <a href="services.html#sme">SME</a>
            <a href="services.html#corporate">Corporate</a>
            <a href="services.html#cloud">Cloud &amp; platforms</a>
            <a href="services.html#networks">Networks</a>
          </div>
        </details>
        <a class="mobile-link" href="sustainability.html">Sustainability</a>
        <a class="mobile-link" href="news.html">News</a>
        <a class="mobile-link" href="investors.html">Investors</a>
        <a class="mobile-link" href="careers.html">Careers</a>
        <a class="mobile-cta" href="contact.html">Contact us →</a>
      </div>
    </div>

    </div>`;
  }

  function footerHTML() {
    return `
    <footer class="site-footer">
      <div class="footer-top">
        <a class="logo logo--footer" href="index.html" aria-label="Mobenertech home">
          <img class="logo-img logo-img--footer" src="logo.png" alt="mobenertech" width="200" height="103" />
        </a>
        <p class="footer-tagline">A Ugandan technology company delivering the best digital experience worldwide.</p>
        <div class="social">
          <a href="#" aria-label="LinkedIn">in</a>
          <a href="#" aria-label="Instagram">ig</a>
          <a href="#" aria-label="YouTube">yt</a>
          <a href="#" aria-label="X">x</a>
          <a href="contact.html">Contact us</a>
        </div>
      </div>

      <div class="footer-grid">
        <div>
          <h4>About us</h4>
          <a href="about.html#mission">Mission</a>
          <a href="about.html#strategy">Strategy</a>
          <a href="about.html#data">Main data</a>
          <a href="about.html#uganda">Uganda &amp; the world</a>
        </div>
        <div>
          <h4>Sustainability &amp; Innovation</h4>
          <a href="sustainability.html#esg">Sustainability strategy</a>
          <a href="sustainability.html#society">Society</a>
          <a href="sustainability.html#environment">Environment</a>
          <a href="sustainability.html#innovation">Innovation</a>
        </div>
        <div>
          <h4>Services</h4>
          <a href="services.html#sme">SME</a>
          <a href="services.html#corporate">Corporate</a>
          <a href="services.html#consumers">Consumers</a>
          <a href="services.html#networks">Networks and technology</a>
        </div>
        <div>
          <h4>Shareholders &amp; Investors</h4>
          <a href="investors.html">Share</a>
          <a href="investors.html#reports">Financial reports</a>
          <a href="investors.html#reports">Annual report</a>
          <a href="investors.html#area">Shareholder’s Area</a>
        </div>
        <div>
          <h4>More</h4>
          <a href="news.html">Communication room</a>
          <a href="careers.html">Employment</a>
          <a href="contact.html">Contact us</a>
          <a href="about.html#partners">Partnerships</a>
        </div>
      </div>

      <div class="footer-bottom">
        <p>© <span id="year"></span> Mobenertech Ltd. · Kampala, Uganda</p>
        <div class="legal">
          <a href="#">Cookies policy</a>
          <a href="#">Legal notice</a>
          <a href="#">Accessibility</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Sitemap</a>
        </div>
      </div>
    </footer>`;
  }

  const headerMount = document.querySelector("[data-header]");
  const footerMount = document.querySelector("[data-footer]");
  if (headerMount) headerMount.innerHTML = headerHTML();
  if (footerMount) footerMount.innerHTML = footerHTML();

  const year = document.querySelector("#year");
  const menuBtn = document.querySelector(".menu-btn");
  const drawer = document.querySelector("#mobile-drawer");
  const backdrop = document.querySelector("#nav-backdrop");
  const header = document.querySelector(".site-header");
  const form = document.querySelector(".contact-form");
  const formNote = document.querySelector(".form-note");
  const megaItems = document.querySelectorAll(".nav-item.has-mega");

  if (year) year.textContent = String(new Date().getFullYear());

  const desktopNav = () => window.matchMedia("(min-width: 980px)").matches;

  function setBackdrop(show) {
    if (!backdrop) return;
    backdrop.hidden = !show;
    document.body.classList.toggle("nav-open", show && !desktopNav());
  }

  function closeDrawer() {
    if (!menuBtn || !drawer) return;
    menuBtn.setAttribute("aria-expanded", "false");
    menuBtn.setAttribute("aria-label", "Open menu");
    drawer.hidden = true;
    if (!document.querySelector(".nav-item.is-open")) setBackdrop(false);
  }

  function closeMegas(except) {
    megaItems.forEach((item) => {
      if (item === except) return;
      item.classList.remove("is-open");
      const btn = item.querySelector(".nav-link");
      const mega = item.querySelector(".mega");
      if (btn) btn.setAttribute("aria-expanded", "false");
      if (mega) mega.hidden = true;
    });
    if (!except && drawer?.hidden !== false) setBackdrop(false);
  }

  if (menuBtn && drawer) {
    menuBtn.addEventListener("click", () => {
      const open = menuBtn.getAttribute("aria-expanded") === "true";
      closeMegas();
      if (open) {
        closeDrawer();
      } else {
        menuBtn.setAttribute("aria-expanded", "true");
        menuBtn.setAttribute("aria-label", "Close menu");
        drawer.hidden = false;
        setBackdrop(true);
      }
    });

    drawer.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => closeDrawer());
    });
  }

  megaItems.forEach((item) => {
    const trigger = item.querySelector(".nav-link");
    const mega = item.querySelector(".mega");
    if (!trigger || !mega) return;

    const openMega = () => {
      if (!desktopNav()) return;
      closeDrawer();
      closeMegas(item);
      item.classList.add("is-open");
      trigger.setAttribute("aria-expanded", "true");
      mega.hidden = false;
    };

    const closeMega = () => {
      if (!desktopNav()) return;
      item.classList.remove("is-open");
      trigger.setAttribute("aria-expanded", "false");
      mega.hidden = true;
    };

    item.addEventListener("mouseenter", openMega);
    item.addEventListener("mouseleave", closeMega);

    trigger.addEventListener("click", (event) => {
      if (!desktopNav()) return;
      event.preventDefault();
      const isOpen = item.classList.contains("is-open");
      if (isOpen) closeMega();
      else openMega();
    });
  });

  backdrop?.addEventListener("click", () => {
    closeMegas();
    closeDrawer();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMegas();
      closeDrawer();
    }
  });

  window.addEventListener(
    "scroll",
    () => {
      header?.classList.toggle("is-scrolled", window.scrollY > 12);
    },
    { passive: true }
  );

  window.addEventListener(
    "resize",
    () => {
      if (window.innerWidth >= 980) closeDrawer();
    },
    { passive: true }
  );

  if (form && formNote) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      formNote.textContent =
        "Thank you. Our Kampala team will connect you with the right Mobenertech specialists.";
      formNote.classList.add("is-success");
      form.reset();
    });
  }

  document.querySelectorAll('.nav-link[aria-current="page"], .nav-link.is-current').forEach((el) => {
    el.classList.add("is-current");
  });

  // Hero particles.js
  const particlesHost = document.getElementById("particles-js");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (particlesHost && typeof particlesJS === "function" && !reduceMotion) {
    const isNarrow = window.matchMedia("(max-width: 700px)").matches;
    particlesJS("particles-js", {
      particles: {
        number: { value: isNarrow ? 32 : 70, density: { enable: true, value_area: isNarrow ? 700 : 900 } },
        color: { value: ["#ffffff", "#8eb6ff", "#2f6bff"] },
        shape: { type: "circle" },
        opacity: {
          value: 0.45,
          random: true,
          anim: { enable: true, speed: 0.8, opacity_min: 0.15, sync: false },
        },
        size: {
          value: isNarrow ? 2.2 : 3,
          random: true,
          anim: { enable: true, speed: 2, size_min: 0.6, sync: false },
        },
        line_linked: {
          enable: true,
          distance: isNarrow ? 110 : 140,
          color: "#ffffff",
          opacity: 0.28,
          width: 1,
        },
        move: {
          enable: true,
          speed: isNarrow ? 1.1 : 1.6,
          direction: "none",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false,
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: !isNarrow, mode: "grab" },
          onclick: { enable: true, mode: "push" },
          resize: true,
        },
        modes: {
          grab: { distance: 140, line_linked: { opacity: 0.55 } },
          push: { particles_nb: 3 },
        },
      },
      retina_detect: true,
    });

    // Allow hover interaction without blocking hero links
    particlesHost.style.pointerEvents = "auto";
    const content = document.querySelector(".hero-content");
    if (content) content.style.pointerEvents = "auto";
  }

  // PayPal-style section scroll animations
  (function initScrollReveals() {
    const main = document.querySelector("main");
    if (!main) return;

    const sectionSelector = [
      ".partners",
      ".partners-head",
      ".pillars .pillar",
      ".uganda-banner",
      ".feature-banner",
      ".news .section-head",
      ".news-card",
      ".press-list",
      ".services-band .section-head",
      ".service-tile",
      ".careers",
      ".esg-hero",
      ".esg-grid article",
      ".esg-highlight",
      ".data .section-head",
      ".data-grid > div",
      ".investors-card",
      ".investors-news",
      ".team-grid article",
      ".page-section",
      ".page-hero-inner",
      ".info-card",
      ".office-card",
      ".office-photo",
      ".about-photo",
      ".article-list li",
      ".market-list li",
      ".contact-form",
      ".content-grid > *",
    ].join(", ");

    const nodes = main.querySelectorAll(sectionSelector);

    nodes.forEach((el, index) => {
      if (el.closest(".hero")) return;
      if (el.hasAttribute("data-reveal")) return;

      let type = "up";
      if (el.matches(".pillar, .news-card, .service-tile, .info-card, .office-card")) {
        type = "scale";
      } else if (el.matches(".about-photo, .office-photo, .investors-card")) {
        type = "left";
      } else if (el.matches(".investors-news")) {
        type = "right";
      }

      el.setAttribute("data-reveal", type);

      // Stagger siblings in grids
      const parent = el.parentElement;
      if (
        parent &&
        (parent.classList.contains("pillars") ||
          parent.classList.contains("news-grid") ||
          parent.classList.contains("service-tiles") ||
          parent.classList.contains("brands-inner") ||
          parent.classList.contains("data-grid") ||
          parent.classList.contains("content-grid") ||
          parent.classList.contains("esg-grid") ||
          parent.classList.contains("team-grid") ||
          parent.classList.contains("market-list") ||
          parent.tagName === "UL")
      ) {
        parent.setAttribute("data-reveal-stagger", "");
        const siblings = [...parent.children].filter((c) => c.hasAttribute("data-reveal"));
        const i = siblings.indexOf(el);
        el.style.setProperty("--reveal-i", String(Math.max(0, i)));
      }
    });

    // Partner logos — skip individual reveal (marquee handles motion)
    main.querySelectorAll(".brand-chip").forEach((el, i) => {
      el.setAttribute("data-reveal", "up");
      el.style.setProperty("--reveal-i", String(i));
      el.parentElement?.setAttribute("data-reveal-stagger", "");
    });

    const revealables = main.querySelectorAll("[data-reveal]");

    if (reduceMotion) {
      revealables.forEach((el) => el.classList.add("is-revealed"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-revealed");
          io.unobserve(entry.target);
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
    );

    revealables.forEach((el) => io.observe(el));
  })();
})();
