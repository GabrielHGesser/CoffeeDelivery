import styled from "styled-components";

export const defaultTheme = {
  background: "#FAFAFA",
  white: "#FFF",

  "base-title": "#272221",
  "base-subtitle": "#403937",
  "base-text": "#574F4D",
  "base-label": "#8D8686",
  "base-hover": "#D7D5D5",
  "base-button": "#E6E5E5",
  "base-input": "#EDEDED",
  "base-card": "#F3F2F2",

  "base-purple": "#8047F8",
  "base-purple-dark": "#4B2995",
  "base-purple-light": "#EBE5F9",

  "base-yellow": "#DBAC2C",
  "base-yellow-dark": "#C47F17",
  "base-yellow-light": "#F1E9C9",

  "10": 0.625,
  "12": 0.75,
  "14": 0.875,
  "16": 1,
  "18": 1.125,
  "20": 1.25,
  "24": 1.5,
  "32": 2,
  "48": 3,
} as const;

interface TitleProps {
  weight: "bd" | "exbd";
  size: "18" | "20" | "32" | "48";
}

export const TitleContainer = styled.h1<TitleProps>`
  width: 100%;
  font-family: "Baloo 2", cursive;
  font-weight: ${({ weight }) => (weight === "bd" ? "700" : "800")};
  font-size: ${({ size, theme }) => `${theme[size]}rem`};
  line-height: 130%;
`;

interface SubtitleProps {
  weight: "rg" | "bd";
  size: "10" | "12" | "14" | "16" | "18" | "20" | "24";
  height: "130" | "160";
  
}

export const SubtitleContainer = styled.p<SubtitleProps>`
  width: 100%;
  font-family: "Roboto", sans-serif;
  font-weight: ${({ weight }) => (weight === "rg" ? "400" : "700")};
  font-size: ${({ size, theme }) => `${theme[size]}rem`};
  line-height: ${({ height }) => `${height}%`};
`;
