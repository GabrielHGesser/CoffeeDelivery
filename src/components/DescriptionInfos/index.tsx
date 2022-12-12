import { ReactNode } from "react";
import { SubtitleContainer } from "../../styles/styles";
import { Container, TextDescription } from "./styles";

interface DescriptionInfosProps {
  icon: ReactNode;
  title: string;
  subtitle: string;
  variant: "purple" | "yellow-dark";
}

export function DescriptionInfos({
  icon,
  title,
  subtitle,
  variant,
}: DescriptionInfosProps) {
  return (
    <Container variant={variant}>
      {icon}
      <TextDescription>
        <SubtitleContainer
          size="16"
          height="130"
          variant="subtitle"
          weight="rg"
        >
          {title}
        </SubtitleContainer>
        <SubtitleContainer size="14" height="130" variant="text" weight="rg">
          {subtitle}
        </SubtitleContainer>
      </TextDescription>
    </Container>
  );
}
