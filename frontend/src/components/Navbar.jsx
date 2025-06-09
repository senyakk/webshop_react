import { Container, Text, Flex, Button, HStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

import { PlusSquareIcon } from "@chakra-ui/icons"
import { useColorMode} from './ui/color-mode'
import { IoMoon } from 'react-icons/io5'
import { LuSun } from 'react-icons/lu'


const Navbar = () => {
  const {colorMode, toggleColorMode} = useColorMode()

  return (
    <Container maxW={"1440px"} px={4}>
      <Flex
      h={16}
      alignItems={"center"}
      justifyContent={"space-between"} 
      flexDir={{
        base:"column",
        sm:"row"
      }}>

       <HStack spacing={2} align="center">
        <Link to={"/"}>
        <Text
              fontSize={{ base: "22px", sm: "28px" }}
              fontWeight="bold"
              textTransform="uppercase"
              textAlign="center"
              bgGradient="to-r" 
              gradientFrom="#088032" 
              gradientTo="#5fbab6"
              bgClip="text"
            >
              Book Store
            </Text>
            </Link>
            <Text fontSize={{ base: "22px", sm: "28px" }}>
              📘
            </Text>
      </HStack>
        
      <HStack spacing={2} alignItems={"center"}>
        <Link to={"create"}>
        <Button>
          <PlusSquareIcon fontSize={20}></PlusSquareIcon>
        </Button>
        </Link>
        <Button onClick={toggleColorMode}>
          {colorMode === 'light' ? <IoMoon /> : <LuSun size='20'/>}
        </Button>
      </HStack>
      </Flex>
    </Container>)
}

export default Navbar