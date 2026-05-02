import { useEffect, useRef } from "react";

declare global {
  interface Window {
    Cal?: any;
  }
}

const SCRIPT_SRC = "https://app.cal.eu/embed/embed.js";
const NAMESPACE = "demo";
const CAL_LINK = "qeva.ai/demo";
const ORIGIN = "https://cal.eu";

let scriptPromise: Promise<void> | null = null;

function loadCalScript(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  if (window.Cal) return Promise.resolve();
  if (scriptPromise) return scriptPromise;

  scriptPromise = new Promise<void>((resolve, reject) => {
    // Inline Cal.com loader bootstrap (singleton)
    (function (C: any, A: string, L: string) {
      let p = function (a: any, ar: any) {
        a.q.push(ar);
      };
      let d = C.document;
      C.Cal =
        C.Cal ||
        function () {
          let cal = C.Cal;
          let ar = arguments;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            const script = d.createElement("script");
            script.src = A;
            script.async = true;
            script.onload = () => resolve();
            script.onerror = () => reject(new Error("Cal.com embed failed to load"));
            d.head.appendChild(script);
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api: any = function () {
              p(api, arguments);
            };
            const namespace = ar[1];
            api.q = api.q || [];
            if (typeof namespace === "string") {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else p(cal, ar);
            return;
          }
          p(cal, ar);
        };
    })(window, SCRIPT_SRC, "init");
  });

  return scriptPromise;
}

export function CalEmbed() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;
    let cancelled = false;

    loadCalScript()
      .then(() => {
        if (cancelled || !mountedRef.current || !window.Cal) return;
        window.Cal("init", NAMESPACE, { origin: ORIGIN });
        window.Cal.ns[NAMESPACE]("inline", {
          elementOrSelector: containerRef.current,
          calLink: CAL_LINK,
          layout: "month_view",
          config: { layout: "month_view" },
        });
        window.Cal.ns[NAMESPACE]("ui", {
          cssVarsPerTheme: {
            light: { "cal-brand": "#C75D3F" },
            dark: { "cal-brand": "#C75D3F" },
          },
          hideEventTypeDetails: false,
          layout: "month_view",
        });
      })
      .catch(() => {});

    return () => {
      cancelled = true;
      mountedRef.current = false;
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ width: "100%", minHeight: 700, overflow: "auto" }}
    />
  );
}

export default CalEmbed;
