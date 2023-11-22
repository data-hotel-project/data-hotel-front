import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Input from "../../components/Input";
import Button from "../../components/button";
import { useGuest } from "../../contexts/GuestContext";
import {
  TGuestFormData,
  guestSchemaForm,
} from "../../validators/guestValidators";

const GuestRegister = () => {
  const { createGuest } = useGuest();

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<TGuestFormData>({
    resolver: zodResolver(guestSchemaForm),
  });

  const onSubmit = async (data: TGuestFormData) => {
    await createGuest(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <h1>Cadastro</h1>
        <Input
          label="Username"
          type="text"
          errorMessage={errors.username?.message}
          register={register}
          id="username"
          getValues={getValues}
        />
        <Input
          label="E-mail"
          type="email"
          errorMessage={errors.email?.message}
          register={register}
          id="email"
          getValues={getValues}
        />
        <Input
          label="Password"
          type="password"
          errorMessage={errors.password?.message}
          register={register}
          id="password"
          getValues={getValues}
          showPass={true}
        />
        <Input
          label="Data de Nascimento"
          type="text"
          errorMessage={errors.birthdate?.message}
          register={register}
          id="birthdate"
          getValues={getValues}
        />
        <Input
          label="Nacionalidade"
          type="text"
          errorMessage={errors.nationality?.message}
          register={register}
          id="nationality"
          getValues={getValues}
        />
        <Input
          label="Contato"
          type="text"
          errorMessage={errors.contact?.message}
          register={register}
          id="contact"
          getValues={getValues}
        />
        <Input
          label="Contato de Emergência"
          type="text"
          errorMessage={errors.emergency_num?.message}
          register={register}
          id="emergency_num"
          getValues={getValues}
        />
        <Input
          label="Contato Adicional"
          type="text"
          errorMessage={errors.contact_aditional?.message}
          register={register}
          id="contact_aditional"
          getValues={getValues}
        />
        <div className="address">
          <h2>Endereço</h2>
          <Input
            label="Rua"
            type="text"
            errorMessage={errors.address?.message}
            register={register}
            id="address.street"
            getValues={getValues}
          />
          <Input
            label="Número"
            type="text"
            errorMessage={errors.address?.message}
            register={register}
            id="address.number"
            getValues={getValues}
          />
          <Input
            label="Cidade"
            type="text"
            errorMessage={errors.address?.message}
            register={register}
            id="address.city"
            getValues={getValues}
          />
          <div>
            <Input
              label="Estado"
              type="text"
              errorMessage={errors.address?.message}
              register={register}
              id="address.state"
              getValues={getValues}
            />
            <Input
              label="Complemento"
              type="text"
              errorMessage={errors.address?.message}
              register={register}
              id="address.complement"
              getValues={getValues}
            />
          </div>
        </div>

        <a href="/login">Já possui cadastro?</a>
        <a href="/">Voltar</a>
        <Button size={"medium"}>Cadastrar</Button>
      </div>
    </form>
  );
};

export default GuestRegister;
