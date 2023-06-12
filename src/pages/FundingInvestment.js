import ContactContent from "../components/ContactContent";
import { Typography, Box, List, ListItem } from "@mui/material";
import { Container } from "@mui/system";
import { FaRegFilePdf } from "react-icons/fa";

export default function FundingInvestment() {
  return (
    <>
      <section className="section section-heading">
        <Container>
          <Typography className="heading">Funding and Investment</Typography>
        </Container>
      </section>
      <section className="section section-list">
        <Container>
          <Box className="introduction">
            <Box className="title">
              <Typography className="heading">
                More on Funding and Investment
              </Typography>
              <Box className="line margin-left"></Box>
            </Box>
            <Box className="detail">
              <Typography>
                Welcome to the Funding and Investment page of the AVX Limited
                Pension Scheme website. Here, you will find all the information
                you need about the funding and investment of the scheme.
              </Typography>
            </Box>
          </Box>
          <Box className="link-list">
            <Typography className="heading">
              Actuarial Valuation Report
            </Typography>
            {/* <Typography className="sub-desc">
              The Actuarial Valuation Report provides detailed information on
              the funding position of the scheme, including the assets and
              liabilities of the scheme, and the assumptions used to calculate
              the funding position.
            </Typography> */}

            <List>
              <ListItem>
                <a
                  href="https://www.avxlimitedpensionscheme.com/pdfs/Rpt_ME_001_AVX_Scheme_Funding_Report_of_the_Actuarial_Valuation_2021.pdf"
                  target="_blank"
                >
                  <FaRegFilePdf /> A ful report on the Scheme's finances at 5
                  April 2021
                </a>
              </ListItem>
              <ListItem>
                <a
                  href="https://www.avxlimitedpensionscheme.com/pdfs/AVX%20Statutory%20Funding%20Report%20-%205%20April%202018.pdf"
                  target="_blank"
                >
                  <FaRegFilePdf /> A full report on the Scheme's finances at 5
                  April 2018
                </a>
              </ListItem>
              <ListItem>
                <a
                  href="https://www.avxlimitedpensionscheme.com/pdfs/OtS_jh_003_AVX_Scheme%20Funding%20Report.pdf"
                  target="_blank"
                >
                  <FaRegFilePdf /> A full report on the Scheme's finances at 5
                  April 2015
                </a>
              </ListItem>
              <ListItem>
                <a
                  href="https://www.avxlimitedpensionscheme.com/pdfs/signed_valuation_report_2012.pdf"
                  target="_blank"
                >
                  <FaRegFilePdf /> A full report on the Scheme's finances at 5
                  April 2012
                </a>
              </ListItem>
              <ListItem>
                <a
                  href="https://www.avxlimitedpensionscheme.com/pdfs/signed_valuation_report.pdf"
                  target="_blank"
                >
                  <FaRegFilePdf /> A full report on the Scheme's finances at 5
                  April 2009
                </a>
              </ListItem>
            </List>
          </Box>
          <Box className="link-list">
            <Typography className="heading">
              Summary Funding Statement
            </Typography>
            {/* <Typography className="sub-desc">
              The Summary Funding Statements provide members of the scheme with
              the latest details of the scheme's funding position and show the
              steps taken by the Trustees to ensure the scheme remains
              well-funded.
            </Typography> */}
            <List>
              <ListItem>
                <a
                  href="https://www.avxlimitedpensionscheme.com/pdfs/2021_SFS.pdf"
                  target="_blank"
                >
                  <FaRegFilePdf /> A summary of the Scheme's financial health
                  2021
                </a>{" "}
              </ListItem>
              <ListItem>
                <a
                  href="https://www.avxlimitedpensionscheme.com/pdfs/Summary_Funding_Statement_2020.pdf"
                  target="_blank"
                >
                  <FaRegFilePdf /> A summary of the Scheme's financial health
                  2020
                </a>
              </ListItem>
              <ListItem>
                <a
                  href="https://www.avxlimitedpensionscheme.com/pdfs/SFS_2019.pdf"
                  target="_blank"
                >
                  <FaRegFilePdf /> A summary of the Scheme's financial health
                  2019
                </a>
              </ListItem>
              <ListItem>
                <a
                  href="https://www.avxlimitedpensionscheme.com/pdfs/AVX%202017%20Summary%20Funding%20Statement%20-%20final%20version.pdf"
                  target="_blank"
                >
                  <FaRegFilePdf /> A summary of the Scheme's financial health
                  2017
                </a>
              </ListItem>
              <ListItem>
                <a
                  href="https://www.avxlimitedpensionscheme.com/pdfs/SummaryFundingStatement-2016.pdf"
                  target="_blank"
                >
                  <FaRegFilePdf /> A summary of the Scheme's financial health
                  2016
                </a>
              </ListItem>
              <ListItem>
                <a
                  href="https://www.avxlimitedpensionscheme.com/pdfs/AVX%202015%20Summary%20Funding%20Statement%20-%20Final.pdf"
                  target="_blank"
                >
                  <FaRegFilePdf /> A summary of the Scheme's financial health
                  2015
                </a>
              </ListItem>
              <ListItem>
                <a
                  href="https://www.avxlimitedpensionscheme.com/pdfs/Ot_ck_001-Summary-Funding-Statement-2013.pdf"
                  target="_blank"
                >
                  <FaRegFilePdf /> A summary of the Scheme's financial health
                  2014
                </a>
              </ListItem>
              <ListItem>
                <a
                  href="https://www.avxlimitedpensionscheme.com/pdfs/Ot_SM_001_Summary_Funding_Statement_2012.pdf"
                  target="_blank"
                >
                  <FaRegFilePdf /> A summary of the Scheme's financial health
                  2013
                </a>
              </ListItem>
            </List>
          </Box>
          <Box className="link-list">
            <Typography className="heading">Newsletter</Typography>
            <List>
              <ListItem>
                <a
                  href="https://www.avxlimitedpensionscheme.com/pdfs/2022_newsletter.pdf"
                  target="_blank"
                >
                  <FaRegFilePdf /> Member Newsletter 2022
                </a>
              </ListItem>
              <ListItem>
                <a
                  href="https://www.avxlimitedpensionscheme.com/pdfs/AVX_Newsletter_Dec%202020_Final.pdf"
                  target="_blank"
                >
                  <FaRegFilePdf /> Member Newsletter 2020
                </a>
              </ListItem>
              <ListItem>
                <a
                  href="https://www.avxlimitedpensionscheme.com/pdfs/newsletter_2019.pdf"
                  target="_blank"
                >
                  <FaRegFilePdf /> Member Newsletter 2019
                </a>
              </ListItem>
              <ListItem>
                <a
                  href="https://www.avxlimitedpensionscheme.com/pdfs/LtS_SBG_004_draft%20newsletter%202017.pdf"
                  target="_blank"
                >
                  <FaRegFilePdf /> Member Newsletter 2017
                </a>
              </ListItem>
              <ListItem>
                <a
                  href="https://www.avxlimitedpensionscheme.com/pdfs/Final%20newsletter%20-%20updated_2016.pdf"
                  target="_blank"
                >
                  <FaRegFilePdf /> Member Newsletter 2016
                </a>
              </ListItem>
              <ListItem>
                <a
                  href="https://www.avxlimitedpensionscheme.com/pdfs/Final%20Newsletter%202015%20-%20Version%20for%20Minprint.pdf"
                  target="_blank"
                >
                  <FaRegFilePdf /> Member Newsletter 2015
                </a>
              </ListItem>
            </List>
          </Box>
          <Box className="link-list">
            <Typography className="heading">
              Schedule of Contributions
            </Typography>
            <List>
              <ListItem>
                <a
                  href="https://www.avxlimitedpensionscheme.com/pdfs/Schedule_of_Contributions-signed_and_certified.pdf"
                  target="_blank"
                >
                  <FaRegFilePdf /> Details of the contributions payable by the
                  Company – 2021 valuation
                </a>
              </ListItem>
              <ListItem>
                <a
                  href="https://www.avxlimitedpensionscheme.com/pdfs/AVX_Signed%20Schedule%20of%20Contributions.pdf"
                  target="_blank"
                >
                  <FaRegFilePdf /> Details of the contributions payable by the
                  Company – 2018 valuation
                </a>
              </ListItem>
              <ListItem>
                <a
                  href="https://www.avxlimitedpensionscheme.com/pdfs/Signed%20Schedule%20of%20Contributions.pdf"
                  target="_blank"
                >
                  <FaRegFilePdf /> Details of the contributions payable by the
                  Company – 2015 valuation
                </a>
              </ListItem>
              <ListItem>
                <a
                  href="https://www.avxlimitedpensionscheme.com/pdfs/signed_replacement_SoC_and_certification_(post_merger).pdf"
                  target="_blank"
                >
                  <FaRegFilePdf /> Details of the contributions payable by the
                  Company – 2012 valuation (post merger)
                </a>
              </ListItem>
              <ListItem>
                <a
                  href="https://www.avxlimitedpensionscheme.com/pdfs/signed_SoC(Pre-merger).pdf"
                  target="_blank"
                >
                  <FaRegFilePdf /> Details of the contributions payable by the
                  Company – 2012 valuation (pre-merger)
                </a>
              </ListItem>
              <ListItem>
                <a
                  href="https://www.avxlimitedpensionscheme.com/pdfs/signed%20SoC.PDF"
                  target="_blank"
                >
                  <FaRegFilePdf /> Details of the contributions payable by the
                  Company – 2009 valuation
                </a>
              </ListItem>
            </List>
          </Box>
          <Box className="link-list">
            <Typography className="heading">
              The Scheme's Recovery Plan
            </Typography>
            <List>
              <ListItem>
                <a
                  href="https://www.avxlimitedpensionscheme.com/pdfs/Signed%20Recovery%20Plan_2015_Valuation.pdf"
                  target="_blank"
                >
                  <FaRegFilePdf /> Details of the plan to pay off any shortfall
                  in the Scheme's assets – 2015 valuation
                </a>
              </ListItem>
              <ListItem>
                <a
                  href="https://www.avxlimitedpensionscheme.com/pdfs/signed_replacement_recovery_plan_(post%20merger).pdf"
                  target="_blank"
                >
                  <FaRegFilePdf /> Details of the plan to pay off any shortfall
                  in the Scheme's assets – 2012 valuation (post merger)
                </a>
              </ListItem>
              <ListItem>
                <a
                  href="https://www.avxlimitedpensionscheme.com/pdfs/signed_recovery_plan(Pre-merger).pdf"
                  target="_blank"
                >
                  <FaRegFilePdf /> Details of the plan to pay off any shortfall
                  in the Scheme's assets – 2012 valuation (pre-merger)
                </a>
              </ListItem>
              <ListItem>
                <a
                  href="https://www.avxlimitedpensionscheme.com/pdfs/signed%20recovery%20plan.PDF"
                  target="_blank"
                >
                  <FaRegFilePdf /> Details of the plan to pay off any shortfall
                  in the Scheme's assets – 2009 valuation
                </a>
              </ListItem>
            </List>
          </Box>
          <Box className="link-list">
            <Typography className="heading">
              Statement of Investment Principles
            </Typography>
            <List>
              <ListItem>
                <a
                  href="https://www.avxlimitedpensionscheme.com/pdfs/SIP_Sept_2020.pdf"
                  target="_blank"
                  class="bodyLink"
                >
                  <FaRegFilePdf /> The Trustees policy on investing the Scheme’s
                  assets
                </a>
              </ListItem>
            </List>
          </Box>
          <Box className="link-list">
            <Typography className="heading">
              Investment Policy Implementation Document
            </Typography>
            <List>
              <ListItem>
                <a
                  href="https://www.avxlimitedpensionscheme.com/pdfs/AVX_Implementation_Statement_2021.pdf"
                  target="_blank"
                  class="bodyLink"
                >
                  <FaRegFilePdf /> Further detail relating to the Scheme’s
                  investments
                </a>
              </ListItem>
            </List>
          </Box>
        </Container>
      </section>

      <ContactContent />
    </>
  );
}
