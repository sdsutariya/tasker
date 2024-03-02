import { Box, Container, Heading, Text } from "@chakra-ui/react";

export default function Dashboard() {
  const boxStyles = {
    P: "10px",
    bg: "purple.400",
    color: "white",
    m: "10px",
    textAlign: 'center',
    // filter: 'blur(1px)',
    ':hover':{
      color:'black',
      bg: 'blue.200'
    }
  }

  return (
    <div>
      <Container maxW='4xl'>
        <Heading my='30px' p='10px'>Tasker</Heading>
        <Text ml='30px' color='blue'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          aspernatur, ratione repudiandae reiciendis, sint recusandae unde vitae
          autem blanditiis tempore rerum temporibus, sed culpa alias. Maxime
          cumque eius repellat magni?
        </Text>
        <Box sx={boxStyles}>
          Hello world
        </Box>
      </Container>
    </div>
  );
}
