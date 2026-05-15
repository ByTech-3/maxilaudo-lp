(function () {
  var STORAGE_KEY = "ml_tracking";
  var WEBHOOK_URL = "https://bytech3.app.n8n.cloud/webhook/maxi-gclid";
  var TIMEOUT_MS = 2000;

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

  function sendAndRedirect(href, openInNewTab) {
    var stored = getStoredData() || {};
    var isWpp =
      href.indexOf("wa.me") !== -1 ||
      href.toLowerCase().indexOf("whatsapp") !== -1;

    var payload = {
      gclid: stored.gclid || "",
      utm_source: stored.utm_source || "",
      utm_medium: stored.utm_medium || "",
      utm_campaign: stored.utm_campaign || "",
      utm_content: stored.utm_content || "",
      utm_term: stored.utm_term || "",
      utm_id: stored.utm_id || "",
      page_url: window.location.href,
      event_type: isWpp ? "whatsapp_click" : "phone_click",
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

  function attachListeners() {
    // Usa captura no document para interceptar antes de qualquer handler React/Framer
    document.addEventListener(
      "click",
      function (e) {
        var el = e.target;
        // Sobe na árvore DOM para encontrar o <a> pai (cobre ícones e spans dentro do botão)
        while (el && el !== document.documentElement) {
          if (el.tagName === "A") {
            var href = el.getAttribute("href") || "";
            var isWpp =
              href.indexOf("wa.me") !== -1 ||
              href.toLowerCase().indexOf("whatsapp") !== -1;
            var isTel = href.indexOf("tel:") === 0;

            if (isWpp || isTel) {
              e.preventDefault();
              e.stopImmediatePropagation();
              var openInNewTab = el.getAttribute("target") === "_blank";
              sendAndRedirect(href, openInNewTab);
              return;
            }
          }
          el = el.parentElement;
        }
      },
      true // fase de captura
    );
  }

  captureParams();

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", attachListeners);
  } else {
    attachListeners();
  }
})();
