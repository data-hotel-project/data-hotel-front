import React, { useState } from "react";
import Header from "../../components/Header";
import Input from "../../components/Input";
import { SubmitHandler, useForm } from "react-hook-form";
import { MenuContainer, StyledBody, StyledH1, ToggleButton } from "./style";

export const Home:React.FC = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<any>({});
  const [menuOpen, setMenuOpen] = useState(true);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const onSubmit: SubmitHandler<any> = async (formData) => {
    console.log(formData);
  };

  return (
    <>
      <ToggleButton onClick={toggleMenu}>
        {/* {menuOpen?'Close Menu':'Open Menu'} */}
        <p>X</p>
      </ToggleButton>
      <MenuContainer open={menuOpen}>
      </MenuContainer>
      <StyledBody>
        <Header />
        {/* <StyledH1>GRAND DATA HOTEL</StyledH1> */}
      </StyledBody>
      {/* <h2>Home</h2> */}
      {/* <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          display: "flex",
          flexFlow: "column",
          gap: "50px",
          width: "100%",
          maxWidth: 400,
        }}
      >
        <div
          style={{
            display: "flex",
            flexFlow: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Input
            id="name"
            label="Nome"
            register={register}
            type="text"
            errors={errors.name}
            getValues={getValues}
          />
        </div>

        <button style={{ marginTop: "10px", marginLeft: 10 }} type="submit">
          Cadastre-se
        </button>
      </form> */}
    </>
  );
};
