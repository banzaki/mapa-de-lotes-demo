import"./base-CBQVKg9E.js";import{a as e,f as t,g as n,h as r,l as i,o as a,r as o,s,t as c,u as l}from"./icons-DeDZBwot.js";import{a as u,c as d,d as f,f as p,h as m,i as h,l as g,m as _,o as v,p as y,s as b,t as x,u as S}from"./data-Dfek1YTL.js";var C=x(location.search),w=`mapa-de-lotes:admin-session`,T=new URLSearchParams(location.search).has(`empreendimento`)?`?empreendimento=${encodeURIComponent(C.id)}`:``,E=document.querySelector(`#app`),D=new Map(C.lots.map(e=>[e.id,e])),O=u(`local`),k=u(`session`),A=S(O,C.id),j=h(C.lots,A),M=``,N=``,P=``;document.title=`Painel, ${C.shortName}, Mapa de Lotes`;var F=`<p class="demo-banner" role="note"><strong>Demonstração.</strong> As alterações ficam guardadas só neste navegador. O painel de um cliente real usa login próprio e vale para todos os aparelhos.</p>`;function I(t=``){E.innerHTML=`
    <main class="login">
      <form class="login-card" id="login" novalidate>
        <span class="lock">${c.lock}</span>
        <p class="kicker">${e(n.productName)}, ${e(C.shortName)}</p>
        <h1>Painel da loteadora</h1>
        <label for="pin">PIN de acesso</label>
        <input id="pin" name="pin" type="password" inputmode="numeric" autocomplete="off" maxlength="12"
          aria-describedby="pin-help${t?` pin-error`:``}" ${t?`aria-invalid="true"`:``} />
        ${t?`<p class="error" id="pin-error" role="alert">${t}</p>`:``}
        <button class="btn btn--primary btn--block" type="submit">Entrar</button>
        <p class="demo-hint" id="pin-help"><strong>Demonstração:</strong> o PIN é <code>${n.demoAdminPin}</code>. Ele serve só para mostrar o painel; não é uma proteção de verdade.</p>
        <a class="back" href="../mapa/${T}">${c.map} Ver o mapa do comprador</a>
      </form>
    </main>`;let r=E.querySelector(`#pin`);r.focus(),E.querySelector(`#login`).addEventListener(`submit`,e=>{e.preventDefault(),r.value.trim()===n.demoAdminPin?(k.setItem(w,`1`),K()):I(`PIN incorreto. Tente de novo.`)})}var L=e=>A.lots[e.id]!==void 0;function R(){let e=M.toUpperCase().replace(/[^A-Z0-9]/g,``);return j.filter(t=>(!N||t.block===N)&&(!P||t.status===P)&&(!e||t.id.replace(`-`,``).includes(e)||String(t.number)===e))}function z(){let e=m(j),t=t=>e.total?t/e.total*100:0,n=(t,n)=>`
    <div class="tile tile--${t}">
      <span class="tile-label"><span class="dot" aria-hidden="true"></span>${o[t]}s</span>
      <strong class="tile-count">${e.count[t]}</strong>
      <span class="tile-value"><span>${n}</span> <b>${i(e.value[t])}</b></span>
    </div>`,r=Object.keys(A.lots).length;return`
    <div class="tiles">
      ${n(`livre`,`VGV disponível`)}
      ${n(`reservado`,`Em negociação`)}
      ${n(`vendido`,`VGV vendido`)}
      <div class="tile tile--total">
        <span class="tile-label">Total do loteamento</span>
        <strong class="tile-count">${e.total} <small>lotes</small></strong>
        <span class="tile-value"><span>VGV total</span> <b>${i(e.totalValue)}</b></span>
      </div>
    </div>
    <div class="progress" role="img" aria-label="${e.count.vendido} vendidos, ${e.count.reservado} reservados e ${e.count.livre} livres, de ${e.total} lotes">
      <span class="progress--vendido" style="width:${t(e.count.vendido)}%"></span>
      <span class="progress--reservado" style="width:${t(e.count.reservado)}%"></span>
      <span class="progress--livre" style="width:${t(e.count.livre)}%"></span>
    </div>
    <p class="saved">${r===0?`Nenhuma alteração: os dados são os do arquivo original.`:`${r} ${r===1?`lote alterado`:`lotes alterados`}, salvo neste navegador em ${l(A.updatedAt??``)}`}</p>`}function B(e){return`
    <tr role="row" data-lot="${e.id}" class="row row--${e.status}${L(e)?` is-changed`:``}">
      <th scope="row" role="rowheader">
        <span class="lot-id">${e.id}</span>
        <span class="lot-sub">Quadra ${e.block}, Lote ${e.number}${L(e)?`, <em>alterado</em>`:``}</span>
      </th>
      <td role="cell" class="cell-area">${a(e.area)}</td>
      <td role="cell" class="cell-status">
        <div class="seg" role="group" aria-label="Situação do lote ${e.id}">
          ${_.map(t=>`<button type="button" class="seg-btn seg-btn--${t}" data-status="${t}" aria-pressed="${e.status===t}">${o[t]}</button>`).join(``)}
        </div>
      </td>
      <td role="cell" class="cell-price">
        <label class="price-input"><span>R$</span>
          <input type="text" inputmode="numeric" autocomplete="off" value="${t(e.price)}" data-price aria-label="Preço do lote ${e.id}, em reais" />
        </label>
      </td>
    </tr>`}function V(){let e=R();E.querySelector(`#rows`).innerHTML=e.map(B).join(``)||`<tr role="row"><td role="cell" colspan="4" class="empty">Nenhum lote com esse filtro.</td></tr>`,E.querySelector(`#row-count`).textContent=`${e.length} de ${j.length} lotes`}function H(){E.querySelector(`#stats`).innerHTML=z(),E.querySelector(`#reset`).disabled=Object.keys(A.lots).length===0}var U=0;function W(e){let t=E.querySelector(`#toast`);t.textContent=e,t.classList.add(`is-visible`),clearTimeout(U),U=window.setTimeout(()=>t.classList.remove(`is-visible`),2800)}function G(e=A){A=e,j=h(C.lots,A),f(O,C.id,A)||W(`Não foi possível salvar neste navegador.`),H()}function K(){let i=C.blocks.map(e=>e.id);E.innerHTML=`
    <header class="admin-top">
      <div>
        <p class="kicker">${e(n.productName)}, painel <span class="demo-tag">Demonstração</span></p>
        <h1>${e(C.name)}</h1>
      </div>
      <nav class="admin-nav" aria-label="Painel">
        <a class="btn btn--ghost" href="../mapa/${T}" target="_blank" rel="noopener">${c.map}<span>Ver mapa</span></a>
        <button type="button" class="btn btn--ghost" id="logout">Sair</button>
      </nav>
    </header>
    <main class="admin-main">
      ${C.fictional?F:``}
      <section id="stats" aria-label="Resumo de vendas"></section>

      <section class="toolbar" aria-label="Filtros e ações">
        <div class="toolbar-filters">
          <label class="tf"><span>Buscar lote</span>
            <input type="search" id="search" placeholder="Ex.: B-10" autocomplete="off" />
          </label>
          <label class="tf"><span>Quadra</span>
            <select id="block"><option value="">Todas</option>${i.map(e=>`<option value="${e}">Quadra ${e}</option>`).join(``)}</select>
          </label>
          <label class="tf"><span>Situação</span>
            <select id="status"><option value="">Todas</option>${_.map(e=>`<option value="${e}">${o[e]}</option>`).join(``)}</select>
          </label>
        </div>
        <div class="toolbar-actions">
          <button type="button" class="btn btn--ghost" id="export">${c.download}<span>Exportar JSON</span></button>
          <button type="button" class="btn btn--ghost" id="import">${c.upload}<span>Importar JSON</span></button>
          <input type="file" id="import-file" accept="application/json,.json" hidden />
          <button type="button" class="btn btn--ghost btn--danger" id="reset">${c.reset}<span>Restaurar demonstração</span></button>
        </div>
      </section>

      <p class="row-count" id="row-count" aria-live="polite"></p>
      <div class="table-wrap">
        <table class="lots-table" role="table">
          <caption class="sr-only">Lotes do ${e(C.name)}: situação e preço</caption>
          <thead role="rowgroup"><tr role="row"><th scope="col" role="columnheader">Lote</th><th scope="col" role="columnheader">Área</th><th scope="col" role="columnheader">Situação</th><th scope="col" role="columnheader">Preço</th></tr></thead>
          <tbody id="rows" role="rowgroup"></tbody>
        </table>
      </div>
    </main>
    <dialog class="confirm" id="confirm" aria-labelledby="confirm-title">
      <h2 id="confirm-title">Restaurar a demonstração?</h2>
      <p>Todas as situações e preços voltam ao arquivo original. As alterações feitas neste navegador serão apagadas.</p>
      <div class="confirm-actions">
        <button type="button" class="btn btn--ghost" id="confirm-no">Cancelar</button>
        <button type="button" class="btn btn--primary" id="confirm-yes">Restaurar</button>
      </div>
    </dialog>
    <div class="toast" id="toast" role="status" aria-live="polite"></div>`,H(),V();let a=E.querySelector(`#rows`);a.addEventListener(`click`,e=>{let t=e.target.closest(`[data-status]`),n=t?.closest(`tr[data-lot]`);if(!t||!n)return;let r=D.get(n.dataset.lot),i=t.dataset.status;j.find(e=>e.id===r.id)?.status!==i&&(G(y(A,r,{status:i})),n.className=`row row--${i}${L(r)?` is-changed`:``}`,n.querySelectorAll(`[data-status]`).forEach(e=>{e.setAttribute(`aria-pressed`,String(e===t))}),n.querySelector(`.lot-sub`).innerHTML=`Quadra ${r.block}, Lote ${r.number}${L(r)?`, <em>alterado</em>`:``}`,W(`Lote ${r.id} marcado como ${o[i].toLowerCase()}`))}),a.addEventListener(`change`,e=>{let n=e.target;if(!n.matches(`[data-price]`))return;let i=n.closest(`tr[data-lot]`),a=D.get(i.dataset.lot),o=j.find(e=>e.id===a.id),c=r(n.value);!c||c<1e3?(n.value=t(o.price),W(`Preço inválido: digite o valor em reais, sem centavos.`)):(n.value=t(c),c!==o.price&&(G(y(A,a,{price:c})),i.classList.toggle(`is-changed`,L(a)),i.querySelector(`.lot-sub`).innerHTML=`Quadra ${a.block}, Lote ${a.number}${L(a)?`, <em>alterado</em>`:``}`,W(`Preço do lote ${a.id}: ${s(c)}`)))}),a.addEventListener(`keydown`,e=>{e.key===`Enter`&&e.target.matches(`[data-price]`)&&e.target.blur()}),E.querySelector(`#search`).addEventListener(`input`,e=>{M=e.target.value,V()}),E.querySelector(`#block`).addEventListener(`change`,e=>{N=e.target.value,V()}),E.querySelector(`#status`).addEventListener(`change`,e=>{P=e.target.value,V()}),E.querySelector(`#export`).addEventListener(`click`,()=>{let e=d(C,j),t=new Blob([JSON.stringify(e,null,2)],{type:`application/json`}),n=document.createElement(`a`);n.href=URL.createObjectURL(t),n.download=`mapa-de-lotes-${C.id}-${e.exportedAt.slice(0,10)}.json`,n.click(),setTimeout(()=>URL.revokeObjectURL(n.href),1e3),W(`Arquivo exportado`)});let l=E.querySelector(`#import-file`);E.querySelector(`#import`).addEventListener(`click`,()=>l.click()),l.addEventListener(`change`,async()=>{let e=l.files?.[0];if(l.value=``,!e)return;let t;try{t=JSON.parse(await e.text())}catch{W(`O arquivo não é um JSON válido.`);return}let n=g(t,C);n.ok?(G(n.overrides),V(),W(n.changed===0?`Importado: nenhuma diferença do original`:`Importado: ${n.changed} lotes alterados`)):W(n.error)});let u=E.querySelector(`#confirm`);E.querySelector(`#reset`).addEventListener(`click`,()=>u.showModal()),E.querySelector(`#confirm-no`).addEventListener(`click`,()=>u.close()),E.querySelector(`#confirm-yes`).addEventListener(`click`,()=>{u.close(),v(O,C.id),A=b(),j=h(C.lots,A),H(),V(),W(`Demonstração restaurada`)}),E.querySelector(`#logout`).addEventListener(`click`,()=>{k.removeItem(w),I()})}window.addEventListener(`storage`,e=>{(e.key===null||e.key===p(C.id))&&(A=S(O,C.id),j=h(C.lots,A),E.querySelector(`#rows`)&&(H(),V()))}),k.getItem(w)===`1`?K():I();