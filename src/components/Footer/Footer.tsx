import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface FooterProps {
    socialLinks: { href?: string; icon: IconProp }[];
    repositoryLinks: { href?: string; icon: IconProp }[];
    researchLinks: { href?: string; icon: IconProp }[];
}

export default function Footer({
    socialLinks,
    repositoryLinks,
    researchLinks,
}: FooterProps) {
    return (
        <>
            <div className="container-fluid bg-primary text-white mt-5 py-5 px-sm-3 px-md-5">
                <div className="container text-center pt-5">
                    <div className="d-flex justify-content-center mb-4">
                        {socialLinks.map(
                            (link, i) =>
                                link.href && (
                                    <a
                                        key={i}
                                        className="btn btn-light btn-social me-2"
                                        href={link.href}
                                        target="blank"
                                    >
                                        <FontAwesomeIcon icon={link.icon} />
                                    </a>
                                )
                        )}
                        {repositoryLinks.length > 0 && (
                            <span className="vr mx-3"></span>
                        )}
                        {repositoryLinks.map(
                            (link, i) =>
                                link.href && (
                                    <a
                                        key={i}
                                        className="btn btn-light btn-social me-2"
                                        href={link.href}
                                        target="blank"
                                    >
                                        <FontAwesomeIcon icon={link.icon} />
                                    </a>
                                )
                        )}
                        {researchLinks.length > 0 && (
                            <span className="vr mx-2"></span>
                        )}
                        {researchLinks.map(
                            (link, i) =>
                                link.href && (
                                    <a
                                        key={i}
                                        className="btn btn-light btn-social me-2"
                                        href={link.href}
                                        target="blank"
                                    >
                                        <FontAwesomeIcon icon={link.icon} />
                                    </a>
                                )
                        )}
                    </div>
                    <div className="d-flex justify-content-center mb-3"></div>
                    <p className="m-0">
                        &copy;{" " + new Date().getFullYear() + " "}
                        <a
                            className="text-white "
                            href="https://stelioszafeiris.gr"
                        >
                            Stylianos Zafeiris
                        </a>
                        . All Rights Reserved.{" "}
                        <small>
                            Inspired by themes from{" "}
                            <a
                                className="text-white"
                                href="https://htmlcodex.com"
                            >
                                HTML Codex
                            </a>
                        </small>
                    </p>
                </div>
            </div>
        </>
    );
}
