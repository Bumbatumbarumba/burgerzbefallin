import React from "react";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { DownCaret } from "../definitions";

// yeah it's not consistent but it's 4am and I wanna finish this tonight lol
interface HeaderProps {
    screenWidth: number;
}

export const Header = (props: HeaderProps) => {
    const { screenWidth } = props;
    return (
        <div
            style={{
                margin: "auto",
                width: screenWidth >= 1024 ? "50%" : "75%",
                display: "flex",
                justifyContent: "center",
                paddingTop: "3em"
            }}>
            <Accordion
                sx={{
                    backgroundColor: "#e0c097",
                    color: "#2d2424",
                    boxShadow: "none",
                    width: "30em"
                }}>
                <AccordionSummary expandIcon={<DownCaret />}>
                    <h2 className="title-text">Burgerz Be Fallin'</h2>
                </AccordionSummary>
                <AccordionDetails>
                    <iframe
                        width="100%"
                        height="50%"
                        src="https://www.youtube-nocookie.com/embed/jfKfPfyJRdk"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen></iframe>
                </AccordionDetails>
            </Accordion>
        </div>
    );
};