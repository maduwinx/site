(function () {
    "use strict";
    const DEV = /(^|[?&])(dev|teste)(&|=|$)/.test(location.search);
    const $ = (s, r = document) => r.querySelector(s);
    const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
    const INI = new Date(INICIO + "T00:00:00");
    const CHAVE_LIDAS = "dossie_lidas";
  
    function norm(s) {
      return String(s).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    }
  
    function cesar(texto, n) {
      const k = ((Number(n) % 26) + 26) % 26;
      return String(texto).replace(/[a-z]/gi, c => {
        const b = c <= "Z" ? 65 : 97;
        return String.fromCharCode((c.charCodeAt(0) - b + k) % 26 + b);
      });
    }
  
    function vigenere(texto, chave, desfaz) {
      const k = norm(chave).replace(/[^a-z]/g, "");
      if (!k) return String(texto);
      let j = 0;
      const sinal = desfaz ? -1 : 1;
      return String(texto).replace(/[a-z]/gi, c => {
        const b = c <= "Z" ? 65 : 97;
        const s = (k.charCodeAt(j++ % k.length) - 97) * sinal;
        return String.fromCharCode((c.charCodeAt(0) - b + s + 26) % 26 + b);
      });
    }
  
    function b64(texto) {
      const bytes = Array.from(new TextEncoder().encode(String(texto)), b => String.fromCharCode(b));
      return btoa(bytes.join(""));
    }
  
    function bin(texto) {
      return Array.from(new TextEncoder().encode(String(texto)), b => b.toString(2).padStart(8, "0")).join(" ");
    }
  
    async function sha(texto) {
      const dados = new TextEncoder().encode(norm(texto).replace(/[^a-z0-9]/g, ""));
      const h = await crypto.subtle.digest("SHA-256", dados);
      return Array.from(new Uint8Array(h), b => b.toString(16).padStart(2, "0")).join("");
    }
  
    async function cofre(texto) {
      if (typeof COFRE === "undefined") return null;
      const h = await sha(texto);
      return Object.prototype.hasOwnProperty.call(COFRE, h) ? COFRE[h] : null;
    }
  
    window.ARG = { norm, cesar, vigenere, b64, bin, sha, cofre };
  
    function el(tag, cls, txt) {
      const e = document.createElement(tag);
      if (cls) e.className = cls;
      if (txt != null) e.textContent = txt;
      return e;
    }
  
    function hoje() {
      const n = new Date();
      return new Date(n.getFullYear(), n.getMonth(), n.getDate());
    }
  
    function diaAtual() {
      return DEV ? Infinity : Math.round((hoje() - INI) / 864e5) + 1;
    }
  
    function liberado(d) {
      return d.d <= diaAtual();
    }
  
    const dataLonga = d => d.toLocaleDateString("pt-BR", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
  
    function dataEdicao(d) {
      const dt = new Date(INI.getTime() + (d - 1) * 864e5);
      return dt.toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit", year: "numeric" });
    }
  
    function hojeTopo() {
      const h = $("#hoje");
      if (!h) return;
      h.textContent = INI > hoje() ? "Publicação inicia em " + dataLonga(INI) : dataLonga(hoje());
    }
  
    function lidas() {
      try {
        return JSON.parse(localStorage.getItem(CHAVE_LIDAS)) || [];
      } catch (e) {
        return [];
      }
    }
  
    function renderLidas() {
      const ul = $("#lidas");
      if (!ul) return;
      ul.replaceChildren();
      lidas().forEach(i => {
        const x = DIAS[i];
        if (!x) return;
        const li = el("li");
        const a = el("a", null, x.titulo);
        a.href = "#m" + i;
        li.appendChild(a);
        ul.appendChild(li);
      });
    }
  
    function marcaLida(i) {
      const l = lidas();
      if (!l.includes(i)) {
        l.push(i);
        try {
          localStorage.setItem(CHAVE_LIDAS, JSON.stringify(l));
        } catch (e) {}
      }
      renderLidas();
    }
  
    function ativaCliques(raiz) {
      $$("[data-clique]", raiz).forEach(e => {
        if (e.dataset.ativo) return;
        e.dataset.ativo = "1";
        e.tabIndex = 0;
        e.setAttribute("role", "button");
        e.addEventListener("click", () => e.classList.toggle("revelado"));
        e.addEventListener("keydown", ev => {
          if (ev.key === "Enter" || ev.key === " ") {
            ev.preventDefault();
            e.click();
          }
        });
      });
    }
  
    function mostraAviso(txt) {
      const mat = $("#materia");
      if (!mat) return;
      mat.replaceChildren(el("p", "aviso", txt));
    }
  
    function mostra(i) {
      const mat = $("#materia");
      if (!mat) return;
      const x = DIAS[i];
      if (!x || !liberado(x)) return mostraAviso("Esta matéria ainda não foi publicada.");
      mat.replaceChildren(
        el("p", "kicker", x.kicker),
        el("h1", "titulo", x.titulo),
        el("p", "deck", x.deck),
        el("p", "meta", x.autor + " · " + dataEdicao(x.d) + " às " + x.hora + " · " + x.secao)
      );
      const corpo = el("div", "corpo");
      corpo.innerHTML = x.corpo;
      mat.appendChild(corpo);
      ativaCliques(corpo);
      marcaLida(i);
    }
  
    function mostraSecao(sec) {
      const mat = $("#materia");
      if (!mat) return;
      const alvo = norm(sec);
      mat.replaceChildren(el("h1", "titulo", sec));
      const ul = el("ul", "secao");
      DIAS.forEach((x, i) => {
        if (norm(x.secao) === alvo && liberado(x)) {
          const li = el("li");
          const a = el("a", null, x.titulo);
          a.href = "#m" + i;
          li.appendChild(a);
          ul.appendChild(li);
        }
      });
      if (!ul.children.length) ul.appendChild(el("li", null, "Nenhuma matéria publicada nesta seção."));
      mat.appendChild(ul);
    }
  
    function rota() {
      let h = "";
      try {
        h = decodeURIComponent(location.hash.slice(1));
      } catch (e) {
        h = "";
      }
      let m;
      if ((m = /^m(\d+)$/.exec(h))) return mostra(+m[1]);
      if ((m = /^d(\d+)$/.exec(h))) {
        const i = DIAS.findIndex(x => x.d === +m[1]);
        if (i >= 0) mostra(i);
        return;
      }
      if (h.indexOf("s-") === 0) return mostraSecao(h.slice(2));
      const visiveis = DIAS.filter(liberado);
      if (!visiveis.length) return mostraAviso("Nenhuma matéria publicada ainda.");
      const ultimo = Math.max(...visiveis.map(x => x.d));
      mostra(DIAS.findIndex(x => x.d === ultimo && liberado(x)));
    }
  
    function terminal() {
      const tela = $("#tela");
      const linha = $("#linha");
      if (!tela || !linha) return;
  
      function imprime(t, cls) {
        tela.appendChild(el("div", "saida" + (cls ? " " + cls : ""), t));
        tela.scrollTop = tela.scrollHeight;
      }
  
      function linhasDoCorpo(x) {
        const doc = new DOMParser().parseFromString(String(x.corpo), "text/html");
        return (doc.body.textContent || "").split("\n").map(s => s.trim()).filter(Boolean);
      }
  
      const cmds = {
        ajuda() {
          return ["Comandos: ajuda · ls · cat <registro> · cesar <n> <texto> · vigenere <chave> <texto> · limpar · ou digite o código do registro."];
        },
        ls() {
          return DIAS.filter(liberado).map(x => "Registro " + dataEdicao(x.d) + " · " + x.secao + " · " + x.titulo);
        },
        cat(a) {
          const n = parseInt(a, 10);
          const x = DIAS.find(y => y.d === n);
          if (!x || !liberado(x)) return ["Registro não encontrado."];
          return [x.titulo].concat(linhasDoCorpo(x));
        },
        cesar(a) {
          const p = a.split(/\s+/);
          return [cesar(p.slice(1).join(" "), Number(p[0]) || 0)];
        },
        vigenere(a) {
          const p = a.split(/\s+/);
          return [vigenere(p.slice(1).join(" "), p[0] || "", true)];
        },
        limpar() {
          tela.replaceChildren();
          return [];
        }
      };
  
      async function processar(v) {
        imprime("> " + v, "eco");
        const partes = v.split(/\s+/);
        let cmd = partes[0].toLowerCase();
        if (cmd === "help") cmd = "ajuda";
        const arg = partes.slice(1).join(" ");
  
        if (Object.prototype.hasOwnProperty.call(cmds, cmd)) {
          cmds[cmd](arg).forEach(t => imprime(t));
          return;
        }
  
        const termoCofre = cmd === "cofre" ? arg : v;
        try {
          const r = await cofre(termoCofre);
          if (!r) return imprime("Nenhum registro localizado no acervo para este código.");
          imprime(r.msg);
          if (r.ir) {
            const destino = r.ir.startsWith("#") ? "index.html" + (DEV ? "?dev" : "") + r.ir : r.ir;
            imprime("Abrindo documento vinculado...");
            setTimeout(() => { location.href = destino; }, 2200);
          }
        } catch (err) {
          imprime("Erro técnico ao consultar criptografia.");
        }
      }
  
      const form = linha.closest("form");
      if (form) {
        form.addEventListener("submit", e => {
          e.preventDefault();
          const v = linha.value.trim();
          linha.value = "";
          if (v) processar(v);
        });
      } else {
        linha.addEventListener("keydown", e => {
          if (e.key !== "Enter") return;
          e.preventDefault();
          const v = linha.value.trim();
          linha.value = "";
          if (v) processar(v);
        });
      }
  
      imprime("Sistema de consulta do acervo da Gazeta Mendes. Insira o código ou digite ajuda.");
    }
  
    function init() {
      if (DEV) document.documentElement.setAttribute("data-modo", "dev");
      $$(".nome").forEach(e => { e.textContent = JORNAL; });
      hojeTopo();
      renderLidas();
      rota();
      terminal();
      window.addEventListener("hashchange", rota);
    }
  
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", init);
    } else {
      init();
    }
  })();