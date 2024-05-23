/* eslint-disable no-unused-vars */
import styled from "styled-components";

const HomeHeader = styled.h1`
  font-size: 3rem;
  font-weight: 600;
`;

const HomeSubHeader = styled.h3`
  color: var(--color-brand-600);
  font-size: 2.4rem;
`;

const ContextDiv = styled.div`
  width: 100%;
  border-radius: 1rem;
  padding: 1.5rem;
  background-color: white;
  line-height: 2;
  box-shadow: var(--shadow-sm);
`;

const MissionText = styled.p`
  padding: 2rem;
`;

const PolicyOrderedList = styled.ul`
  padding: 1.5rem;
  list-style-type: square;
`;

const HyperLink = styled.a`
  color: var(--color-brand-600);

  &:hover {
    text-decoration: underline;
  }
`;

const PolicyListItem = styled.li`
  margin-bottom: 1.5rem;
`;

function Dashboard() {
  return (
    <>
      <HomeHeader>Welcome to OTB Sneakers</HomeHeader>

      {/* Mission */}
      <ContextDiv>
        <HomeSubHeader>Our Mission</HomeSubHeader>
        <MissionText>
          Here at <b>Out The Box Sneakers</b>, we are dedicated to providing
          customers with a trusted platform to purchase the most coveted
          sneakers on the market. Our commitment to authenticity, quality, and
          customer satisfaction drives every aspect of our business. We strive
          to curate a diverse selection of highly sought-after sneakers,
          ensuring that our customers can always find the perfect pair to
          express their individual style and passion for footwear culture. With
          a focus on integrity and excellence, we aim to create an unparalleled
          shopping experience that celebrates the excitement and creativity of
          sneaker culture while fostering a community built on trust and
          appreciation for the art of sneaker design.
        </MissionText>
      </ContextDiv>

      {/* Policies */}
      <ContextDiv>
        <HomeSubHeader>Our Policies</HomeSubHeader>
        <PolicyOrderedList>
          <PolicyListItem>
            <b>Authenticity Guarantee Policy:</b> We guarantee the authenticity
            of all sneakers sold on our platform. Each pair undergoes a thorough
            authentication process by our trained experts to ensure that only
            genuine products are available to our customers.
          </PolicyListItem>

          <PolicyListItem>
            <b>Brand New Guarantee Policy:</b> We guarantee that all sneakers
            sold on our platform are brand new. Each pair undergoes a thorough
            check by our trained experts to ensure that only brand new products
            are available to our customers.
          </PolicyListItem>

          <PolicyListItem>
            <b>Shipping Policy:</b> All sneakers purchased will be shipped
            within 3-5 business days. We strive to provide fast and reliable
            shipping services to ensure timely delivery of orders.
          </PolicyListItem>

          <PolicyListItem>
            <b>Customer Service Policy:</b> We are committed to providing
            exceptional customer service and support. For any questions or
            concerns you can reach us through our{" "}
            <HyperLink href="/support">support form</HyperLink>.
          </PolicyListItem>

          <PolicyListItem>
            <b>Payment Policy:</b> We prioritize the security of online
            transactions and adhere to industry-standard security protocols to
            safeguard customer payment information. All purchases will be
            through{" "}
            <HyperLink href="https://stripe.com/" target="_blank">
              Stripe
            </HyperLink>{" "}
            to protect sensitive data and prevent unauthorized access.
          </PolicyListItem>

          <PolicyListItem>
            <b>Return Policy:</b> All sales are final, no returns.
          </PolicyListItem>
        </PolicyOrderedList>
      </ContextDiv>
    </>
  );
}

export default Dashboard;
