import { Container } from "@mui/system";
import { Typography, Box, List, ListItem } from "@mui/material";
import ContactContent from "../components/ContactContent";

export default function Scam() {
  return (
    <>
      <section className="section section-heading">
        <Container>
          <Typography className="heading">Scam</Typography>
        </Container>
      </section>
      <section className="section section-scam">
        <Container>
          <Box className="introduction" sx={{ display: "flex" }}>
            <Box className="title">
              <Typography className="heading">
                Protect Your Retirement Savings
              </Typography>
              <div className="line margin-left"></div>
            </Box>
            <Box className="detail">
              <Typography>
                Are you worried about pension scams? You're not alone. Pension
                scams are on the rise in the UK, and they can be devastating for
                victims. Scammers are clever and know all the tricks to get you
                to hand over your savings.
              </Typography>
              <Typography className="margin-top">
                They might try to persuade you to cash in your pension – either
                the whole lot or a large sum – and hand the money to them to
                invest. They promise high returns and low risk, but in reality,
                pension savers that are scammed are usually left with nothing.
                Many lose their life savings. Don’t let scammers enjoy a pension
                saver’s retirement.
              </Typography>
            </Box>
          </Box>
        </Container>
      </section>
      <section className="section bg-light-grey">
        <Container>
          <div class="">
            <Box className="scam-content-wrap">
              <Box className="content">
                <Typography className="heading">Our Statergy</Typography>
                <Box className="line margin-left"></Box>
                <Typography>
                  The Pensions Regulator ("tPR") has recently launched the
                  latest phase in its pension scams campaign, with two new
                  animations for pension scheme members to view.{" "}
                  <ul className="margin-top">
                    <li>
                      <a
                        target="_blank"
                        href="https://www.youtube.com/watch?v=YDRBGImgCog&amp;list=PLM-eDl9oTxGuja_cr9IwEUtyMfHi9bbEX&amp;index=8&amp;ed2f26df2d9c416fbddddd2330a778c6=ermuaurre-ebmuuhtb"
                      >
                        One
                      </a>{" "}
                      tells viewers to watch out for professional looking
                      websites that feature anti-scam messaging to help them
                      pose as legitimate businesses.{" "}
                    </li>
                    <li>
                      The{" "}
                      <a
                        target="_blank"
                        href="https://www.youtube.com/watch?v=QFy7q1dqPos&amp;list=PLM-eDl9oTxGuja_cr9IwEUtyMfHi9bbEX&amp;index=9&amp;ed2f26df2d9c416fbddddd2330a778c6=kvismsvvs-krissbkr"
                      >
                        second
                      </a>{" "}
                      focuses on the message to hang up immediately if you
                      receive a cold call about your pension.
                    </li>
                  </ul>
                </Typography>

                <Typography className="margin-top">
                  You can also read posts on tPR's blog, for example this{" "}
                  <a
                    target="_blank"
                    href="https://blog.thepensionsregulator.gov.uk/2017/10/23/pension-scams-are-evolving/"
                  >
                    post
                  </a>{" "}
                  by the Pensions Advisory Service's ("TPAS") Michelle
                  Cracknell, who describes how scammers' tactics are evolving,
                  and how they're now using LinkedIn and PPI claims to approach
                  potential victims. The scams themselves are also changing, and
                  Michelle explains how TPAS are seeing an increasing number of
                  'legal' scams.{" "}
                </Typography>

                <Typography className="margin-top">
                  In addition, please view and share tPR's{" "}
                  <a
                    target="_blank"
                    href="http://www.thepensionsregulator.gov.uk/docs/pension-scams-booklet-members.pdf"
                  >
                    five-step guide
                  </a>{" "}
                  and{" "}
                  <a
                    target="_blank"
                    href="http://www.thepensionsregulator.gov.uk/individuals/dangers-of-pension-scams.aspx"
                  >
                    online scam-spotting tool
                  </a>{" "}
                  with your friends and family as we want to help stop as many
                  people as possible falling victim to pension scams that
                  devastate lives.{" "}
                </Typography>
              </Box>
              <Box className="tips">
                <Typography>
                  Here are some tips to help you avoid pension scams:
                </Typography>
                <List>
                  <ListItem>
                    Be wary of unsolicited phone calls, texts, or emails.
                  </ListItem>
                  <ListItem>
                    Keep up to date with current and evolving scam tactics and
                    get to know the signs of a scam.
                  </ListItem>
                  <ListItem>
                    Be cautious of professional-looking websites that feature
                    anti-scam messaging to help scammers pose as legitimate
                    businesses.
                  </ListItem>
                  <ListItem>
                    Hang up immediately if you receive a cold call about your
                    pension.
                  </ListItem>

                  <ListItem>
                    Don’t be rushed or pressured into making a decision. Take
                    the time to consider your options and get impartial
                    information and advice.
                  </ListItem>
                  <ListItem>
                    Be aware of unusual, high-risk investments like overseas
                    property and hotels, renewable energy bonds, forestry, and
                    parking.
                  </ListItem>
                </List>
              </Box>
            </Box>
          </div>
        </Container>
      </section>
      <ContactContent />
    </>
  );
}
