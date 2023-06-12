import { Typography, Box, Button } from "@mui/material";
import { Container } from "@mui/system";

export default function ContactUs() {
  return (
    <>
      <section className="section section-heading">
        <Container>
          <Typography className="heading">Contact Us</Typography>
        </Container>
      </section>
      <section className="section">
        <Container>
          <Box className="contact-block-wrap">
            <Box className="contact-information">
              <Typography className="heading">Get Connected</Typography>
              <div className="line margin-left"></div>
              <Typography>
                If you require assistance, please don't hesitate to contact our
                Scheme Administrator. We are here to support you.
              </Typography>

              <Box className="detail-wrap">
                <Box className="detail">
                  <Typography component="span">Phone:</Typography>
                  <Typography>864-967-2150</Typography>
                </Box>
                <Box className="detail">
                  <Typography component="span">Address:</Typography>
                  <Typography>
                    Mercer Limited 5 George Square Glasgow G2 1AR
                  </Typography>
                </Box>
                <Box className="detail">
                  <Typography component="span">Email:</Typography>
                  <Typography>glasgowteam4@mercer.com</Typography>
                </Box>
              </Box>
              <Box className="teams">
                <Typography>
                  To access the contact details of our Administrator team,
                  kindly click{" "}
                  <a
                    href="https://www.avxlimitedpensionscheme.com/pdfs/Administration_Team_Chart.pdf"
                    target="_blank"
                    rel="noreferrer"
                    n
                  >
                    here
                  </a>
                  .
                </Typography>
              </Box>

              <a href="mailto:glasgowteam4@mercer.com" className="btn-wrap">
                <Button class="btn btn-primary">
                  <span class="circle" aria-hidden="true">
                    <span class="icon arrow"></span>
                  </span>
                  <span class="button-text"> Send Email</span>
                </Button>
              </a>

              {/* <a href="pdfs/Administration_Team_Chart.pdf" target="_blank">
                  <Button class="btn btn-primary">
                    <span class="circle" aria-hidden="true">
                      <span class="icon arrow"></span>
                    </span>
                    <span class="button-text">Team Contacts</span>
                  </Button>
                </a> */}
            </Box>

            <Box className="contact-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2239.1201787342543!2d-4.251890584065263!3d55.86058128058228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x488846a0386faa49%3A0xc408f98d9e66a084!2sMercer!5e0!3m2!1sen!2suk!4v1686297229337!5m2!1sen!2suk"
                width="600"
                height="450"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </Box>
          </Box>
        </Container>
      </section>
    </>
  );
}
