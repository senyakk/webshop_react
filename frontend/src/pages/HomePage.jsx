import { useProductStore } from '@/store/product'
import { Container, VStack, Text, SimpleGrid } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import  ProductCard from "../components/ProductCard" 

const HomePage = () => {

  const {fetchProducts, products} = useProductStore();
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  console.log("products", products)

  return (
    <Container maxW={'container.x1'} py={12}>
      <VStack spacing={8}>
         <Text
          fontSize={{ base: "22px", sm: "28px" }}
          fontWeight="bold"
          textAlign="center"
          bgGradient="to-r" 
          gradientFrom="#088032" 
          gradientTo="#5fbab6"
          bgClip="text"
        >
          Current Products
        </Text>

      <SimpleGrid
       columns={{
        base: 1,
        md: 2,
        lg: 3
       }}
       spacing={10}
       w={"full"}
      >
        {products.map((product) => (
          <ProductCard key={product._id} product={product}/>
        ))}
        
      </SimpleGrid>

        {products.length === 0 && (
          <Text
          fontSize={'x1'}
          fontWeight="bold"
          textAlign="center"
          color='gray.500'
        >
          No products found :({" "}
          <Link to={"/create"}>
            <Text as='span' color='blue.500' _hover={{textDecoration: "underline"}}>
              Create product
            </Text>
          </Link>
        </Text>
        )}
      </VStack>
    </Container>
  )
}

export default HomePage