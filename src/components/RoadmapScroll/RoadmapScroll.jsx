import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

import { phasesList } from "../../data/phasesList";
import { PhaseCard } from "../PhaseCard/PhaseCard";
import { Title } from "../Title/Title";

import { ListStyled, Section } from "./RoadmapScroll.styles";

gsap.registerPlugin(ScrollTrigger);

export const RoadmapScroll = () => {
  const cards = useRef([]);
  const cardsContainer = useRef();

  console.log(cards.current);
  console.log(cardsContainer);

  const createCardsRefs = (card, index) => {
    cards.current[index] = card;
  };

  useEffect(() => {
    const totalCards = cards.current.length;
    console.log(
      3 * cards.current[0].offsetWidth - cardsContainer.current.offsetWidth
    );

    gsap.to(cards.current, {
      xPercent: -100 * (cards.current.length - 2),
      ease: "none",
      scrollTrigger: {
        trigger: cardsContainer.current,
        invalidateOnRefresh: true,
        pin: true,
        scrub: 1,
        snap: 1 / (totalCards - 1),
        start: "top top",
        end: () => "+=" + cards.current[0].offsetWidth,
      },
    });
  }, []);

  return (
    <Section ref={cardsContainer}>
      <Title>Roadmap</Title>

      <ListStyled>
        {phasesList.map(({ name, list }, index) => {
          return (
            <li ref={(e) => createCardsRefs(e, index)} key={index}>
              <PhaseCard title={name} list={list} />
            </li>
          );
        })}
      </ListStyled>
    </Section>
  );
};
