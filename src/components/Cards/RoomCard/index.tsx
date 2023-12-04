import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { iRoom } from "../../../interface";
import Button from "../../Button";
import {
  BoxButtons,
  BoxImage,
  BoxPersons,
  Span,
  SpanStatus,
  StyledRoomCard,
  SubTitle,
} from "./style";

interface iRoomCardProps {
  room: iRoom;
}

export const RoomCard = ({ room }: iRoomCardProps) => {
  return (
    <StyledRoomCard>
      <BoxImage>
        <img src={room.full_url} alt="" />
      </BoxImage>
      <SubTitle>
        Number: <Span>{room?.number}</Span>
      </SubTitle>
      <SubTitle>
        Status:
        <SpanStatus $status={room?.status}>{room?.status}</SpanStatus>
      </SubTitle>
      <BoxPersons>
        {Array.from({ length: room.quantity }, (_, i) => (
          <FontAwesomeIcon key={i} icon={faUser} />
        ))}
      </BoxPersons>
      <BoxButtons>
        <Button size="small" borderColor="#bdbd23d6">
          Edit
        </Button>
        <Button size="small">View more</Button>
      </BoxButtons>
    </StyledRoomCard>
  );
};
