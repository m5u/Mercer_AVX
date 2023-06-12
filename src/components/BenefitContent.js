import { Container } from "@mui/system";
import { Typography, Grid, Box, List, ListItem, Button } from "@mui/material";
import HeroImg1 from "../images/saving.jpg";
import { ReactComponent as Check } from "../images/check.svg";
import { Link } from "react-router-dom";

export default function BenefitContent() {
  const contentText = {
    text1:
      "Discover how your pension may be revalued during periods of deferment, ensuring that the value keeps up with inflation and potential changes in economic conditions.",
    text2:
      "Learn about the possibility of retiring early and the advantages it offers. We provide an example to illustrate the benefits of early retirement within the AVX Limited Pension Scheme.",
    text3:
      "Explore the option of cash commutation, which allows you to exchange a portion of your pension for a lump sum payment. We provide an example to help you understand how cash commutation works.",
  };

  return (
    <>
      <section className="section benefit-section">
        <Container>
          {/* <Grid container className="benefit">
            <Grid item md={5} className="benefit-left-content">
              <Box className="image">
                <img src={HeroImg1} alt="Hero Section Image" />
              </Box>
            </Grid>
            <Grid item md={7} className="benefit-right-content">
              <Typography className="tag">
                Understand Your Investment
              </Typography>
              <Typography className="heading">
                Plan for a Bright Future
              </Typography>
              <Typography>
                We provide easy-to-use online tools and calculators to help you
                estimate your pension income, understand your investment
                options, and plan for a comfortable retirement. Take control of
                your future today.
              </Typography>
              <List>
                <ListItem>
                  <Check className="check-icon" />
                  <Typography>
                    Discover how your pension may be revalued during periods of
                    deferment, ensuring that the value keeps up with inflation
                    and potential changes in economic conditions.
                  </Typography>
                </ListItem>
                <ListItem>
                  <img src={Check} alt="Check Icon" className="check-icon" />
                  <Typography>
                    Learn about the possibility of retiring early and the
                    advantages it offers. We provide an example to illustrate
                    the benefits of early retirement within the AVX Limited
                    Pension Scheme.
                  </Typography>
                </ListItem>
                <ListItem>
                  <img src={Check} alt="Check Icon" className="check-icon" />
                  <Typography>
                    Explore the option of cash commutation, which allows you to
                    exchange a portion of your pension for a lump sum payment.
                    We provide an example to help you understand how cash
                    commutation works.
                  </Typography>
                </ListItem>
              </List>
            </Grid>
          </Grid> */}

          <Box className="benefit-content-wrap">
            <Box className="title">
              <Typography className="heading">
                Plan for a Bright Future
              </Typography>
              <div className="line margin-left"></div>
            </Box>
            <Box className="benefit-wrap">
              <Box
                className="item"
                component={Link}
                to={`/your benefits`}
                target="_blank"
              >
                <Typography className="sub-heading">
                  Revaluation in deferment
                </Typography>
                <Typography>{contentText.text1.slice(0, 100)}...</Typography>

                <Button className="btn-arrow">
                  <span className="arrow"></span>
                </Button>
              </Box>
              <Box
                className="item"
                component={Link}
                to={`/your benefits`}
                target="_blank"
              >
                <Typography className="sub-heading">
                  Early Retirement
                </Typography>
                <Typography>{contentText.text2.slice(0, 100)}...</Typography>
                <Button className="btn-arrow">
                  <span className="arrow"></span>
                </Button>
              </Box>
              <Box
                className="item"
                component={Link}
                to={`/your benefits`}
                target="_blank"
              >
                <Typography className="sub-heading">
                  Cash Commutation
                </Typography>
                <Typography>{contentText.text3.slice(0, 100)}...</Typography>
                <Button className="btn-arrow">
                  <span className="arrow"></span>
                </Button>
              </Box>
            </Box>
          </Box>
        </Container>
      </section>
    </>
  );
}
