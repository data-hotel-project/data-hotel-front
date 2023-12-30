import { useEffect, useState } from "react";
import { StyledNoisy } from "../../components/Background/style";
import { StyledDashboard } from "../GuestDashboard/style";
import { BoxChoice, Container, UlContainer } from "./style";

import { RoomCard } from "../../components/Cards/RoomCard";
import UpdateRoomForm from "../../components/Forms/UpdateRoomForm";
import Header from "../../components/Header";
import { Modal } from "../../components/Modal";
import { useAuth, useHotel } from "../../contexts";
import { iRoom } from "../../interface";

export const EmployeeDashboard = () => {
  const { hotelId, showModal, setShowModal } = useAuth();
  const { listRoomsByHotel, rooms } = useHotel();

  const [currentRoom, setCurrentRoom] = useState<iRoom>({} as iRoom);
  const [roomActive, setRoomActive] = useState<boolean>(true);

  useEffect(() => {
    listRoomsByHotel(hotelId);
  }, []);

  return (
    <StyledDashboard>
      <StyledNoisy />
      <Header isLogout />

      <BoxChoice $roomActive={roomActive}>
        <h3 onClick={() => setRoomActive(false)}>Clients</h3>
        <h3 onClick={() => setRoomActive(true)}>Rooms</h3>
      </BoxChoice>
      {roomActive ? (
        <Container>
          {/* <BoxAdd>
            <FontAwesomeIcon icon={faSquarePlus} size="2x" />
          </BoxAdd> */}

          <UlContainer>
            {rooms.map((room) => {
              return (
                <RoomCard
                  key={room.id}
                  room={room}
                  setShowModal={setShowModal}
                  setCurrentRoom={setCurrentRoom}
                />
              );
            })}

            {/* {Array.from({ length: 20 }, (_, i) => (
              <StyledRoomCard key={i}></StyledRoomCard>
            ))} */}
          </UlContainer>
        </Container>
      ) : (
        <Container>CLIENTS</Container>
      )}
      {showModal === "updateRoom" && (
        <Modal title="Update Room">
          <UpdateRoomForm currentRoom={currentRoom} />
        </Modal>
      )}
    </StyledDashboard>
  );
};
