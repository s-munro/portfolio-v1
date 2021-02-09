import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Home",
    url: "/",
    icon: <AiIcons.AiFillHome />,
    classname: "nav-text",
  },
  {
    title: "Projects",
    url: "/projects",
    icon: <AiIcons.AiFillHome />,
    classname: "nav-text",
  },
  {
    title: "Resume",
    url:
      "https://docs.google.com/document/d/1zyPr4E8VN1H1lpAXo6mSC4rj2HdxXmJIpCaCXKx6LH8/edit?usp=sharing",
    icon: <AiIcons.AiFillHome />,
    classname: "nav-text",
  },

  {
    title: "Github",
    url: "https://github.com/s-munro",
    icon: <AiIcons.AiFillHome />,
    classname: "nav-text",
  },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/sjm-munro/",
    icon: <AiIcons.AiFillHome />,
    classname: "nav-text",
  },
  {
    title: "Contact",
    url: 'mailto:sjm.munro@gmail.com?subject="re:portfolio"',
    icon: <FaIcons.FaEnvelopeOpenText />,
    classname: "nav-text",
  },
];
