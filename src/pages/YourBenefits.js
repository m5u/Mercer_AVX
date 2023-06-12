import React, { useState } from "react";
import ContactContent from "../components/ContactContent";
import { Typography, Box, List, ListItem, Button } from "@mui/material";
import { Container } from "@mui/system";
import { FaRegFilePdf } from "react-icons/fa";

export default function YourBenefits() {
  const [showMore, setShowMore] = useState(false);
  const handleToggle = () => {
    setShowMore(!showMore);
  };
  const maxItems = 1;
  const items = [
    <ListItem>
      <Typography className="sub-heading">
        April 2023 Pension Increases
      </Typography>
      <Box>
        <a
          href="https://www.avxlimitedpensionscheme.com/pdfs/OtS_FP_001_Pension-increase-2023-Paignton.pdf"
          target="_blank"
        >
          <FaRegFilePdf /> Paignton section
        </a>
        <a
          href="https://www.avxlimitedpensionscheme.com/pdfs/OtS_FP_001_Pension-increase-2023-Varelco.pdf"
          target="_blank"
        >
          <FaRegFilePdf /> Varelco section
        </a>
        <a
          href="https://www.avxlimitedpensionscheme.com/pdfs/OtS_FP_001_Pension-increase-2023-Retirement%20Plan.pdf"
          target="_blank"
        >
          <FaRegFilePdf /> Retirement Plan section
        </a>
      </Box>
    </ListItem>,
    <ListItem>
      <Typography className="sub-heading">
        April 2022 Pension Increases
      </Typography>
      <Box>
        <a
          href="https://www.avxlimitedpensionscheme.com/pdfs/OtS_FP_001_Pension-increase-2022-Paignton_vF.pdf"
          target="_blank"
        >
          <FaRegFilePdf /> Paignton section
        </a>
        <a
          href="https://www.avxlimitedpensionscheme.com/pdfs/OtS_FP_001_Pension-increase-2022-Varelco-vF.pdf"
          target="_blank"
        >
          <FaRegFilePdf /> Varelco section
        </a>
        <a
          href="https://www.avxlimitedpensionscheme.com/pdfs/OtS_FP_001_Pension-increase-2022-Retirement_Plan_vF.pdf"
          target="_blank"
        >
          <FaRegFilePdf /> Retirement Plan section
        </a>
      </Box>
    </ListItem>,
    <ListItem>
      <Typography className="sub-heading">
        April 2021 Pension Increases
      </Typography>
      <Box>
        <a
          href="https://www.avxlimitedpensionscheme.com/pdfs/Pension-increases-2021-Paignton.pdf"
          target="_blank"
        >
          <FaRegFilePdf /> Paignton section
        </a>
        <a
          href="https://www.avxlimitedpensionscheme.com/pdfs/Pension-increases-2021-Varelco.pdf"
          target="_blank"
        >
          <FaRegFilePdf /> Varelco section
        </a>
        <a
          href="https://www.avxlimitedpensionscheme.com/pdfs/Pension-increases-2021-Retirement-Plan.pdf"
          target="_blank"
        >
          <FaRegFilePdf />
          Retirement Plan section
        </a>
      </Box>
    </ListItem>,
    <ListItem>
      <Typography className="sub-heading">
        April 2020 Pension Increases
      </Typography>
      <Box>
        {" "}
        <a
          href="https://www.avxlimitedpensionscheme.com/pdfs/Ot_DE_001_Pension-increases-2020-Paignton.pdf"
          target="_blank"
        >
          <FaRegFilePdf />
          Paignton section
        </a>
        <a
          href="https://www.avxlimitedpensionscheme.com/pdfs/Ot_DE_001-Pension-increases-2020-Varelco.pdf"
          target="_blank"
        >
          <FaRegFilePdf />
          Varelco section
        </a>
        <a
          href="https://www.avxlimitedpensionscheme.com/pdfs/Ot_DE_001_Pension-increases-2020-Retirement%20Plan.pdf"
          target="_blank"
        >
          <FaRegFilePdf />
          Retirement Plan section
        </a>
      </Box>
    </ListItem>,
    <ListItem>
      <Typography className="sub-heading">
        April 2019 Pension Increases
      </Typography>
      <Box>
        <a
          href="https://www.avxlimitedpensionscheme.com/pdfs/Pension-Increases-Paignton-2019.pdf"
          target="_blank"
        >
          <FaRegFilePdf />
          Paignton section
        </a>
        <a
          href="https://www.avxlimitedpensionscheme.com/pdfs/Pension-Increases-Varelco-2019.pdf"
          target="_blank"
        >
          <FaRegFilePdf /> Varelco section
        </a>
        <a
          href="https://www.avxlimitedpensionscheme.com/pdfs/Pension-Increases-Ex-Retirement-Plan-2019.pdf"
          target="_blank"
        >
          <FaRegFilePdf /> Retirement Plan section
        </a>
      </Box>
    </ListItem>,
    <ListItem>
      <Typography className="sub-heading">
        April 2018 Pension Increases
      </Typography>
      <Box>
        <a
          href="https://www.avxlimitedpensionscheme.com/pdfs/Ot_jh_001-Pension-increases-2018-Paignton.pdf"
          target="_blank"
        >
          <FaRegFilePdf /> Paignton section
        </a>
        <a
          href="https://www.avxlimitedpensionscheme.com/pdfs/Ot_jh_001-Pension-increases-2018-Varelco.pdf"
          target="_blank"
        >
          <FaRegFilePdf /> Varelco section
        </a>
        <a
          href="https://www.avxlimitedpensionscheme.com/pdfs/Ot_jh_001-Pension-increases-2018-Retirement%20Plan.pdf"
          target="_blank"
        >
          <FaRegFilePdf /> Retirement Plan section
        </a>
      </Box>
    </ListItem>,
    <ListItem>
      <Typography className="sub-heading">
        April 2017 Pension Increases
      </Typography>
      <Box>
        <a
          href="https://www.avxlimitedpensionscheme.com/pdfs/Ot_jh_001-Pension-increases-2017-Paignton.pdf"
          target="_blank"
        >
          <FaRegFilePdf /> Paignton section
        </a>
        <a
          href="https://www.avxlimitedpensionscheme.com/pdfs/Ot_jh_001-Pension-increases-2017-Varelco.pdf"
          target="_blank"
        >
          <FaRegFilePdf /> Varelco section
        </a>
        <a
          href="https://www.avxlimitedpensionscheme.com/pdfs/Ot_jh_001-Pension-increases-2017-Retirement%20Plan.pdf"
          target="_blank"
        >
          <FaRegFilePdf /> Retirement Plan section
        </a>
      </Box>
    </ListItem>,
    <ListItem>
      <Typography className="sub-heading">
        April 2016 Pension Increases
      </Typography>
      <Box>
        <a
          href="https://www.avxlimitedpensionscheme.com/pdfs/Ot_CK_001-Pension-increases-2016-Paignton.pdf"
          target="_blank"
        >
          <FaRegFilePdf /> Paignton section
        </a>
        <a
          href="https://www.avxlimitedpensionscheme.com/pdfs/Ot_CK_001-Pension-increases-2016-Varelco.pdf"
          target="_blank"
        >
          <FaRegFilePdf /> Varelco section
        </a>
        <a
          href="https://www.avxlimitedpensionscheme.com/pdfs/Ot_CK_001-Pension-increases-2016-Retierment%20Plan.pdf"
          target="_blank"
        >
          <FaRegFilePdf /> Retirement Plan section
        </a>
      </Box>
    </ListItem>,
    <ListItem>
      <Typography className="sub-heading">
        April 2015 Pension Increases
      </Typography>
      <Box>
        <a
          href="https://www.avxlimitedpensionscheme.com/pdfs/Ot_CK_001-Pension-increases-2015-Paignton.pdf"
          target="_blank"
        >
          <FaRegFilePdf /> Paignton section
        </a>
        <a
          href="https://www.avxlimitedpensionscheme.com/pdfs/Ot_CK_001-Pension-increases-2015-Varelco.pdf"
          target="_blank"
        >
          <FaRegFilePdf /> Varelco section
        </a>
        <a
          href="https://www.avxlimitedpensionscheme.com/pdfs/Ot_CK_001-Pension-increases-2015-Retierment%20Plan.pdf"
          target="_blank"
        >
          <FaRegFilePdf /> Retirement Plan section
        </a>
      </Box>
    </ListItem>,
    <ListItem>
      <Typography className="sub-heading">
        April 2014 Pension Increases
      </Typography>
      <Box>
        <a
          href="https://www.avxlimitedpensionscheme.com/pdfs/Ot_SM_001-Pension-increases-2014-Paignton.pdf"
          target="_blank"
        >
          <FaRegFilePdf />
          Paignton section
        </a>
        <a
          href="https://www.avxlimitedpensionscheme.com/pdfs/Ot_SM_001-Pension-increases-2014-Varelco.pdf"
          target="_blank"
        >
          <FaRegFilePdf /> Varelco section
        </a>
      </Box>
    </ListItem>,
    <ListItem>
      <Typography className="sub-heading">
        April 2013 Pension Increases
      </Typography>
      <Box>
        {" "}
        <a
          href="https://www.avxlimitedpensionscheme.com/pdfs/Pension-increases-2013-Paignton.pdf"
          target="_blank"
        >
          <FaRegFilePdf /> Paignton section
        </a>
        <a
          href="https://www.avxlimitedpensionscheme.com/pdfs/Pension-increases-2013-Varelco.pdf"
          target="_blank"
        >
          <FaRegFilePdf /> Varelco section
        </a>
      </Box>
    </ListItem>,
    <ListItem>
      <Typography className="sub-heading">
        April 2012 Pension Increases
      </Typography>
      <Box>
        {" "}
        <a
          href="https://www.avxlimitedpensionscheme.com/pdfs/Pension-increases-2012-Paignton.pdf"
          target="_blank"
        >
          Paignton section
        </a>
        <a
          href="https://www.avxlimitedpensionscheme.com/pdfs/Pension-increases-2012-Varelco.pdf"
          target="_blank"
        >
          Varelco section
        </a>
      </Box>
    </ListItem>,
  ];

  return (
    <>
      <section className="section section-heading">
        <Container>
          <Typography className="heading">Your Benefits</Typography>
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
                The AVX Limited Pension Scheme provides pension benefits to
                members and their dependents when due. The accumulated assets
                are held in trust. The scheme provides benefits for all eligible
                employees of the AVX Corporation. The Trustees of the scheme
                provide regular reports on the funding position and financial
                statements of the scheme.
              </Typography>
            </Box>
          </Box>
          <Box className="link-list">
            <Typography className="heading">Expression of Wish Form</Typography>
            <Typography className="sub-desc">
              The Expression of Wish Form is a formal request to the Trustees or
              administrator of the AVX Limited Pension Scheme, setting out who
              you would like to receive your pension in the event of your death.
              This form allows you to nominate the beneficiaries that you would
              like to receive any death benefits that may be due in the event of
              your death. Click here to open the{" "}
              <a
                className="a-link"
                href="https://www.avxlimitedpensionscheme.com/pdfs/OtS_jh_001_AVX%20Expression%20of%20Wish.pdf"
                target="_blank"
              >
                form
              </a>
              .
            </Typography>
          </Box>
          <Box className="link-list">
            <Typography className="heading">Members Booklet</Typography>
            <Typography className="sub-desc">
              The Members Booklet of the AVX Limited Pension Scheme provides an
              overview of the benefits available to members of different
              sections of the scheme.
            </Typography>
            <List>
              <ListItem>
                <a
                  href="https://www.avxlimitedpensionscheme.com/pdfs/Explanatory_Booklet.pdf"
                  target="_blank"
                >
                  <FaRegFilePdf /> Members Booklet - The Varelco Limited Pension
                  Fund
                </a>{" "}
              </ListItem>
              <ListItem>
                <a
                  href="https://www.avxlimitedpensionscheme.com/pdfs/booklet_Tantulum_section.pdf"
                  target="_blank"
                >
                  <FaRegFilePdf />
                  Members booklet - Tantalum section
                </a>
              </ListItem>
            </List>
          </Box>
          <Box className="link-list pension">
            <Typography className="heading">Pension Scheme</Typography>
            <Typography className="sub-desc">
              The AVX Limited Pension Scheme provides pension increases to its
              members. According to the Ex-Retirement Plan, there will be
              increases to pensions in payment from April 2023, and the amount
              of increase will depend on when the member was in service with AVX
              Limited. The scheme also provides a Summary Funding Statement that
              provides information on the funding position of the scheme and how
              the scheme is invested.
            </Typography>
            <List>{showMore ? items : items.slice(0, maxItems)}</List>
            {items.length > maxItems && (
              // <Button className="btn-text text-center" onClick={handleToggle}>
              //   {showMore ? "Show Less" : "Show More"}
              // </Button>
              <Button class="btn btn-primary text-black" onClick={handleToggle}>
                <span class="circle" aria-hidden="true">
                  <span class="icon arrow"></span>
                </span>
                <span class="button-text">
                  {showMore ? "Show Less" : "Show More"}
                </span>
              </Button>
            )}
          </Box>
          <Box className="link-list">
            <Typography className="heading">
              Revaluation in deferment
            </Typography>
            <Typography className="sub-desc">
              The AVX Limited Pension Scheme provides revaluation in deferment
              and an increase to your pension in deferment. The Members Booklet
              provides an overview of these benefits. The scheme also provides a
              note that explains how pensions for early leavers are increased up
              to retirement age. The revaluation of deferred pensions is a
              one-off increase at retirement and is conceptually different from
              annual increases to pensions in payment. The scheme's website
              provides a guide for deferred members that explains when the
              pension is revalued and how revaluation is applied to different
              parts of the pension.
            </Typography>
            <List>
              <ListItem>
                <a
                  href="https://www.avxlimitedpensionscheme.com/pdfs/OtS_FP_001_Pension-increase-in_deferment-2023.pdf"
                  target="_blank"
                >
                  <FaRegFilePdf />
                  Revaluation in deferment
                </a>
              </ListItem>
            </List>
          </Box>
          <Box className="link-list">
            <Typography className="heading">Early Retirement</Typography>
            <Typography className="sub-desc">
              The AVX Limited Pension Scheme provides early retirement benefits
              for early leavers with deferred pensions. The scheme's note
              explains how pensions for early leavers are increased up to
              retirement age. The pension on retirement is calculated using a
              formula that takes into account the member's service in the scheme
              and their salary near the time when they leave or retire. The
              scheme provides benefits for all eligible employees of the AVX
              Corporation, and the assets of the plan are managed and governed
              by a Board of Trustees.
            </Typography>
            <List>
              <ListItem>
                <a
                  href="https://www.avxlimitedpensionscheme.com/pdfs/OtS_FP_001_Early-Retirement-Factor-Example-May_22_vF.pdf"
                  target="_blank"
                >
                  <FaRegFilePdf />
                  Early Retirement
                </a>
              </ListItem>
            </List>
          </Box>
          <Box className="link-list">
            <Typography className="heading">Cash Commutation</Typography>
            <Typography className="sub-desc">
              The AVX Limited Pension Scheme allows members to exchange part of
              their pension for a cash sum when their pension commences, which
              is currently paid free of tax. The scheme provides a Cash
              Commutation Factors document that explains the factors used to
              calculate the cash commutation amount. The scheme's website
              provides information on how the scheme works and the benefits it
              offers, and members can contact the Trustees for any questions or
              concerns. The scheme provides benefits for all eligible employees
              of the AVX Corporation, and the assets of the plan are managed and
              governed by a Board of Trustees.
            </Typography>
            <List>
              <ListItem>
                <a
                  href="https://www.avxlimitedpensionscheme.com/pdfs/OtS_FP_001_Early-Retirement-Factor-Example-May_22_vF.pdf"
                  target="_blank"
                >
                  <FaRegFilePdf />
                  Cash Commutation
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
