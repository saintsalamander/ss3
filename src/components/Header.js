import { Link as Scroll } from "react-scroll";

export const Header = () => {
    const openMenu = () => {
        const hamburgerBack = document.getElementsByClassName("hamburger")[0]
        const menuIcon = document.getElementById("menuIcon")

        hamburgerBack.classList.toggle("hamburger--clicked")
        if(menuIcon.getAttribute("xlink:href") === "#menuClosed"){
            menuIcon.setAttribute("xlink:href", "#menuOpened")
        }else{
            menuIcon.setAttribute("xlink:href", "#menuClosed")
        }

        hamburgerBack.addEventListener("click", function(){
            hamburgerBack.classList.remove("hamburger--clicked")
            menuIcon.setAttribute("xlink:href", "#menuClosed")
        })
    }
    return(
        <header className="header">
            <div className="hamburger">
                <nav className="hamburger__inner">
                    <ul className="hamburger__list">
                        <li>
                            <Scroll
                                to="root"
                                spy={true}
                                smooth={true}
                                offset={-76}
                                duration={380}
                            ></Scroll>
                        </li>
                        <li>
                            <Scroll
                                to="news"
                                spy={true}
                                smooth={true}
                                offset={-76}
                                duration={380}
                            >NEWS</Scroll>
                        </li>
                        <li>
                            <Scroll
                                to="stories"
                                spy={true}
                                smooth={true}
                                offset={-76}
                                duration={380}
                            >STORIES</Scroll>
                        </li>
                        <li>
                            <Scroll
                                to="novels"
                                spy={true}
                                smooth={true}
                                offset={-76}
                                duration={380}
                            >NOVELS</Scroll>
                        </li>
                        <li>
                            <Scroll
                                to="characters"
                                spy={true}
                                smooth={true}
                                offset={-76}
                                duration={380}
                            >CHARACTERS</Scroll>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="header__inner">
                <div className="header__inner__titleArea">
                    <Scroll
                        to="root"
                        spy={true}
                        smooth={true}
                        offset={-76}
                        duration={380}
                        className="title"
                    >
                        <span>3</span> Salamander 3
                    </Scroll>
                </div>
                <nav>
                    <ul>
                    <li>
                            <Scroll
                                to="root"
                                spy={true}
                                smooth={true}
                                offset={-76}
                                duration={380}
                            >TOP</Scroll>
                        </li>
                        <li>
                            <Scroll
                                to="news"
                                spy={true}
                                smooth={true}
                                offset={-76}
                                duration={380}
                            >NEWS</Scroll>
                        </li>
                        <li>
                            <Scroll
                                to="stories"
                                spy={true}
                                smooth={true}
                                offset={-76}
                                duration={380}
                            >STORIES</Scroll>
                        </li>
                        <li>
                            <Scroll
                                to="novels"
                                spy={true}
                                smooth={true}
                                offset={-76}
                                duration={380}
                            >NOVELS</Scroll>
                        </li>
                        <li>
                            <Scroll
                                to="characters"
                                spy={true}
                                smooth={true}
                                offset={-76}
                                duration={380}
                            >CHARACTERS</Scroll>
                        </li>
                    </ul>
                </nav>
                <button
                    id="header__menu"
                    type="button"
                    aria-label="メニュー"
                    className="menu"
                    onClick={openMenu}
                >
                    <div
                        title="メニュー"
                        className="menu__icon"
                    >
                        <svg>
                            <use
                                id="menuIcon"
                                xlinkHref="#menuClosed"
                            ></use>
                        </svg>
                    </div>
                </button>
            </div>
        </header>
    )
}