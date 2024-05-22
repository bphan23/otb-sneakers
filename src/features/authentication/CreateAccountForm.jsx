import { useForm } from "react-hook-form";
import styled from "styled-components";
import FormRow from "../../ui/FormRow";
import { useSignup } from "./useSignup";
import Button from "../../ui/Button";

const CreateAccountContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CreateForm = styled.form`
  align-content: center;
  min-width: 50vw;
  border-radius: 1rem;
  border: 1px solid var(--color-grey-100);
  padding: 2rem;
  font-size: 1.6rem;
  background-color: white;
`;

const CreateInput = styled.input`
  width: 100%;
  border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  padding: 0.8rem 1.2rem;
  box-shadow: var(--shadow-sm);
  margin-bottom: 1.5rem;
`;

const LoginDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const LoginLink = styled.a`
  color: var(--color-brand-600);
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

function CreateAccountForm() {
  const { signup, isLoading } = useSignup();
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;

  function onSubmit({ name, email, password }) {
    signup(
      { name, email, password },
      {
        onSettled: () => reset(),
      }
    );
  }

  return (
    <CreateAccountContainer>
      <CreateForm onSubmit={handleSubmit(onSubmit)}>
        <FormRow label={"Name"} error={errors?.name?.message}></FormRow>
        <CreateInput
          type="text"
          id="name"
          disabled={isLoading}
          placeholder="Enter Name"
          {...register("name", { required: "This field is required" })}
        />

        <FormRow label={"Email"} error={errors?.email?.message} />
        <CreateInput
          type="email"
          id="email"
          disabled={isLoading}
          placeholder="Enter Email"
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Please provide a valid email address",
            },
          })}
        />

        <FormRow
          label={"Password (min 8 characters)"}
          error={errors?.password?.message}
        />
        <CreateInput
          type="password"
          id="password"
          disabled={isLoading}
          placeholder="Enter Password"
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Password needs a minimum of 8 characters",
            },
          })}
        />

        <FormRow
          label={"Repeat password"}
          error={errors?.passwordConfirm?.message}
        />
        <CreateInput
          type="password"
          id="passwordConfirm"
          disabled={isLoading}
          placeholder="Enter Password Again"
          {...register("passwordConfirm", {
            required: "This field is required",
            validate: (value) =>
              value === getValues().password ||
              "Passwords don't match, please try again",
          })}
        />

        <LoginDiv>
          <LoginLink href="/login">Login to existing account</LoginLink>
        </LoginDiv>

        {/* create account button */}
        <FormRow>
          <Button
            type="reset"
            variation="secondary"
            disabled={isLoading}
            onClick={reset}
          >
            Cancel
          </Button>
          <Button disabled={isLoading} type="submit">
            Create Account
          </Button>
        </FormRow>
      </CreateForm>
    </CreateAccountContainer>
  );
}

export default CreateAccountForm;
