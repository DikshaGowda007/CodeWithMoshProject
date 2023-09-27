import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDoubleDown } from "react-icons/bs";
import { Platform } from "../hooks/useGames";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
    onSelectPlatform: (platform: Platform) => void;
    selectedPlatformId?: number;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatformId }: Props) => {
    const { data, error } = usePlatforms();
    const selectedPlatform = data?.results.find(p => p.id === selectedPlatformId)
    if (error) return null;
    return (
        <>
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDoubleDown />} marginBottom={5}>{selectedPlatform?.name || 'Platforms'}</MenuButton>
            <MenuList>
                {data?.results.map(platform => 
                <MenuItem key={platform.id} onClick={()=> onSelectPlatform(platform)}>{platform.name}</MenuItem>
                )}
            </MenuList>
        </Menu>
        </>
    )
}

export default PlatformSelector