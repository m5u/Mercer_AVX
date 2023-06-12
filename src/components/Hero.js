import { Box, Container } from "@mui/system";
import { Grid, Typography, Button } from "@mui/material";
import HeroImg1 from "../images/hero-1.jpg";

export default function Hero() {
  return (
    <>
      <section className="section hero-section">
        <Container className="container">
          <Box className="hero-wrap">
            <Box className="hero-left-content">
              <Typography className="tag">Welcome to AVX</Typography>
              <Typography variant="h1">
                Our mission is help and secure your financial future
              </Typography>
              <Typography className="summary">
                AVX Limited Pension Scheme Providing Comprehensive Pension
                Solutions for Employees, Present and Retired.
              </Typography>
              {/* <Button className="btn btn-primary">Learn More</Button> */}
              <Button class="btn btn-primary learn-more">
                <span class="circle" aria-hidden="true">
                  <span class="icon arrow"></span>
                </span>
                <span class="button-text">Learn More</span>
              </Button>
            </Box>
          </Box>
        </Container>
      </section>
    </>
  );
}
