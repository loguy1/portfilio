// Sélection des éléments de la barre latérale et de l'overlay
const openSidebarBtn = document.getElementById('openSidebar');
const closeSidebarBtn = document.getElementById('closeSidebar');
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebarOverlay');

// Fonction pour ouvrir la barre latérale
function openSidebar() {
  sidebar.classList.add('open');
  sidebarOverlay.classList.add('active');
}

// Fonction pour fermer la barre latérale
function closeSidebar() {
  sidebar.classList.remove('open');
  sidebarOverlay.classList.remove('active');
}

// Événements pour ouvrir et fermer la barre latérale
openSidebarBtn.addEventListener('click', openSidebar);
closeSidebarBtn.addEventListener('click', closeSidebar);
sidebarOverlay.addEventListener('click', closeSidebar);


















