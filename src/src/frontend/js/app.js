// js/app.js
// Controle geral de navegação + permissões + botões

(function () {
  "use strict";

  function getCurrentUser() {
    try {
      const raw = localStorage.getItem("user");
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  }

  function requireLogin() {
    const user = getCurrentUser();
    if (!user) {
      window.location.href = "/screens/Login/LoginScreen.html";
      return false;
    }
    return true;
  }

  // ⬇ Notificação
  function showNotificationInline(msg) {
    let n = document.getElementById("notification");
    if (!n) return;

    n.innerText = msg;
    n.style.display = "block";
    setTimeout(() => (n.style.display = "none"), 2200);
  }

  // ⬇ Logout
  function attachLogout(selector) {
    const btn = document.querySelector(selector);
    if (!btn) return;

    btn.addEventListener("click", () => {
      localStorage.removeItem("user");
      localStorage.removeItem("currentMap");
      showNotificationInline("Saindo...");
      setTimeout(() => {
        window.location.href = "/screens/Login/LoginScreen.html";
      }, 600);
    });
  }

  // ⬇ Bottom navigation
  function attachBottomTabs() {
    const user = getCurrentUser();
    if (!user) return;

    const tipo = user.type;

    const tabGaleria = document.getElementById("tabGaleria");
    const tabCatalogo = document.getElementById("tabCatalogo");
    const tabPerfil = document.getElementById("tabPerfil");

    if (tabGaleria) {
      tabGaleria.addEventListener("click", () => {
        if (tipo === "arqueologo") {
          window.location.href =
            "/screens/GaleriaArqueologos/GaleriaArqueologosScreen.html";
        } else {
          window.location.href =
            "/screens/GaleriaPublico/GaleriaPublicoScreen.html";
        }
      });
    }

    if (tabCatalogo) {
      tabCatalogo.addEventListener("click", () => {
        // ainda sem função real, então volta para a galeria correta
        if (tipo === "arqueologo") {
          window.location.href =
            "/screens/GaleriaArqueologos/GaleriaArqueologosScreen.html";
        } else {
          window.location.href =
            "/screens/GaleriaPublico/GaleriaPublicoScreen.html";
        }
      });
    }

    if (tabPerfil) {
      tabPerfil.addEventListener("click", () => {
        window.location.href =
          "/screens/PerfilUsuario/PerfilUsuarioScreen.html";
      });
    }
  }

  // ⬇ Botões de topo (filtro, compartilhar…)
  function attachCommonButtons() {
    const filter = document.getElementById("btnFilter");
    const share = document.getElementById("btnShare");

    if (filter) {
      filter.addEventListener("click", () =>
        showNotificationInline("Função de filtro em desenvolvimento")
      );
    }

    if (share) {
      share.addEventListener("click", () =>
        showNotificationInline("Função de compartilhar em desenvolvimento")
      );
    }
  }

  // ⬇ Iniciar tela e permissões
  document.addEventListener("DOMContentLoaded", () => {
    const user = getCurrentUser();
    const isLogin = document.querySelector(".login-screen");

    if (!isLogin) {
      if (!requireLogin()) return;
    }

    // Arqueólogo vê botão de adicionar
    const addBtn = document.getElementById("btnAddMap");
    if (addBtn) {
      if (user.type !== "arqueologo") {
        addBtn.style.display = "none";
      }
    }

    attachLogout("#btnLogout");
    attachCommonButtons();
    attachBottomTabs();
  });

  window.coliceu = {
    getCurrentUser,
    showNotificationInline,
    requireLogin,
  };
})();
