import { Container } from "@mui/system";
import { Typography, Box, List, ListItem } from "@mui/material";
import ContactContent from "../components/ContactContent";
import { BiEnvelope, BiPhone, BiMobileAlt } from "react-icons/bi";

export default function About() {
  return (
    <>
      <section className="section section-heading">
        <Container>
          <Typography className="heading">About Us</Typography>
        </Container>
      </section>
      <section className="section">
        <Container>
          <Box className="introduction">
            <Box className="title">
              <Typography className="heading">
                AVX Pension Scheme: Empowering Your Retirement Journey
              </Typography>
              <div className="line margin-left"></div>
            </Box>
            <Box className="detail">
              <Typography>
                AVX Pension Scheme is a single-employer corporate pension fund
                based in Glasgow, Scotland, providing benefits for all eligible
                employees of the AVX Corporation. Our scheme was founded in 2005
                and is managed and governed by a Board of Trustees. With years
                of experience and a strong track record, we offer comprehensive
                pension solutions tailored to meet the unique needs of
                individuals and organizations.
              </Typography>
              <Typography className="margin-top">
                Our mission is to provide our members with a secure and reliable
                pension plan that meets their retirement needs. We are committed
                to ensuring that our members receive the benefits they are
                entitled to, and we strive to provide excellent customer
                service.
              </Typography>
            </Box>
          </Box>
          {/* <Typography>
            Our pension scheme is designed to provide our members with a
            reliable source of income during their retirement years. Members
            contribute a portion of their salary to the scheme, and AVX
            Corporation also contributes to the scheme on their behalf. The
            contributions are invested in a range of assets, including equities,
            bonds, and property, to generate returns that will fund the members'
            retirement benefits.
          </Typography> */}
        </Container>
      </section>
      <section className="section bg-light-grey">
        <Container>
          <Box className="work">
            <Box>
              <Typography className="heading">How it Works</Typography>
              <div className="line margin-left"></div>
              <Typography className="">
                The AVX Pension Scheme is designed to provide members with a
                reliable source of income during their retirement years. Here
                are the major points on how it works:
              </Typography>
            </Box>
            <Box>
              <Box className="work-content">
                <Box className="item">
                  <div className="number">
                    <Typography>1</Typography>
                  </div>
                  <Typography>
                    Members contribute a portion of their salary to the scheme,
                    and AVX Corporation also contributes to the scheme on their
                    behalf.
                  </Typography>
                </Box>
                <Box className="item">
                  <div className="number">
                    <Typography>2</Typography>
                  </div>
                  <Typography>
                    The contributions are invested in a range of assets,
                    including equities, bonds, and property, to generate returns
                    that will fund the members' retirement benefits.
                  </Typography>
                </Box>
                <Box className="item">
                  <div className="number">
                    <Typography>3</Typography>
                  </div>
                  <Typography>
                    The assets of the plan are managed and governed by a Board
                    of Trustees who are responsible for ensuring that the scheme
                    is managed effectively and that the members receive the
                    benefits they are entitled to.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </section>
      <section className="section section-member">
        <Container>
          <Typography className="heading text-center"> Who's Who</Typography>
          <div className="line"></div>
          <Typography className="sub-desc text-center">
            Our Board of Trustees is responsible for managing and governing the
            AVX Pension Scheme. The Board is made up of the following members:
          </Typography>
          <Box className="members-content-wrap trustees">
            <Box className="card">
              <Typography className="name">S H Cunday</Typography>
              <Typography className="position">
                Member Nominated Trustee, Paignton
              </Typography>
              <a
                href="mailto:simon-cunday@blueyonder.co.uk?subject=AVX Limited Pension Scheme"
                class="contactsLinks"
              >
                <BiEnvelope /> simon-cunday@blueyonder.co.uk
              </a>
              <Typography className="phone">
                <BiPhone /> 01803 401 766
              </Typography>
            </Box>
            <Box className="card">
              <Typography className="name">P Fenwick</Typography>
              <Typography className="position">
                Member Nominated Trustee and Pensioner, Paignton
              </Typography>
              <a
                href="mailto:peterfenwick68@yahoo.co.uk?subject=AVX Limited Pension Scheme"
                class="contactsLinks"
              >
                <BiEnvelope /> peterfenwick68@yahoo.co.uk
              </a>
              <Typography className="phone">
                <BiPhone /> 01803 782 723
              </Typography>
            </Box>
            <Box className="card">
              <Typography className="name">R J Lawrence</Typography>
              <Typography className="position">
                Employer Nominated Trustee
              </Typography>
              <a
                href="mailto:robert.lawrence51@btinternet.com?subject=AVX%20Limited%20Pension%20Scheme"
                class="contactsLinks"
              >
                <BiEnvelope /> robert.lawrence51@btinternet.com
              </a>
              <Typography className="phone">
                <BiPhone /> N/A
              </Typography>
            </Box>
            <Box className="card">
              <Typography className="name">H McCann</Typography>
              <Typography className="position">
                Employer Nominated Trustee, Fleet
              </Typography>
              <a
                href="mailto:helen.mccann@kyocera-avx.com"
                class="contactsLinks"
              >
                <BiEnvelope /> helen.mccann@kyocera-avx.com
              </a>
              <Typography className="phone">
                <BiPhone /> 02870 340 661{" "}
              </Typography>
            </Box>
            <Box className="card">
              <Typography className="name">W McIlmoyle</Typography>
              <Typography className="position">
                Member Nominated Trustee, Coleraine
              </Typography>
              <a
                href="mailto:wilbert.mcilmoyle@kyocera-avx.com"
                class="contactsLinks"
              >
                <BiEnvelope /> wilbert.mcilmoyle@kyocera-avx.com
              </a>
              <Typography className="phone">
                <BiPhone /> 02870 340 447{" "}
              </Typography>
            </Box>
            <Box className="card">
              <Typography className="name"> N Birkett</Typography>
              <Typography className="position">
                Employer Nominated Trustee, Frimley
              </Typography>
              <a
                href="mailto:nick.birkett@kyocera-avx.com"
                class="contactsLinks"
              >
                <BiEnvelope /> nick.birkett@kyocera-avx.com
              </a>
              <Typography className="phone">
                <BiPhone /> 01276 697 008{" "}
              </Typography>
            </Box>
            <Box className="card">
              <Typography className="name">V Vassou</Typography>
              <Typography className="position">
                Employer Nominated Trustee
              </Typography>
              <a
                href="mailto:Vassos_Vassou@dalriadatrustees.co.uk"
                class="contactsLinks"
              >
                <BiEnvelope /> Vassos_Vassou@dalriadatrustees.co.uk
              </a>
              <Typography className="phone">
                <BiPhone /> 0203 691 2950{" "}
              </Typography>
            </Box>
          </Box>
          <Box>
            <Typography className="heading text-center">
              AVC providers (Prudential)
            </Typography>
            <Box className="line"></Box>
            <Typography className="sub-desc">
              For more information on how your AVCs are invested and any other
              queries.
            </Typography>

            <Box className="members-content-wrap">
              <Box className="card">
                <Typography className="name">James Radley </Typography>
                <Typography className="position">
                  Prudential,Client Manager, DC Corporate Solutions
                </Typography>
                <a
                  href="mailto:james.radley@prudential.co.uk?subject=AVX Limited Pension Scheme"
                  class="contactsLinks"
                >
                  <BiEnvelope /> james.radley@prudential.co.uk
                </a>

                <Typography className="phone">
                  <BiPhone /> 0845 268 0409
                </Typography>
                <Typography className="phone">
                  <BiMobileAlt /> 07825 403794
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </section>
      <ContactContent />
    </>
  );
}
