import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { Container } from "@mui/system";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function FAQContent() {
  return (
    <>
      <section className="section section-accordion">
        <Container>
          <Typography className="heading">
            Frequently asked questions
          </Typography>
          <div className="line margin-left"></div>
          <Accordion className="accordion">
            <AccordionSummary
              className="summary"
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>What is the AVX Pension Scheme?</Typography>
            </AccordionSummary>
            <AccordionDetails className="detail">
              <Typography>
                The AVX Pension Scheme is a retirement savings plan provided by
                AVX Limited to its employees. It offers a way to save for
                retirement and provides various benefits to help employees plan
                for a secure future.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="accordion">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
              className="summary"
            >
              <Typography>
                Who is eligible to participate in the AVX Pension Scheme?
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="detail">
              <Typography>
                All employees of AVX Limited who meet the eligibility criteria
                specified by the company are eligible to participate in the AVX
                Pension Scheme. Eligibility details can be obtained from the HR
                department or the scheme's documentation.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="accordion">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
              className="summary"
            >
              <Typography>How does the AVX Pension Scheme work?</Typography>
            </AccordionSummary>
            <AccordionDetails className="detail">
              <Typography>
                The AVX Pension Scheme works by deducting a portion of your
                salary and contributing it towards your pension fund. These
                contributions are invested to generate returns over time, which
                accumulate to provide you with a pension income during
                retirement.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="accordion">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4a-content"
              id="panel4a-header"
              className="summary"
            >
              <Typography>
                Can I contribute additional amounts to my pension fund?
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="detail">
              <Typography>
                Yes, the AVX Pension Scheme allows for additional voluntary
                contributions (AVCs). You can choose to contribute extra amounts
                to your pension fund on top of the regular contributions
                deducted from your salary. AVCs provide an opportunity to boost
                your retirement savings further.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="accordion">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel5a-content"
              id="panel5a-header"
              className="summary"
            >
              <Typography>How is my pension fund invested?</Typography>
            </AccordionSummary>
            <AccordionDetails className="detail">
              <Typography>
                The AVX Pension Scheme offers a range of investment options to
                suit your risk appetite and retirement goals. The scheme's
                investment managers invest the contributions into various
                assets, such as stocks, bonds, and funds, with the aim of
                achieving growth over the long term.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Container>
      </section>
    </>
  );
}
