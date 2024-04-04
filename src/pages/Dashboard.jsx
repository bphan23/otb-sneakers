/* eslint-disable no-unused-vars */
import styled from "styled-components";
import Heading from "../ui/Heading";

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const DashboardText = styled.p`
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const LoginCreateDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 50%;
  border-radius: 1rem;
  border: 1px solid var(--color-grey-100);
  padding: 2rem;
  font-size: 1.6rem;
  background-color: white;
`;

const SubHeader = styled.p`
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
`;

const Link = styled.a`
  margin-bottom: 1.5rem;
  background-color: var(--color-brand-600);
  width: 20%;
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

const LoginCreateText = styled.p`
  font-weight: 500;
  margin-bottom: 1.5rem;
`;

function Dashboard() {
  return (
    <DashboardContainer>
      <Heading as="h1">Welcome</Heading>

      <DashboardText>
        You need an account to purchase sneakers, otherwise you are free to
        browse our current inventory
      </DashboardText>

      <LoginCreateDiv>
        <SubHeader>Please sign in or create an account</SubHeader>

        <Link href="/login">Sign In</Link>
        <LoginCreateText>OR</LoginCreateText>
        <Link href="/create-account">Create Account</Link>
      </LoginCreateDiv>
    </DashboardContainer>
  );
}

export default Dashboard;
