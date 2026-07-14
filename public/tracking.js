(function () {
  var STORAGE_KEY = "ml_tracking";
  var WEBHOOK_URL = "https://n8n.maxilaudo.com/webhook/maxi-gclid";
  var TIMEOUT_MS = 2000;

  // Charset sem I, O, 0, 1 para evitar confusão visual
  var CHARSET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

  // ─── Mapeamento: texto original da URL → mensagem personalizada ───────────
  var MESSAGE_MAP = {
    "Olá! Quero falar com um especialista da Maxilaudo.":
      "Olá! Vim pelo site e gostaria de falar com um especialista da Maxilaudo.",
    "Quero agendar o MAXILAUDO.":
      "Olá! Quero agendar o MAXILAUDO — Laudo Cautelar. Podem me passar prazo e valor?",
    "Quero descrever meu caso para um laudo técnico.":
      "Olá! Tenho um problema com meu veículo e preciso de um Laudo Técnico. Posso descrever meu caso?",
    "Quero regularizar meu veículo — Remarcação":
      "Olá! Preciso regularizar meu veículo pela Remarcação de Chassi credenciada pelo DETRAN-PR. Como funciona?",
    "Quero saber o que preciso para remarcar":
      "Olá! Quero saber o que preciso para fazer a Remarcação de Chassi. Podem me orientar?",
    "Quero regularizar meu veículo com a Remarcação":
      "Olá! Preciso regularizar meu veículo pela Remarcação de Chassi credenciada pelo DETRAN-PR. Como funciona?",
    "Quero consultar o histórico de um veículo":
      "Olá! Quero consultar o Histórico Veicular de um veículo. Qual a placa preciso informar?",
    "Quero o combo Histórico + MAXILAUDO":
      "Olá! Tenho interesse no combo Histórico Veicular + MAXILAUDO Cautelar. Como funciona?",
    "Quero consultar o histórico":
      "Olá! Quero consultar o Histórico Veicular de um veículo. Qual a placa preciso informar.",
    "Olá! Vim pelo site e quero saber mais sobre a Maxilaudo.":
      "Olá! Vim pela página da Maxilaudo e quero falar com um especialista.",
    "Olá! Sou lojista e quero conhecer a parceria da Maxilaudo.":
      "Olá! Sou lojista e quero conhecer a parceria da Maxilaudo — volume mensal e valores.",
  };

  // ─── Resolve a mensagem personalizada pelo texto original ─────────────────
  function resolveMessage(rawText) {
    // 1. Match exato
    if (MESSAGE_MAP[rawText]) return MESSAGE_MAP[rawText];
    // 2. rawText começa com a chave (texto da URL pode ser truncado)
    for (var key in MESSAGE_MAP) {
      if (rawText.indexOf(key) === 0) return MESSAGE_MAP[key];
    }
    // 3. Chave começa com rawText (chave pode ter sufixo extra)
    for (var key2 in MESSAGE_MAP) {
      if (key2.indexOf(rawText) === 0) return MESSAGE_MAP[key2];
    }
    // 4. Fallback: texto original
    return rawText;
  }

  // ─── Gera ou recupera o session_id de 4 caracteres ───────────────────────
  function generateSessionId() {
    try {
      var existing = localStorage.getItem("wa_session_id");
      if (existing && existing.length === 4) return existing;
      var id = "";
      for (var i = 0; i < 4; i++) {
        id += CHARSET.charAt(Math.floor(Math.random() * CHARSET.length));
      }
      localStorage.setItem("wa_session_id", id);
      return id;
    } catch (e) {
      var fallback = "";
      for (var j = 0; j < 4; j++) {
        fallback += CHARSET.charAt(Math.floor(Math.random() * CHARSET.length));
      }
      return fallback;
    }
  }

  // ─── Monta URL do WhatsApp com session_id no início e mensagem personalizada
  function buildWhatsAppUrl(href, sessionId) {
    try {
      var parsed = new URL(href);
      // searchParams.get() já faz decode automaticamente
      var rawText = parsed.searchParams.get("text") || "";
      var message = resolveMessage(rawText);
      // Session_id no início: "[CODE] mensagem personalizada"
      parsed.searchParams.set("text", "[" + sessionId + "] " + message);
      return parsed.toString();
    } catch (e) {
      var sep = href.indexOf("?") === -1 ? "?" : "&";
      return href + sep + "text=%5B" + sessionId + "%5D";
    }
  }

  // ─── Cria e exibe o modal com o session_id ────────────────────────────────
  function showModal(sessionId, whatsappUrl) {
    try {
      // Remove modal anterior se existir
      var old = document.getElementById("maxi-wa-overlay");
      if (old) old.parentNode.removeChild(old);

      // Overlay fullscreen
      var overlay = document.createElement("div");
      overlay.id = "maxi-wa-overlay";
      overlay.style.cssText = [
        "position:fixed",
        "top:0", "left:0", "right:0", "bottom:0",
        "z-index:999999",
        "background:rgba(0,0,0,0.75)",
        "display:flex",
        "align-items:center",
        "justify-content:center",
        "padding:16px",
        "box-sizing:border-box",
      ].join(";");

      // Card branco central
      var card = document.createElement("div");
      card.style.cssText = [
        "background:#fff",
        "max-width:380px",
        "width:90%",
        "border-radius:16px",
        "padding:32px 24px",
        "text-align:center",
        "box-shadow:0 8px 40px rgba(0,0,0,0.18)",
        "box-sizing:border-box",
        "font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif",
      ].join(";");

      // Logo
      var logo = document.createElement("img");
      logo.src = "/assets/maxilaudo-logo.png";
      logo.alt = "Maxilaudo";
      logo.style.cssText = "max-width:140px;margin:0 auto 16px;display:block;";
      logo.onerror = function () { this.style.display = "none"; };

      // Título
      var title = document.createElement("p");
      title.style.cssText = "font-size:20px;font-weight:700;color:#1a1a1a;margin:0 0 8px;line-height:1.3;";
      title.textContent = "🎉 Você ganhou atendimento preferencial!";

      // Subtítulo
      var subtitle = document.createElement("p");
      subtitle.style.cssText = "font-size:14px;color:#666;margin:0 0 12px;";
      subtitle.textContent = "Seu código de atendimento:";

      // Badge do código
      var badge = document.createElement("div");
      badge.style.cssText = [
        "font-size:36px",
        "font-weight:800",
        "letter-spacing:6px",
        "color:#25D366",
        "background:#f0fff4",
        "border:2px solid #25D366",
        "border-radius:12px",
        "padding:12px 24px",
        "margin:0 auto 16px",
        "display:inline-block",
        "box-sizing:border-box",
      ].join(";");
      badge.textContent = sessionId;

      // Texto explicativo
      var info = document.createElement("p");
      info.style.cssText = "font-size:13px;color:#555;margin:0 0 24px;line-height:1.5;";
      info.textContent = "Este código já vai na sua mensagem. Não apague para garantir seu atendimento preferencial! ✅";

      // Botão principal
      var btn = document.createElement("button");
      btn.style.cssText = [
        "background:#25D366",
        "color:#fff",
        "border:none",
        "border-radius:8px",
        "padding:14px 28px",
        "font-size:16px",
        "font-weight:600",
        "cursor:pointer",
        "width:100%",
        "display:block",
        "box-sizing:border-box",
      ].join(";");
      btn.textContent = "Abrir WhatsApp agora →";

      // Ao clicar no botão: fecha modal e abre WhatsApp
      btn.addEventListener("click", function () {
        try {
          overlay.parentNode.removeChild(overlay);
          window.open(whatsappUrl, "_blank");
        } catch (e) { /* silencia */ }
      });

      card.appendChild(logo);
      card.appendChild(title);
      card.appendChild(subtitle);
      card.appendChild(badge);
      card.appendChild(info);
      card.appendChild(btn);
      overlay.appendChild(card);
      document.body.appendChild(overlay);
    } catch (e) { /* silencia qualquer erro de DOM */ }
  }

  // ─── Captura e persiste parâmetros UTM/gclid da URL atual ────────────────
  function captureParams() {
    var params = new URLSearchParams(window.location.search);
    var gclid = params.get("gclid") || params.get("gbraid");
    var hasAny =
      gclid ||
      params.get("utm_source") ||
      params.get("utm_medium") ||
      params.get("utm_campaign") ||
      params.get("utm_content") ||
      params.get("utm_term") ||
      params.get("utm_id");

    if (!hasAny) return;

    var data;
    if (gclid) {
      // Nova sessão Google Ads: sobrescreve tudo
      data = {
        gclid: gclid,
        utm_source: params.get("utm_source") || "",
        utm_medium: params.get("utm_medium") || "",
        utm_campaign: params.get("utm_campaign") || "",
        utm_content: params.get("utm_content") || "",
        utm_term: params.get("utm_term") || "",
        utm_id: params.get("utm_id") || "",
      };
    } else {
      // Apenas UTMs sem gclid: mescla com o que já estava salvo
      var existing = getStoredData() || {};
      data = {
        gclid: existing.gclid || "",
        utm_source: params.get("utm_source") || existing.utm_source || "",
        utm_medium: params.get("utm_medium") || existing.utm_medium || "",
        utm_campaign: params.get("utm_campaign") || existing.utm_campaign || "",
        utm_content: params.get("utm_content") || existing.utm_content || "",
        utm_term: params.get("utm_term") || existing.utm_term || "",
        utm_id: params.get("utm_id") || existing.utm_id || "",
      };
    }

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {}
  }

  function getStoredData() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  }

  // ─── Trata cliques em links de telefone (comportamento original) ──────────
  function handlePhoneClick(href, openInNewTab) {
    var stored = getStoredData() || {};

    var payload = {
      gclid: stored.gclid || "",
      utm_source: stored.utm_source || "",
      utm_medium: stored.utm_medium || "",
      utm_campaign: stored.utm_campaign || "",
      utm_content: stored.utm_content || "",
      utm_term: stored.utm_term || "",
      utm_id: stored.utm_id || "",
      page_url: window.location.href,
      event_type: "phone_click",
      timestamp: new Date().toISOString(),
    };

    function redirect() {
      if (openInNewTab) {
        window.open(href, "_blank", "noopener");
      } else {
        window.location.href = href;
      }
    }

    console.log("[ml-tracking] Enviando payload →", payload);

    try {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "phone_click",
        click_url: href,
        page_url: window.location.href,
        utm_source: stored.utm_source || "",
        utm_medium: stored.utm_medium || "",
        utm_campaign: stored.utm_campaign || "",
        utm_content: stored.utm_content || "",
        utm_term: stored.utm_term || "",
        utm_id: stored.utm_id || "",
        gclid: stored.gclid || "",
      });
    } catch (e) {}

    var done = false;
    var timer = setTimeout(function () {
      if (!done) {
        done = true;
        console.log("[ml-tracking] Timeout atingido (2000ms) — redirecionando sem resposta do webhook");
        redirect();
      }
    }, TIMEOUT_MS);

    try {
      fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        keepalive: true,
        mode: "no-cors",
      })
        .then(function () {
          if (!done) {
            done = true;
            clearTimeout(timer);
            console.log("[ml-tracking] Webhook respondeu — redirecionando");
            redirect();
          }
        })
        .catch(function (err) {
          if (!done) {
            done = true;
            clearTimeout(timer);
            console.warn("[ml-tracking] Erro no fetch — redirecionando mesmo assim", err);
            redirect();
          }
        });
    } catch (e) {
      if (!done) {
        done = true;
        clearTimeout(timer);
        console.warn("[ml-tracking] Exceção no fetch — redirecionando mesmo assim", e);
        redirect();
      }
    }
  }

  // ─── Trata cliques em links WhatsApp: session_id + webhook + modal ────────
  function handleWhatsAppClick(href) {
    var stored = getStoredData() || {};
    var sessionId = generateSessionId();
    var modifiedUrl = buildWhatsAppUrl(href, sessionId);

    var payload = {
      event_type: "whatsapp_click",
      session_id: sessionId,
      gclid: stored.gclid || "",
      utm_source: stored.utm_source || "",
      utm_medium: stored.utm_medium || "",
      utm_campaign: stored.utm_campaign || "",
      utm_content: stored.utm_content || "",
      utm_term: stored.utm_term || "",
      utm_id: stored.utm_id || "",
      page_url: window.location.href,
      landing_page: stored.landing_page || window.location.href,
      timestamp: new Date().toISOString(),
    };

    console.log("[ml-tracking] WhatsApp click — session_id:", sessionId, "payload →", payload);

    // Push para GTM dataLayer (coexiste com tags GTM existentes)
    try {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "whatsapp_click",
        click_url: href,
        session_id: sessionId,
        page_url: window.location.href,
        utm_source: stored.utm_source || "",
        utm_medium: stored.utm_medium || "",
        utm_campaign: stored.utm_campaign || "",
        utm_content: stored.utm_content || "",
        utm_term: stored.utm_term || "",
        utm_id: stored.utm_id || "",
        gclid: stored.gclid || "",
      });
    } catch (e) {}

    // Dispara webhook — fire and forget (não bloqueia o modal)
    try {
      fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=UTF-8" },
        body: JSON.stringify(payload),
        keepalive: true,
        mode: "no-cors",
      });
    } catch (e) { /* silencia */ }

    // Exibe modal; o botão do modal abre o WhatsApp com a URL modificada
    showModal(sessionId, modifiedUrl);
  }

  // ─── Listener principal via captura (intercepta antes do React) ──────────
  function attachListeners() {
    document.addEventListener(
      "click",
      function (e) {
        var el = e.target;
        while (el && el !== document.documentElement) {
          if (el.tagName === "A") {
            var href = el.getAttribute("href") || "";
            var isWpp =
              href.indexOf("wa.me") !== -1 ||
              href.toLowerCase().indexOf("whatsapp") !== -1;
            var isTel = href.indexOf("tel:") === 0;

            if (isWpp) {
              e.preventDefault();
              e.stopImmediatePropagation();
              handleWhatsAppClick(href);
              return;
            }

            if (isTel) {
              e.preventDefault();
              e.stopImmediatePropagation();
              var openInNewTab = el.getAttribute("target") === "_blank";
              handlePhoneClick(href, openInNewTab);
              return;
            }
          }
          el = el.parentElement;
        }
      },
      true // fase de captura — antes de qualquer handler React/Framer
    );
  }

  captureParams();

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", attachListeners);
  } else {
    attachListeners();
  }
})();
