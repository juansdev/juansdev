"use client";

import "@/presentation/views/styles/css/main.css";
import {BaseLayout} from "@/presentation/views/core";
import {ICallbackLayoutProps} from "@/presentation/views/core/interfaces";
import {DependencyProviderApplicationProviders} from "@/app/providers";

class RootLayout extends BaseLayout {
  getReactNode = ({children}: ICallbackLayoutProps) =>
    <html lang="es-CO">
    <body>
    <DependencyProviderApplicationProviders>
      {children}
    </DependencyProviderApplicationProviders>
    </body>
    </html>;
}

export const Root = new RootLayout().layout;