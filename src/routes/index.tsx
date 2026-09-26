import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, AudioLines, ChevronDown, Gamepad2, Headphones, ShieldCheck, Sparkles, Zap } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "PlayStation 5 — Uma nova forma de jogar" },
    { name: "description", content: "Conheça a família PlayStation 5. Consulte disponibilidade e solicite informações." },
    { property: "og:title", content: "PlayStation 5 — Uma nova forma de jogar" },
    { property: "og:description", content: "Conheça a família PlayStation 5. Consulte disponibilidade e solicite informações." },
  ] }),
  component: PlayStationPage,
});

const models = [
  { name: "PlayStation 5", label: "A experiência completa", description: "Jogos incríveis em resolução 4K e carregamentos ultrarrápidos.", tag: "COM LEITOR DE DISCOS", style: "standard" },
  { name: "PS5 Digital Edition", label: "Uma experiência totalmente digital", description: "A mesma velocidade e imersão, num formato sem leitor de discos.", tag: "TOTALMENTE DIGITAL", style: "digital" },
  { name: "PlayStation 5 Pro", label: "Jogar em outro nível", description: "Desempenho gráfico avançado para uma experiência ainda mais imersiva.", tag: "DESEMPENHO AVANÇADO", style: "pro" },
];

const faqs = [
  ["Qual modelo PS5 devo escolher?", "A escolha depende de como prefere jogar. O PS5 inclui leitor de discos, a Digital Edition oferece uma experiência totalmente digital e o PS5 Pro é pensado para quem procura desempenho gráfico avançado. Solicite informações para conhecer as opções disponíveis."],
  ["Como posso consultar a disponibilidade?", "Os botões desta página levam à secção de solicitação de informações. A disponibilidade poderá ser confirmada quando o canal de atendimento estiver definido."],
  ["Os jogos de PS4 funcionam no PS5?", "A grande maioria dos jogos de PS4 é compatível com a família PS5. A compatibilidade pode variar por título."],
  ["Como funciona a compra e a entrega?", "Os detalhes comerciais, incluindo disponibilidade e opções de entrega, são confirmados diretamente no atendimento."],
];

function ConsoleArt({ variant = "standard" }: { variant?: string }) {
  return <div className={`console-art console-${variant}`} aria-label="Ilustração da consola PlayStation 5" role="img">
    <div className="console-glow" /><div className="console-unit"><div className="console-wing wing-left" /><div className="console-core" /><div className="console-wing wing-right" /><div className="console-light" /></div>
    <div className="console-base" />
  </div>;
}

function PlayStationPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const requestInfo = () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  return <main className="ps-page" id="top">
    <header className="ps-header">
      <a href="#top" className="ps-brand" aria-label="PlayStation 5 início"><span className="ps-symbol">PS</span><span>PLAYSTATION<small>®5</small></span></a>
      <nav aria-label="Navegação principal"><a href="#modelos">Consolas</a><a href="#experiencia">Experiência</a><a href="#especificacoes">Especificações</a><a href="#faq">FAQ</a></nav>
      <button className="ps-header-cta" onClick={requestInfo}>Solicitar informações <ArrowRight size={15} /></button>
    </header>

    <section className="ps-hero">
      <div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" />
      <div className="ps-hero-copy"><div className="ps-eyebrow"><span /> NOVA GERAÇÃO. NOVAS POSSIBILIDADES.</div>
        <h1>O jogo muda.<br /><em>A experiência também.</em></h1>
        <p>Descubra uma nova forma de jogar com a potência, velocidade e imersão da família PlayStation 5.</p>
        <div className="ps-hero-actions"><button className="ps-button" onClick={requestInfo}>Explorar consolas <ArrowRight size={17} /></button><a href="#experiencia" className="text-link">Conhecer a experiência <ArrowDown size={15} /></a></div>
        <div className="hero-footnote"><span>PLAY HAS NO LIMITS</span><span className="foot-line" /><span>01 — 03</span></div>
      </div>
      <div className="hero-product"><div className="hero-product-label">PLAY HAS NO LIMITS <span>✳</span></div><ConsoleArt /><div className="product-caption"><span>PLAYSTATION 5</span><span>DESIGNED FOR PLAY</span></div></div>
      <div className="hero-side-note">IMERSÃO<br />SEM LIMITES <span>↘</span></div>
    </section>

    <div className="ps-strip"><span>PLAYSTATION 5</span><i>✳</i><span>FEITO PARA JOGAR</span><i>✳</i><span>UMA NOVA GERAÇÃO</span><i>✳</i><span>PLAYSTATION 5</span></div>

    <section className="ps-section models-section" id="modelos"><div className="section-heading"><div><div className="ps-eyebrow">01 / ESCOLHA A SUA EXPERIÊNCIA</div><h2>Uma família.<br /><em>Três formas de jogar.</em></h2></div><p>Encontre a consola que acompanha o seu estilo de jogo. Consulte disponibilidade e detalhes junto da nossa equipa.</p></div>
      <div className="model-grid">{models.map((model, i) => <article className="model-card" key={model.name}><div className="model-visual"><span className="model-index">0{i + 1}</span><ConsoleArt variant={model.style} /><span className="model-tag">{model.tag}</span></div><div className="model-info"><span>{model.label}</span><h3>{model.name}</h3><p>{model.description}</p><button onClick={requestInfo} aria-label={`Solicitar informações sobre ${model.name}`}><ArrowRight /></button></div></article>)}</div>
    </section>

    <section className="experience-section" id="experiencia"><div className="experience-image"><div className="experience-ring"/><div className="experience-core"><Gamepad2 size={68} strokeWidth={1} /></div><span className="image-caption">SENTE CADA MOMENTO.</span><span className="image-number">02 / 04</span></div><div className="experience-copy"><div className="ps-eyebrow">02 / FEITO PARA SENTIR</div><h2>Mais perto<br />do <em>jogo.</em></h2><p>Entra em mundos extraordinários. Sente a ação ganhar vida e deixa cada sessão levar-te mais longe.</p><div className="benefit-list"><div><span className="benefit-icon"><Zap /></span><p><strong>Velocidade impressionante</strong><small>Carregamentos rápidos com armazenamento SSD de alta velocidade.</small></p></div><div><span className="benefit-icon"><AudioLines /></span><p><strong>Imersão sonora</strong><small>Som envolvente que ajuda a localizar cada detalhe do jogo.</small></p></div><div><span className="benefit-icon"><Gamepad2 /></span><p><strong>Controlo intuitivo</strong><small>Experiências táteis que aproximam cada ação das tuas mãos.</small></p></div></div></div></section>

    <section className="spec-section" id="especificacoes"><div className="spec-heading"><div className="ps-eyebrow">03 / POTÊNCIA EM CADA DETALHE</div><h2>Tecnologia que<br /><em>desaparece no jogo.</em></h2><p>Tecnologia criada para que te concentres no que realmente importa: jogar.</p></div><div className="spec-grid"><div><span>01</span><Sparkles /><h3>Gráficos em 4K</h3><p>Detalhe visual nítido e mundos de jogo mais ricos.</p></div><div><span>02</span><Zap /><h3>SSD ultrarrápido</h3><p>Carregamentos rápidos que te levam direto à ação.</p></div><div><span>03</span><AudioLines /><h3>Áudio 3D</h3><p>Som envolvente para uma experiência mais imersiva.</p></div><div><span>04</span><Headphones /><h3>Feedback tátil</h3><p>Sente as ações do jogo através do comando sem fios DualSense.</p></div></div></section>

    <section className="trust-section"><div className="trust-mark"><ShieldCheck size={34} strokeWidth={1.2} /></div><div><div className="ps-eyebrow">COMPRA COM TRANQUILIDADE</div><h2>Informação clara.<br /><em>Atendimento próximo.</em></h2></div><p>Fale connosco para esclarecer dúvidas sobre os modelos, consultar disponibilidade e receber as informações necessárias antes de decidir.</p><button className="outline-button" onClick={requestInfo}>Falar com a equipa <ArrowRight size={16} /></button></section>

    <section className="faq-section" id="faq"><div className="faq-intro"><div className="ps-eyebrow">04 / PERGUNTAS FREQUENTES</div><h2>Ficou com<br />alguma <em>dúvida?</em></h2><p>Estamos aqui para ajudar a escolher a experiência certa.</p><a href="#contact">Ainda tem perguntas? <ArrowRight size={14} /></a></div><div className="faq-list">{faqs.map(([question, answer], i) => <article className={`faq-item ${openFaq === i ? "is-open" : ""}`} key={question}><button aria-expanded={openFaq === i} onClick={() => setOpenFaq(openFaq === i ? null : i)}><span><small>0{i + 1}</small>{question}</span><ChevronDown size={18} /></button>{openFaq === i && <p>{answer}</p>}</article>)}</div></section>

    <section className="contact-section" id="contact"><div className="contact-decoration">PS<span>5</span></div><div className="ps-eyebrow">PRONTO PARA O PRÓXIMO NÍVEL?</div><h2>A tua próxima<br /><em>aventura começa aqui.</em></h2><p>Solicite informações sobre a família PlayStation 5. Sem compromisso.</p><a className="ps-button" data-contact-cta="request-info" href="#modelos">Explorar modelos <ArrowRight size={17} /></a><small>Disponibilidade e detalhes comerciais sob consulta.</small></section>
    <footer className="ps-footer"><a href="#top" className="ps-brand"><span className="ps-symbol">PS</span><span>PLAYSTATION<small>®5</small></span></a><span>© 2026. PlayStation 5. Todos os direitos reservados.</span><a href="#top">VOLTAR AO TOPO ↑</a></footer>
  </main>;
}
