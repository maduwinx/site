const JORNAL = "Gazeta Mendes";
const INICIO = "2026-11-23";

const COFRE = {
  "ea170721980853c1c3c4bec3a9c76a0922db3aced6b303262695b060c2fa08e5": {
    msg: "REGISTRO D01-F LOCALIZADO: A câmera do fundo não pertencia ao Cinema Imperial. O cabo coaxial atravessava o muro até o terminal ferroviário. Verifique os registros da primeira edição onde a praça termina.",
    ir: "#m2"
  },
  "de4fe09e9d44ea5e4fa45aca0bebeaa6d8c47e2aa2ccb5b943d84bbab6ce5eec": {
    msg: "ARQUIVO CONFIDENCIAL H-17: Reserva efetuada em dinheiro vivo por um intermediário usando as iniciais R.C. O hóspede anterior deixou um caderno no fundo falso do guarda-roupa antes da chegada de Lizzie Mitchell.",
    ir: "#m3"
  },
  "b19336bbfb9d07e30db86d64f53025b1a915bc8d369c465daad6baf6153258f1": {
    msg: "TRANSCRIÇÃO DE ÁUDIO (00h12): [Estática] 'O painel voltou, mas a fita das onze e quarenta já foi substituída. Se a perícia perguntar, a queda de energia durou a madrugada inteira.'",
    ir: "#m5"
  },
  "db36a6681707e59a3d56fd1100f3421fbd813b1c74c34a84113a0fb9ab173416": {
    msg: "DOSSIÊ DE VIGILÂNCIA CONCLUÍDO: Existia uma quarta câmera ativa na madrugada do sumiço, instalada enquanto Steve Martins já estava na delegacia. Acompanhe as próximas edições."
  },
  "17a2ca7f05a9d1088fcf604ca871842480240040585f8bc997a5130d72c0c46e": {
    msg: "FICHA DE VISITAÇÃO: Lucas Andrade assinou a retirada de chaves da sala de projeção duas vezes no mês anterior ao desaparecimento."
  },
  "6044286181dd59d4813131533b16303d8bf7083c3c23e5c471e139081e9b7764": {
    msg: "CAIXA 38 — ACERVO BENNET: Negativos originais revelam que a passagem subterrânea entre o Cinema Imperial e a Estação nunca foi emparedada."
  },
  "732a3d45afcd2c04b1171ae4ebe562d4a4c8f6e8c3c2fe213a9ac398ee97fa1b": {
    msg: "PONTO DE ACESSO SUBTERRÂNEO: Entrada de serviço sob o palco da Sala 3 do Cinema Imperial. Último registro de abertura: 03h15."
  },
  "9671d56e4368fa5ef513ada55f8f6e4fc003505d666433512f398f5d44cdcbd7": {
    msg: "ARQUIVO FINAL DESBLOQUEADO: Eliza Costa nunca entrou naquele carro. Ela embarcou no trem das 04h50 com documentos fornecidos por Victor Bennet. Caso encerrado."
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
      <p>Nos bastidores, assessores comentam que a decisão de segurar o requerimento partiu diretamente do gabinete ligado ao advogado <span data-clique data-pista="Anotação de apuração: Gabriel Azevedo assinou o parecer jurídico que bloqueou a cópia das fitas.">responsável pelos contratos de vigilância do município</span>.</p>
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
      <p><strong>PROCURA-SE</strong> quem saiba ler o recado deixado na portaria da Rua Pedro Álvares, 90: <strong>Fdphud gr ixqgr</strong>. <span class="sussurro" data-pista="Recuar três passos no alfabeto revela onde o cabo termina.">Verifique no acervo</span>.</p>
      <p><strong>COMUNICADO</strong> — A Farmácia Santa Rita informa que as entregas noturnas no bairro da Estação seguem operando normalmente mediante apresentação do cartão fidelidade.</p>
    `
  },
  {
    d: 3,
    secao: "Polícia",
    hora: "08h00",
    kicker: "Depoimento",
    autor: "Lizzie Mitchell",
    titulo: "Defesa de Steve Martins apresenta comprovante de pedágio fora da cidade na noite do sumiço",
    deck: "Documento indica que veículo do suspeito passou pela praça da rodovia estadual às 23h50.",
    corpo: `
      <p>O advogado de defesa de <strong>Steve Martins</strong> protocolou hoje no fórum um recibo eletrônico de pedágio que contradiz o depoimento da testemunha que afirmou ter visto o carro parado na Rua Pedro Álvares até as 02h40.</p>
      <p>Se o horário do recibo for autenticado pela perícia, o suspeito estava a quarenta quilômetros de Mendes no exato momento em que as câmeras do edifício pararam de gravar.</p>
    `
  },
  {
    d: 6,
    secao: "Cidade",
    hora: "09h15",
    kicker: "Hospedagem",
    autor: "Redação Cidade",
    titulo: "Hotel Central passa por reforma elétrica após curto-circuito no segundo andar",
    deck: "Hóspedes foram realocados temporariamente enquanto técnicos revisam a fiação antiga do corredor.",
    corpo: `
      <p>O tradicional Hotel Central, localizado a duas quadras da redação da <strong>Gazeta Mendes</strong>, interditou parte de seu segundo pavimento após uma sobrecarga elétrica atingir os quartos de final ímpar.</p>
      <p>Segundo a gerência, apenas o <span class="sussurro" data-pista="A ficha de hóspedes daquele quarto desapareceu do livro de registro.">Quarto 17</span> permaneceu com a fechadura mecânica intacta.</p>
    `
  },
  {
    d: 10,
    secao: "Cultura",
    hora: "11h00",
    kicker: "Restauração",
    autor: "Caderno Cultura",
    titulo: "Restauradora Alice Morgan identifica cortes manuais em rolos de filme do acervo municipal",
    deck: "Especialista afirma que fotogramas específicos foram removidos com lâmina antes da catalogação.",
    corpo: `
      <p>Convidada para higienizar os arquivos fotográficos da Biblioteca Pública, a restauradora <strong>Alice Morgan</strong> comunicou à diretoria que diversos rolos referentes à reforma urbana de 1998 apresentam emendas feitas fora do padrão técnico.</p>
      <p>Em um dos negativos, ela identificou a silhueta de uma câmera industrial apontada não para a rua, mas para a janela lateral do edifício de Eliza Costa.</p>
    `
  },
  {
    d: 14,
    secao: "Polícia",
    hora: "07h30",
    kicker: "Perícia Independente",
    autor: "Lizzie Mitchell",
    titulo: "Laudo paralelo aponta existência de quatro pontos de vigilância distintos no quarteirão",
    deck: "Equipamentos utilizavam frequências diferentes e não pertenciam ao mesmo operador.",
    corpo: `
      <p>Uma análise técnica realizada sobre os cabos recolhidos na escada de serviço revelou que o sistema instalado no prédio de Eliza Costa operava em rede fechada, conectada a um receptor externo na direção da Praça da Estação.</p>
      <p>Os técnicos concluíram que havia <span data-clique data-pista="Anotação de Lizzie: Steve Martins não tinha conhecimento técnico para montar uma rede coaxial subterrânea.">pelo menos dois operadores distintos</span> monitorando o local simultaneamente.</p>
    `
  },
  {
    d: 18,
    secao: "Cidade",
    hora: "13h40",
    kicker: "Vizinhança",
    autor: "Redação Cidade",
    titulo: "Irmãos Lucas e Melissa Andrade prestam novo esclarecimento sobre movimentação no corredor",
    deck: "Moradores do quarto andar afirmam ter ouvido passos na escada de serviço após a queda de energia.",
    corpo: `
      <p>Os irmãos <strong>Lucas e Melissa Andrade</strong>, que residem no apartamento vizinho ao de Eliza Costa, compareceram novamente à delegacia nesta manhã para complementar o depoimento inicial.</p>
      <p>Melissa relatou que encontrou no capacho da porta uma chave antiga sem identificação, enquanto Lucas afirmou ter visto um funcionário usando uniforme da manutenção descer em direção ao subsolo.</p>
    `
  },
  {
    d: 23,
    secao: "Política",
    hora: "16h00",
    kicker: "Transparência",
    autor: "Redação Política",
    titulo: "Ex-editor Alex Ribeiro deixa conselho consultivo de comunicação da prefeitura",
    deck: "Saída ocorre um dia após questionamentos sobre contratos de arquivamento digital firmados em 2011.",
    corpo: `
      <p>O jornalista e ex-editor-chefe <strong>Alex Ribeiro</strong> formalizou hoje seu pedido de desligamento do conselho municipal de comunicação, alegando motivos pessoais.</p>
      <p>Nos corredores da prefeitura, comenta-se que a decisão ocorreu logo após a imprensa solicitar acesso às notas fiscais assinadas durante sua gestão.</p>
    `
  },
  {
    d: 28,
    secao: "Polícia",
    hora: "06h30",
    kicker: "Reviravolta no Inquérito",
    autor: "Lizzie Mitchell",
    titulo: "Gravação recuperada mostra atividade na câmera do subsolo enquanto Steve Martins estava preso",
    deck: "Metadados confirmam que o dispositivo foi religado manualmente quarenta horas após a detenção do suspeito.",
    corpo: `
      <p>Uma perícia complementar realizada nos servidores antigos do edifício da Rua Pedro Álvares derrubou a tese de que Steve Martins agia sozinho.</p>
      <p>O registro eletrônico prova que a quarta câmera — instalada no acesso subterrâneo que liga o quarteirão à antiga estação — foi ativada exatamente às <strong>03h15</strong> da madrugada de ontem, período em que Martins permanecia sob custódia policial.</p>
      <p>Para a equipe de investigação, o verdadeiro observador continua operando livremente em Mendes.</p>
    `
  },
  {
    d: 33,
    secao: "Cidade",
    hora: "10h00",
    kicker: "Segurança Privada",
    autor: "Redação Cidade",
    titulo: "Empresa terceirizada nega vínculo com vigilante identificado apenas como R. Castro",
    deck: "Crachá encontrado próximo à grade da estação ferroviária não consta no cadastro oficial de funcionários.",
    corpo: `
      <p>A empresa responsável pela vigia noturna dos prédios públicos do centro emitiu nota negando que o nome <strong>R. Castro</strong> faça parte de seu quadro de colaboradores.</p>
      <p>O crachá plastificado foi recolhido por moradores junto ao muro interditado da Praça da Estação.</p>
    `
  },
  {
    d: 38,
    secao: "Opinião",
    hora: "08h00",
    kicker: "Errata",
    autor: "Redação",
    titulo: "Nota de esclarecimento sobre registros publicados na edição de estreia",
    deck: "Texto publicado sem assinatura na madrugada desta quinta-feira.",
    corpo: `
      <p><em>[NOTA INSERIDA NO SISTEMA ÀS 04h12]</em> — A redação informa aos leitores que alguns documentos citados nas últimas semanas não devem ser procurados nos arquivos públicos. <span class="selecione">Nós sabemos que você está lendo cada linha deste arquivo.</span></p>
    `
  },
  {
    d: 44,
    secao: "Cultura",
    hora: "15h00",
    kicker: "Acervo Fotográfico",
    autor: "Caderno Cultura",
    titulo: "Fotógrafo Victor Bennet anuncia abertura de caixas lacradas sobre a construção do Cinema Imperial",
    deck: "Material guardado há três décadas contém plantas originais do subsolo da Praça da Estação.",
    corpo: `
      <p>O veterano fotógrafo documental <strong>Victor Bennet</strong> informou à secretaria de cultura que pretende doar ao arquivo municipal três caixas de negativos inéditos registrados durante a construção do Cinema Imperial e do antigo túnel ferroviário.</p>
      <p>Segundo Bennet, as imagens mostram estruturas subterrâneas que não constam nos mapas atuais da prefeitura.</p>
    `
  },
  {
    d: 50,
    secao: "Política",
    hora: "09h00",
    kicker: "Bastidores",
    autor: "Redação Política",
    titulo: "Câmara arquiva pedido de CPI sobre contratos de monitoramento urbano",
    deck: "Maioria alega que empresa responsável já encerrou atividades no município.",
    corpo: `
      <p>Por nove votos a quatro, o plenário da Câmara Municipal decidiu arquivar o pedido de abertura de comissão parlamentar para investigar os contratos de câmeras instalados no entorno da Praça da Estação entre 2011 e 2026.</p>
      <p>O parecer jurídico utilizado para barrar a votação foi redigido pelo escritório de <strong>Gabriel Azevedo</strong>.</p>
    `
  },
  {
    d: 56,
    secao: "Polícia",
    hora: "06h15",
    kicker: "Plantão Policial",
    autor: "Lizzie Mitchell",
    titulo: "Fotógrafo Victor Bennet é encontrado morto em seu estúdio no Centro Histórico",
    deck: "Polícia trata o caso inicialmente como mal súbito, mas caixas de negativos recentes desapareceram da bancada.",
    corpo: `
      <p>O fotógrafo documental <strong>Victor Bennet</strong>, de 68 anos, foi encontrado sem vida na madrugada desta quinta-feira dentro de seu estúdio na Rua das Acácias, dias após anunciar a doação de arquivos históricos ao acervo municipal.</p>
      <p>Segundo vizinhos, a porta do imóvel estava encostada e a luz da sala de revelação permaneceu acesa durante toda a noite. <span data-clique data-pista="Anotação de Lizzie: A caixa etiquetada como 'Subsolo Estação 1998' não estava entre os materiais recolhidos pela perícia.">Apenas três caixas metálicas foram catalogadas pela equipe</span>.</p>
      <p>No bolso do paletó do fotógrafo foi encontrado um bilhete de papel carbono com a sequência: <strong>Bennet 38</strong>.</p>
    `
  },
  {
    d: 63,
    secao: "Opinião",
    hora: "07h00",
    kicker: "Retificação",
    autor: "Conselho Editorial",
    titulo: "Nota de correção sobre reportagens publicadas anteriormente",
    deck: "Direção informa que dados técnicos divulgados sem revisão passaram por ajuste editorial.",
    corpo: `
      <p>A direção da <strong>Gazeta Mendes</strong> comunica aos assinantes que os horários mencionados nas reportagens referentes ao edifício da Rua Pedro Álvares, 90, foram revisados conforme o laudo oficial da delegacia.</p>
      <p><span class="selecione">Não procure o que não pertence a esta edição. Pare enquanto ainda é apenas leitura.</span></p>
    `
  },
  {
    d: 70,
    secao: "Cidade",
    hora: "11h20",
    kicker: "Urbanismo",
    autor: "Redação Cidade",
    titulo: "Obras de drenagem na Praça da Estação são suspensas por tempo indeterminado",
    deck: "Prefeitura cita necessidade de estudo geotécnico próximo às fundações do Cinema Imperial.",
    corpo: `
      <p>A Secretaria de Infraestrutura interrompeu nesta manhã as escavações no trecho sul da Praça da Estação após operários encontrarem uma estrutura de alvenaria antiga abaixo do nível da calçada.</p>
      <p>Moradores relataram que engenheiros ligados a <strong>R. Castro</strong> isolaram o perímetro com tapumes metálicos antes da chegada da imprensa.</p>
    `
  },
  {
    d: 77,
    secao: "Polícia",
    hora: "14h00",
    kicker: "Testemunho",
    autor: "Lizzie Mitchell",
    titulo: "Melissa Andrade entrega à redação gravação feita no corredor na noite do desaparecimento",
    deck: "Áudio registra o som de passos metálicos vindo da escada de serviço às 00h12.",
    corpo: `
      <p>A moradora <strong>Melissa Andrade</strong> procurou a redação da Gazeta Mendes nesta tarde para entregar uma cópia de segurança gravada em seu telefone celular na madrugada do sumiço de Eliza Costa.</p>
      <p>No registro, é possível ouvir o destravamento de uma porta corta-fogo no subsolo exatamente no intervalo em que o sistema da portaria estava fora do ar.</p>
    `
  },
  {
    d: 84,
    secao: "Cultura",
    hora: "16h30",
    kicker: "Acervo",
    autor: "Alice Morgan",
    titulo: "Microfilmes desaparecidos reaparecem em caixa anônima na portaria da Biblioteca",
    deck: "Rolos estavam intactos, exceto pelas edições de novembro de 1998.",
    corpo: `
      <p>A restauradora <strong>Alice Morgan</strong> confirmou que duas das três caixas de microfilmes furtadas da biblioteca pública foram devolvidas durante a madrugada.</p>
      <p>Segundo ela, um envelope pardo acompanhava o material com a inscrição datilografada: <span class="sussurro" data-pista="As coordenadas apontam para a entrada lateral do Cinema Imperial.">43°12'S 46°51'W</span>.</p>
    `
  },
  {
    d: 91,
    secao: "Política",
    hora: "10h00",
    kicker: "Investigação",
    autor: "Redação Política",
    titulo: "Documentos ligam ex-editor Alex Ribeiro à empresa que instalou câmeras no Centro",
    deck: "Registros comerciais apontam sociedade oculta encerrada meses antes do caso Eliza Costa.",
    corpo: `
      <p>Certidões obtidas pela reportagem na Junta Comercial revelam que o ex-editor-chefe <strong>Alex Ribeiro</strong> figurou como procurador da empresa responsável pela manutenção óptica dos prédios públicos da Praça da Estação.</p>
      <p>Procurado, Ribeiro não respondeu às ligações da redação.</p>
    `
  },
  {
    d: 98,
    secao: "Polícia",
    hora: "08h45",
    kicker: "Dossiê",
    autor: "Lizzie Mitchell",
    titulo: "Perito Brian Pacheco contesta cadeia de custódia dos equipamentos apreendidos no 4B",
    deck: "Segundo especialista, os cartões de memória entregues ao fórum foram formatados antes do lacre.",
    corpo: `
      <p>O perito independente <strong>Brian Pacheco</strong> apresentou hoje um parecer técnico apontando inconsistências nos números de série das microcâmeras anexadas ao processo oficial.</p>
      <p>De acordo com Pacheco, os dispositivos analisados pela polícia são modelos comerciais novos, substituídos para encobrir um sistema industrial instalado anos antes.</p>
    `
  },
  {
    d: 105,
    secao: "Cidade",
    hora: "19h00",
    kicker: "Centro Histórico",
    autor: "Redação Cidade",
    titulo: "Cinema Imperial cancela sessão noturna após queda de energia na cabine de projeção",
    deck: "Público deixou a sala 3 após cheiro de fumaça vindo do corredor técnico.",
    corpo: `
      <p>A exibição programada para a noite de hoje na sala 3 do <strong>Cinema Imperial</strong> foi interrompida pela metade devido a uma pane elétrica restrita ao segundo pavimento.</p>
      <p>Funcionários informaram que o projetista <strong>Noah Prado</strong> permaneceu no prédio após o fechamento das portas para auxiliar os técnicos na vistoria do quadro de força.</p>
    `
  },
  {
    d: 110,
    secao: "Polícia",
    hora: "06h00",
    kicker: "Urgente",
    autor: "Lizzie Mitchell",
    titulo: "Projetista Noah Prado é encontrado morto na cabine da sala 3 do Cinema Imperial",
    deck: "Porta da cabine estava trancada por fora e escada que leva ao túnel da estação foi encontrada aberta.",
    corpo: `
      <p>O projetista <strong>Noah Prado</strong>, de 34 anos, foi encontrado morto na madrugada desta sexta-feira dentro da cabine de projeção da sala 3 do <strong>Cinema Imperial</strong>.</p>
      <p>Ao lado da mesa de controle, peritos localizaram uma maleta metálica contendo fitas magnéticas rotuladas com datas referentes aos últimos seis meses de monitoramento da Rua Pedro Álvares, 90.</p>
      <p><span data-clique data-pista="Nota final de Lizzie: Noah tentou copiar as fitas antes de entregá-las à redação.">A passagem subterrânea sob a cabine estava destrancada pela primeira vez desde 1998</span>.</p>
    `
  },
  {
    d: 115,
    secao: "Polícia",
    hora: "07h30",
    kicker: "Revelação",
    autor: "Lizzie Mitchell",
    titulo: "Arquivos da maleta de Noah Prado revelam quem financiou a vinda da equipe de investigação a Mendes",
    deck: "Transferências anônimas partiram de conta vinculada a antigo diretor do arquivo municipal.",
    corpo: `
      <p>A análise dos documentos recuperados na cabine do Cinema Imperial revelou que as denúncias anônimas que trouxeram a repórter <strong>Lizzie Mitchell</strong> a Mendes foram enviadas pelo próprio <strong>Victor Bennet</strong> semanas antes de sua morte.</p>
      <p>Bennet descobriu que <strong>Eliza Costa</strong> havia fotografado acidentalmente o acesso subterrâneo da Praça da Estação durante uma pesquisa universitária e decidiu esconder a jovem fora da cidade antes que os responsáveis pelo esquema a alcançassem.</p>
    `
  },
  {
    d: 118,
    secao: "Polícia",
    hora: "09h00",
    kicker: "Desfecho",
    autor: "Redação Polícia",
    titulo: "Ministério Público pede prisão preventiva de envolvidos na adulteração de provas do caso Eliza Costa",
    deck: "Operação cumpre mandados na Secretaria de Obras, no escritório de advocacia e na empresa de vigilância.",
    corpo: `
      <p>Com base nas gravações originais entregues pela redação da <strong>Gazeta Mendes</strong>, o Ministério Público estadual denunciou hoje quatro agentes públicos e privados por fraude processual, ocultação de documentos e vigilância clandestina.</p>
      <p>O inquérito que apontava Steve Martins como único responsável foi oficialmente anulado pela Justiça.</p>
    `
  },
  {
    d: 120,
    secao: "Opinião",
    hora: "18h00",
    kicker: "Edição Especial de Encerramento",
    autor: "Lizzie Mitchell & Conselho Editorial",
    titulo: "O arquivo permanece aberto para quem soube ler nas entrelinhas",
    deck: "Quatro meses após a primeira publicação, a verdade sobre Mendes deixa as sombras.",
    corpo: `
      <p>Quando a primeira edição deste dossiê foi publicada, apenas uma versão oficial parecia existir. Foi preciso cruzar datas, decifrar recados esquecidos nos classificados e consultar registros ocultos para reconstruir o que realmente aconteceu na madrugada em que Eliza Costa desapareceu.</p>
      <p>Na manhã de hoje, uma carta sem remetente chegou à redação contendo apenas uma fotografia revelada em papel antigo: a vista da janela de um trem partindo ao amanhecer, com a frase manuscrita no verso: <span class="selecione">Eliza vive</span>.</p>
      <p>Obrigado por acompanhar cada pista até o final deste arquivo. — <strong>Gazeta Mendes</strong>.</p>
    `
  }
];