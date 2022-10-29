import { Link as Scroll } from "react-scroll";

export const Footer = () => {
    return(
        <footer className="footer">
            <div className="footer__inner">
                <div className="footer__inner__sns">
                    <a
                        className="sns--first"
                        href="https://twitter.com/3_salamander"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Twitter"
                    >
                        <svg>
                            <use xlinkHref="#twitter"></use>
                        </svg>
                    </a>
                    <a
                        className="sns--second"
                        href="https://youtube.com/channel/UCm6ywy_JBpGklEAwYQm1kNA"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <svg>
                            <use xlinkHref="#youtube"></use>
                        </svg>
                    </a>
                    <a
                        className="sns--third"
                        href="https://www.instagram.com/3_salamander_3/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <svg>
                            <use xlinkHref="#instagram"></use>
                        </svg>
                    </a>
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
            </div>
        </footer>
    )
}