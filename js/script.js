const menuBtn=document.querySelector(".menu-btn");
const nav=document.querySelector(".nav-links");
menuBtn?.addEventListener("click",()=>{nav.style.display=nav.style.display==="flex"?"none":"flex";nav.style.position="absolute";nav.style.top="78px";nav.style.right="5%";nav.style.flexDirection="column";nav.style.background="#fbfaf6";nav.style.padding="20px";nav.style.borderRadius="16px";nav.style.boxShadow="0 15px 40px rgba(0,0,0,.1)"});
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
document.querySelectorAll(".nav-links a").forEach(a=>a.addEventListener("click",()=>{if(innerWidth<901)nav.style.display="none"}));
