import { Box, Image, Heading, Text, Input, VStack, HStack, Portal, CloseButton, IconButton, Button, Dialog} from '@chakra-ui/react'
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { toaster } from "@/components/ui/toaster"

import { useColorModeValue } from '@/components/ui/color-mode';

import { useProductStore } from '../store/product';
import { useState } from "react"

const ProductCard = ({product}) => {

    const textColor = useColorModeValue("gray.600", "gray.200");
    const bg = useColorModeValue("white", "gray.800");

    const [updatedProduct, setUpdatedProduct] = useState(product)
    const {deleteProduct, updateProduct} = useProductStore() 


    const handleDeleteProduct = async (pid) => {
        const {success, message} = await deleteProduct(pid)
        return { success, message }
    }

    const handleUpdateProduct = async (pid, updatedProduct) => {
        const {success, message} = await updateProduct(pid, updatedProduct)
        return { success, message }
    }

  return (
    <Box
        shadow={'lg'}
        rounded={'lg'}
        overflow={'hidden'}
        transition={'all 0.3s'}
        _hover={{ transform: "translateY(-5px)", shadow: "x1"}}
        bg={bg}
    >
        <Image src={product.image} alt={product.name} h={48} w={'full'} objectFit={'cover'} />
        <Box p={4}>
            <Heading as='h3' size={'md'} mb={2}>
                {product.name}
            </Heading>

            <Text fontWeight='bold' fontsize='x1' color={textColor} mb={4}>
                {product.price} €
            </Text>

            <HStack spacing={2}>

                <Dialog.Root key ='md' size='md'>

                <Dialog.Trigger asChild>
                <IconButton colorPalette="cyan">
                    <FaEdit />
                </IconButton>
                </Dialog.Trigger>

        <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
            <Dialog.Content>
            <Dialog.Header>
                <Dialog.Title>Update Product</Dialog.Title>
            </Dialog.Header>

            <Dialog.Body>
                <VStack spacing={4}>
							<Input
								placeholder='Product Name'
								name='name'
								value={updatedProduct.name}
								onChange={(e) => setUpdatedProduct({ ...updatedProduct, name: e.target.value })}
							/>
							<Input
								placeholder='Price'
								name='price'
								type='number'
								value={updatedProduct.price}
								onChange={(e) => setUpdatedProduct({ ...updatedProduct, price: e.target.value })}
							/>
							<Input
								placeholder='Image URL'
								name='image'
								value={updatedProduct.image}
								onChange={(e) => setUpdatedProduct({ ...updatedProduct, image: e.target.value })}
							/>
						</VStack>
            </Dialog.Body>

            <Dialog.Footer>
                <Dialog.ActionTrigger asChild>
                      <Button variant="outline">Cancel</Button>
                </Dialog.ActionTrigger>

                <Dialog.ActionTrigger asChild>
                    <Button onClick={async () => {
                        const { success, message } = await handleUpdateProduct(product._id, updatedProduct);
                        toaster.create({
                            description: message,
                            type: success ? "success" : "error",
                        });
                    }}
                    >Save</Button>
                </Dialog.ActionTrigger>

            </Dialog.Footer>

            <Dialog.CloseTrigger asChild>
                    <CloseButton size="sm" />
            </Dialog.CloseTrigger>
            </Dialog.Content>
        </Dialog.Positioner>
        </Portal>
        </Dialog.Root>
                

            <IconButton
              colorPalette="red"
              onClick={async () => {
                const { success, message} = await handleDeleteProduct(product._id)
                toaster.create({
                            description: message,
                            type: success ? "info" : "error",
                });
            }}
            >
              <MdDeleteForever />
            </IconButton>
            </HStack>
        </Box>

    </Box>
  )
}

export default ProductCard
