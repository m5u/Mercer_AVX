import { Container } from "@mui/system";
import { Typography, Grid, Button, Box } from "@mui/material";
import ContactImg from "../images/contact.png";

export default function ContactContent() {
  return (
    <>
      <section className="section section-contact">
        <Container>
          <Box className="contact-wrap">
            <Box className="image">
              <img src={ContactImg} alt="Contact Illustration" />
            </Box>
            <Box className="content">
              <Typography className="heading">Looking For Help</Typography>
              <div className="line margin-left"></div>
              <Typography>
                If you have any questions about your Nest account, our help
                centre is on hand with information and support.
              </Typography>
              <Button class="btn btn-primary learn-more">
                <span class="circle" aria-hidden="true">
                  <span class="icon arrow"></span>
                </span>
                <span class="button-text">Get Help Now</span>
              </Button>
            </Box>
          </Box>
        </Container>
      </section>
    </>
  );
}
