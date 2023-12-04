import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { StyledNoisy } from "../../components/Background/style";
import { StyledDashboard } from "../GuestDashboard/style";
import { BoxAdd, BoxChoice, Container, UlContainer } from "./style";

import { faSquarePlus } from "@fortawesome/free-regular-svg-icons";
import { RoomCard } from "../../components/Cards/RoomCard";
import Header from "../../components/Header";
import { useAuth, useHotel } from "../../contexts";
import { StyledRoomCard } from "../../components/Cards/RoomCard/style";

export const EmployeeDashboard = () => {
  const { hotelId } = useAuth();
  const { listRoomsByHotel, rooms } = useHotel();

  const [roomActive, setRoomActive] = useState<boolean>(true);

  useEffect(() => {
    listRoomsByHotel(hotelId);
  }, []);

  return (
    <StyledDashboard>
      <StyledNoisy />
      <Header isLogout />

      <BoxChoice $roomActive={roomActive}>
        <div>
          <h3 onClick={() => setRoomActive(false)}>Clients</h3>
          <h3 onClick={() => setRoomActive(true)}>Rooms</h3>
        </div>
      </BoxChoice>
      {roomActive ? (
        <Container>
          {/* <BoxAdd>
            <FontAwesomeIcon icon={faSquarePlus} size="2x" />
          </BoxAdd> */}

          <UlContainer>
            {rooms.map((room) => {
              return <RoomCard key={room.id} room={room} />;
            })}

            {/* {Array.from({ length: 20 }, (_, i) => (
            <StyledRoomCard key={i}></StyledRoomCard>
          ))} */}
          </UlContainer>
        </Container>
      ) : (
        <Container>CLIENTS</Container>
      )}
    </StyledDashboard>
  );
};
