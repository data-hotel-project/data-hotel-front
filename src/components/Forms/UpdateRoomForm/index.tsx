import { useForm } from "react-hook-form";
import { iRoom } from "../../../interface";
import Button from "../../Button";
import Input from "../../Input";
import { StyledForm } from "./style";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  TRoomUpdateData,
  roomSchemaUpdateForm,
} from "../../../validators/roomValidators";

interface iUpdateRoomForm {
  currentRoom: iRoom;
}

const UpdateRoomForm = ({ currentRoom }: iUpdateRoomForm) => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<TRoomUpdateData>({
    resolver: zodResolver(roomSchemaUpdateForm),
  });

  const onSubmit = async (data: TRoomUpdateData) => {
    console.log("AAAAAAAA", data);
    console.log("Data before submission:", data);
    console.log("Type of ''number'' field:", typeof data.number);
  };

  return (
    <StyledForm
      onSubmit={handleSubmit(onSubmit)}
      $labelbackground={"#aba9a9"}
      $labelcolor={"#000"}
      $inputscolor={"#000"}
    >
      <Input
        id="number"
        label="Number"
        type="number"
        errorMessage={errors.number?.message}
        register={register}
        getValues={getValues}
        isTypeNumber={true}
        defaultValue={currentRoom.number}
      />

      <Input
        id="status"
        label="Status"
        type="text"
        errorMessage={errors.status?.message}
        register={register}
        getValues={getValues}
        defaultValue={currentRoom.status}
      />

      <Button size="medium">Save</Button>
    </StyledForm>
  );
};

export default UpdateRoomForm;
