/* eslint-disable no-unused-vars */
import styled from "styled-components";

const CreateAccountContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const CreateHeader = styled.h1`
  margin-bottom: 1.5rem;
  font-size: 3rem;
  font-weight: 600;
`;

const CreateForm = styled.form`
  width: 50%;
  height: 50%;
  border-radius: 1rem;
  border: 1px solid var(--color-grey-100);
  padding: 2rem;
  font-size: 1.6rem;
  background-color: white;
`;

const CreateText = styled.p`
  margin-bottom: 1.5rem;
`;

const CreateInputDiv = styled.div`
  margin-bottom: 1.5rem;
`;

const CreateInputLabel = styled.label`
  font-weight: 400;
`;

const CreateInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  outline: none;
  border-radius: 0.5rem;
  border: 1px solid rgb(220, 220, 220);
`;

const CreateButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
`;

const SubmitInputButton = styled.input`
  cursor: pointer;
  background-color: var(--color-brand-600);
  color: white;
  border: none;
  border-radius: 0.375rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;

  &:hover {
    background-color: var(--color-brand-700);
  }
`;

const LoginDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const LoginLink = styled.a`
  color: var(--color-brand-600);

  &:hover {
    text-decoration: underline;
  }
`;

function CreateAccount() {
  return (
    <CreateAccountContainer>
      <CreateHeader>Create New Account</CreateHeader>

      <CreateText>Please create a new account</CreateText>

      <CreateForm>
        <CreateInputDiv>
          <CreateInputLabel>Name</CreateInputLabel>
          <CreateInput type="text" placeholder="Enter Name" />
        </CreateInputDiv>

        <CreateInputDiv>
          <CreateInputLabel>Email</CreateInputLabel>
          <CreateInput type="text" placeholder="Enter Email" />
        </CreateInputDiv>

        <CreateInputDiv>
          <CreateInputLabel>Password</CreateInputLabel>
          <CreateInput type="text" placeholder="Enter Password" />
        </CreateInputDiv>

        <LoginDiv>
          <LoginLink href="/login">Login to existing account</LoginLink>
        </LoginDiv>

        {/* create account button */}
        <CreateButtonDiv>
          <SubmitInputButton type="submit" value="Submit"></SubmitInputButton>
        </CreateButtonDiv>
      </CreateForm>
    </CreateAccountContainer>
  );
}

export default CreateAccount;
