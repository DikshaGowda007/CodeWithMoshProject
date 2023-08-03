import { HStack, List, ListItem, Image, Spinner, Button } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres"
import getCroppedImageUrl from "../services/image-url";

interface Props {
    onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
    const { data, isLoading, error } = useGenres();
    if (error) return null;
    if (isLoading) return <Spinner />
    return (
        <>
            <List>
                {data.map(genre => <ListItem key={genre.id} paddingY="5px">
                    <HStack>
                        <Image boxSize="32px" borderRadius={8} src={getCroppedImageUrl(genre.image_background)} />
                        <Button onClick={()=>{
                            onSelectGenre(genre);
                            console.log(`Clicked ${genre.name}`);
                            }} fontSize='lg' variant='link'>{genre.name}</Button>
                    </HStack>
                    </ListItem>)}
            </List>
        </>
    )
}

export default GenreList