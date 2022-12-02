import React from "react"
import Main from "../layouts/Main"
import { Link } from "react-router-dom"
import people from "../assets/people.jpeg"
import planets from "../assets/planets.jpeg"
import movies from "../assets/movies.jpeg"
import { Card, Container, Image, SimpleGrid, Text, CardBody } from "@chakra-ui/react"

const Home = () => {
  return (
    <Main>
    <Container>
      <SimpleGrid columns={3} spacing={2} marginTop={200}>
        <Card>

        </Card>
      </SimpleGrid>
    </Container>
    </Main>
  )
}

export default Home
