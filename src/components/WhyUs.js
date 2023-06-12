import { Container } from "@mui/system";
import { Typography, Grid, Box } from "@mui/material";
import { ReactComponent as Guidance } from "../images/guidance.svg";
import { ReactComponent as Performance } from "../images/performance.svg";
import { ReactComponent as Benefits } from "../images/benefit.svg";
import Slide from "@mui/material/Slide";

export default function WhyUs() {
  return (
    <>
      <section className="section">
        <Container>
          <Box className="why-us-wrap">
            <Typography className="heading">Why AVX Pension Scheme?</Typography>
            <div className="line"></div>
            <Typography className="sub-desc">
              We provide help to estimate your pension income, understand your
              investment options, and plan for a comfortable retirement.
            </Typography>
            {/* <Slide direction="up"></Slide> */}

            <Box className="content-wrap">
              <Box item className="content">
                <div className="icon">
                  <Performance />
                </div>
                <Typography className="sub-heading">Expert Guidance</Typography>
                <Typography>
                  Our team of experienced pension advisors is here to assist you
                  at every step of your pension journey. We provide personalized
                  advice, helping you make informed decisions and maximize your
                  retirement savings.
                </Typography>
              </Box>
              <Box item className="content">
                <div className="icon">
                  <Guidance />
                </div>
                <Typography className="sub-heading">
                  Strong Performance
                </Typography>
                <Typography>
                  With a track record of consistent growth, AVX Pension Scheme
                  has consistently delivered attractive returns on investments.
                  Rest assured, your pension savings are in safe hands.
                </Typography>
              </Box>
              <Box item className="content">
                <div className="icon">
                  <Benefits />{" "}
                </div>
                <Typography className="sub-heading">Member Benefits</Typography>
                <Typography>
                  As a valued member of AVX Pension Scheme, you gain access to
                  exclusive perks and benefits, including discounted financial
                  planning services, educational resources, and retirement
                  seminars.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </section>
    </>
  );
}
