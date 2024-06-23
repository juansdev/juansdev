import {dm_sans} from "@/presentation/views/fonts";
import Link from "next/link";
import {IMenuItems, Menu} from "@/presentation/views/components/header/Menu";

export const Header = () => {
  const menuItems: IMenuItems = {
    "Home": {
      href: "#home",
      isSelected: true
    },
    "About": {
      href: "#about"
    },
    "Services": {
      children: {
        "Services": {
          children: {
            "Services Default": {
              href: "#"
            },
            "Services Row": {
              href: "#"
            },
            "Services 3 Grid": {
              href: "#"
            },
            "Services 2 Grid": {
              href: "#"
            }
          }
        },
        "Single Services": {
          children: {
            "Standard": {
              href: "#"
            },
            "Youtube Video": {
              href: "#"
            },
            "Vimeo Video": {
              href: "#"
            }
          }
        }
      }
    },
    "Portfolio": {
      children: {
        "Portfolio": {
          children: {
            "Portfolio Default": {
              href: "#"
            },
            "Portfolio Grid": {
              href: "#"
            },
            "Portfolio Split": {
              href: "#"
            },
            "Portfolio Split Video": {
              href: "#"
            }
          }
        },
        "Single Portfolio": {
          children: {
            "Standard": {
              href: "#"
            },
            "Portfolio V.2": {
              href: "#"
            },
            "Youtube Video": {
              href: "#"
            }
          }
        }
      }
    },
    "Blog": {
      children: {
        "Blog": {
          children: {
            "Blog Default": {
              href: "#"
            },
            "Blog 2 Grid": {
              href: "#"
            },
            "Blog 3 Grid": {
              href: "#"
            },
            "Blog Right Sidebar": {
              href: "#"
            }
          }
        },
        "Single Blog": {
          children: {
            "Standard": {
              href: "#"
            },
            "Single Blog V.2": {
              href: "#"
            },
            "Youtube Video": {
              href: "#"
            }
          }
        }
      }
    },
    "Contact": {
      href: "#contact"
    }
  }
  return (<>
      <header className={dm_sans.variable}>
        <nav>
          <div>
            <div>
              <Menu menuItems={menuItems}/>
              <Link href="#">
                <div className="w-12 h-12 bg-amber-300 justify-center items-center flex rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <g clipPath="url(#clip0_25_74)">
                      <path d="M12 3V15" stroke="#0F141C" strokeWidth="2" strokeLinecap="round"
                            strokeLinejoin="round"></path>
                      <path d="M16 11L12 15L8 11" stroke="#0F141C" strokeWidth="2" strokeLinecap="round"
                            strokeLinejoin="round"></path>
                      <path
                        d="M3 12C3 14.3869 3.94821 16.6761 5.63604 18.364C7.32387 20.0518 9.61305 21 12 21C14.3869 21 16.6761 20.0518 18.364 18.364C20.0518 16.6761 21 14.3869 21 12"
                        stroke="#0F141C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </g>
                  </svg>
                </div>
              </Link>
              <div className="z-10 relative">
                <input type="checkbox" name={"checkbox"}
                       className={"relative z-50 cursor-pointer w-10 opacity-0 checkbox-toggle"}/>
                <div
                  className={"hamburger absolute top-0 right-0 z-10 w-12 py-2 px-3 rounded-tl-none rounded-tr-sm rounded-br-sm rounded-bl-none cursor-pointer transition-shadow flex items-center justify-center"}>
                  <div
                    className={"relative flex-none w-full h-0.5 bg-white transition-all flex items-center justify-center before:absolute before:z-10 before:-top-2.5 before:left-0 before:w-full before:h-0.5 before:bg-inherit before:transition-all before:box-border after:top-2.5 after:absolute after:z-10 after:left-0 after:w-full after:h-0.5 after:bg-inherit after:transition-all after:box-border"}></div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}