const JORNAL = "Gazeta Mendes";
const INICIO = "2026-11-23";

const COFRE = {
  // Enigma 1: "camera do fundo" (Cifra de César -3 em "Fdphud gr ixqgr")
  "07c4959c0b5d9efbb1e75c93cf215a0aa8ed423cb9ef6d4822e12cb6069a3cc8": {
    msg: "REGISTRO D01-F LOCALIZADO: A câmera do fundo não pertencia ao Cinema Imperial. O cabo coaxial atravessava o muro até o terminal ferroviário. Verifique os registros do primeiro dia onde a praça termina e a linha férrea é interrompida.",
    ir: "#m2"
  },
  // Enigma 2: "quarto 17" (Texto oculto na matéria do Cinema Imperial)
  "79919b82f9d4b5a77e1d588f8f8564830f1a8a3167f684162834b76e7f6f186d": {
    msg: "ARQUIVO CONFIDENCIAL H-17: Reserva efetuada em dinheiro vivo por um intermediário usando as iniciais R.C. O hóspede anterior deixou um caderno de anotações no fundo falso do guarda-roupa antes da chegada da repórter Lizzie Mitchell.",
    ir: "#m4"
  },
  // Enigma 3: "00h12" (Vigenère em "Zitw lq zcazk" com chave "azevedo" -> "zero e doze")
  "351f9a0d2f0f2e61d6452699235b2c2d95e824c63689575c79e0917226d35453": {
    msg: "TRANSCRIÇÃO DE ÁUDIO (00h12): [Ruído de estática] 'O painel voltou, mas a fita das onze e quarenta já foi substituída. Se a perícia perguntar, a queda de energia durou a madrugada inteira.' [Fim da gravação]",
    ir: "#m6"
  },
  // Enigma 4: "sl03 1998" (Código do cadeado/protocolo SL-03 + ano 1998)
  "23c77e320b9f6e9a9807c025d495144a064b4b657726a26d0996e4b301916516": {
    msg: "DOSSIÊ ENCERRADO — DIA 1 COMPLETO: A perícia omitiu que existia uma quarta câmera ativa na madrugada do sumiço, instalada enquanto Steve Martins já prestava depoimento na delegacia. O observador ainda está em Mendes. Aguarde a edição de amanhã."
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
      <p>A Delegacia Regional encerrou nesta madrugada a primeira etapa do inquérito sobre o desaparecimento de <strong>Eliza Costa</strong>, apontando o vizinho <strong>Steve Martins</strong> como o principal suspeito de monitorar a rotina da jovem nas semanas anteriores ao sumiço.</p>
      <figure class="foto">
        <img src="img/delegacia-entrada.jpg" alt="Fachada da delegacia regional durante a manhã">
        <figcaption>Entrada da delegacia regional onde o depoimento preliminar foi colhido · Arquivo Gazeta Mendes</figcaption>
      </figure>
      <p>Segundo o relatório policial, o veículo do investigado foi visto parado <span class="sussurro" data-pista="Testemunha afirmou que o carro ficou estacionado das 23h10 às 02h40 sem faróis.">pela madrugada</span> em frente ao edifício residencial da Rua Pedro Álvares, 90.</p>
      <p>Em nota oficial, a corporação afirmou que o suspeito <span class="selecione">não agiu sozinho na instalação dos equipamentos</span> e que os depoimentos colhidos apontam para <span data-clique data-pista="Anotação interna da redação: 3 arquivos de vídeo da escada de serviço desapareceram antes da chegada da perícia.">registros de vigilância que ainda não passaram por perícia</span>.</p>
      <table>
        <thead>
          <tr><th>Ponto de instalação</th><th>Equipamento</th><th>Situação pericial</th></tr>
        </thead>
        <tbody>
          <tr><td>Corredor do 3.º andar</td><td>Microcâmera em luminária</td><td>Lacre n.º 402</td></tr>
          <tr><td>Apartamento 4B</td><td>Sensor óptico oculto</td><td>Em perícia</td></tr>
          <tr><td>Escada de serviço</td><td>Câmera sem registro de origem</td><td>Desativada após o sumiço</td></tr>
        </tbody>
      </table>
      <blockquote>“Não há indícios de envolvimento de outras pessoas além do investigado já ouvido pela equipe.” — nota oficial da assessoria</blockquote>
      <p>Os boletins públicos citados pela nota podem ser consultados no <a href="terminal.html">Sistema de Consulta de Acervo</a>, mantido pela redação desde <strong>1998</strong>.</p>
    `
  },
  {
    d: 1,
    secao: "Cidade",
    hora: "10h30",
    kicker: "Centro Histórico",
    autor: "Redação Cidade",
    titulo: "Cinema Imperial reabre a sala 3 após oito meses fechada",
    deck: "Administração diz que a reforma trocou o sistema hidráulico e não mexeu na cabine de projeção.",
    corpo: `
      <p>A sala 3 do <strong>Cinema Imperial</strong>, na Praça da Estação, volta a receber público nesta semana depois de oito meses interditada. A interdição foi feita após um vazamento de água que atingiu o forro e parte das poltronas da plateia.</p>
      <figure class="foto">
        <img src="img/sala-3-cinema-imperial.jpg" alt="Interior da sala 3 do Cinema Imperial">
        <figcaption>Poltronas da sala 3 antes da reabertura ao público · Foto: Acervo Redação</figcaption>
      </figure>
      <p>Segundo a administração, a obra substituiu tubulações, refez o forro e trocou as poltronas por modelos de couro sintético. A cabine de projeção, que fica no segundo andar, foi apenas vistoriada. <span class="sussurro" data-pista="O relatório técnico da vistoria nunca foi anexado ao alvará municipal.">Documento arquivado sob sigilo</span>.</p>
      <p>Funcionários que pediram para não ser identificados afirmaram que a cabine permaneceu fechada à chave durante toda a reforma e que apenas uma pessoa tinha acesso ao corredor dos fundos, <span class="selecione">onde foi encontrada uma chave etiquetada como quarto 17</span>.</p>
      <p>A sessão de reabertura está marcada para sábado, às 19h, com exibição de um clássico da programação noturna do cinema.</p>
    `
  },
  {
    d: 1,
    secao: "Cidade",
    hora: "11h45",
    kicker: "Patrimônio e Transporte",
    autor: "Redação Cidade",
    titulo: "Vistoria na antiga Praça da Estação isola passagem próxima aos trilhos",
    deck: "Técnicos municipais interditaram o galpão lateral onde a antiga linha férrea é interrompida.",
    corpo: `
      <p>A Secretaria de Obras isolou nesta manhã o trecho final da <strong>Praça da Estação</strong>, exatamente onde a antiga linha férrea de Mendes é interrompida por um muro de contenção.</p>
      <figure class="foto">
        <img src="img/estacao.jpg" alt="Plataforma antiga da Praça da Estação">
        <figcaption>Área terminal da Praça da Estação, onde a linha férrea termina · Arquivo Gazeta Mendes</figcaption>
      </figure>
      <p>O local fica a menos de cem metros da saída dos fundos do Cinema Imperial. Moradores da região relatam movimentação noturna no antigo depósito ferroviário mesmo após a desativação do ramal.</p>
      <p>Questionada pela reportagem, a prefeitura informou que o isolamento é preventivo e que <span data-clique data-pista="Nota do repórter: o cadeado do portão lateral foi trocado recentemente e traz gravado o código SL-03.">nenhum equipamento municipal foi encontrado no interior do galpão</span>.</p>
    `
  },
  {
    d: 1,
    secao: "Polícia",
    hora: "14h15",
    kicker: "Investigação Paralela",
    autor: "Lizzie Mitchell",
    titulo: "Porteiro da Rua Pedro Álvares contesta horário oficial registrado no boletim",
    deck: "Funcionário afirma que o sistema eletrônico da portaria sofreu queda de energia minutos antes da meia-noite.",
    corpo: `
      <p>O porteiro noturno do edifício onde morava Eliza Costa apresentou à reportagem uma cópia do livro de ocorrências da portaria, apontando divergências entre o horário registrado pela perícia e a queda de energia ocorrida no quarteirão.</p>
      <p>De acordo com o registro manuscrito, o painel de controle das câmeras internas reiniciou às <strong>23h42</strong>. Durante trinta minutos exatos, nenhum acesso foi gravado pelo servidor local do prédio.</p>
      <p>O funcionário afirmou ainda que um homem usando crachá de manutenção esteve no saguão na tarde anterior perguntando pelo apartamento de <span class="selecione">Lucas e Melissa Andrade</span>, vizinhos do mesmo andar, e deixou um bilhete dobrado sob o balcão com a inscrição: <strong>Zitw lq zcazk</strong>.</p>
    `
  },
  {
    d: 1,
    secao: "Política",
    hora: "15h20",
    kicker: "Câmara Municipal",
    autor: "Redação Política",
    titulo: "Comissão de Segurança adia audiência sobre câmeras de monitoramento no Centro",
    deck: "Vereadores alegam falta de quórum para votar requerimento que pede acesso às imagens públicas da Praça da Estação.",
    corpo: `
      <p>A Comissão de Segurança Urbana da Câmara Municipal de Mendes adiou pela segunda vez a votação do requerimento que solicita à prefeitura a entrega integral das gravações das câmeras instaladas no entorno da Praça da Estação.</p>
      <p>O pedido havia sido protocolado após questionamentos sobre falhas de gravação justamente na madrugada do desaparecimento de Eliza Costa. Apenas três parlamentares compareceram à sessão.</p>
      <p>Nos bastidores, assessores comentam que a decisão de segurar o requerimento partiu diretamente do gabinete ligado ao advogado <span data-clique data-pista="Anotação de apuração: Gabriel Azevedo assinou o parecer jurídico que bloqueou a cópia das fitas.">responsável pelos contratos de vigilância do município</span>.</p>
    `
  },
  {
    d: 1,
    secao: "Política",
    hora: "16h05",
    kicker: "Diário Oficial",
    autor: "Redação Política",
    titulo: "Prefeitura homologa aditivo sem licitação para manutenção de arquivos públicos",
    deck: "Contrato prevê digitalização de documentos antigos do setor de obras e urbanismo.",
    corpo: `
      <p>Foi publicado na edição de hoje do Diário Oficial do Município o extrato de aditivo contratual destinado à reorganização do arquivo morto da Secretaria de Obras, situado no subsolo do prédio anexo à estação.</p>
      <p>O termo estabelece que <span class="sussurro" data-pista="O acesso ao subsolo ficou restrito a dois servidores autorizados.">apenas funcionários credenciados</span> poderão manusear as caixas referentes às plantas baixas da década de 1990.</p>
      <p>Entre os processos listados para transferência está o protocolo <strong>#1998-SL03</strong>, referente à antiga galeria subterrânea que ligava o teatro municipal à plataforma ferroviária.</p>
    `
  },
  {
    d: 1,
    secao: "Cultura",
    hora: "16h40",
    kicker: "Memória Urbana",
    autor: "Caderno Cultura",
    titulo: "Mostra no arquivo municipal reúne cartazes originais do Cinema Imperial dos anos 1970",
    deck: "Exposição resgata a história da sala de projeção fundada ao lado da antiga estação ferroviária.",
    corpo: `
      <p>O Arquivo Histórico de Mendes abriu hoje uma pequena mostra dedicada aos cinquenta anos do <strong>Cinema Imperial</strong>, destacando programas impressos, ingressos antigos e fotografias da época em que os trens ainda chegavam à praça central.</p>
      <p>Entre os itens expostos está a planta original do prédio, que mostra a existência de um corredor técnico ligando a antiga bilheteria diretamente aos fundos do terreno.</p>
      <p>A curadoria informou que parte do acervo fotográfico pertencente à família de <strong>Victor Bennet</strong> ainda está sendo catalogada e deve ser exibida nas próximas semanas, <span class="selecione">incluindo negativos datados de 1998</span>.</p>
    `
  },
  {
    d: 1,
    secao: "Cultura",
    hora: "17h15",
    kicker: "Patrimônio",
    autor: "Caderno Cultura",
    titulo: "Restauradora denuncia desaparecimento de rolos de microfilme da biblioteca pública",
    deck: "Material continha edições locais publicadas entre os anos de 1997 e 1999.",
    corpo: `
      <p>A restauradora documental <strong>Alice Morgan</strong> protocolou hoje uma notificação junto à direção da Biblioteca Municipal relatando o sumiço de três caixas de microfilmes do acervo histórico.</p>
      <p>Segundo ela, os rolos desaparecidos reuniam plantas arquitetônicas e reportagens sobre a desativação do ramal ferroviário de Mendes.</p>
      <p><span data-clique data-pista="Nota de entrevista: Alice afirmou que o livro de retiradas teve uma página arrancada.">“Alguém sabia exatamente qual gaveta abrir e qual ano levar”</span>, declarou a especialista à reportagem.</p>
    `
  },
  {
    d: 1,
    secao: "Opinião",
    hora: "07h00",
    kicker: "Classificados · Página 8",
    autor: "Setor Comercial",
    titulo: "Classificados e avisos pagos",
    deck: "Anúncios publicados conforme entregues no balcão da redação.",
    corpo: `
      <p><strong>VENDE-SE</strong> máquina de costura antiga com gabinete de madeira e pedal original. Tratar após as 18h pelo telefone da redação.</p>
      <p><strong>PROCURA-SE</strong> quem saiba ler o recado deixado na portaria da Rua Pedro Álvares, 90: <strong>Fdphud gr ixqgr</strong>. Respostas devem ser verificadas diretamente no acervo.</p>
      <p><strong>COMUNICADO</strong> — A Farmácia Santa Rita informa que as entregas noturnas no bairro da Estação seguem operando normalmente mediante apresentação do cartão fidelidade.</p>
    `
  },
  {
    d: 1,
    secao: "Opinião",
    hora: "18h00",
    kicker: "Editorial",
    autor: "Conselho Editorial",
    titulo: "O dever de registrar o que a cidade prefere esquecer",
    deck: "Quando versões oficiais se encerram rápido demais, cabe à imprensa manter as perguntas abertas.",
    corpo: `
      <p>Casos que abalam uma cidade pequena costumam gerar pressa por respostas definitivas. A conclusão apressada de um inquérito oferece conforto imediato, mas raramente esclarece as contradições deixadas pelo caminho.</p>
      <p>A <strong>Gazeta Mendes</strong> seguirá publicando cada documento, depoimento e registro técnico obtido por sua equipe, mantendo aberto o arquivo público para que cada leitor tire suas próprias conclusões.</p>
    `
  }
];