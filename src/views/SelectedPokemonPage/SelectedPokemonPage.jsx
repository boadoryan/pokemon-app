import React from "react";
import { useParams } from "react-router-dom";
import PokemonStatsCard from "./PokemonStatsCard";
import PokemonMovesCard from "./PokemonMovesCard";
import PokemonEvolutionsCard from "./PokemonEvolutionsCard";
import { SelectedPokemonCard } from "./SelectedPokemonCard";
import { PokemonInfoCard } from "./PokemonInfoCard";
import Section from "../../components/Section";
import SectionHeader from "../../components/SectionHeader";
import PageContainer from "../../components/PageContainer";

const SelectedPokemonPage = ({
  selectedPokemonName,
  pokemonData,
  handleBackButton,
  formatText,
}) => {
  const { id: currentPokemonId } = useParams();

  return (
    <PageContainer>
      <div className="flex flex-col mt-4 md:flex-col md:gap-4 lg:flex-col xl:flex-row">
        {/* Section for Selected Pokemon */}
        <Section>
          <SectionHeader title="Pokemon" />
          <SelectedPokemonCard
            currentPokemonId={currentPokemonId}
            selectedPokemonName={selectedPokemonName}
            pokemonData={pokemonData}
            formatText={formatText}
          />
        </Section>

        {/* Section for Pokemon Info */}
        <Section>
          <SectionHeader title="Info" />
          <PokemonInfoCard
            pokemonData={pokemonData}
            currentPokemonId={currentPokemonId}
            selectedPokemonName={selectedPokemonName}
            formatText={formatText}
          />
        </Section>

        {/* Section for Pokemon Stats */}
        <Section>
          <SectionHeader title="Stats" />
          <PokemonStatsCard
            pokemonData={pokemonData}
            currentPokemonId={currentPokemonId}
            selectedPokemonName={selectedPokemonName}
          />
        </Section>
      </div>

      {/* Second row */}
      <div className="flex flex-col mt-12 md:flex-row md:gap-4">
        {/* Section for Pokemon Moves */}
        <Section width="md:w-2/5">
          <SectionHeader title="Moves" />
          <PokemonMovesCard
            pokemonData={pokemonData}
            currentPokemonId={currentPokemonId - 1}
            selectedPokemonName={selectedPokemonName}
            formatText={formatText}
          />
        </Section>

        {/* Section for Evolution Chain */}
        <Section width="md:w-3/5 lg:w3/5">
          <SectionHeader title="Evolution Chain" />
          <PokemonEvolutionsCard
            currentPokemonId={currentPokemonId}
            selectedPokemonName={selectedPokemonName}
            pokemonData={pokemonData}
          />
        </Section>
      </div>
    </PageContainer>
  );
};

export default SelectedPokemonPage;
