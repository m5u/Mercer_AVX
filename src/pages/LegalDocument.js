import React, { useState } from "react";
import ContactContent from "../components/ContactContent";
import { Typography, Box, List, ListItem, Button, Grid } from "@mui/material";
import { Container } from "@mui/system";
import { FaRegFilePdf } from "react-icons/fa";

export default function LegalDocument() {
  const [showMore, setShowMore] = useState(false);
  const handleToggle = () => {
    setShowMore(!showMore);
  };
  const maxItems = 8;
  const items = [
    <ListItem>
      <a
        href="https://www.avxlimitedpensionscheme.com/pdfs/AVX-Scheme_Annual_Report_and_Accounts_2021.pdf"
        target="_blank"
      >
        <FaRegFilePdf /> Annual Report 2021
      </a>
    </ListItem>,
    <ListItem>
      <a
        href="https://www.avxlimitedpensionscheme.com/pdfs/AVX_final_signed_accounts_2020.pdf"
        target="_blank"
      >
        <FaRegFilePdf /> Annual Report 2020
      </a>
    </ListItem>,
    <ListItem>
      <a
        href="https://www.avxlimitedpensionscheme.com/pdfs/AVX%20Pension%20Scheme%202019%20final%20signed%20accounts.pdf"
        target="_blank"
      >
        <FaRegFilePdf /> Annual Report 2019
      </a>
    </ListItem>,
    <ListItem>
      <a
        href="https://www.avxlimitedpensionscheme.com/pdfs/AVX_pension_signed_accounts.pdf"
        target="_blank"
      >
        <FaRegFilePdf /> Annual Report 2018
      </a>
    </ListItem>,
    <ListItem>
      <a
        href="https://www.avxlimitedpensionscheme.com/pdfs/2017%20AVX%20PENSION%20SCHEME_ANNUAL%20REPORT_SIGNED.pdf"
        target="_blank"
      >
        <FaRegFilePdf /> Annual Report 2017
      </a>
    </ListItem>,
    <ListItem>
      <a
        href="https://www.avxlimitedpensionscheme.com/pdfs/AVX%20Pension%20Scheme%202016%20signed%20accounts.pdf"
        target="_blank"
      >
        <FaRegFilePdf /> Annual Report 2016
      </a>
    </ListItem>,
    <ListItem>
      <a
        href="https://www.avxlimitedpensionscheme.com/pdfs/2015_AVX_PENSION_SCHEME_FINAL_ANNUAL_REPORT.PDF"
        target="_blank"
      >
        <FaRegFilePdf /> Annual Report 2015
      </a>
    </ListItem>,
    <ListItem>
      <a
        href="https://www.avxlimitedpensionscheme.com/pdfs/2014_AVX_PENSION_SCHEME_FINAL_ANNUAL_REPORT.pdf"
        target="_blank"
      >
        <FaRegFilePdf /> Annual Report 2014
      </a>
    </ListItem>,
    <ListItem>
      <a
        href="https://www.avxlimitedpensionscheme.com/pdfs/2013_AVX_PENSION_SCHEME_FINAL_ANNUAL_REPORT.pdf"
        target="_blank"
      >
        <FaRegFilePdf /> Annual Report 2013
      </a>
    </ListItem>,
    <ListItem>
      <a
        href="https://www.avxlimitedpensionscheme.com/pdfs/2012_final_AVX_Ltd_PS_accounts.pdf"
        target="_blank"
      >
        <FaRegFilePdf /> Annual Report 2012
      </a>
    </ListItem>,
    <ListItem>
      <a
        href="https://www.avxlimitedpensionscheme.com/pdfs/SAR_2011.pdfF"
        target="_blank"
      >
        <FaRegFilePdf /> Annual Report 2011
      </a>
    </ListItem>,
    <ListItem>
      <a
        href="https://www.avxlimitedpensionscheme.com/pdfs/SAR%202010%20(signed).pdf"
        target="_blank"
      >
        <FaRegFilePdf /> Annual Report 2010
      </a>
    </ListItem>,
    <ListItem>
      <a
        href="https://www.avxlimitedpensionscheme.com/pdfs/PS_signed_SAR_09.pdf"
        target="_blank"
      >
        <FaRegFilePdf /> Annual Report 2009
      </a>
    </ListItem>,
    <ListItem>
      <a
        href="https://www.avxlimitedpensionscheme.com/pdfs/Rpdmc_final-ps_08.pdf"
        target="_blank"
      >
        <FaRegFilePdf /> Annual Report 2008
      </a>
    </ListItem>,
  ];

  return (
    <>
      <section className="section section-heading">
        <Container>
          <Typography className="heading">Legal Documents</Typography>
        </Container>
      </section>
      <section className="section section-list">
        <Container>
          <Box className="introduction">
            <Box className="title">
              <Typography className="heading">
                More on Legal Documents
              </Typography>
              <Box className="line margin-left"></Box>
            </Box>
            <Box className="detail">
              <Typography>
                The Legal Documents page on the AVX Limited Pension Scheme
                website provides important information about the formal legal
                documents that set out how the scheme is run
              </Typography>
            </Box>
          </Box>
          <Box className="list-content-wrapper">
            <Box item md={8} className="list-left">
              <Box className="link-list">
                <Typography className="heading">The Court Order</Typography>
                <Typography className="sub-desc">
                  The Court Order sets out the terms of a court ruling that
                  affects the scheme. This document is important for members to
                  understand their rights and obligations under the ruling.
                </Typography>

                <List>
                  <ListItem>
                    <a
                      href="https://www.avxlimitedpensionscheme.com/pdfs/Court%20Order.pdf"
                      target="_blank"
                    >
                      <FaRegFilePdf />
                      Court Order
                    </a>
                  </ListItem>
                </List>
              </Box>
              <Box className="link-list">
                <Typography className="heading">
                  Member Communication
                </Typography>
                <Typography className="sub-desc">
                  Member Communication provides important information for scheme
                  members. This document may include updates on the scheme's
                  financial position, changes to the benefits offered, and other
                  important information that members need to be aware of.
                </Typography>

                <List>
                  <ListItem>
                    <a
                      href="https://www.avxlimitedpensionscheme.com/pdfs/Approved%20form%20of%20communication%20to%20%20members%20(24_01_2018).pdf"
                      target="_blank"
                    >
                      <FaRegFilePdf />
                      Member Communication
                    </a>
                  </ListItem>
                </List>
              </Box>
              <Box className="link-list">
                <Typography className="heading">
                  Trust Deed and Rules
                </Typography>
                <Typography className="sub-desc">
                  The Trust Deed and Rules are the formal legal documents
                  setting out how the Scheme is run. The Trustees are currently
                  carrying out a Review and Consolidation exercise on the Trust
                  Deed and Rules. Once finalised, the revised Rules will be
                  added to the website.
                </Typography>
                <List>
                  <ListItem>
                    <a
                      href="https://www.avxlimitedpensionscheme.com/pdfs/Trust_Deed_and_Rules.pdf"
                      target="_blank"
                    >
                      <FaRegFilePdf />
                      AVX Pension Scheme Definitive Trust Deed and Rules dated
                      20 September 1991
                    </a>
                  </ListItem>
                  <ListItem>
                    <a
                      href="https://www.avxlimitedpensionscheme.com/pdfs/Trust_Deed_May2011.pdf"
                      target="_blank"
                    >
                      <FaRegFilePdf />
                      The Varelco Limited Pension Fund Trust Deed and Rules
                    </a>
                  </ListItem>
                </List>
              </Box>
              <Box className="link-list">
                <Typography className="heading">Transfer Agreement</Typography>
                <Typography className="sub-desc">
                  The Transfer Agreement is a formal, legal document governing
                  the transfer of assets and liabilities into the AVX Limited
                  Pension Scheme. The Deed of Amendment is another legal
                  document that may be used to amend the terms of the Transfer
                  Agreement. Both documents are important for members to
                  understand the terms and conditions of any transfers into the
                  scheme.
                </Typography>
                <List>
                  <ListItem>
                    <a
                      href="https://www.avxlimitedpensionscheme.com/pdfs/Transfer_Agreement.pdf"
                      target="_blank"
                    >
                      <FaRegFilePdf />
                      Transfer Agreement between the AVX Limited Pension Scheme
                      and the Varelco Limited Pension Fund
                    </a>
                  </ListItem>
                </List>
              </Box>
              <Box className="link-list">
                <Typography className="heading">Deed of Amendment</Typography>
                <Typography className="sub-desc">
                  The Deed of Amendment is a formal, legal document that may be
                  used to amend the terms of the Trust Deed and Rules of the AVX
                  Limited Pension Scheme. This document is important for members
                  to understand any changes to the terms and conditions of the
                  scheme.
                </Typography>
                <List>
                  <ListItem>
                    <a
                      href="https://www.avxlimitedpensionscheme.com/pdfs/WORK_33303191_1_Certified-Copy-Deed-of-Amendment-re-AVX-Limited-Pension-Scheme-2-January-2019.pdf"
                      target="_blank"
                    >
                      <FaRegFilePdf />
                      Deed of Amendment January 2019
                    </a>
                  </ListItem>
                  <ListItem>
                    <a
                      href="https://www.avxlimitedpensionscheme.com/pdfs/Deed%20of%20Amendment%20August%202007.pdf"
                      target="_blank"
                    >
                      <FaRegFilePdf />
                      Deed of Amendment August 2007
                    </a>
                  </ListItem>
                  <ListItem>
                    <a
                      href="https://www.avxlimitedpensionscheme.com/pdfs/Deed%20of%20Amendment%202006%20-%20Pension%20increases.pdf"
                      target="_blank"
                    >
                      <FaRegFilePdf />
                      Deed of Amendment April 2006
                    </a>
                  </ListItem>
                  <ListItem>
                    <a
                      href="https://www.avxlimitedpensionscheme.com/pdfs/Deed%20of%20Amendment%20April%202004.pdf"
                      target="_blank"
                    >
                      <FaRegFilePdf />
                      Deed of Amendment April 2004
                    </a>
                  </ListItem>
                  <ListItem>
                    <a
                      href="https://www.avxlimitedpensionscheme.com/pdfs/Deed%20of%20Amendment%20November%202002%20part%201.pdf"
                      target="_blank"
                    >
                      <FaRegFilePdf />
                      Deed of Amendment November 2002 part 1
                    </a>
                  </ListItem>
                  <ListItem>
                    <a
                      href="https://www.avxlimitedpensionscheme.com/pdfs/Deed%20of%20Amendment%20November%202002%20part%202.pdf"
                      target="_blank"
                    >
                      <FaRegFilePdf />
                      Deed of Amendment November 2002 part 2
                    </a>
                  </ListItem>
                  <ListItem>
                    <a
                      href="https://www.avxlimitedpensionscheme.com/pdfs/Deed%20of%20Amendment%20June%201997.pdf"
                      target="_blank"
                    >
                      <FaRegFilePdf />
                      Deed of Amendment June 1997
                    </a>
                  </ListItem>
                </List>
              </Box>
              <Box className="link-list">
                <Typography className="heading">
                  Deeds of Appointment and Removal
                </Typography>
                <Typography className="sub-desc">
                  The Trust Deed and Rules are the formal legal documents
                  setting out how the Scheme is run. The Trustees are currently
                  carrying out a Review and Consolidation exercise on the Trust
                  Deed and Rules. Once finalised, the revised Rules will be
                  added to the website.
                </Typography>
                <List>
                  <ListItem>
                    <a
                      href="https://www.avxlimitedpensionscheme.com/pdfs/Deed_of_Removal_(AVX_Limited_Pension_Scheme)_dated_31_May_2022.PDF"
                      target="_blank"
                    >
                      <FaRegFilePdf />
                      Deed of Removal dated May 2022
                    </a>
                  </ListItem>
                  <ListItem>
                    <a
                      href="https://www.avxlimitedpensionscheme.com/pdfs/Deed_of_Appointment_and_Removal_dated_30_July_2021_(all%20counterparts).PDF"
                      target="_blank"
                    >
                      <FaRegFilePdf />
                      Deed of Appointment dated July 2021
                    </a>
                  </ListItem>
                  <ListItem>
                    <a
                      href="https://www.avxlimitedpensionscheme.com/pdfs/WORK_35804552_1_Certified%20Deed%20of%20Appointment%20of%20Trustee%20of%20AVX%20Ltd%20Pension%20Scheme%20dated%2014_11_2019.PDF"
                      target="_blank"
                    >
                      <FaRegFilePdf />
                      Deed of Appointment dated December 2019
                    </a>
                  </ListItem>
                  <ListItem>
                    <a
                      href="https://www.avxlimitedpensionscheme.com/pdfs/WORK_33697517_1_Deed-of-Appointment-&-Removal-of-Trustees-of-the-AVX-Lim....pdf"
                      target="_blank"
                    >
                      <FaRegFilePdf />
                      Deed of Appointment and Removal dated March 2019
                    </a>
                  </ListItem>
                  <ListItem>
                    <a
                      href="https://www.avxlimitedpensionscheme.com/pdfs/WORK_33122645_1_certified_Deed_of_Removal_of_a_Trustee_dated_3_December_2018-Kurt_Cummings.PDF"
                      target="_blank"
                    >
                      <FaRegFilePdf />
                      Deed of Removal (Cummings) dated December 2018
                    </a>
                  </ListItem>
                  <ListItem>
                    <a
                      href="https://www.avxlimitedpensionscheme.com/pdfs/Deed%20of%20Appointment%20-%20certified.pdf"
                      target="_blank"
                    >
                      <FaRegFilePdf />
                      Deed of Appointment (Hufnagel) dated 20 December 2017
                    </a>
                  </ListItem>
                  <ListItem>
                    <a
                      href="https://www.avxlimitedpensionscheme.com/pdfs/WORK_28666594_1_SFF%20(Lewis)%20Certified%20Copy%20of%20Deed%20of%20Appointment.pdf"
                      target="_blank"
                    >
                      <FaRegFilePdf />
                      Deed of Appointment (Cunday, Fenwick, Birkett) dated 21
                      March 2017
                    </a>
                  </ListItem>
                  <ListItem>
                    <a
                      href="https://www.avxlimitedpensionscheme.com/pdfs/03.1_Draft_Deed_of_Appointment-Martin_Bogues.pdf"
                      target="_blank"
                    >
                      <FaRegFilePdf />
                      Deed of Appointment (Bogues) 2013
                    </a>
                  </ListItem>
                  <ListItem>
                    <a
                      href="https://www.avxlimitedpensionscheme.com/pdfs/120307_DAR_smg_Executed%20Deed%20of%20Appointment%20and%20Removal%20dated%206%20December%202011.pdf"
                      target="_blank"
                    >
                      <FaRegFilePdf />
                      Deed of Appointment (Fenwick, Cunday) and Removal (Curtis)
                      dated 6 December 2011
                    </a>
                  </ListItem>
                  <ListItem>
                    <a
                      href="https://www.avxlimitedpensionscheme.com/pdfs/deed%20of%20appointment%20and%20retirement-hmccann%20and%20msymonds%20.pdf"
                      target="_blank"
                    >
                      <FaRegFilePdf />
                      Deed of Appointment (McCann) and Removal (Symonds) dated
                      20 September 2011
                    </a>
                  </ListItem>
                  <ListItem>
                    <a
                      href="https://www.avxlimitedpensionscheme.com/pdfs/deed%20of%20removal.PDF"
                      target="_blank"
                    >
                      <FaRegFilePdf />
                      Deed of Removal (Mellelieu and Fretwell) dated 27 July
                      2007
                    </a>
                  </ListItem>
                </List>
              </Box>
            </Box>
            <Box item md={4} className="list-right">
              <Box className="link-list">
                <Typography className="heading">
                  Scheme Annual Report and Accounts
                </Typography>
                <Typography className="sub-desc">
                  The AVX Limited Pension Scheme Annual Report and Accounts
                  provide an overview of the scheme's financial position and
                  performance for the year.
                </Typography>
                <List>{showMore ? items : items.slice(0, maxItems)}</List>
                {items.length > maxItems && (
                  <Button
                    class="btn btn-primary text-black"
                    onClick={handleToggle}
                  >
                    <span class="circle" aria-hidden="true">
                      <span class="icon arrow"></span>
                    </span>
                    <span class="button-text">
                      {showMore ? "Show Less" : "Show More"}
                    </span>
                  </Button>
                )}
              </Box>
            </Box>
          </Box>
        </Container>
      </section>
      <ContactContent />
    </>
  );
}
