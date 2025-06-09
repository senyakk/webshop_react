import { useState } from 'react'
import { Container, Text, Input, Flex, Box, Button, Heading, VStack, createToaster} from '@chakra-ui/react'
import { useColorModeValue } from '@/components/ui/color-mode';
import { useProductStore } from '@/store/product';

// import { createToaster } from "@/components/ui/toaster"

import { toaster } from "@/components/ui/toaster"



const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",  
  });

const {createProduct}= useProductStore()

const handleAddProduct = async() => {
  const {success, message} = await createProduct(newProduct)
  setNewProduct({name: "", price: "", image: ""});
  return { success, message };
}

  return (
    <Container maxW={"800px"}>
      <VStack spacing={8}>
        <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
          Create New Product
        </Heading>

        <Box w={"full"} bg={useColorModeValue("white", "gray.800")} 
        p={6} rounded={"lg"} shadow={"md"}>

        <VStack spacing={4}>
        <Input
        placeholder = 'Product Name'
        name = 'name'
        value = {newProduct.name}
        onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
        />

         <Input
        placeholder = 'Price'
        name = 'price'
        type='number'
        value = {newProduct.price}
        onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
        />

         <Input
        placeholder = 'Image URL'
        name = 'image'
        value = {newProduct.image}
        onChange={(e) => setNewProduct({...newProduct, image: e.target.value})}
        />

         <Button 
         w="full" colorPalette="cyan"
         onClick={async () => {
          const { success, message } = await handleAddProduct();
           toaster.create({
            description: message,
            type: success ? "success" : "error",
            });
          }}
        >
          Add Product
        </Button>
        </VStack>
       
        </Box>
      </VStack>
      </Container>
  )
}

export default CreatePage