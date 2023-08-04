import { Input, InputGroup, InputRightElement } from "@chakra-ui/react"
import { useRef } from "react"
import { BsSearch } from "react-icons/bs"

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {

  const ref = useRef<HTMLInputElement>(null);
  const searchGamesFun = () =>{
    if (ref.current) {
    onSearch(ref.current.value);
    console.log(`Value ${ref.current.value}`);
    }
  }
  return (
    <>
      <form onSubmit={(event)=>{
        event.preventDefault();
        if (ref.current) {
          onSearch(ref.current.value);
          console.log(`Value ${ref.current.value}`);
        }
      }}>
        <InputGroup>
          <InputRightElement children={<BsSearch  onClick={searchGamesFun} />} />
            <Input ref={ref} borderRadius={20} placeholder='Search games...' variant='filled' />
        </InputGroup>
      </form>
    </>
  )
}

export default SearchInput