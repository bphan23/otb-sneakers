import styled from "styled-components";

const HomePageLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 2.5rem;
  background-color: var(--color-grey-50);
`;

const Header = styled.h1`
  text-align: center;
  font-size: 3rem;
  font-weight: 600;
`;

const Text = styled.p`
  text-align: center;
`;

const LoginCreateDiv = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  border: 1px solid var(--color-grey-100);
  padding: 2rem;
  font-size: 1.6rem;
  background-color: white;
`;

const Link = styled.a`
  margin-bottom: 1.5rem;
  margin-top: 1.5rem;
  background-color: var(--color-brand-600);
  text-align: center;
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
  text-align: center;
  font-weight: 500;
`;

// pre home page - before users are signed in
function PreHomePage() {
  return (
    <HomePageLayout>
      <Header>Welcome to OTB Sneakers!</Header>
      <Text>
        You need an account to acess our website so please create a new account
        or login to an existing account
      </Text>

      <LoginCreateDiv>
        <LoginCreateText>Please login or create an account</LoginCreateText>

        <Link href="/login">Login</Link>

        <LoginCreateText>OR</LoginCreateText>

        <Link href="/create-account">Create Account</Link>
      </LoginCreateDiv>
    </HomePageLayout>
  );
}

export default PreHomePage;
