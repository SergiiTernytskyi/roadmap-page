import { phasesList } from "../../data/phasesList";
import { useHorizontalScroll } from "../../hooks/useHorizontalScroll";
import { PhaseCard } from "../PhaseCard/PhaseCard";
import { Title } from "../Title/Title";
import { ListStyled, Section } from "./RoadmapScroll.styles";

export const RoadmapScroll = () => {
  const horizontallScroll = useHorizontalScroll();

  return (
    <Section>
      <Title>Roadmap</Title>
      <div className="pin-wrap">
        <ListStyled ref={horizontallScroll}>
          {phasesList.map(({ name, list }, index) => {
            return <PhaseCard key={index} title={name} list={list} />;
          })}
        </ListStyled>
      </div>
    </Section>
  );
};
