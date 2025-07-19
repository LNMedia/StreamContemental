// Navigation & PageContents
const navigationItemsElement = document.getElementById('navigationItems');
const pageContentElement = document.getElementById('pageContent');
let modules = [];
let currentModuleIndex = null;

function getCurrentLang() {
    return localStorage.getItem('lang') || (navigator.language.startsWith('de') ? 'de' : 'en');
}
function getLanguageText(key) {
    const userLang = getCurrentLang();
    for (const module of modules) {
        if (module.moduleLanguage && module.moduleLanguage[key]) {
            return module.moduleLanguage[key][userLang] || module.moduleLanguage[key]['en'] || key;
        }
    }
    return key;
}

function loadNavigation() {
    navigationItemsElement.innerHTML = '';

    // Module sortieren nach packageorder & moduleorder
    modules.sort((a, b) => {
        const packageA = a.moduleMeta.sort.packageorder || '';
        const packageB = b.moduleMeta.sort.packageorder || '';
        if (packageA < packageB) return -1;
        if (packageA > packageB) return 1;

        const orderA = a.moduleMeta.sort.moduleorder ?? 999;
        const orderB = b.moduleMeta.sort.moduleorder ?? 999;
        return orderA - orderB;
    });

    const packageGroups = {};

    // Gruppiere alle Module (auch deaktivierte)
    modules.forEach(module => {
        const packageOrder = module.moduleMeta.sort.packageorder;
        if (!packageGroups[packageOrder]) {
            packageGroups[packageOrder] = [];
        }
        packageGroups[packageOrder].push(module);
    });

    // Iteriere über jede packageorder
    Object.keys(packageGroups).sort().forEach(packageOrder => {
        const allModules = packageGroups[packageOrder];
        const activeModules = allModules.filter(m => m.moduleMeta.settings.enabled === true);

        if (activeModules.length === 0) return; // Keine aktiven Module → nichts anzeigen

        // Finde das Modul mit moduleorder === 1 (egal ob aktiviert oder nicht)
        const deviderModule = allModules.find(m => m.moduleMeta.sort.moduleorder === 1);
        if (deviderModule) {
            const dividerHTML = `
                    <span class="line"></span>
                    <span><i class="${deviderModule.moduleMeta.resources.devider}"></i></span>
                    <span class="line"></span>
            `;
            const dividerElement = document.createElement('div');
            dividerElement.classList.add('navDevider');
            dividerElement.innerHTML = dividerHTML;
            navigationItemsElement.appendChild(dividerElement);
        }

        // Jetzt die aktivierten Module anzeigen
        activeModules.forEach(module => {
            const navItem = document.createElement('li');
            navItem.classList.add('navigationItemWrapper');

            const index = modules.indexOf(module);
            const title = module.moduleMeta.id || getLanguageText(module.moduleMeta.langKey);

            navItem.innerHTML = `
                <button class="navigationItem" data-index="${index}" style="background: ${module.moduleMeta.resources.background}; display: flex;">
                    <i class="${module.moduleMeta.resources.icon}"></i>
                    <span data-lang='${module.moduleMeta.id}'></span>
                </button>
            `;

            navItem.querySelectorAll('[data-lang]').forEach(el => {
                const key = el.getAttribute('data-lang');
                el.innerText = getLanguageText(key);
            });

            navItem.querySelector('.navigationItem').addEventListener('click', (event) => {
                const index = event.target.closest('button').dataset.index;
                currentModuleIndex = index;
                setActiveModule(index);
                loadModuleContent(index);
            });

            navigationItemsElement.appendChild(navItem);
        });
    });

    const defaultModule = modules.find(m =>
        m.moduleMeta.sort.packageorder === 0 &&
        m.moduleMeta.sort.moduleorder === 0 &&
        m.moduleMeta.settings.enabled === true
    );
    if (defaultModule) {
        const defaultIndex = modules.indexOf(defaultModule);
        currentModuleIndex = defaultIndex;
        setActiveModule(defaultIndex);
        loadModuleContent(defaultIndex);
    }
}
function setActiveModule(activeIndex) {
    const allNavigationItems = document.querySelectorAll('.navigationItem');

    allNavigationItems.forEach(button => {
        button.classList.remove('activeNav');
        button.style.background = `url('/assets/images/menu/_offButton.webp') center/cover no-repeat`;
    });

    const activeButton = document.querySelector(`.navigationItem[data-index="${activeIndex}"]`);
    activeButton.classList.add('activeNav');
    const activeModule = modules[activeIndex];
    activeButton.style.background = `${activeModule.moduleMeta.resources.background}`;
}
function loadModuleContent(moduleIndex) {
    pageContentElement.innerHTML = '';

    const module = modules[moduleIndex];

    if (module.moduleMeta.type === 'module' && module.moduleContent && module.moduleMeta && module) {
        let htmlContent = '';

        // HTML-Inhalte laden
        if (module.moduleContent && Array.isArray(module.moduleContent)) {
            const tempContainer = document.createElement('div');
            tempContainer.innerHTML = module.moduleContent.join('');

            tempContainer.querySelectorAll('[data-lang]').forEach(el => {
                const key = el.getAttribute('data-lang');
                const text = getLanguageText(key);
                el.innerText = text;
            });

            htmlContent = tempContainer.innerHTML;
        }

        // Setze HTML-Inhalt
        pageContentElement.innerHTML = htmlContent;

        // Stylesheets laden und anpassen
        if (module.moduleMeta.resources.stylesheets && Array.isArray(module.moduleMeta.resources.stylesheets)) {
            module.moduleMeta.resources.stylesheets.forEach(href => {
                updateLinkHref('contentStyles', href);
            });
        }

        // Skripte laden und anpassen
        if (module.moduleMeta.resources.scripts && Array.isArray(module.moduleMeta.resources.scripts)) {
            module.moduleMeta.resources.scripts.forEach(src => {
                updateScriptSrc('contentScripts', src);  // ID für Script und src des neuen Scripts
            });
        }

    } else {
        pageContentElement.innerHTML = "<p>Fehler beim Laden des Moduls.</p>";
    }
}
function updateLinkHref(linkId, newHref) {
    const existingLink = document.getElementById(linkId);

    if (existingLink) {
        // Den href-Link des vorhandenen Links ändern
        existingLink.href = newHref;
        console.log(`Link mit ID ${linkId} wurde auf ${newHref} aktualisiert.`);
    } else {
        const linkTag = document.createElement('link');
        linkTag.id = linkId;
        linkTag.rel = 'stylesheet';
        linkTag.href = newHref;
        document.head.appendChild(linkTag);
        console.log(`Neues Stylesheet mit ${newHref} hinzugefügt.`);
    }
}
function updateScriptSrc(scriptId, newSrc) {
    const existingScript = document.getElementById(scriptId);

    if (existingScript) {
        // Den src-Link des vorhandenen Scripts ändern
        existingScript.src = newSrc;
        console.log(`Script mit ID ${scriptId} wurde auf ${newSrc} aktualisiert.`);
        reloadScript(existingScript);  // Funktion zum "Neu starten" des Scripts
    } else {
        // Script ist noch nicht vorhanden, füge es hinzu
        const scriptTag = document.createElement('script');
        scriptTag.id = scriptId;
        scriptTag.src = newSrc;
        scriptTag.defer = true;
        document.body.appendChild(scriptTag);
        console.log(`Neues Script mit ${newSrc} hinzugefügt.`);
        scriptTag.onload = () => {
            console.log(`Script ${newSrc} wurde geladen.`);
        };
    }
}
function reloadScript(scriptElement) {
    const newScript = document.createElement('script');
    newScript.id = scriptElement.id;  // ID des alten Scripts beibehalten
    newScript.src = scriptElement.src;  // Die gleiche Quelle für das neue Script
    newScript.defer = true;
    
    // Entferne das alte Script
    scriptElement.remove();

    // Füge das neue Script hinzu, um es neu zu laden
    document.body.appendChild(newScript);

    console.log(`Script ${scriptElement.src} wurde neu geladen.`);
}

// Sprache ändern und alles aktualisieren
function setLanguage(lang) {
    localStorage.setItem('lang', lang);

    let langName = '';
    switch (lang) {
        case 'de':
            langName = 'Deutsch';
            break;
        case 'en':
            langName = 'English';
            break;
        default:
            langName = lang.toUpperCase();
    }
    document.querySelector('.activeLang').innerHTML = `
        <img src="/api/media/images/lang/${lang}.webp" alt="${lang}">
        <span>${langName}</span>
    `;

    if (currentModuleIndex !== null) {
        location.reload();
    }
}
function initLangSwitcher() {
    const savedLang = getCurrentLang();
    setLanguage(savedLang);

    document.querySelectorAll('[data-langindex]').forEach(el => {
        el.addEventListener('click', () => {
            const selectedLang = el.getAttribute('data-langindex');
            setLanguage(selectedLang);
        });
    });
}

// Langmenu
let isLangOpen = false;
function toggleLangMenu() {
    const langMenu = document.querySelector('.langMenu');
    const langSwitcher = document.querySelector('.langSwitcher');

    if (!isLangOpen) {
        langMenu.style.maxHeight = '500px';
        langSwitcher.classList.add('open');
    } else {
        langMenu.style.maxHeight = '';
        langSwitcher.classList.remove('open');
    }

    isLangOpen = !isLangOpen;
};
// Mobile Navigation Toggle
let isMobileNavOpen = false;
function toggleNavMobile() {
    const nav = document.getElementById('mainNavigation');
    const button = document.querySelector('.mobileNavButton');
    if (!isMobileNavOpen) {
        button.style.opacity = '0.5';
        button.children[1].style.opacity = '0';
        button.children[0].style.marginTop = '0';
        button.children[2].style.marginTop = '0';
        button.children[0].style.rotate = '45deg';
        button.children[2].style.rotate = '-45deg';
        nav.style.left = '0';
    } else {
        button.style.opacity = '';
        button.children[1].style.opacity = '';
        button.children[0].style.marginTop = '';
        button.children[2].style.marginTop = '';
        button.children[0].style.rotate = '';
        button.children[2].style.rotate = '';
        nav.style.left = '';
    }
    isMobileNavOpen = !isMobileNavOpen;
}

// Desknav Toggle
let isDeskNavToggled = true;
function toggleNavDesk() {
    const nav = document.getElementById('mainNavigation');
    const buttonSpan = document.querySelector('.desktopNavCloser span');
    if (nav.style.left === '' && window.innerWidth >= 750) {
        buttonSpan.style.rotate = '-180deg';
        nav.style.position = 'absolute';
        nav.style.left = '-275px';
    } else {
        buttonSpan.style.rotate = '';
        nav.style.position = '';
        nav.style.left = '';
    }
    isDeskNavToggled = !isDeskNavToggled
}
function normalizeDesktopNav() {
    const nav = document.getElementById('mainNavigation');
    const button = document.querySelector('.desktopNavCloser');
    const buttonSpan = document.querySelector('.desktopNavCloser span');
    if(!isDeskNavToggled && window.innerWidth < 750) {
        buttonSpan.style.rotate = '';
        button.style.marginRight = '';
        nav.style.position = '';
        nav.style.left = '';
        isDeskNavToggled = true;
    }
}
document.addEventListener('click', function(event) {
    const nav = document.getElementById('mainNavigation');
    const langMenu = document.querySelector('.langSwitcher');
    const button = document.querySelector('.mobileNavButton');
    if (isMobileNavOpen && !nav.contains(event.target) && !button.contains(event.target)) {
        toggleNavMobile();
    } else if (isLangOpen && !langMenu.contains(event.target) && !button.contains(event.target)) {
        toggleLangMenu();
    }
});

// Initialisierung
document.addEventListener("DOMContentLoaded", () => {
    fetch('/api/modules')
        .then(response => response.json())
        .then(data => {
            modules = data;
            loadNavigation();
        })
        .catch(error => console.error('Fehler beim Laden der Module:', error));

    initLangSwitcher();
});
window.addEventListener('resize', normalizeDesktopNav);
document.querySelector('.langSwitcher').addEventListener('click', toggleLangMenu);
document.querySelector('.mobileNavButton').addEventListener('click', toggleNavMobile);
document.querySelector('.desktopNavCloser').addEventListener('click', toggleNavDesk);
