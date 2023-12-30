import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { iRoom } from "../../../interface";
import {
  TRoomUpdateData,
  roomSchemaUpdateForm,
} from "../../../validators/roomValidators";
import Button from "../../Button";
import Input from "../../Input";
import { BoxButtonAddImage, StyledForm } from "./style";
import { useAuth, useHotel } from "../../../contexts";

interface iRoomUpdateForm {
  currentRoom: iRoom;
}

const UpdateRoomForm = ({ currentRoom }: iRoomUpdateForm) => {
  const [imagesField, setImagesField] = useState<string[]>([""]);
  const [selectedFile, setSelectedFile] = useState<any>();

  // const getFileName = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const fileName = e.target.files?.[0]?.name;

  //   setSelectedFile(fileName);
  // };

  const { hotelId } = useAuth();
  const { listRoomsByHotel, updateRoom } = useHotel();

  useEffect(() => {
    listRoomsByHotel(hotelId);
  }, []);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<TRoomUpdateData>({
    resolver: zodResolver(roomSchemaUpdateForm),
  });

  const onSubmit = async (data: TRoomUpdateData) => {
    const filteredData = Object.fromEntries(
      Object.entries(data).filter(([_, value]) => value !== "")
    );

    console.log(filteredData);

    updateRoom(filteredData, currentRoom.id);
  };

  return (
    <StyledForm
      onSubmit={handleSubmit(onSubmit)}
      $labelbackground={"#aba9a9"}
      $labelcolor={"#000"}
      $inputscolor={"#000"}
      encType="multipart/form-data"
    >
      <div className="boxInputsOfNumber">
        <Input
          id="number"
          label="Number"
          type="number"
          errorMessage={errors.number?.message}
          register={register}
          getValues={getValues}
          defaultValue={currentRoom.number}
        />

        <Input
          id="quantity"
          label="Quantity"
          type="number"
          errorMessage={errors.quantity?.message}
          register={register}
          getValues={getValues}
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
        type="file"
        errorMessage={errors.image?.message}
        register={register}
        getValues={getValues}
        // onChange={getFileName}
      />

      {imagesField.map((_, i) => {
        const dynamicErrorImage = `image${i + 2}` as keyof typeof errors;

        return (
          <Input
            key={i}
            id={`image${i + 2}`}
            label={`Image${i + 2}`}
            type="text"
            errorMessage={errors[dynamicErrorImage]?.message}
            register={register}
            getValues={getValues}
            defaultValue={currentRoom[`full_url${i + 2}`]}
          />
        );
      })}

      {imagesField.length < 4 && (
        <BoxButtonAddImage>
          <Button
            size="medium"
            backgroundColor="#698d60"
            backgroundColorHover="#2f5526"
            fontColor="#100909"
            fontColorHover="#d7c6c6"
            type="button"
            onClick={() => setImagesField([...imagesField, ""])}
          >
            Add image field
          </Button>
        </BoxButtonAddImage>
      )}

      <Button size="medium">Save</Button>
    </StyledForm>
  );
};

export default UpdateRoomForm;
