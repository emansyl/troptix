import EventCard from "./EventCard";
import { Center, SimpleGrid } from "@chakra-ui/react";
import { events } from "../fakeData/data";

export default function EventGrid() {
  return (
    <SimpleGrid spacing="10"columns={[1, 2, 3]} >
        {events.map(event => (
            <Center>
            <EventCard
            nameOfEvent={event.name}
            description={event.description}
            date={event.date}
            image={event.image}
            price={0}
            
          />
          </Center>
          
        ))}
      
    </SimpleGrid>
    
  );
}
