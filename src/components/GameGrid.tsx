import { Box, Center, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { GameQuery } from "../App";
import useGames from "../hooks/useGames";
import { Genre } from "../hooks/useGenres";
import { Platform } from "../hooks/usePlatforms";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

interface Props {
  gameQuery: GameQuery;
  selectedGenre?: Genre | null;
  selectedPlatform?: Platform | null;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];

  const fetchedGamesCount = data?.pages.reduce((total, page) => total + page.results.length, 0) || 0
  if (error) return <Text color="red">{error.message}</Text>;
  return (
    <>
      <Box padding="10px">
        <InfiniteScroll dataLength={fetchedGamesCount} hasMore={!!hasNextPage} next={() => fetchNextPage()} loader={<Center marginY={10}><Spinner size='xl' speed='0.65s' /></Center>}>
          <SimpleGrid
            columns={{ sm: 1, md: 2, lg: 3, xl: 3 }}
            spacing={10}
          >
            {isLoading &&
              skeletons.map((skeleton) => (
                <GameCardContainer key={skeleton}>
                  <GameCardSkeleton />
                </GameCardContainer>
              ))}
            {data?.pages.map((page, index) => (
              <React.Fragment key={index}>
                {page.results.map((game) => (
                  <GameCardContainer key={game.id}>
                    <GameCard game={game} />
                  </GameCardContainer>
                ))}
              </React.Fragment>
            ))}
          </SimpleGrid>
        </InfiniteScroll>
      </Box>
    </>
  );
};

export default GameGrid;
