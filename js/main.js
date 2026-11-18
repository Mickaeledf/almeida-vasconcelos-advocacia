/**
 * Almeida & Vasconcelos — Scripts Principais
 * Navegação, menu mobile, formulário de contato e modal de privacidade.
 */

/* ============================================================
   Navegação entre páginas (Institucional / Conteúdos Jurídicos)
   ============================================================ */

function navigateTo(page, sectionId) {
    const homePage = document.getElementById('page-home');
    const blogPage = document.getElementById('page-blog');
    const navBlogBtn = document.getElementById('nav-blog-btn');

    if (page === 'blog') {
        homePage.classList.add('hidden');
        blogPage.classList.remove('hidden');
        navBlogBtn.classList.add('active');
        closeArticleReader();
        renderBlogList(categoriaAtual);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        blogPage.classList.add('hidden');
        homePage.classList.remove('hidden');
        navBlogBtn.classList.remove('active');

        if (sectionId) {
            setTimeout(function () {
                var target = document.getElementById(sectionId);
                if (target) {
                    var headerOffset = 80;
                    var elementPosition = target.getBoundingClientRect().top;
                    var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                }
            }, 30);
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }
}

/* ============================================================
   Menu Mobile
   ============================================================ */

var mobileMenuBtn = document.getElementById('mobile-menu-btn');

function toggleMobileMenu(forceState) {
    var menu = document.getElementById('mobile-menu');
    var iconOpen = document.getElementById('menu-icon-open');
    var iconClose = document.getElementById('menu-icon-close');
    var isHidden = menu.classList.contains('hidden');
    var shouldOpen = forceState !== undefined && forceState !== null ? forceState : isHidden;

    if (shouldOpen) {
        menu.classList.remove('hidden');
        iconOpen.classList.add('hidden');
        iconClose.classList.remove('hidden');
        mobileMenuBtn.setAttribute('aria-expanded', 'true');
    } else {
        menu.classList.add('hidden');
        iconOpen.classList.remove('hidden');
        iconClose.classList.add('hidden');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
    }
}

mobileMenuBtn.addEventListener('click', function () {
    toggleMobileMenu();
});

/* ============================================================
   Modal — Política de Privacidade
   ============================================================ */

function togglePrivacyModal(show) {
    var modal = document.getElementById('privacy-modal');
    if (show) {
        modal.classList.remove('hidden');
    } else {
        modal.classList.add('hidden');
    }
}

/* ============================================================
   Formulário de Contato (validação e feedback visual)
   ============================================================ */

document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    var feedback = document.getElementById('form-feedback');
    var nome = document.getElementById('nome').value.trim();
    var telefone = document.getElementById('telefone').value.trim();
    var email = document.getElementById('email').value.trim();
    var mensagem = document.getElementById('mensagem').value.trim();
    var lgpd = document.getElementById('lgpd').checked;

    feedback.classList.remove(
        'hidden',
        'bg-red-950/60', 'border-red-700', 'text-red-200',
        'bg-emerald-950/60', 'border-emerald-700', 'text-emerald-200'
    );

    if (!nome || !telefone || !email || !mensagem || !lgpd) {
        feedback.classList.add('bg-red-950/60', 'border-red-700', 'text-red-200');
        feedback.textContent = 'Por favor, preencha todos os campos obrigatórios e assinale a concordância com a Política de Privacidade.';
        return;
    }

    feedback.classList.add('bg-emerald-950/60', 'border-emerald-700', 'text-emerald-200');
    feedback.textContent = 'Obrigado, ' + nome + '. Sua solicitação foi registrada com sucesso. Nossa equipe retornará o contato em horário comercial.';
    this.reset();
});
