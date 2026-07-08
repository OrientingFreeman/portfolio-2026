const links=[...document.querySelectorAll('.toc a')];
const sections=links.map(a=>document.querySelector(a.getAttribute('href'))).filter(Boolean);
const activate=()=>{let current=sections[0];for(const s of sections){if(s.getBoundingClientRect().top<180) current=s;}links.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+current.id));};
document.addEventListener('scroll',activate,{passive:true});activate();
