import { Card, CardBody, HStack, Heading, Image, Text, VStack } from "@chakra-ui/react"
import useGames, { Game } from "../hooks/useGames"
import PlatformIconList from "./PlatformIconList"
import CriticScore from "./CriticScore"
import getCroppedImageUrl from "../services/image-url"
import Emoji from "./Emoji"
interface Props {
    game: Game
}
const GameCard = ({ game }: Props) => {
  return (
    <>
    {console.log(`${JSON.stringify(game)}`)}
    {JSON.stringify(game.name)}
    <Card>
        {/* <Image src={game.background_image} /> */}
        <Image src={getCroppedImageUrl(game.background_image)} />
        <CardBody>
            <HStack justifyContent="space-between" marginBottom={3}>
              <PlatformIconList platforms={game.parent_platforms.map(p =>p.platform)} />
              <CriticScore score={game.metacritic} />
            </HStack>
            <HStack>
              <Heading fontSize="2xl">{game.name}<Emoji rating={game.rating_top} /></Heading>
            </HStack>
        </CardBody>
    </Card>
    </>
  )
}

export default GameCard