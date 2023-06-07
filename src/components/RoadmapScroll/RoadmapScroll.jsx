import { phasesList } from "../../data/phasesList";
import { PhaseCard } from "../PhaseCard/PhaseCard";
import { Title } from "../Title/Title";
import { Card, ListStyled } from "./RoadmapScroll.styles";

export const RoadmapScroll = () => {
  return (
    <Card>
      <Title>Roadmap</Title>
      <ListStyled>
        {phasesList.map(({ name, list }) => {
          return <PhaseCard title={name} list={list} />;
        })}
      </ListStyled>
    </Card>
  );
};
