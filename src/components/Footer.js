import { Container } from "@mui/system";
import { Box, Typography, Grid, List, ListItem, Button } from "@mui/material";
import { BiLogoLinkedin, BiLogoTwitter, BiLogoFacebook } from "react-icons/bi";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import Logo from "../images/logo.jpg";
import { Link } from "react-router-dom";

export default function Footer() {
  const pages = ["Home", "About", "Your Benefits", "Funding & Investment"];
  const otherPages = [
    "Scam",
    "Trustees' Bulletin Board",
    "Legal Documents",
    "Contact Us",
  ];
  return (
    <>
      <footer className="section section-footer">
        <Container>
          <Box
            className="footer"
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <Box sx={{ width: { xs: "100%", md: "35%" } }}>
              <a href="/home" className="logo">
                <img src={Logo} />
              </a>
              <Typography
                sx={{
                  mt: "16px",
                  mr: { xs: "0", md: "15%" },
                  fontWeight: "400",
                  lineHeight: "1.6",
                }}
              >
                AVX Limited Pension Scheme is designed to provide you with a
                secure and reliable way to plan for your retirement.
              </Typography>
            </Box>
            <Box sx={{ width: { xs: "100%", md: "20%" } }}>
              <Typography variant="h4">Explore</Typography>
              <Box
                className="footer-menu"
                sx={{
                  display: "flex",
                  flexDirection: { xs: "row", md: "column" },
                }}
              >
                {pages.map((page) => (
                  <Button
                    component={Link}
                    to={`/${page}`}
                    key={page}
                    className="menu"
                    sx={{ my: 2, color: "white" }}
                  >
                    {page}
                  </Button>
                ))}
              </Box>
            </Box>
            <Box sx={{ width: { xs: "100%", md: "20%" } }}>
              <Typography variant="h4">Other Links</Typography>
              <Box
                className="footer-menu"
                sx={{
                  display: "flex",
                  flexDirection: { xs: "row", md: "column" },
                }}
              >
                {otherPages.map((page) => (
                  <Button
                    component={Link}
                    to={`/${page}`}
                    key={page}
                    className="menu"
                    // sx={{ my: 2, color: "white" }}
                  >
                    {page}
                  </Button>
                ))}
              </Box>
            </Box>
            <Box sx={{ width: { xs: "100%", md: "25%" } }}>
              <Typography variant="h4">Connect with us</Typography>
              <List className="social-link">
                <ListItem
                  className="item"
                  component="a"
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF />
                </ListItem>
                <ListItem
                  className="item"
                  component="a"
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter />
                </ListItem>
                <ListItem
                  className="item"
                  component="a"
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </ListItem>
              </List>
            </Box>
          </Box>
          <Box className="footer-copyright">
            <Typography>© Copyright AVX 2023</Typography>
          </Box>
        </Container>
      </footer>
    </>
  );
}
