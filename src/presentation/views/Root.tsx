"use client";

import "./styles/css/globals.css";
import * as globalFonts from "./fonts";
import {BaseLayout} from "@/presentation/views/core";
import {ICallbackLayoutProps} from "@/presentation/views/core/interfaces/layout.interface";
import {DependencyProviderApplicationProviders} from "@/app/providers";

class RootLayout extends BaseLayout {
  getReactNode = ({children}: ICallbackLayoutProps) =>
    <html lang="es-CO">
    <body className={globalFonts.title.className}>
    <DependencyProviderApplicationProviders>
      {children}
    </DependencyProviderApplicationProviders>
    </body>
    </html>;
}

export const Root = new RootLayout().layout;