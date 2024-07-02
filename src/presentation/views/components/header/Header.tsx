import Link from "next/link";
import {IMenuItems, Menu} from "@/presentation/views/components";

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
      <header>
        <nav>
          <div>
            <div>
              <Menu menuItems={menuItems}/>
              <Link className={"header-wrap"} href="#">
                <div>
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
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}