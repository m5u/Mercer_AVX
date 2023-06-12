import React, { useState } from "react";
import ContactContent from "../components/ContactContent";
import { Typography, Box, List, ListItem, Button, Grid } from "@mui/material";
import { Container } from "@mui/system";
import { BiEnvelope } from "react-icons/bi";

export default function BulletinBoard() {
  return (
    <>
      <section className="section section-heading">
        <Container>
          <Typography className="heading">Trustees' Bulletin Board</Typography>
        </Container>
      </section>
      <section className="section">
        <Container>
          <Box className="bulletin-content-wrap">
            <Typography className="heading">
              Market Turbulence - September 2022
            </Typography>
            <Box className="line margin-left"></Box>
            <Typography>
              You have likely seen media reports over the last week or so,
              highlighting the market reaction to the Government's mini-budget,
              which was announced on 23 September 2022. Some of this coverage
              has focussed on the impact of current market conditions on pension
              schemes; in particular, schemes which use a mechanism known as
              Liability Driven Investment (LDI), a risk management strategy
              which aims to match assets with planned future payments from the
              scheme.
            </Typography>
            <Typography className="margin-top">
              While the Scheme does invest in LDI, it represents a small
              proportion of the total assets of the Scheme. The Trustees have
              met with their investment consultants who are working closely with
              investment managers and others in the industry. The situation is
              being closely monitored and any necessary steps to manage the
              Scheme through this period of market turbulence will be taken. The
              Scheme remains in a very strong financial positon and continues to
              be well funded.
            </Typography>
          </Box>
          <Box className="bulletin-content-wrap">
            <Typography className="heading">Retirement Guide</Typography>
            <Box className="line margin-left"></Box>
            <Typography>
              The Trustees have prepared a retirement process guide for your
              information. The guide sets out what is involved in the process.
              We would encourage you to read over this document. A copy is
              available by clicking{" "}
              <a
                href="https://www.avxlimitedpensionscheme.com/pdfs/05ii_AVX-Retirement_Process-001.pdf"
                target="_blank"
                class="bodyLink"
              >
                here
              </a>
              .
            </Typography>
          </Box>
          <Box className="bulletin-content-wrap">
            <Typography className="heading">GDPR - Privacy Notice</Typography>
            <Box className="line margin-left"></Box>
            <Typography>
              As detailed in the Trustees' letter dated 15 May 2018, the law
              relating to data protection changed from 25 May 2018. As part of
              this change, the Trustees reviewed their data protection
              arrangements. The Trustees' privacy notice setting out what data
              we hold, how we use it and how long we keep it, can be accessed by
              clicking{" "}
              <a
                href="https://www.avxlimitedpensionscheme.com/pdfs/GDPR_Privacy_Notice_and_Covering_Letter.pdf"
                target="_blank"
                class="bodyLink"
              >
                here
              </a>
              .
            </Typography>
          </Box>
          <Box className="bulletin-content-wrap">
            <Typography className="heading">
              Pension Liberation Schemes
            </Typography>
            <Box className="line margin-left"></Box>
            <Typography>
              The Pensions Regulator has launched an initiative to clamp down on
              fraudulent schemes that are offering members access to their
              pension savings before age 55. These types of arrangement are
              known as pension liberation schemes or pension scams. Pension
              liberation can result in tax charges and penalties of more than
              half the value of a member's pension savings, and those being
              targeted are usually not being told about the potential tax
              implications. This is in addition to high charges, typically 20%
              to 30% for entering into one of these arrangements and high risk
              investments for the remaining pension savings. If you ask for a
              transfer value quotation the Scheme's administrators will send you
              information on these schemes to help protect you. Further
              information is available at:{" "}
              <a
                href="http://www.thepensionsregulator.gov.uk/pension-liberation-fraud.aspx"
                target="_blank"
                class="bodyLink"
              >
                http://www.thepensionsregulator.gov.uk/pension-liberation-fraud.aspx
              </a>
              .
            </Typography>
          </Box>
          <Box className="bulletin-content-wrap">
            <Typography className="heading">Court Order</Typography>
            <Box className="line margin-left"></Box>
            <Typography>
              The High Court gave a judgement in relation to increases to
              pensions for pensionable service before 5 April 1997 and between 6
              April 1997 and 6 April 2006 in the AVX Limited Pension Scheme. The
              High Court order which the Trustees received as well as a
              communication to members can be found on the{" "}
              <a
                href="/legal documents"
                target="_blank"
                rel="noopener noreferrer"
                className="bodyLink"
              >
                Legal Documents
              </a>{" "}
              page.
            </Typography>
          </Box>
          <Box className="bulletin-content-wrap">
            <Typography className="heading">Expression of Wish Form</Typography>
            <Box className="line margin-left"></Box>
            <Typography>
              An Expression of Wish form, which gives you the option to elect
              who should receive any death benefits due in the event of your
              death can be found on the{" "}
              <a
                href="/your benefits"
                target="_blank"
                rel="noopener noreferrer"
                className="bodyLink"
              >
                Your Benefits
              </a>{" "}
              page.
            </Typography>
          </Box>
          <Box className="bulletin-content-wrap">
            <Typography className="heading">Keeping us up to Date</Typography>
            <Box className="line margin-left"></Box>
            <Typography>
              Please let the Scheme's administrator, Mercer, know if you change
              address as it is important that you keep us up to date so that we
              can contact you regarding your pension.
            </Typography>
            <Typography className="margin-top">
              The latest Newsletter and Summary Funding Statement can be found
              on the{" "}
              <a
                href="/Funding & Investment"
                target="_blank"
                rel="noopener noreferrer"
                className="bodyLink"
              >
                Funding & Investment
              </a>{" "}
              page.
            </Typography>
            <Typography className="margin-top">
              The Trustees last met on 24 November 2022 to discuss the AVX
              Limited Pension Scheme. The next meeting will be held on 20 April
              2023. If you have any questions or queries please contact any of
              your Member Nominated Trustees.
            </Typography>
            <Box className="members-content-wrap">
              <Box className="card">
                <Typography className="name">Simon Cunday</Typography>

                <a
                  href="mailto:simon-cunday@blueyonder.co.uk"
                  class="contactsLinks"
                >
                  <BiEnvelope />
                  simon-cunday@blueyonder.co.uk
                </a>
              </Box>
              <Box className="card">
                <Typography className="name">Peter Fenwick</Typography>

                <a
                  href="mailto:peterfenwick68@yahoo.co.uk"
                  class="contactsLinks"
                >
                  <BiEnvelope />
                  peterfenwick68@yahoo.co.uk
                </a>
              </Box>
              <Box className="card">
                <Typography className="name">Wilbert McIlmoyle</Typography>

                <a
                  href="mailto:wilbert.mcilmoyle@kyocera-avx.com"
                  class="contactsLinks"
                >
                  <BiEnvelope />
                  wilbert.mcilmoyle@kyocera-avx.com
                </a>
              </Box>
            </Box>
          </Box>
        </Container>
      </section>
      <ContactContent />
    </>
  );
}
