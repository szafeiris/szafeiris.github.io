import { ReactNode } from "react";

export default function InfoSection({
    id,
    title,
    parentClassName,
    className,
    children,
}: {
    id: string;
    title: string;
    parentClassName?: string;
    className?: string;
    children: ReactNode;
}) {
    return (
        <div className={"container-fluid py-5 " + className} id={id}>
            <div className="container">
                <div className="position-relative d-flex align-items-center justify-content-center">
                    <h1
                        className="text-uppercase text-white er py-3 display-5"
                        style={{
                            textShadow:
                                "1px 1px 0 #0059FF, -1px -1px 0 #0059FF, 1px -1px 0 #0059FF, -1px 1px 0 #0059FF",
                        }}
                    >
                        {title}
                    </h1>
                </div>
                <div className={"row " + parentClassName}>{children}</div>
            </div>
        </div>
    );
}
