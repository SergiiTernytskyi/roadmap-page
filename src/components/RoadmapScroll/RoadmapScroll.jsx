import { PhaseCard } from "../PhaseCard/PhaseCard";
import { Title } from "../Title/Title";
import { Card, ListStyled } from "./RoadmapScroll.styles";

const phasesList = [
  {
    name: "Phase 1",
    list: [
      "Special events",
      "Launch social networks",
      "Launch token",
      "Launch token on DEX",
    ],
  },

  {
    name: "Phase 2",
    list: ["Launch on token CEX", "Burn 1% PAND", "Staking"],
  },
  {
    name: "Phase 3",
    list: ["Take over the meme-coin market"],
  },
];

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
