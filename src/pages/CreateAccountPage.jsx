import styled from "styled-components";
import CreateAccountForm from "../features/authentication/CreateAccountForm";

const CreatePageLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 2.5rem;
  background-color: var() (--color-grey-50);
`;

const CreateHeader = styled.h1`
  text-align: center;
  font-size: 3rem;
  font-weight: 600;
`;

const CreateText = styled.p`
  text-align: center;
`;

function CreateAccountPage() {
  return (
    <CreatePageLayout>
      <CreateHeader>Out The Box, Sneakers</CreateHeader>
      <CreateText>Please create a new account!</CreateText>
      <CreateAccountForm />
    </CreatePageLayout>
  );
}

export default CreateAccountPage;
