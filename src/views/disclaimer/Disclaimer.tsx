import { Container, Box, Typography, List, ListItem } from '@mui/material';

import classNames from 'classnames/bind';
import styles from './Disclaimer.module.scss';

const cx = classNames.bind(styles);

export interface IDisclaimerProps {}

export default function Disclaimer(props: IDisclaimerProps) {
  return (
    <Container maxWidth={false} className={cx('disclaimer__container')}>
      <Container
        className={cx('disclaimer__wrapper')}
        maxWidth="lg"
        sx={{ position: 'relative', zIndex: 1 }}
        disableGutters={true}
      >
        {/* SECTION - PRIVACY POLICY */}
        <Box component="section" sx={{ mt: '50px' }}>
          <Box component="div">
            <Typography
              component="h2"
              fontSize={{ xs: '2.6rem', md: '4rem' }}
              lineHeight={{ xs: '3rem', md: '4.4rem' }}
              sx={{
                mb: '32px',
                fontWeight: '600',
                color: 'var(--white)',
              }}
            >
              Disclaimer
            </Typography>
            <Typography
              component="p"
              fontSize={{ xs: '1.4rem' }}
              lineHeight={{ xs: '1.8rem' }}
              sx={{
                mb: '20px',
                fontWeight: '300',
                color: 'var(--gray-01)',
              }}
            >
              This presentation is made for the purpose of giving the investors an overview of the
              project. The RISE OF IMMORTALS' team tends to summarize and simplify all the basic
              information about this project, With that in mind, this presentation also serves as
              the project's Curriculum Vitae for possible investors to evaluate whether it is a good
              or a bad investment. Furthermore, this presentation is intended to aid the investor in
              evaluating the business and constitute all the information that prospective investors
              may require.
            </Typography>
            <Typography
              component="p"
              fontSize={{ xs: '1.4rem' }}
              lineHeight={{ xs: '1.8rem' }}
              sx={{
                mb: '20px',
                fontWeight: '300',
                color: 'var(--gray-01)',
              }}
            >
              This presentation includes statements, estimates, analyses, and projections that are
              highly volatile depending on the market situation. Neither the RISE OF IMMORTALS nor
              any of their affiliates or advisors have independently verified these estimates,
              analyses, and projections. Accordingly, opinions or statements made by our affiliates
              and/or advisors i.e. providing any form of assurance is independent from company's
              motives, thus all the decisions made by the investors are at their own due diligence.
            </Typography>
            <Typography
              component="p"
              fontSize={{ xs: '1.4rem' }}
              lineHeight={{ xs: '1.8rem' }}
              sx={{
                mb: '20px',
                fontWeight: '300',
                color: 'var(--gray-01)',
              }}
            >
              {' '}
              Everything in this presentation is from an optimistic view and is subject to changes
              and should not be mistaken as a promise or assurance in any way. RISE OF IMMORTALS,
              respective affiliates, and advisors expressly deny any and all liabilities that may
              arise on any error or omission, erroneous assumptions with respect to any information,
              estimates, analyses, or projections stated within this presentation or any other
              written/verbal statements made.
            </Typography>
            <Typography
              component="p"
              fontSize={{ xs: '1.4rem' }}
              lineHeight={{ xs: '1.8rem' }}
              sx={{
                mb: '20px',
                fontWeight: '300',
                color: 'var(--gray-01)',
              }}
            >
              The recipient hereby indemnifies RISE OF IMMORTALS, their directors, principals,
              agents, consultants, and employees (the indemnified parties) against any losses,
              claims, damages, or liabilities (or actions in respect thereof) to which any party may
              become subject as a result of or in connection with RISE OF IMMORTALS sharing
              information with the recipient whether the recipient is aware of the scope or not.
            </Typography>
            <Typography
              component="p"
              fontSize={{ xs: '1.4rem' }}
              lineHeight={{ xs: '1.8rem' }}
              sx={{
                mb: '20px',
                fontWeight: '300',
                color: 'var(--gray-01)',
              }}
            >
              This indemnification shall include any liability related to or resulting from any
              information or estimation provided by RISE OF IMMORTALS that is inaccurate in any
              respect as a result of misrepresentation, omission, or failure to update regardless of
              whether RISE OF IMMORTALS knew or should have known of such inaccuracy and failure to
              clarify any misinterpretation of information by RISE OF IMMORTALS.
            </Typography>
            <Typography
              component="p"
              fontSize={{ xs: '1.4rem' }}
              lineHeight={{ xs: '1.8rem' }}
              sx={{
                mb: '20px',
                fontWeight: '300',
                color: 'var(--gray-01)',
              }}
            >
              Please note that the indemnified parties are not liable or responsible for any loss or
              damage to the recipient or any of its members, investors, traders, or any other
              stakeholder or party being affected by it directly or indirectly. Upon the receipt of
              this document, the recipient shall waive its legal rights in any manner whatsoever
              against the indemnified parties.
            </Typography>
            <Typography
              component="p"
              fontSize={{ xs: '1.4rem' }}
              lineHeight={{ xs: '1.8rem' }}
              sx={{
                mb: '20px',
                fontWeight: '300',
                color: 'var(--gray-01)',
              }}
            >
              THE RECIPIENTS OF THIS OFFICIAL PRESENTATION ARE EXPECTED TO HAVE MADE INDEPENDENT
              INVESTIGATIONS AND ASSESSMENTS OF THE BUSINESS, PROSPECTS, STATUS, AND AFFAIRS
              STIPULATED IN THIS OFFICIAL PRESENTATION AND THE OVERALL PROPOSAL IN GENERAL.
            </Typography>
            <Typography
              component="p"
              fontSize={{ xs: '1.4rem' }}
              lineHeight={{ xs: '1.8rem' }}
              sx={{
                mb: '20px',
                fontWeight: '300',
                color: 'var(--gray-01)',
              }}
            >
              All information herein is strictly confidential and is the sole use of RISE OF
              IMMORTALS.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Container>
  );
}
