import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { StyledNoisy } from "../../components/Background/style";
import { StyledDashboard } from "../GuestDashboard/style";
import { BoxAdd, Container, UlContainer } from "./style";

import { faSquarePlus } from "@fortawesome/free-regular-svg-icons";
import { RoomCard } from "../../components/Cards/RoomCard";
import Header from "../../components/Header";
import { useAuth, useHotel } from "../../contexts";

export const EmployeeDashboard = () => {
  const { hotelId } = useAuth();
  const { listRoomsByHotel, rooms } = useHotel();

  useEffect(() => {
    listRoomsByHotel(hotelId);
  }, []);

  return (
    <StyledDashboard>
      <StyledNoisy />
      <Header isLogout />

      <Container>
        <BoxAdd>
          <FontAwesomeIcon icon={faSquarePlus} size="2x" />
        </BoxAdd>

        <UlContainer>
          {rooms.map((room) => {
            return <RoomCard key={room.id} room={room} />;
          })}

          {/* {Array.from({ length: 20 }, (_, i) => (
            <LiContainer key={i}></LiContainer>
          ))} */}
        </UlContainer>
      </Container>
    </StyledDashboard>
  );
};
