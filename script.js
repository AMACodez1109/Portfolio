// === CONFIG ===
const MY_EMAIL = "jlpantaleon92@gmail.com";
const GITHUB_URL = "https://github.com/AMACodez1109";

const menuIcon = document.querySelector("#menu-icon");
const navLinks = document.querySelector(".nav-links");
if (menuIcon && navLinks) {
  menuIcon.onclick = () => navLinks.classList.toggle("active");
  document.querySelectorAll(".nav-links a").forEach(a=>a.addEventListener("click",()=>navLinks.classList.remove("active")));
}
document.getElementById("visitGithub")?.addEventListener("click",()=>window.open(GITHUB_URL,"_blank"));

const directLink = document.getElementById("directEmailLink");
if(directLink){ directLink.textContent = MY_EMAIL; directLink.href = `mailto:${MY_EMAIL}`; }

const toast = document.getElementById("toast");
function showToast(msg){ if(!toast) return; toast.textContent=msg; toast.classList.add("show"); setTimeout(()=>toast.classList.remove("show"),3500); }

const translations = {
  en: {
    navAbout:"About", 
    navExperience:"Experience", 
    navProjects:"Projects", 
    navContact:"Contact", 
    visitGithub:"Visit Github",
    aboutHi:"Hi, I'm", 
    aboutRole:"Full Stack Developer", 
    btnResume:"Download Resume", 
    btnContact:"Contact",
    expTitle:"Experience", 
    exp1Title:"Current Project", 
    exp1Years:"Unreal Engine 5", 
    exp1Desc:"C++ Fundamentals: Learn Game Programming for beginners, C++: Make Your Own Action Combat Game, C++ Multiplayer: Make Your Own Co-Op Game",
    exp2Title:"Certificates", 
    exp2Sub:"Certificates", 
    exp2Desc:"C#, HTML, CSS, JavaScript, Python, Microsoft Professional Full Stack Developer certificates. Check my LinkedIn and Certificates page for verified badges.",
    exp3Title:"Websites", 
    exp3Sub:"Websites", 
    exp3Desc:"Modern sites I helped build with HTML, CSS, JavaScript.",
    projectsTitle:"Projects", 
    proj1Desc:"Glow Neon Retro TETRIS, multiple language support, multiple players capability, multiple difficulty levels, recreated with HTML, CSS, JavaScript.", 
    proj2Title:"More Projects", 
    proj2Desc:"Play!", 
    proj3Desc:"Github Repo / Code",
    contactTitle:"Contact Me", 
    contactNote:"Your message will open in your email app — no data is stored.", 
    namePh:"Your Name", 
    emailPh:"example@email.com", 
    messagePh:"Your message...", 
    submit:"Send Message", 
    contactNotePhone:"You can message me at (805) 886-7049.", 
    directLabel:"or Email Directly:",
    footAbout:"About", 
    footExp:"Experience", 
    footProj:"Projects", 
    footContact:"Contact", 
    copyright:"All Rights Reserved | Jorge Pantaleon",
    mailSubject:"Portfolio Inquiry from", 
    toast:"✅ Email app opened — just hit Send!", 
    formOpen:"Opening your email app — just hit Send!", 
    errName:"Please enter your name.", 
    errEmail:"Please enter a valid email.", 
    errMsg:"Message must be at least 10 characters."
  },
  es: {
    navAbout:"Sobre mí", 
    navExperience:"Experiencia", 
    navProjects:"Proyectos", 
    navContact:"Contacto", 
    visitGithub:"Visita Github",
    aboutHi:"Hola, soy", 
    aboutRole:"Desarrollador Full Stack", 
    btnResume:"Descargar CV", 
    btnContact:"Contáctame",
    expTitle:"Experiencia", 
    exp1Title:"Proyecto actual", 
    exp1Years:"Unreal Engine 5", 
    exp1Desc:"Fundamentos de C++: Aprende programación de videojuegos para principiantes; C++: Crea tu propio juego de acción y combate; C++ multijugador: Crea tu propio juego cooperativo",
    exp2Title:"Certificados", 
    exp2Sub:"Certificados", 
    exp2Desc:"Certificaciones de Microsoft como desarrollador Full Stack (C#, HTML, CSS, JavaScript, Python). Consulta mi perfil de LinkedIn y mi página de certificaciones para ver las insignias verificadas.",
    exp3Title:"Sitios Web", 
    exp3Sub:"Sitios Web", 
    exp3Desc:"Sitios modernos en cuya creación colaboré mediante HTML, CSS y JavaScript.",
    projectsTitle:"Proyectos", 
    proj1Desc:"Tetris retro con estilo neón brillante; incluye soporte para varios idiomas, opción para varios jugadores y diversos niveles de dificultad; recreado con HTML, CSS y JavaScript.", 
    proj2Title:"Más proyectos", 
    proj2Desc:"¡Jugar!", 
    proj3Desc:"Código / Github",
    contactTitle:"Contáctame", 
    contactNote:"Tu mensaje se abrirá en tu app de correo — no guardamos datos.", 
    namePh:"Tu Nombre", 
    emailPh:"ejemplo@correo.com", 
    messagePh:"Tu mensaje...", 
    submit:"Enviar Mensaje", 
    contactNotePhone:"Puedes enviarme un mensaje al (805) 886-7049.", 
    directLabel:"O Escribe Directo A:",
    footAbout:"Sobre mí", 
    footExp:"Experiencia", 
    footProj:"Proyectos", 
    footContact:"Contacto", 
    copyright:"Todos los derechos reservados | Jorge Pantaleon",
    mailSubject:"Consulta de portafolio de", 
    toast:"✅ App de correo abierta — solo presiona Enviar", 
    formOpen:"Abriendo tu app de correo — ¡solo presiona Enviar!", 
    errName:"Por favor ingresa tu nombre.", 
    errEmail:"Ingresa un correo válido.", 
    errMsg:"El mensaje debe tener al menos 10 caracteres."
  }
};

let currentLang = localStorage.getItem("lang") || "en";
const setText = (id, txt) => { const el = document.getElementById(id); if(el && txt) el.textContent = txt; };

function switchLanguage(lang){
  currentLang = lang;
  localStorage.setItem("lang", lang);
  const t = translations[lang];
  document.documentElement.lang = lang;

  setText("nav-about", t.navAbout);
  setText("nav-experience", t.navExperience);
  setText("nav-projects", t.navProjects);
  setText("nav-contact", t.navContact);
  setText("visitGithub", t.visitGithub);
  setText("about-hi", t.aboutHi);
  setText("about-role", t.aboutRole);
  setText("btn-resume", t.btnResume);
  setText("btn-contact", t.btnContact);
  setText("exp-title", t.expTitle);
  setText("exp-1-title", t.exp1Title);
  setText("exp-1-years", t.exp1Years);
  setText("exp-1-desc", t.exp1Desc);
  setText("exp-2-title", t.exp2Title);
  setText("exp-2-sub", t.exp2Sub);
  setText("exp-2-desc", t.exp2Desc);
  setText("exp-3-title", t.exp3Title);
  setText("exp-3-sub", t.exp3Sub);
  setText("exp-3-desc", t.exp3Desc);
  setText("projects-title", t.projectsTitle);
  setText("proj-1-desc", t.proj1Desc);
  setText("proj-2-title", t.proj2Title);
  setText("proj-2-desc", t.proj2Desc);
  setText("proj-3-desc", t.proj3Desc);
  setText("proj-3-desc-2", t.proj3Desc); // for second card
  setText("contact-title", t.contactTitle);
  setText("contact-note", t.contactNote);
  setText("contact-note-phone", t.contactNotePhone);
  setText("direct-label", t.directLabel);
  setText("contact-submit", t.submit);
  setText("foot-about", t.footAbout);
  setText("foot-exp", t.footExp);
  setText("foot-proj", t.footProj);
  setText("foot-contact", t.footContact);
  setText("copyright", t.copyright);

  const n = document.getElementById("contactName"), e = document.getElementById("contactEmail"), m = document.getElementById("contactMessage");
  if(n) n.placeholder = t.namePh;
  if(e) e.placeholder = t.emailPh;
  if(m) m.placeholder = t.messagePh;

  document.getElementById("btn-en")?.classList.toggle("active", lang==="en");
  document.getElementById("btn-es")?.classList.toggle("active", lang==="es");
}

document.getElementById("btn-en")?.addEventListener("click",()=>switchLanguage("en"));
document.getElementById("btn-es")?.addEventListener("click",()=>switchLanguage("es"));

const form = document.getElementById("contactForm");
const statusEl = document.getElementById("formStatus");
form?.addEventListener("submit", function(e){
  e.preventDefault();
  const t = translations[currentLang];
  const name = document.getElementById("contactName").value.trim();
  const email = document.getElementById("contactEmail").value.trim();
  const message = document.getElementById("contactMessage").value.trim();
  if(name.length < 2){ statusEl.textContent=t.errName; statusEl.className="error"; return; }
  if(!/^\S+@\S+\.\S+$/.test(email)){ statusEl.textContent=t.errEmail; statusEl.className="error"; return; }
  if(message.length < 10){ statusEl.textContent=t.errMsg; statusEl.className="error"; return; }
  const subject = `${t.mailSubject} ${name}`;
  const greeting = currentLang==="es" ? "Hola Jorge," : "Hi Jorge,";
  const body = `${greeting}\n\n${message}\n\n---\n${currentLang==="es"?"Nombre":"Name"}: ${name}\nEmail: ${email}\n${currentLang==="es"?"Enviado desde el portafolio":"Sent from portfolio website"}`;
  window.location.href = `mailto:${MY_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  statusEl.textContent = t.formOpen; statusEl.className = "success"; showToast(t.toast);
  setTimeout(()=>{ form.reset(); statusEl.textContent=""; }, 3000);
});

switchLanguage(currentLang);