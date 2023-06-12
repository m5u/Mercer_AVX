import { Typography, Box, Button } from "@mui/material";
import { Container } from "@mui/system";
import Theif from "../images/thief.png";

export default function ScamContent() {
  return (
    <>
      <section className="section">
        <Container>
          {/* <Box className="scam-wrap">
            <Box className="content">
              <Typography className="heading">
                Defeat Scammers: Unveiling Their Tricks to Protect Yourself!
              </Typography>
              <Typography>
                Stay ahead of smart and elusive scams with our expert guidance.
                Unmask their tactics, arm yourself with knowledge, and secure
                your future. Explore now to safeguard against fraud!
              </Typography>

              <Button class="btn btn-primary learn-more">
                <span class="circle" aria-hidden="true">
                  <span class="icon arrow"></span>
                </span>
                <span class="button-text">Learn More</span>
              </Button>
            </Box>
          </Box> */}
          <Box className="scam-wrap">
            <Box className="content">
              <Typography className="heading">
                Defeat Scammers: Unveiling Their Tricks to Protect Yourself!
              </Typography>
              <Typography>
                Stay ahead of smart and elusive scams with our expert guidance.
                Unmask their tactics, arm yourself with knowledge, and secure
                your future. Explore now to safeguard against fraud!
              </Typography>
              {/* <Button className="btn btn-primary">Learn More</Button> */}
              <Button class="btn btn-primary learn-more">
                <span class="circle" aria-hidden="true">
                  <span class="icon arrow"></span>
                </span>
                <span class="button-text">Learn More</span>
              </Button>
            </Box>
            <Box className="image">
              <img src={Theif} alt="Scam Illustration" />
            </Box>
          </Box>
        </Container>
      </section>
    </>
  );
}
