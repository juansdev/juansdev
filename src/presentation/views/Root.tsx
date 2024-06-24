"use client";

import "@/presentation/views/styles/css/main.css";
import {BaseLayout} from "@/presentation/views/core";
import {ICallbackLayoutProps} from "@/presentation/views/core/interfaces";
import {DependencyProviderApplicationProviders} from "@/app/providers";
import {Ellipse, Sidebar} from "@/presentation/views/components";
import {dm_sans} from "@/presentation/views/fonts";
import {Loading} from "@/presentation/views/components/Loading";
import {MenuToggle} from "@/presentation/views/components/buttons/MenuToggle";

class RootLayout extends BaseLayout {
  getReactNode = ({children}: ICallbackLayoutProps) =>
    <html className={"light " + dm_sans.variable} lang="es-CO">
    <body>
    <main>
      <Loading/>
      <div className={"fix-bg"}>
        <Ellipse style={1}/>
        <Ellipse style={2}/>
        <MenuToggle/>
        <div className={"main-container"}>
          <Sidebar/>
          {/*<Header/>*/}
          <div className={"main-content"}>
            <DependencyProviderApplicationProviders>
              {children}
            </DependencyProviderApplicationProviders>
          </div>
        </div>
      </div>
    </main>
    </body>
    </html>;
}

export const Root = new RootLayout().layout;