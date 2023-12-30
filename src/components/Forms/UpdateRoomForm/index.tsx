import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth, useHotel } from "../../../contexts";
import { iRoom } from "../../../interface";
import {
  TRoomUpdateData,
  roomSchemaUpdateForm,
} from "../../../validators/roomValidators";
import Button from "../../Button";
import Input from "../../Input";
import { BoxButtonAddImage, StyledForm } from "./style";

interface iRoomUpdateForm {
  currentRoom: iRoom;
}

const UpdateRoomForm = ({ currentRoom }: iRoomUpdateForm) => {
  const { hotelId } = useAuth();
  const { listRoomsByHotel } = useHotel();
  const [images, setImages] = useState<string[]>(["", ""]);

  useEffect(() => {
    console.log("Entrouuuu");
    listRoomsByHotel(hotelId);
  }, []);

  // console.log("Saiu", currentRoom);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<TRoomUpdateData>({
    resolver: zodResolver(roomSchemaUpdateForm),
  });

  const onSubmit = async (data: TRoomUpdateData) => {
    console.log(data);
  };

  return (
    <StyledForm
      onSubmit={handleSubmit(onSubmit)}
      $labelbackground={"#aba9a9"}
      $labelcolor={"#000"}
      $inputscolor={"#000"}
    >
      <div className="boxInputsOfNumber">
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
          id="quantity"
          label="Quantity"
          type="number"
          errorMessage={errors.quantity?.message}
          register={register}
          getValues={getValues}
          isTypeNumber={true}
          defaultValue={currentRoom.quantity}
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
      </div>

      <Input
        id="departure_date"
        label="Departure Date"
        type="text"
        errorMessage={errors.departure_date?.message}
        register={register}
        getValues={getValues}
        defaultValue={currentRoom.departure_date}
      />

      <Input
        id="guest"
        label="Guest"
        type="text"
        errorMessage={errors.guest?.message}
        register={register}
        getValues={getValues}
        defaultValue={currentRoom.guest}
      />

      <Input
        id="image"
        label="Image"
        type="text"
        errorMessage={errors.image?.message}
        register={register}
        getValues={getValues}
        defaultValue={currentRoom.full_url}
      />

      {images.map((image, i) => {
        const dynamicFullUrl = `full_url${i + 2}` as keyof iRoom;

        return (
          <Input
            key={i}
            id={`ìmage${i + 2}`}
            label={`Image${i + 2}`}
            type="text"
            errorMessage={errors.image?.message}
            register={register}
            getValues={getValues}
            defaultValue={currentRoom[dynamicFullUrl]}
          />
        );
      })}

      <BoxButtonAddImage>
        <Button
          size="medium"
          backgroundColor="#698d60"
          backgroundColorHover="#2f5526"
          fontColor="#100909"
          fontColorHover="#d7c6c6"
          type="button"
        >
          Add image field
        </Button>
      </BoxButtonAddImage>

      <Button size="medium">Save</Button>
    </StyledForm>
  );
};

export default UpdateRoomForm;
