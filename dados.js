const JORNAL = "Gazeta Mendes";
const INICIO = "2026-11-23";

const COFRE = {
  "07c4959c0b5d9efbb1e75c93cf215a0aa8ed423cb9ef6d4822e12cb6069a3cc8": {
    msg: "Confirmado. A câmera do fundo não estava no cinema. Procure os registros do primeiro dia onde a praça termina.",
    ir: "#m2"
  }
};

const DIAS = [
  {
    d: 1,
    secao: "Polícia",
    hora: "06h00",
    kicker: "Caso Eliza Costa",
    autor: "Redação Polícia",
    titulo: "Polícia aponta Steve Martins como peça central do caso Eliza Costa",
    deck: "Corporação afirma ter reunido imagens de segurança e depoimentos que colocam o ex-vizinho no centro do inquérito.",
    corpo: `
<p>A Polícia Civil apontou Steve Martins, de 27 anos, como peça central na investigação sobre o desaparecimento de Eliza Costa, de 22 anos, vista pela última vez na noite em que saiu do trabalho, nas proximidades da Rua das Acácias.</p>

<figure class="foto">
  <img src="img/delegacia-entrada.jpg" alt="Entrada da delegacia">
  <figcaption>A investigação está sob responsabilidade da 3ª Delegacia. Arquivo da redação.</figcaption>
</figure>

<p>Em nota, a corporação afirmou que o suspeito <span class="selecione">foi ouvido em duas ocasiões</span> e que os depoimentos são consistentes com a linha de investigação adotada até agora. A nota não detalha quais imagens foram reunidas nem em que ordem foram analisadas.</p>

<p>Vizinhos ouvidos pela reportagem descreveram Martins como um rapaz reservado, que costumava circular pela praça em horários incomuns. Um morador disse, sob condição de anonimato, que <span class="sussurro">viu um carro parado em frente ao prédio durante vários dias seguidos</span>, sem saber dizer de quem era.</p>

<p>O inquérito também considera a hipótese de que a rotina da vítima tenha sido acompanhada por mais de uma pessoa. A nota oficial cita a existência de <span data-clique="registro-vigilancia">registros de vigilância que ainda não passaram por perícia</span>, sem informar a origem das gravações.</p>

<p>Trecho da declaração suprimido a pedido da assessoria: <span class="tarja">████████████ ████ ███████</span></p>

<p>Os registros de vigilância citados pela nota podem ser consultados no <a href="terminal.html">Sistema de Consulta de Acervo</a>, mantido pela redação desde 1998.</p>
`
  },
  {
    d: 1,
    secao: "Cidade",
    hora: "10h30",
    kicker: "Cidade",
    autor: "Redação Cidade",
    titulo: "Cinema Imperial reabre a sala 3 após oito meses fechada",
    deck: "Administração diz que a reforma trocou o sistema hidráulico e não mexeu na cabine de projeção.",
    corpo: `
<p>A sala 3 do Cinema Imperial, na Praça da Estação, volta a receber público nesta semana depois de oito meses interditada. A interdição foi feita após um vazamento de água que atingiu o forro e parte das poltronas da plateia.</p>

<figure class="foto">
  <img src="img/sala-3-cinema-imperial.jpg" alt="Sala 3 do Cinema Imperial">
  <figcaption>Poltronas da sala 3 durante a reforma. Arquivo da redação.</figcaption>
</figure>

<p>Segundo a administração, a obra substituiu tubulações, refez o forro e trocou as poltronas por modelos de couro sintético. A cabine de projeção, que fica no segundo andar, foi apenas vistoriada. <span class="sussurro">O relatório técnico da vistoria não foi divulgado.</span></p>

<figure class="foto">
  <img src="img/estacao.jpg" alt="Antiga estação ferroviária">
  <figcaption>A antiga estação ferroviária, vista da praça. Arquivo da redação.</figcaption>
</figure>

<p>Funcionários que pediram para não ser identificados afirmaram que a cabine permaneceu fechada à chave durante a reforma, e que apenas uma pessoa tinha acesso a ela.</p>

<div class="anuncio">
  <strong>Farmácia Santa Rita</strong><br>
  Aberta todos os dias, das 7h às 22h. Entrega em domicílio.
</div>

<p>A sessão de reabertura está marcada para sábado, às 19h, com exibição de um clássico da programação do cinema.</p>
`
  },
  {
    d: 1,
    secao: "Cidade",
    hora: "07h00",
    kicker: "Classificados",
    autor: "Classificados Gazeta Mendes",
    titulo: "Classificados · Página 8",
    deck: "Anúncios pagos pelos leitores, publicados conforme recebidos.",
    corpo: `
<p><strong>VENDE-SE</strong> máquina de costura usada, com estojo e pedal. Tratar pelo telefone da redação, após as 18h.</p>

<p><strong>PROCURA-SE</strong> quem possa ler a mensagem abaixo: <span data-clique="cifra-dia-1">Fdphud gr ixqgr</span>. <span class="sussurro">Dica da redação: o deslocamento é de três letras para trás.</span></p>

<p><strong>AULAS</strong> de violão para iniciantes, em domicílio ou na praça. Primeira aula gratuita.</p>

<p><strong>PERDIDO</strong> molho de chaves com chaveiro de madeira, nas imediações da Praça da Estação. Quem encontrar, deixe recado na portaria do Cinema Imperial.</p>

<p><strong>ALUGA-SE</strong> quarto mobiliado, perto do centro, com acesso a lavanderia. Contato somente por carta enviada à redação.</p>

<p class="tarja">ANÚNCIO RECUSADO PELA REDAÇÃO</p>
`
  }
];
