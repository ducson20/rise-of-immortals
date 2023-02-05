import { Container, Box, Stack, Typography, Grid } from '@mui/material';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { ErrorMessage } from '@hookform/error-message';
import { useForm } from 'react-hook-form';

import { GButton, GInput, GTextarea } from '@/components/base';

import HelpAndSupportImg from '@/assets/help-and-support/help-and-support.png';
import Email from '@/assets/help-and-support/svg/email.svg';

import classNames from 'classnames/bind';
import styles from './HelpAndSupport.module.scss';
import './HelpAndSupport.scss';

const cx = classNames.bind(styles);

export interface IHelpAndSupportProps {}

export default function HelpAndSupport(props: IHelpAndSupportProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ name: string; email: string; subject: string; message: string }>({
    criteriaMode: 'all',
  });

  const submitSendSupport = (data: { email: string }) => {
    console.log('data', data);
    console.log(JSON.stringify(data, null, 2));
  };

  const RenderErrorMessage = ({ item }: { item: 'name' | 'email' | 'subject' | 'message' }) => {
    return (
      <ErrorMessage
        errors={errors}
        name={item}
        render={({ messages }) => {
          if (messages) {
            return Object.entries(messages).map(([type, message]) => (
              <Typography
                component="p"
                key={type}
                sx={{
                  p: '4px 0 0 2px',
                  fontSize: '1.4rem',
                  lineHeight: '1.8rem',
                  color: '#d74c4c',
                }}
              >
                {message}
              </Typography>
            ));
          }
          return null;
        }}
      />
    );
  };

  return (
    <Container maxWidth={false} className={cx('help-and-support__container')}>
      <Container
        className={cx('help-and-support__wrapper')}
        maxWidth="lg"
        sx={{ position: 'relative', zIndex: 1 }}
        disableGutters={true}
      >
        {/* SECTION - HELP AND SUPPORT */}
        <Box component="section" mb={{ xs: '420px', md: '580px' }}>
          <Box component="div" sx={{ position: 'relative' }}>
            <Box component="div" className={cx('help-and-support__icon-background')}>
              <LazyLoadImage effect="blur" src={HelpAndSupportImg} alt="help-and-support" />
            </Box>
            <Typography
              fontSize={{ xs: '2.2rem', md: '4.8rem' }}
              lineHeight={{ xs: '2.6rem', md: '5.2rem' }}
              sx={{
                position: 'absolute',
                top: '34%',
                left: '50%',
                mb: '32px',
                textAlign: 'center',
                fontWeight: '600',
                color: 'var(--white)',
                transform: 'translateX(-50%)',
              }}
            >
              Help & Support
            </Typography>

            <Box
              component="div"
              minHeight={{ md: '748px' }}
              p={{ xs: '20px', md: '68px 50px' }}
              sx={{
                position: 'absolute',
                top: '70%',
                left: '0',
                right: '0',
                borderRadius: '12px',
                background: 'linear-gradient(90deg, #0C1221 0%, rgba(39, 44, 57, 0.92) 112.33%)',
              }}
            >
              <Box component="form" onSubmit={handleSubmit(submitSendSupport)}>
                <Grid
                  className={cx('our-team__hero-items')}
                  container
                  spacing={2}
                  sx={{ mb: '20px' }}
                >
                  <Grid item xs={12} md={6}>
                    <GInput
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Name"
                      registerField={{
                        ...register('name', {
                          required: 'Please input your name',
                        }),
                      }}
                      style={{ paddingRight: '14px' }}
                    />
                    {errors.name && <RenderErrorMessage item="name" />}
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <GInput
                      type="text"
                      id="email"
                      name="email"
                      placeholder="Email"
                      registerField={{
                        ...register('email', {
                          required: 'Please input your email',
                          pattern: {
                            value:
                              /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            message: 'Please enter a valid email',
                          },
                        }),
                      }}
                      style={{ paddingRight: '14px' }}
                    />
                    {errors.email && <RenderErrorMessage item="email" />}
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <GInput
                      type="text"
                      id="subject"
                      name="subject"
                      placeholder="Subject"
                      registerField={{
                        ...register('subject', {
                          required: 'Please input your subject',
                        }),
                      }}
                      style={{ paddingRight: '14px' }}
                    />
                    {errors.subject && <RenderErrorMessage item="subject" />}
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <GTextarea
                      id="message"
                      name="message"
                      placeholder="Message"
                      registerField={{
                        ...register('message', {
                          required: 'Please input your message',
                        }),
                      }}
                      style={{ paddingRight: '14px' }}
                    />
                    {errors.subject && <RenderErrorMessage item="message" />}
                  </Grid>
                </Grid>
                <Stack direction="row" justifyContent="flex-end" alignItems="center">
                  <GButton type="submit" color="primary">
                    Submit
                  </GButton>
                </Stack>
              </Box>
            </Box>
          </Box>
        </Box>
        {/* SECTION - CONTACT WITH US */}
        <Box component="section">
          <Typography
            fontSize={{ xs: '2.5rem', md: '4.8rem' }}
            lineHeight={{ xs: '3rem', md: '5.2rem' }}
            sx={{
              mb: '16px',
              textAlign: 'center',
              fontWeight: '600',
              color: 'var(--white)',
            }}
          >
            Connect With Us
          </Typography>
          <Stack direction="row" justifyContent="center" alignItems="center">
            <Box
              component="div"
              className={cx('help-and-support__icon-email')}
              sx={{ m: '4px 10px 0 0' }}
            >
              <LazyLoadImage effect="blur" src={Email} alt="email" />
            </Box>
            <Typography
              fontSize={{ xs: '1.8rem', md: '2rem' }}
              lineHeight={{ xs: '2.2rem', md: '2.4rem' }}
              sx={{
                textAlign: 'center',
                fontWeight: '200',
                color: 'var(--white)',
              }}
            >
              Info@Immortalrise.com
            </Typography>
          </Stack>
        </Box>
      </Container>
    </Container>
  );
}
