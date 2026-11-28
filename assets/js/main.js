/* ============================================================
   Comportamientos del sitio. Cada bloque es independiente:
   si uno no aplica a la página, simplemente no hace nada.
   El contenido sigue siendo legible si este archivo no carga.
   ============================================================ */
(function () {
  'use strict';

  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var reducir = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var main = $('.main-content');

  /* ---------- 1. Menú superior ---------- */
  function iniciarMenu() {
    var toggle = $('.nav-toggle');
    var nav = $('.topnav');
    var grupo = $('.nav-grupo');
    var boton = $('.nav-boton');

    if (toggle && nav) {
      toggle.addEventListener('click', function () {
        var abierto = nav.classList.toggle('abierto');
        toggle.setAttribute('aria-expanded', abierto ? 'true' : 'false');
      });
    }
    if (grupo && boton) {
      boton.addEventListener('click', function (e) {
        e.stopPropagation();
        var abierto = grupo.classList.toggle('abierto');
        boton.setAttribute('aria-expanded', abierto ? 'true' : 'false');
      });
      document.addEventListener('click', function (e) {
        if (!grupo.contains(e.target)) {
          grupo.classList.remove('abierto');
          boton.setAttribute('aria-expanded', 'false');
        }
      });
    }
    document.addEventListener('keydown', function (e) {
      if (e.key !== 'Escape') { return; }
      if (grupo) { grupo.classList.remove('abierto'); }
      if (nav) { nav.classList.remove('abierto'); }
      if (toggle) { toggle.setAttribute('aria-expanded', 'false'); }
    });
  }

  /* ---------- 2. Tablas: se deslizan en pantallas pequeñas ---------- */
  function envolverTablas() {
    if (!main) { return; }
    $$('table', main).forEach(function (t) {
      if (t.parentNode.classList.contains('tabla-scroll')) { return; }
      var caja = document.createElement('div');
      caja.className = 'tabla-scroll';
      t.parentNode.insertBefore(caja, t);
      caja.appendChild(t);
    });
  }

  /* ---------- 3. Botón "Copiar" en los bloques de comandos ---------- */
  function copiarTexto(texto) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(texto);
    }
    return new Promise(function (ok, fallo) {
      var area = document.createElement('textarea');
      area.value = texto;
      area.style.position = 'fixed';
      area.style.opacity = '0';
      document.body.appendChild(area);
      area.select();
      try { document.execCommand('copy') ? ok() : fallo(); } catch (e) { fallo(e); }
      document.body.removeChild(area);
    });
  }

  function botonesCopiar() {
    if (!main) { return; }
    $$('pre', main).forEach(function (pre) {
      if (pre.parentNode.classList.contains('codigo')) { return; }
      var caja = document.createElement('div');
      caja.className = 'codigo';
      pre.parentNode.insertBefore(caja, pre);
      caja.appendChild(pre);
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'copiar';
      b.textContent = 'Copiar';
      b.addEventListener('click', function () {
        copiarTexto(pre.innerText.replace(/\s+$/, '')).then(function () {
          b.textContent = '¡Copiado!';
          b.classList.add('listo');
          setTimeout(function () { b.textContent = 'Copiar'; b.classList.remove('listo'); }, 1600);
        }, function () {
          b.textContent = 'No se pudo';
          setTimeout(function () { b.textContent = 'Copiar'; }, 1600);
        });
      });
      caja.appendChild(b);
    });
  }

  /* ---------- 4. Capturas que se amplían al hacer clic ---------- */
  function visorImagenes() {
    if (!main) { return; }
    var imagenes = $$('img', main);
    if (!imagenes.length) { return; }

    var visor = document.createElement('div');
    visor.className = 'visor';
    visor.hidden = true;
    visor.innerHTML = '<button type="button" class="visor-cerrar" aria-label="Cerrar">×</button>' +
      '<img alt=""><p class="visor-pie"></p>';
    document.body.appendChild(visor);
    var img = $('img', visor);
    var pie = $('.visor-pie', visor);
    var cerrar = $('.visor-cerrar', visor);
    var origen = null;

    function abrir(fuente) {
      origen = fuente;
      img.src = fuente.currentSrc || fuente.src;
      img.alt = fuente.alt || '';
      pie.textContent = fuente.alt || '';
      visor.hidden = false;
      document.body.classList.add('visor-abierto');
      cerrar.focus();
    }
    function cerrarVisor() {
      visor.hidden = true;
      document.body.classList.remove('visor-abierto');
      img.removeAttribute('src');
      if (origen) { origen.focus(); }
    }

    imagenes.forEach(function (im) {
      im.classList.add('ampliable');
      im.tabIndex = 0;
      im.setAttribute('role', 'button');
      im.setAttribute('title', 'Clic para ampliar');
      im.addEventListener('click', function () { abrir(im); });
      im.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); abrir(im); }
      });
    });
    visor.addEventListener('click', function (e) { if (e.target !== img) { cerrarVisor(); } });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !visor.hidden) { cerrarVisor(); }
    });
  }

  /* ---------- 5. Páginas de sprint: pasos plegables + menú lateral ---------- */
  function paginaSprint() {
    var capa = $('.sprint-layout');
    if (!capa || !main) { return; }

    // 5.1 Cada "### Paso" se convierte en una sección que se abre y se cierra
    $$('h3', main).forEach(function (h) {
      if (h.parentNode !== main) { return; }
      var det = document.createElement('details');
      det.className = 'paso';
      if (h.id) { det.id = h.id; }
      var sum = document.createElement('summary');
      sum.textContent = h.textContent;
      var cuerpo = document.createElement('div');
      cuerpo.className = 'paso-cuerpo';

      var hijos = [];
      var sig = h.nextElementSibling;
      while (sig && !/^(H1|H2|H3)$/.test(sig.tagName) && sig.tagName !== 'HR') {
        hijos.push(sig);
        sig = sig.nextElementSibling;
      }
      main.insertBefore(det, h);
      det.appendChild(sum);
      det.appendChild(cuerpo);
      hijos.forEach(function (n) { cuerpo.appendChild(n); });
      main.removeChild(h);
    });

    // 5.2 El primer paso de cada apartado arranca abierto
    var esperando = false;
    Array.prototype.forEach.call(main.children, function (el) {
      if (el.tagName === 'H2') { esperando = true; }
      else if (el.classList.contains('paso') && esperando) { el.open = true; esperando = false; }
    });

    // 5.3 Índice automático a partir de los títulos
    var entradas = [];
    Array.prototype.forEach.call(main.children, function (el) {
      if (el.tagName === 'H2' && el.id) {
        entradas.push({ el: el, id: el.id, texto: el.textContent, nivel: 2 });
      } else if (el.classList.contains('paso') && el.id) {
        entradas.push({ el: el, id: el.id, texto: $('summary', el).textContent, nivel: 3 });
      }
    });
    var indice = $('#indice');
    if (indice) {
      entradas.forEach(function (en) {
        var a = document.createElement('a');
        a.href = '#' + en.id;
        a.className = 'ind-' + en.nivel;
        a.textContent = en.texto;
        a.title = en.texto;
        en.link = a;
        indice.appendChild(a);
      });
      if (!entradas.length) { indice.parentNode.style.display = 'none'; }
    }

    // 5.4 Ir a una sección abre lo que esté cerrado
    function irA(id, suave) {
      var destino = document.getElementById(id);
      if (!destino) { return; }
      var det = destino.tagName === 'DETAILS' ? destino : destino.closest('details');
      if (det) { det.open = true; }
      destino.scrollIntoView({ behavior: (suave && !reducir) ? 'smooth' : 'auto', block: 'start' });
    }
    if (indice) {
      indice.addEventListener('click', function (e) {
        var a = e.target.closest('a');
        if (!a) { return; }
        e.preventDefault();
        var id = a.getAttribute('href').slice(1);
        irA(id, true);
        if (history.replaceState) { history.replaceState(null, '', '#' + id); }
        cerrarLateral();
      });
    }
    function desdeHash() {
      var id = decodeURIComponent(location.hash.slice(1));
      if (id) { irA(id, false); }
    }
    window.addEventListener('hashchange', desdeHash);
    if (location.hash) { setTimeout(desdeHash, 50); }

    // 5.5 Resalta en el índice la sección donde vas
    var lateral = $('#lateral');
    var pendiente = false;
    function marcarActivo() {
      pendiente = false;
      var actual = null;
      entradas.forEach(function (en) {
        if (en.el.getBoundingClientRect().top <= 140) { actual = en; }
      });
      entradas.forEach(function (en) { if (en.link) { en.link.classList.toggle('activo', en === actual); } });
      if (actual && actual.link && lateral && lateral.scrollHeight > lateral.clientHeight) {
        var l = actual.link;
        if (l.offsetTop < lateral.scrollTop + 60 || l.offsetTop > lateral.scrollTop + lateral.clientHeight - 60) {
          lateral.scrollTop = l.offsetTop - lateral.clientHeight / 3;
        }
      }
    }
    window.addEventListener('scroll', function () {
      if (!pendiente) { pendiente = true; requestAnimationFrame(marcarActivo); }
    }, { passive: true });
    marcarActivo();

    // 5.6 Barra "Abrir todo / Cerrar todo"
    var pasos = $$('details.paso', main);
    if (pasos.length) {
      var barra = document.createElement('div');
      barra.className = 'barra-pasos';
      barra.innerHTML = '<button type="button" data-a="abrir">Abrir todo</button>' +
        '<button type="button" data-a="cerrar">Cerrar todo</button>';
      barra.addEventListener('click', function (e) {
        var b = e.target.closest('button');
        if (!b) { return; }
        pasos.forEach(function (d) { d.open = b.getAttribute('data-a') === 'abrir'; });
      });
      var volver = $('a.volver', main);
      if (volver && volver.parentNode.parentNode === main) { volver.parentNode.insertAdjacentElement('afterend', barra); }
      else { main.insertBefore(barra, main.children[1] || null); }
      window.addEventListener('beforeprint', function () { pasos.forEach(function (d) { d.open = true; }); });
    }

    // 5.7 En el celular el menú lateral es un panel que se abre con un botón
    var boton = $('#lateral-boton');
    var fondo = $('#lateral-fondo');
    function cerrarLateral() {
      if (lateral) { lateral.classList.remove('abierta'); }
      if (fondo) { fondo.classList.remove('visible'); }
      if (boton) { boton.setAttribute('aria-expanded', 'false'); }
    }
    if (boton && lateral) {
      boton.addEventListener('click', function () {
        var abierta = lateral.classList.toggle('abierta');
        if (fondo) { fondo.classList.toggle('visible', abierta); }
        boton.setAttribute('aria-expanded', abierta ? 'true' : 'false');
      });
    }
    if (fondo) { fondo.addEventListener('click', cerrarLateral); }
  }

  /* ---------- 6. Comparador del instalador: pestañas por distribución ---------- */
  function comparador() {
    if (!document.body.classList.contains('pag-instalador') || !main) { return; }
    var tabla = $('table', main);
    if (!tabla || !tabla.rows.length || tabla.rows[0].cells.length < 3) { return; }
    var cab = tabla.rows[0].cells;
    var caja = tabla.closest('.tabla-scroll') || tabla;

    var pestanas = document.createElement('div');
    pestanas.className = 'pestanas';
    pestanas.setAttribute('role', 'tablist');
    var botones = [];

    function mostrar(col) {
      Array.prototype.forEach.call(tabla.rows, function (fila) {
        Array.prototype.forEach.call(fila.cells, function (celda, i) {
          celda.style.display = (col === 0 || i === 0 || i === col) ? '' : 'none';
        });
      });
      tabla.classList.toggle('modo-uno', col !== 0);
      botones.forEach(function (b, i) {
        b.classList.toggle('activa', i === col);
        b.setAttribute('aria-selected', i === col ? 'true' : 'false');
      });
    }
    ['Todas'].concat(Array.prototype.slice.call(cab, 1).map(function (c) { return c.textContent.trim(); }))
      .forEach(function (nombre, i) {
        var b = document.createElement('button');
        b.type = 'button';
        b.setAttribute('role', 'tab');
        b.textContent = nombre;
        b.addEventListener('click', function () { mostrar(i); });
        botones.push(b);
        pestanas.appendChild(b);
      });
    caja.parentNode.insertBefore(pestanas, caja);
    mostrar(0);
  }

  /* ---------- 7. Terminal animada de la portada ---------- */
  function terminal() {
    var cuerpo = $('#terminal-cuerpo');
    var datos = $('#terminal-datos');
    if (!cuerpo || !datos) { return; }
    var guion;
    try { guion = JSON.parse(datos.textContent); } catch (e) { return; }
    if (!guion || !guion.length) { return; }

    function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
    function esperar(ms) { return new Promise(function (r) { setTimeout(r, ms); }); }
    function lineaPrompt(p) { return '<span class="t-prompt">' + esc(p) + '</span> '; }

    var texto = '';
    function pintar(extra, cursor) {
      cuerpo.innerHTML = texto + extra + (cursor === false ? '' : '<span class="cursor"></span>');
      cuerpo.scrollTop = cuerpo.scrollHeight;
    }

    if (reducir) {                       // sin animación: se muestra el guion completo y quieto
      guion.slice(0, 3).forEach(function (p) {
        texto += lineaPrompt(p.prompt) + '<span class="t-cmd">' + esc(p.cmd) + '</span>\n';
        (p.salida || []).forEach(function (l) { texto += '<span class="t-out">' + esc(l) + '</span>\n'; });
      });
      pintar('', false);
      return;
    }

    async function visible() { while (document.hidden) { await esperar(500); } }

    async function bucle() {
      for (;;) {
        for (var i = 0; i < guion.length; i++) {
          var paso = guion[i];
          var pr = lineaPrompt(paso.prompt);
          var escrito = '';
          for (var c = 0; c < paso.cmd.length; c++) {
            await visible();
            escrito += paso.cmd.charAt(c);
            pintar(pr + '<span class="t-cmd">' + esc(escrito) + '</span>');
            await esperar(35 + Math.random() * 55);
          }
          texto += pr + '<span class="t-cmd">' + esc(paso.cmd) + '</span>\n';
          pintar('');
          await esperar(380);
          var salida = paso.salida || [];
          for (var k = 0; k < salida.length; k++) {
            await visible();
            texto += '<span class="t-out">' + esc(salida[k]) + '</span>\n';
            pintar('');
            await esperar(130);
          }
          await esperar(1300);
        }
        await esperar(1400);
        texto = '';
        pintar('');
      }
    }
    bucle();
  }

  /* ---------- 8. Cuenta regresiva a la próxima entrega ---------- */
  function cuentaRegresiva() {
    var tarjeta = $('.ruta-cuenta');
    var caja = $('#cuenta');
    if (!tarjeta || !caja) { return; }
    var objetivo = new Date(tarjeta.getAttribute('data-objetivo')).getTime();
    if (isNaN(objetivo)) { return; }

    function dos(n) { return n < 10 ? '0' + n : String(n); }
    function celda(valor, unidad) { return '<div><b>' + valor + '</b><span>' + unidad + '</span></div>'; }

    function tic() {
      var ms = objetivo - Date.now();
      if (ms <= 0) {
        caja.innerHTML = '<p class="cuenta-fin">El plazo ya se cumplió</p>';
        return false;
      }
      var d = Math.floor(ms / 864e5);
      var h = Math.floor((ms % 864e5) / 36e5);
      var m = Math.floor((ms % 36e5) / 6e4);
      var s = Math.floor((ms % 6e4) / 1e3);
      caja.innerHTML = celda(d, d === 1 ? 'día' : 'días') + celda(dos(h), 'horas') + celda(dos(m), 'min') + celda(dos(s), 'seg');
      return true;
    }
    if (tic()) {
      var reloj = setInterval(function () { if (!tic()) { clearInterval(reloj); } }, 1000);
    }
  }

  /* ---------- 9. Aparición suave al bajar por la página ---------- */
  function aparecer() {
    if (reducir || typeof window.IntersectionObserver !== 'function' || !main) { return; }
    var cosas = $$('h2, .sprint-card, .tarjeta, .tabla-scroll, .hito, .ruta-tarjeta, .paso, .barra-pasos', main);
    var obs = new IntersectionObserver(function (lista) {
      lista.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
      });
    }, { threshold: 0.08 });
    cosas.forEach(function (c) { c.classList.add('reveal'); obs.observe(c); });
  }

  function iniciar() {
    iniciarMenu();
    envolverTablas();
    botonesCopiar();
    paginaSprint();
    comparador();
    visorImagenes();
    terminal();
    cuentaRegresiva();
    aparecer();
  }

  if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', iniciar); }
  else { iniciar(); }
})();
