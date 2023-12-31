'use client'

import {
  Card
} from '@chakra-ui/react'
import CardSlider from './CardSlider'


export default function ActivityCard({ props, price}) {
  return (
    <Card className="card" height='96%'>

      {/* <Image
          src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
          alt='Green double couch with wooden legs'
          borderRadius='lg'
        /> */}
      <CardSlider price={price} title={props.name} rating={Math.floor(Math.random() * 5)} info={props.category} />
      {/* <Box style={{margin:'5px'}}> */}
      {/* <Box style={{ padding:'10px' }}>
                <Heading size='md' style={{ height: '50px' }}>{props.name}</Heading>
                <Box style={{ height: '50px', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {props.description}
                </Box>
                <Flex justifyContent={'space-between'}>
                    <Box></Box>
                    <Text color='blue.600' style={{ fontSize: '25px' }}>
                        {
                            price && <>৳{price}</>
                        }
                    </Text>
                </Flex>
            </Box> */}
      {/* </Box> */}
      {/* <Divider />
      <CardFooter>
        <ButtonGroup spacing='2'>
          <Link to={`/hotel/${props.hotel_id}`}>
            <Button variant='solid' colorScheme='blue'>
              VIEW DETAILS
            </Button>
          </Link>
          <Button variant='ghost' colorScheme='blue'>
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter> */}
    </Card>
  )
}
