"use client";

import "@/presentation/views/styles/css/main.css";
import {BaseLayout} from "@/presentation/views/core";
import {DependencyProviderApplicationProviders} from "@/app/providers";
import {Ellipse, Sidebar} from "@/presentation/views/components";
import {dm_sans} from "@/presentation/views/fonts";
import {Loading} from "@/presentation/views/components/Loading";
import {MenuToggle} from "@/presentation/views/components/buttons/MenuToggle";
import {ICallbackLayoutProps, ILayout} from "@/presentation/views/core/interfaces";

class RootLayout extends BaseLayout {
  render() {
    return (
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
            <DependencyProviderApplicationProviders>
              {this.props.children}
            </DependencyProviderApplicationProviders>
          </div>
        </div>
      </main>
      </body>
      </html>
    );
  }
}

export const Root: ILayout = () => {
  function render(props: ICallbackLayoutProps) {
    return <RootLayout>
      {props.children}
    </RootLayout>;
  }

  return render;
};