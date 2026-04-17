"use client";

import { useEffect } from "react";

const SCRIPT_ID = "vlibras-plugin-script";
const WIDGET_URL = "https://vlibras.gov.br/app";
const SCRIPT_SRC = `${WIDGET_URL}/vlibras-plugin.js`;

function initWidget() {
  if (typeof window === "undefined") {
    return false;
  }

  if (window.__vlibrasWidgetInitialized) {
    return true;
  }

  if (!window.VLibras || !window.VLibras.Widget) {
    return false;
  }

  new window.VLibras.Widget(WIDGET_URL);
  window.__vlibrasWidgetInitialized = true;
  return true;
}

export default function VlibrasWidget() {
  useEffect(() => {
    let tries = 0;
    const maxTries = 20;
    let timerId;

    const tryInit = () => {
      if (initWidget()) {
        return;
      }

      tries += 1;
      if (tries < maxTries) {
        timerId = window.setTimeout(tryInit, 250);
      }
    };

    const existingScript = document.getElementById(SCRIPT_ID);

    if (!existingScript) {
      const script = document.createElement("script");
      script.id = SCRIPT_ID;
      script.src = SCRIPT_SRC;
      script.async = true;
      script.onload = tryInit;
      document.body.appendChild(script);
    }

    tryInit();

    return () => {
      if (timerId) {
        window.clearTimeout(timerId);
      }
    };
  }, []);

  return (
    <div vw="" className="enabled">
      <div vw-access-button="" className="active" />
      <div vw-plugin-wrapper="">
        <div className="vw-plugin-top-wrapper" />
      </div>
    </div>
  );
}
