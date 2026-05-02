import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">
          Page introuvable
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          La page que vous cherchez n'existe pas ou a été déplacée.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "qeva — Vos rendez-vous se confirment seuls." },
      {
        name: "description",
        content:
          "L'agent vocal IA qui appelle vos clients à votre place. En français, 24h/24, branché directement sur votre standard téléphonique 3CX. Hébergé en Europe, backup humain inclus.",
      },
      { name: "author", content: "qeva" },
      { name: "theme-color", content: "#C75D3F" },
      {
        property: "og:title",
        content: "qeva — Vos rendez-vous se confirment seuls.",
      },
      {
        property: "og:description",
        content:
          "L'agent vocal IA pour PME : confirmer, reporter, annuler vos rendez-vous automatiquement. En français, branché 3CX, hébergé en Europe.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "fr_FR" },
      { property: "og:site_name", content: "qeva" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "qeva — Vos rendez-vous se confirment seuls.",
      },
      {
        name: "twitter:description",
        content:
          "L'agent vocal IA pour PME : confirmer, reporter, annuler vos rendez-vous automatiquement.",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "icon",
        type: "image/svg+xml",
        href: "/favicon.svg",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
