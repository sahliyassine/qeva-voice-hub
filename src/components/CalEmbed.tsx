import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export function CalEmbed() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "demo" });
      cal("ui", {
        cssVarsPerTheme: {
          light: { "cal-brand": "#C75D3F" },
          dark: { "cal-brand": "#C75D3F" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <Cal
      namespace="demo"
      calLink="qeva.ai/demo"
      calOrigin="https://cal.eu"
      style={{ width: "100%", height: "700px", overflow: "scroll" }}
      config={{ layout: "month_view" }}
    />
  );
}

export default CalEmbed;
