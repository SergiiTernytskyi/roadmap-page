import { phasesList } from "../../data/phasesList";
import { useHorizontalScroll } from "../../hooks/useHorizontalScroll";
import { PhaseCard } from "../PhaseCard/PhaseCard";
import { Title } from "../Title/Title";
import { Card, ListStyled } from "./RoadmapScroll.styles";

export const RoadmapScroll = () => {
  const horizontallScroll = useHorizontalScroll();

  return (
    <Card>
      <Title>Roadmap</Title>
      <ListStyled ref={horizontallScroll}>
        {phasesList.map(({ name, list }, index) => {
          return <PhaseCard key={index} title={name} list={list} />;
        })}
      </ListStyled>
    </Card>
  );
};
