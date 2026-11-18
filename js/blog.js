/**
 * Almeida & Vasconcelos — Publicações Jurídicas (Blog)
 * Dados e lógica de renderização da seção de conteúdos jurídicos.
 */

const publicacoesJuridicas = [
    {
        id: 1,
        titulo: "A importância da auditoria documental (Due Diligence) antes da compra de imóveis",
        data: "14 de Outubro de 2026",
        categoria: "Direito Imobiliário",
        resumo: "A aquisição de um bem imóvel envolve riscos que vão além da análise da matrícula atualizada. Compreenda quais certidões e verificações previnem litígios futuros e evicção.",
        imagem: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=900&q=80",
        conteudo: [
            "A compra de um imóvel representa, na maioria das vezes, uma das operações patrimoniais mais relevantes na vida de uma pessoa física ou na expansão de uma empresa. Contudo, a confiança exclusiva na aparência documental ou apenas na certidão de matrícula pode expor o comprador a riscos significativos.",
            "A auditoria jurídica imobiliária — tecnicamente denominada Due Diligence — consiste no levantamento sistemático de informações sobre o imóvel, os atuais proprietários e eventuais antecessores. O objetivo é verificar a existência de ações judiciais, execuções fiscais, débitos trabalhistas ou indisponibilidades que possam alcançar o bem.",
            "De acordo com o ordenamento jurídico brasileiro, a venda de um imóvel por quem responde a ações capazes de reduzi-lo à insolvência pode configurar fraude à execução ou fraude contra credores, resultando na ineficácia da venda perante terceiros.",
            "Portanto, a análise prévia realizada por advogado especializado permite redigir cláusulas contratuais protetivas, condicionar pagamentos à baixa de eventuais gravames e assegurar que a transferência da propriedade ocorra com plena segurança registral."
        ]
    },
    {
        id: 2,
        titulo: "Acordo de Sócios: prevenção de impasses na gestão de sociedades limitadas",
        data: "28 de Setembro de 2026",
        categoria: "Direito Empresarial",
        resumo: "Enquanto o contrato social regula aspectos públicos da empresa, o acordo de sócios estabelece regras privadas sobre tomada de decisão, saída de integrantes e sucessão.",
        imagem: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=80",
        conteudo: [
            "Na constituição de uma sociedade limitada, é comum que os sócios concentrem esforços na operação comercial e adotem modelos padronizados de contrato social. Todavia, à medida que a empresa cresce, divergências sobre reinvestimento de lucros, entrada de novos sócios ou retirada de integrantes tornam-se frequentes.",
            "O Acordo de Sócios é um instrumento parassocial que complementa o contrato social, permitindo disciplinar questões estratégicas com maior detalhamento e confidencialidade.",
            "Entre as cláusulas mais relevantes destacam-se os critérios para apuração de haveres em caso de saída de um sócio, o direito de preferência na aquisição de quotas, regras de não concorrência e mecanismos para resolução de impasses societários.",
            "Estabelecer essas diretrizes enquanto há harmonia entre os sócios evita litígios prolongados que poderiam comprometer a continuidade e o valor econômico da atividade empresarial."
        ]
    },
    {
        id: 3,
        titulo: "Inventário Extrajudicial em Cartório: requisitos e vantagens da via consensual",
        data: "09 de Agosto de 2026",
        categoria: "Sucessões e Família",
        resumo: "Quando há consenso entre os herdeiros, a partilha de bens pode ser formalizada por escritura pública com assistência obrigatória de advogado, reduzindo o tempo de tramitação.",
        imagem: "",
        conteudo: [
            "Desde a vigência da Lei nº 11.441/2007 e das atualizações normativas do Conselho Nacional de Justiça (CNJ), o inventário e a partilha de bens podem ser realizados diretamente em Tabelionato de Notas, por meio de escritura pública.",
            "Para a adoção da via extrajudicial, exige-se o consenso entre todos os interessados quanto à divisão do patrimônio e a presença obrigatória de advogado, que poderá assistir a todos os herdeiros em comum ou individualmente.",
            "O procedimento inicia-se com o levantamento do patrimônio, quitação de eventuais débitos fiscais do falecido, declaração e recolhimento do Imposto de Transmissão Causa Mortis e Doação (ITCMD) e posterior lavratura da escritura.",
            "A escritura pública de inventário possui plena eficácia jurídica para transferência de imóveis no Registro de Imóveis e levantamento de valores em instituições financeiras, dispensando homologação judicial."
        ]
    }
];

let categoriaAtual = 'Todas';

function renderBlogList(categoria) {
    const container = document.getElementById('blog-list-container');
    const filtrados = categoria === 'Todas'
        ? publicacoesJuridicas
        : publicacoesJuridicas.filter(post => post.categoria === categoria);

    if (filtrados.length === 0) {
        container.innerHTML = '<p class="py-12 text-stone-500 text-sm">Nenhuma publicação encontrada nesta categoria.</p>';
        return;
    }

    container.innerHTML = filtrados.map(post => `
        <article class="py-10 first:pt-2 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div class="${post.imagem ? 'md:col-span-8' : 'md:col-span-12'} space-y-3">
                <div class="flex items-center space-x-3 text-xs">
                    <span class="uppercase tracking-wider text-bronze-700 font-semibold">${post.categoria}</span>
                    <span class="text-stone-300">&bull;</span>
                    <time class="text-stone-500">${post.data}</time>
                </div>
                <h2 class="font-serif text-2xl sm:text-3xl font-semibold text-navy-900 leading-snug">
                    <button type="button" onclick="openArticleReader(${post.id})" class="text-left hover:text-bronze-700 transition-colors">
                        ${post.titulo}
                    </button>
                </h2>
                <p class="text-sm sm:text-base text-stone-600 leading-relaxed">
                    ${post.resumo}
                </p>
                <div class="pt-2">
                    <button type="button" onclick="openArticleReader(${post.id})" class="inline-flex items-center text-xs uppercase tracking-widest font-medium text-navy-900 border-b border-navy-900/40 pb-0.5 hover:border-navy-900 transition-colors">
                        Ler artigo completo &rarr;
                    </button>
                </div>
            </div>
            ${post.imagem ? `
                <div class="md:col-span-4">
                    <div class="aspect-[16/10] w-full overflow-hidden bg-stone-200 rounded-sm border editorial-border">
                        <img src="${post.imagem}" alt="${post.titulo}" onerror="this.style.display='none'" class="w-full h-full object-cover grayscale-[15%]">
                    </div>
                </div>
            ` : ''}
        </article>
    `).join('');
}

function filterPosts(categoria) {
    categoriaAtual = categoria;
    closeArticleReader();
    renderBlogList(categoria);

    const buttons = document.querySelectorAll('.category-btn');
    buttons.forEach(btn => {
        const text = btn.textContent.trim();
        const isActive =
            (categoria === 'Todas' && text === 'Todas') ||
            (categoria === 'Direito Imobiliário' && text === 'Imobiliário') ||
            (categoria === 'Direito Empresarial' && text === 'Empresarial') ||
            (categoria === 'Sucessões e Família' && text === 'Sucessões');

        if (isActive) {
            btn.classList.add('bg-navy-900', 'text-stone-50', 'border-navy-900');
            btn.classList.remove('text-stone-700', 'border-stone-300');
        } else {
            btn.classList.remove('bg-navy-900', 'text-stone-50', 'border-navy-900');
            btn.classList.add('text-stone-700', 'border-stone-300');
        }
    });
}

function openArticleReader(id) {
    const post = publicacoesJuridicas.find(p => p.id === id);
    if (!post) return;

    const listContainer = document.getElementById('blog-list-container');
    const reader = document.getElementById('blog-article-reader');
    const content = document.getElementById('article-reader-content');

    listContainer.classList.add('hidden');
    reader.classList.remove('hidden');

    content.innerHTML = `
        <div class="space-y-4">
            <div class="flex items-center space-x-3 text-xs">
                <span class="uppercase tracking-wider text-bronze-700 font-semibold">${post.categoria}</span>
                <span class="text-stone-300">&bull;</span>
                <time class="text-stone-500">${post.data}</time>
            </div>
            <h1 class="font-serif text-3xl sm:text-4xl font-semibold text-navy-900 leading-tight">
                ${post.titulo}
            </h1>
            <p class="text-xs text-stone-500">Por Dr. Henrique Almeida Vasconcelos — OAB/SP 312.480</p>
        </div>
        ${post.imagem ? `
            <div class="aspect-[16/9] w-full overflow-hidden bg-stone-200 rounded-sm border editorial-border my-6">
                <img src="${post.imagem}" alt="${post.titulo}" onerror="this.style.display='none'" class="w-full h-full object-cover grayscale-[15%]">
            </div>
        ` : ''}
        <div class="space-y-5 text-base text-stone-700 leading-relaxed pt-2">
            ${post.conteudo.map(paragrafo => `<p>${paragrafo}</p>`).join('')}
        </div>
    `;

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function closeArticleReader() {
    document.getElementById('blog-article-reader').classList.add('hidden');
    document.getElementById('blog-list-container').classList.remove('hidden');
}

renderBlogList('Todas');
