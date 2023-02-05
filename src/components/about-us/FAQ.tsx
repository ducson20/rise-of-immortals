import { useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Stack, Typography, TypographyProps } from '@mui/material';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useSpring, animated } from '@react-spring/web';

import { styled } from '@mui/system';

import Plus from '@/assets/about-us/svg/plus.svg';
import Minus from '@/assets/about-us/svg/minus.svg';

import { faqItems } from '@/dummy';

export interface IFaqItem {
  id: number;
  title: string;
  description: string;
  isToggle: boolean;
  isOpen: boolean;
}

export interface IFaqProps {}

export default function FAQ(props: IFaqProps) {
  const location = useLocation();

  const [faqsData, setFaqsData] = useState<IFaqItem[]>(faqItems);
  const [propsSpring, set] = useSpring(() => ({ opacity: 1 }));

  const AnimatedDescriptionText = animated(DescriptionText);
  const AnimatedDescriptionTextSpecial = animated(DescriptionTextSpecial);

  const toggleFaqItem = (item: IFaqItem) => {
    const cloneFaqsData = faqsData.map((i) => {
      if (i?.id === item?.id) {
        return { ...i, isToggle: !i?.isToggle, isOpen: !i?.isOpen };
      } else {
        return { ...i, isToggle: false, isOpen: false };
      }
    });
    setFaqsData(cloneFaqsData);
  };

  return (
    <Box
      component="div"
      display={{ xs: location?.pathname.includes('faq') ? 'block' : 'none', md: 'block' }}
      sx={{
        maxWidth: '726px',
        margin: 'auto',
        mb: location?.pathname.includes('faq') ? '20px' : '100px',
        p: '50px 40px',
        borderRadius: '24px',
        background: 'var(--gray-11)',
        boxShadow: '2px 4px 22px rgba(0, 0, 0, 0.25)',
      }}
    >
      {faqsData?.map((item) => (
        <Box key={item?.id} component="div" sx={{ mb: '32px' }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ mb: '16px' }}
          >
            <Typography
              component="h2"
              fontSize={{ xs: '1.8rem', md: '2rem' }}
              lineHeight={{ xs: '2.2rem', md: '2,4rem' }}
              sx={{
                fontWeight: '600',
                color: 'var(--white)',
              }}
            >
              {item?.title}
            </Typography>

            <Box
              component="label"
              htmlFor={String(item?.id)}
              sx={{
                cursor: 'pointer',
                opacity: '1',
                '&:hover': {
                  opacity: '0.8',
                },
                transform: item?.isToggle ? '' : 'rotate(90deg)',
                transition: item?.isToggle ? 'all 0.3s linear' : 'all 0.3s linear',
              }}
              onClick={() => toggleFaqItem(item)}
            >
              <LazyLoadImage
                effect="blur"
                src={item?.isToggle ? Minus : Plus}
                alt={item?.isToggle ? 'minus' : 'plus'}
              />
            </Box>
          </Stack>

          {item?.id !== 12
            ? item?.isOpen && <AnimatedDescriptionText>{item?.description}</AnimatedDescriptionText>
            : item?.isOpen && (
                <>
                  <AnimatedDescriptionText>
                    Yes, being whitelisted gives you the priority right to buy NFTs or tokens at the
                    start of sales. Ways to get on Rise of Immortals Whitelist:
                  </AnimatedDescriptionText>
                  <AnimatedDescriptionTextSpecial>
                    Subscribing to our social media networks — Low chance <br /> Taking part in our
                    Art Gallery — Low chance <br />
                    Active participation in our community — Medium chance <br />
                    Attending AMA sessions — Medium chance <br />
                    Promotion of the project through personal social media networks — High chance
                    <br />
                    Taking part and winning contests — High or 100% chance <br />
                    Suggesting ideas for project improvement — Average chance or 100% chance if your
                    idea is used
                  </AnimatedDescriptionTextSpecial>
                </>
              )}
        </Box>
      ))}
    </Box>
  );
}

const DescriptionText = styled(Typography)<TypographyProps>(() => ({
  mb: '20px',
  fontSize: '1.4rem',
  lineHeight: '1.8rem',
  fontWeight: '300',
  color: 'var(--gray-01)',
  transition: 'all 0.3s linear',
}));

const DescriptionTextSpecial = styled(Typography)<TypographyProps>(() => ({
  mb: '20px',
  fontSize: '1.4rem',
  lineHeight: '1.8rem',
  fontWeight: '300',
  color: 'var(--gray-01)',
  padding: '12px 0 0 16px',
  transition: 'all 1s linear',
}));
