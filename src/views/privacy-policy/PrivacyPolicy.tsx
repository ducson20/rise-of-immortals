import { Container, Box, Typography, List, ListItem } from '@mui/material';

import classNames from 'classnames/bind';
import styles from './PrivacyPolicy.module.scss';

const cx = classNames.bind(styles);

export interface IPrivacyPolicyProps {}

export default function PrivacyPolicy(props: IPrivacyPolicyProps) {
  return (
    <Container maxWidth={false} className={cx('privacy-policy__container')}>
      <Container
        className={cx('privacy-policy__wrapper')}
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
                mb: '6px',
                fontWeight: '600',
                color: 'var(--white)',
              }}
            >
              Privacy Policy
            </Typography>
            <Typography
              component="p"
              fontSize={{ xs: '1.6rem' }}
              lineHeight={{ xs: '2rem' }}
              sx={{
                mb: '32px',
                fontWeight: '400',
                color: 'var(--white)',
              }}
            >
              Effective Date: August 8, 2022
            </Typography>
            <Box component="div" sx={{ pl: '16px' }}>
              <Typography
                component="p"
                fontSize={{ xs: '1.4rem' }}
                lineHeight={{ xs: '1.8rem' }}
                sx={{
                  fontWeight: '300',
                  color: 'var(--gray-01)',
                }}
              >
                Rise of Immortals ("us", "we", or "our") operates the website.
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
                This article outlines our policies on the gathering, use, and disclosure of personal
                information when you use our service, as well as your options about that
                information. Your information is used to maintain and improve the Service.
              </Typography>
              <Typography
                component="p"
                fontSize={{ xs: '1.4rem' }}
                lineHeight={{ xs: '1.8rem' }}
                sx={{
                  mb: '32px',
                  fontWeight: '300',
                  color: 'var(--gray-01)',
                }}
              >
                You consent to the collection and use of information in line with this policy by
                using the Service. Terms used in this privacy policy, unless otherwise specified,
                have the same meanings as those found in our Terms and Conditions.
              </Typography>
            </Box>

            <List component="ul">
              <ListItem component="li" sx={{ display: 'block' }}>
                <Typography
                  component="h3"
                  fontSize={{ xs: '2.2rem', md: '3.6rem' }}
                  lineHeight={{ xs: '2.6rem', md: '4rem' }}
                  sx={{
                    mb: '20px',
                    fontWeight: '600',
                    color: 'var(--white)',
                  }}
                >
                  • INFORMATION GATHERING AND APPLICATION
                </Typography>
                <Typography
                  component="p"
                  fontSize={{ xs: '1.4rem' }}
                  lineHeight={{ xs: '1.8rem' }}
                  sx={{
                    pl: '16px',
                    mb: '32px',
                    fontWeight: '300',
                    color: 'var(--gray-01)',
                  }}
                >
                  We collect various sorts of information for various purposes to offer and improve
                  our Service to you. All of your data will be deleted if you do not utilize (login
                  to) the service for 3 years.
                </Typography>
                <Typography
                  component="h4"
                  fontSize={{ xs: '2rem', md: '3.4rem' }}
                  lineHeight={{ xs: '2.4rem', md: '3.8rem' }}
                  sx={{
                    mb: '20px',
                    pl: '16px',
                    fontWeight: '600',
                    color: 'var(--white)',
                  }}
                >
                  Data Types Collected:
                </Typography>
                <List component="ol">
                  <ListItem component="li" sx={{ display: 'block', pl: '32px' }}>
                    <Typography
                      component="h5"
                      fontSize={{ xs: '1.8rem', md: '3.2rem' }}
                      lineHeight={{ xs: '2.2rem', md: '3.6rem' }}
                      sx={{
                        mb: '20px',
                        fontWeight: '600',
                        color: 'var(--white)',
                      }}
                    >
                      1. Personal Data
                    </Typography>
                    <Typography
                      component="p"
                      fontSize={{ xs: '1.4rem' }}
                      lineHeight={{ xs: '1.8rem' }}
                      sx={{
                        mb: '32px',
                        pl: '16px',
                        fontWeight: '300',
                        color: 'var(--gray-01)',
                      }}
                    >
                      We may ask you to provide us with personally identifying information that can
                      be used to contact or identify you while using our Service ("Personal Data").
                      Personal information may include, but is not limited to, the following:
                      Cookies, Email address, and Usage Information
                    </Typography>
                  </ListItem>
                  <ListItem component="li" sx={{ display: 'block', pl: '32px' }}>
                    <Typography
                      component="h5"
                      fontSize={{ xs: '1.8rem', md: '3.2rem' }}
                      lineHeight={{ xs: '2.2rem', md: '3.6rem' }}
                      sx={{
                        mb: '20px',
                        fontWeight: '600',
                        color: 'var(--white)',
                      }}
                    >
                      2. Usage Information
                    </Typography>
                    <Box component="div" sx={{ pl: '16px' }}>
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
                        We may also gather the information that your browser transmits whenever you
                        visit our Service or access it via a mobile device ("Usage Data").
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
                        Usage Data may include your computer's Internet Protocol address (e.g., IP
                        address), browser type, browser version, the pages of our Service that you
                        view, date and time of your access, duration spent on those pages, unique
                        device identifiers, and other diagnostics.
                      </Typography>
                      <Typography
                        component="p"
                        fontSize={{ xs: '1.4rem' }}
                        lineHeight={{ xs: '1.8rem' }}
                        sx={{
                          mb: '32px',
                          fontWeight: '300',
                          color: 'var(--gray-01)',
                        }}
                      >
                        When you access the Service via a mobile device, this Usage Data may include
                        information such as the type of mobile device you use, your mobile device's
                        unique IMEI, your mobile device's IP address, your mobile device’s operating
                        system, the Internet browser you use, unique device identifiers, and other
                        diagnostic data.
                      </Typography>
                    </Box>
                  </ListItem>
                  <ListItem component="li" sx={{ display: 'block', pl: '32px' }}>
                    <Typography
                      component="h5"
                      fontSize={{ xs: '1.8rem', md: '3.2rem' }}
                      lineHeight={{ xs: '2.2rem', md: '3.6rem' }}
                      sx={{
                        mb: '20px',
                        fontWeight: '600',
                        color: 'var(--white)',
                      }}
                    >
                      3. Tracking Cookies Data
                    </Typography>

                    <Box component="div" sx={{ pl: '16px' }}>
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
                        We use cookies and other tracking technologies to monitor and record
                        activities on our Service.
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
                        Cookies are pieces of information that may contain anonymous unique
                        identifiers. Cookies are then transmitted to your browser from a website and
                        kept on your device. Beacons, tags, and scripts are also tracking
                        technologies used to collect and track information and to develop and
                        analyze our Service.
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
                        You can configure your browser to reject all cookies or to notify you when
                        one is transmitted. However, if you do not accept cookies, you may be unable
                        to utilize certain aspects of our Service.
                      </Typography>
                      <Typography
                        component="p"
                        fontSize={{ xs: '1.4rem' }}
                        lineHeight={{ xs: '1.8rem' }}
                        sx={{
                          fontWeight: '300',
                          color: 'var(--gray-01)',
                        }}
                      >
                        Cookies that we utilize include:
                      </Typography>
                      <Typography
                        component="p"
                        fontSize={{ xs: '1.4rem' }}
                        lineHeight={{ xs: '1.8rem' }}
                        sx={{
                          mb: '32px',
                          fontWeight: '300',
                          color: 'var(--gray-01)',
                        }}
                      >
                        Session cookies - Session Cookies are used to operate our Service.
                        Preference Cookies - Preference Cookies are used to recall your preferences
                        and other settings. Security Cookies - Security Cookies are used for
                        security considerations.
                      </Typography>
                    </Box>
                  </ListItem>
                </List>
              </ListItem>

              <ListItem component="li" sx={{ display: 'block' }}>
                <Typography
                  component="h3"
                  fontSize={{ xs: '2.2rem', md: '3.6rem' }}
                  lineHeight={{ xs: '2.6rem', md: '4rem' }}
                  sx={{
                    mb: '20px',
                    fontWeight: '600',
                    color: 'var(--white)',
                  }}
                >
                  • USE OF DATA
                </Typography>
                <Typography
                  component="p"
                  fontSize={{ xs: '1.4rem' }}
                  lineHeight={{ xs: '1.8rem' }}
                  sx={{
                    mb: '20px',
                    pl: '16px',
                    fontWeight: '300',
                    color: 'var(--gray-01)',
                  }}
                >
                  Rise of Immortals makes use of the obtained data for a variety of purposes:
                </Typography>
                <Box component="div" sx={{ pl: '30px' }}>
                  <Typography
                    component="p"
                    fontSize={{ xs: '1.4rem' }}
                    lineHeight={{ xs: '1.8rem' }}
                    sx={{
                      mb: '6px',
                      fontWeight: '300',
                      color: 'var(--gray-01)',
                    }}
                  >
                    - To deliver and maintain the Service;
                  </Typography>
                  <Typography
                    component="p"
                    fontSize={{ xs: '1.4rem' }}
                    lineHeight={{ xs: '1.8rem' }}
                    sx={{
                      mb: '6px',

                      fontWeight: '300',
                      color: 'var(--gray-01)',
                    }}
                  >
                    - To let you know when we make changes to the Service;
                  </Typography>
                  <Typography
                    component="p"
                    fontSize={{ xs: '1.4rem' }}
                    lineHeight={{ xs: '1.8rem' }}
                    sx={{
                      mb: '6px',

                      fontWeight: '300',
                      color: 'var(--gray-01)',
                    }}
                  >
                    - To let you engage with our Service's interactive features when you choose to
                    do so;
                  </Typography>
                  <Typography
                    component="p"
                    fontSize={{ xs: '1.4rem' }}
                    lineHeight={{ xs: '1.8rem' }}
                    sx={{
                      mb: '6px',

                      fontWeight: '300',
                      color: 'var(--gray-01)',
                    }}
                  >
                    - To offer customer service and support;
                  </Typography>
                  <Typography
                    component="p"
                    fontSize={{ xs: '1.4rem' }}
                    lineHeight={{ xs: '1.8rem' }}
                    sx={{
                      mb: '6px',

                      fontWeight: '300',
                      color: 'var(--gray-01)',
                    }}
                  >
                    - To request analysis or user data so that we can enhance the Service; - To keep
                    track of how the Service is used; - To identify, prevent, and resolve technical
                    issues.
                  </Typography>
                  <Typography
                    component="p"
                    fontSize={{ xs: '1.4rem' }}
                    lineHeight={{ xs: '1.8rem' }}
                    sx={{
                      mb: '6px',

                      fontWeight: '300',
                      color: 'var(--gray-01)',
                    }}
                  >
                    - To keep track of how the Service is used; - To identify, prevent, and resolve
                    technical issues.
                  </Typography>
                  <Typography
                    component="p"
                    fontSize={{ xs: '1.4rem' }}
                    lineHeight={{ xs: '1.8rem' }}
                    sx={{
                      mb: '32px',
                      fontWeight: '300',
                      color: 'var(--gray-01)',
                    }}
                  >
                    - To identify, prevent, and resolve technical issues.
                  </Typography>
                </Box>
              </ListItem>

              <ListItem component="li" sx={{ display: 'block' }}>
                <Typography
                  component="h3"
                  fontSize={{ xs: '2.2rem', md: '3.6rem' }}
                  lineHeight={{ xs: '2.6rem', md: '4rem' }}
                  sx={{
                    mb: '20px',
                    fontWeight: '600',
                    color: 'var(--white)',
                  }}
                >
                  • TRANSFER OF DATA
                </Typography>
                <Typography
                  component="p"
                  fontSize={{ xs: '1.4rem' }}
                  lineHeight={{ xs: '1.8rem' }}
                  sx={{
                    mb: '20px',
                    pl: '16px',
                    fontWeight: '300',
                    color: 'var(--gray-01)',
                  }}
                >
                  Your data, including Personal Data, may be transmitted to computers located
                  outside of your state, province, nation, or another government jurisdiction, where
                  data protection rules may be different from those in your jurisdiction.
                </Typography>
                <Typography
                  component="p"
                  fontSize={{ xs: '1.4rem' }}
                  lineHeight={{ xs: '1.8rem' }}
                  sx={{
                    mb: '20px',
                    pl: '16px',

                    fontWeight: '300',
                    color: 'var(--gray-01)',
                  }}
                >
                  Please be aware that if you choose to give information to us from a location
                  outside the United States, we will transmit and handle your data there, including
                  any Personal Data.
                </Typography>
                <Typography
                  component="p"
                  fontSize={{ xs: '1.4rem' }}
                  lineHeight={{ xs: '1.8rem' }}
                  sx={{
                    mb: '20px',
                    pl: '16px',

                    fontWeight: '300',
                    color: 'var(--gray-01)',
                  }}
                >
                  Your permission to that transfer is shown by your acceptance of this Privacy
                  Policy and your submission of the requested information.
                </Typography>
                <Typography
                  component="p"
                  fontSize={{ xs: '1.4rem' }}
                  lineHeight={{ xs: '1.8rem' }}
                  sx={{
                    mb: '32px',
                    pl: '16px',

                    fontWeight: '300',
                    color: 'var(--gray-01)',
                  }}
                >
                  Rise of Immortals will take all reasonable measures to ensure that your data is
                  handled securely and following accordance with this Privacy Policy. No
                  transmission of your data to an organization or a country will happen unless there
                  are sufficient safeguards in place, including the security of your data and other
                  personal information.
                </Typography>
              </ListItem>

              <ListItem component="li" sx={{ display: 'block' }}>
                <Typography
                  component="h3"
                  fontSize={{ xs: '2.2rem', md: '3.6rem' }}
                  lineHeight={{ xs: '2.6rem', md: '4rem' }}
                  sx={{
                    mb: '20px',

                    fontWeight: '600',
                    color: 'var(--white)',
                  }}
                >
                  • DATA DISSEMINATION
                </Typography>
                <Typography
                  component="p"
                  fontSize={{ xs: '1.4rem' }}
                  lineHeight={{ xs: '1.8rem' }}
                  sx={{
                    mb: '20px',
                    pl: '16px',
                    fontWeight: '300',
                    color: 'var(--gray-01)',
                  }}
                >
                  Rise of Immortals may divulge your personal information in response to regulatory
                  obligations should we have a fair and reasonable conviction that it's necessary
                  to:
                </Typography>
                <Box component="div" sx={{ pl: '30px' }}>
                  <Typography
                    component="p"
                    fontSize={{ xs: '1.4rem' }}
                    lineHeight={{ xs: '1.8rem' }}
                    sx={{
                      mb: '6px',
                      fontWeight: '300',
                      color: 'var(--gray-01)',
                    }}
                  >
                    - To fulfill a legal requirement;
                  </Typography>
                  <Typography
                    component="p"
                    fontSize={{ xs: '1.4rem' }}
                    lineHeight={{ xs: '1.8rem' }}
                    sx={{
                      mb: '6px',

                      fontWeight: '300',
                      color: 'var(--gray-01)',
                    }}
                  >
                    - To uphold Rise of Immortals' rights and property;
                  </Typography>
                  <Typography
                    component="p"
                    fontSize={{ xs: '1.4rem' }}
                    lineHeight={{ xs: '1.8rem' }}
                    sx={{
                      mb: '6px',

                      fontWeight: '300',
                      color: 'var(--gray-01)',
                    }}
                  >
                    - To stop or look into potential misconduct related to the Service;
                  </Typography>
                  <Typography
                    component="p"
                    fontSize={{ xs: '1.4rem' }}
                    lineHeight={{ xs: '1.8rem' }}
                    sx={{
                      mb: '6px',

                      fontWeight: '300',
                      color: 'var(--gray-01)',
                    }}
                  >
                    - To safeguard the personal safety of Service users or the general public;
                  </Typography>
                  <Typography
                    component="p"
                    fontSize={{ xs: '1.4rem' }}
                    lineHeight={{ xs: '1.8rem' }}
                    sx={{
                      mb: '32px',
                      fontWeight: '300',
                      color: 'var(--gray-01)',
                    }}
                  >
                    - To avoid legal liabilities. do so;
                  </Typography>
                </Box>
              </ListItem>

              <ListItem component="li" sx={{ display: 'block' }}>
                <Typography
                  component="h3"
                  fontSize={{ xs: '2.2rem', md: '3.6rem' }}
                  lineHeight={{ xs: '2.6rem', md: '4rem' }}
                  sx={{
                    mb: '20px',
                    fontWeight: '600',
                    color: 'var(--white)',
                  }}
                >
                  • DATA SECURITY
                </Typography>
                <Typography
                  component="p"
                  fontSize={{ xs: '1.4rem' }}
                  lineHeight={{ xs: '1.8rem' }}
                  sx={{
                    mb: '32px',
                    pl: '16px',
                    fontWeight: '300',
                    color: 'var(--gray-01)',
                  }}
                >
                  We care about the security of your data but keep in mind that no form of
                  electronic data storage or transfer via the Internet is completely safe. While we
                  make an effort to protect your Personal Data with commercially reasonable
                  measures, we cannot provide perfect assurance of security.
                </Typography>
              </ListItem>

              <ListItem component="li" sx={{ display: 'block' }}>
                <Typography
                  component="h3"
                  fontSize={{ xs: '2.2rem', md: '3.6rem' }}
                  lineHeight={{ xs: '2.6rem', md: '4rem' }}
                  sx={{
                    mb: '20px',
                    fontWeight: '600',
                    color: 'var(--white)',
                  }}
                >
                  • SERVICE PROVIDERS
                </Typography>
                <Typography
                  component="p"
                  fontSize={{ xs: '1.4rem' }}
                  lineHeight={{ xs: '1.8rem' }}
                  sx={{
                    mb: '20px',
                    pl: '16px',

                    fontWeight: '300',
                    color: 'var(--gray-01)',
                  }}
                >
                  We might work with third-party organizations and people (referred to as "Service
                  Providers") to make our service easier to use, deliver the service on our behalf,
                  carry out service-related tasks, or help us analyze how our service is being used.
                </Typography>
                <Typography
                  component="p"
                  fontSize={{ xs: '1.4rem' }}
                  lineHeight={{ xs: '1.8rem' }}
                  sx={{
                    mb: '32px',
                    pl: '16px',

                    fontWeight: '300',
                    color: 'var(--gray-01)',
                  }}
                >
                  These third parties are only permitted to use your Personal Data to carry out
                  these duties for us and are forbidden from using it or disclosing it for any other
                  reason.
                </Typography>
              </ListItem>
              <ListItem component="li" sx={{ display: 'block' }}>
                <Typography
                  component="h3"
                  fontSize={{ xs: '2.2rem', md: '3.6rem' }}
                  lineHeight={{ xs: '2.6rem', md: '4rem' }}
                  sx={{
                    mb: '20px',
                    fontWeight: '600',
                    color: 'var(--white)',
                  }}
                >
                  • LINKS TO EXTERNAL WEBSITES
                </Typography>
                <Typography
                  component="p"
                  fontSize={{ xs: '1.4rem' }}
                  lineHeight={{ xs: '1.8rem' }}
                  sx={{
                    mb: '32px',
                    pl: '16px',

                    fontWeight: '300',
                    color: 'var(--gray-01)',
                  }}
                >
                  There is a chance that our service will link to websites we do not control. A link
                  from a third party will take you to their website if you click on it. We admonish
                  you to carefully read the privacy statement on every website you visit. The
                  content, privacy practices, or other policies of any third-party websites or
                  services are beyond our control and responsibility.
                </Typography>
              </ListItem>
              <ListItem component="li" sx={{ display: 'block' }}>
                <Typography
                  component="h3"
                  fontSize={{ xs: '2.2rem', md: '3.6rem' }}
                  lineHeight={{ xs: '2.6rem', md: '4rem' }}
                  sx={{
                    mb: '20px',
                    fontWeight: '600',
                    color: 'var(--white)',
                  }}
                >
                  • UNDERAGE PRIVACY
                </Typography>
                <Typography
                  component="p"
                  fontSize={{ xs: '1.4rem' }}
                  lineHeight={{ xs: '1.8rem' }}
                  sx={{
                    pl: '16px',
                    mb: '32px',
                    fontWeight: '300',
                    color: 'var(--gray-01)',
                  }}
                >
                  No one under the age of 18 is being addressed by our service ("Children"). We do
                  not have the means to perceive if the user, who provided his or her personal data,
                  is under the age of 18. Please get in touch with us if you're a parent or legal
                  guardian and you know that one of your kids has given us personal information. We
                  take efforts to erase the data from our servers if we learn that we have obtained
                  Personal Data from children without first obtaining their parent's consent.
                </Typography>
              </ListItem>

              <ListItem component="li" sx={{ display: 'block' }}>
                <Typography
                  component="h3"
                  fontSize={{ xs: '2.2rem', md: '3.6rem' }}
                  lineHeight={{ xs: '2.6rem', md: '4rem' }}
                  sx={{
                    mb: '20px',
                    fontWeight: '600',
                    color: 'var(--white)',
                  }}
                >
                  • CHANGES TO THIS PRIVACY POLICY
                </Typography>
                <Typography
                  component="p"
                  fontSize={{ xs: '1.4rem' }}
                  lineHeight={{ xs: '1.8rem' }}
                  sx={{
                    mb: '20px',
                    pl: '16px',
                    fontWeight: '300',
                    color: 'var(--gray-01)',
                  }}
                >
                  Our privacy policy may occasionally be updated. Any modifications will be
                  communicated to you by posting the updated Privacy Policy on this page.
                </Typography>
                <Typography
                  component="p"
                  fontSize={{ xs: '1.4rem' }}
                  lineHeight={{ xs: '1.8rem' }}
                  sx={{
                    mb: '20px',
                    pl: '16px',
                    fontWeight: '300',
                    color: 'var(--gray-01)',
                  }}
                >
                  Prior to the modifications going into effect, we will notify you via email and/or
                  a clear notice on our platform. We will also change the "effective date" at the
                  top of this privacy statement for every modification update.
                </Typography>
                <Typography
                  component="p"
                  fontSize={{ xs: '1.4rem' }}
                  lineHeight={{ xs: '1.8rem' }}
                  sx={{
                    mb: '32px',
                    pl: '16px',
                    fontWeight: '300',
                    color: 'var(--gray-01)',
                  }}
                >
                  It is encouraged that you routinely check this privacy statement for updates. Any
                  modifications to this privacy statement take effect when they are published on
                  this page.
                </Typography>
              </ListItem>
            </List>
          </Box>
        </Box>
      </Container>
    </Container>
  );
}
