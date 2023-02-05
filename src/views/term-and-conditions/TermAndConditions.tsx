import { Container, Box, Typography, List, ListItem } from '@mui/material';

import classNames from 'classnames/bind';
import styles from './TermAndConditions.module.scss';

const cx = classNames.bind(styles);

export interface ITermAndConditionsProps {}

export default function TermAndConditions(props: ITermAndConditionsProps) {
  return (
    <Container maxWidth={false} className={cx('term-and-conditions__container')}>
      <Container
        className={cx('term-and-conditions__wrapper')}
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
              Term And Conditions
            </Typography>
            <Typography
              component="p"
              fontSize={{ xs: '1.6rem' }}
              lineHeight={{ xs: '2rem' }}
              sx={{
                mb: '16px',
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
                  mb: '20px',
                  fontWeight: '300',
                  color: 'var(--gray-01)',
                }}
              >
                Rise of Immortals is a blockchain game application that runs on the Ethereum
                blockchain (Layer 2 Immutable X) compatible networks using specially-developed smart
                contracts (each, a “Smart Contract”) to enable users to own, transfer, buy and sell
                Rise of Immortals NFTs, which the user can then interact with by using them in the
                game (the “App”). The Smart Contracts, Rise of Immortals Application, and the Site
                are collectively referred to in these Terms as the “Service”.
              </Typography>
              <Typography
                component="p"
                fontSize={{ xs: '1.4rem' }}
                lineHeight={{ xs: '1.8rem' }}
                sx={{
                  mb: '16px',
                  fontWeight: '300',
                  color: 'var(--gray-01)',
                }}
              >
                CG3D Studios ("CG3D Studios ", "we", or "us") is making the App available to you.
                However, you must concur to these Terms of Use and any terms and conditions included
                herein by reference before using the App, the Smart Contracts, or the Site
                (collectively, these "Terms"). THESE TERMS GOVERN YOUR USE OF THE SERVICE UNLESS WE
                HAVE ENTERED INTO A SEPARATE WRITTEN AGREEMENT WITH YOU FOR THAT PURPOSE, SO PLEASE
                READ THEM CAREFULLY BEFORE USING THE SERVICE. WE ARE ONLY WILLING TO MAKE THE
                SERVICE AVAILABLE TO YOU IF YOU ACCEPT ALL OF THESE TERMS. YOU ARE CONFIRMING THAT
                YOU UNDERSTAND AND AGREE TO BE BOUND BY ALL OF THESE TERMS BY USING THE SERVICE, OR
                ANY PORTION OF THEM, OR BY INDICATING YOUR ACCEPTANCE IN AN ADJACENT BOX. YOU
                REPRESENT THAT YOU HAVE THE LEGAL AUTHORITY TO ACCEPT THESE TERMS ON BEHALF OF A
                COMPANY OR OTHER LEGAL ENTITY IF YOU ARE ACCEPTING THESE TERMS ON BEHALF OF SUCH
                ENTITY, IN WHICH CASE "YOU" WILL MEAN SUCH ENTITY. IF YOU DO NOT AGREE TO THESE
                TERMS, YOU MAY NOT ACCESS OR USE THE SERVICE; IF YOU DO NOT HAVE SUCH AUTHORITY; OR
                IF YOU DO NOT ACCEPT ALL OF THESE TERMS, WE ARE UNWILLING TO MAKE THE SERVICE
                AVAILABLE TO YOU.
              </Typography>
            </Box>

            <List component="ol">
              <ListItem component="li" sx={{ display: 'block' }}>
                <Typography
                  component="h3"
                  fontSize={{ xs: '2.2rem', md: '3.6rem' }}
                  lineHeight={{ xs: '2.6rem', md: '4rem' }}
                  sx={{
                    mb: '16px',
                    fontWeight: '600',
                    color: 'var(--white)',
                  }}
                >
                  1. Using the Service
                </Typography>
                <Typography
                  component="h4"
                  fontSize={{ xs: '2rem', md: '2.8rem' }}
                  lineHeight={{ xs: '2.4rem', md: '3.2rem' }}
                  sx={{
                    pl: '16px',
                    mb: '20px',
                    fontWeight: '600',
                    color: 'var(--white)',
                  }}
                >
                  1.1. Your Right to Use the Service
                </Typography>
                <Box component="div" sx={{ pl: '32px' }}>
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
                    You have a revocable, non-exclusive, non-transferable, limited right to access
                    and use the Service for your own personal, non-commercial entertainment, subject
                    to your agreement to and continued compliance with these Terms of Service and
                    any other applicable CG3D Studios regulations. You consent to make no other uses
                    of the Service.
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
                    The following restrictions apply to the use of the Service:
                  </Typography>
                  <Box component="div" sx={{ pl: '16px' }}>
                    <Typography
                      component="p"
                      fontSize={{ xs: '1.4rem' }}
                      lineHeight={{ xs: '1.8rem' }}
                      sx={{
                        mb: '12px',
                        fontWeight: '300',
                        color: 'var(--gray-01)',
                      }}
                    >
                      • &nbsp;You accept full responsibility for any unauthorized use of the Service
                      by minors.
                    </Typography>
                    <Typography
                      component="p"
                      fontSize={{ xs: '1.4rem' }}
                      lineHeight={{ xs: '1.8rem' }}
                      sx={{
                        mb: '12px',
                        fontWeight: '300',
                        color: 'var(--gray-01)',
                      }}
                    >
                      • &nbsp;You shall not (or attempt to) purchase, sell, rent or give away your
                      Account, create an Account using a false identity or information, or on behalf
                      of someone other than yourself;
                    </Typography>
                    <Typography
                      component="p"
                      fontSize={{ xs: '1.4rem' }}
                      lineHeight={{ xs: '1.8rem' }}
                      sx={{
                        mb: '12px',
                        fontWeight: '300',
                        color: 'var(--gray-01)',
                      }}
                    >
                      • &nbsp;You shall not use the Service if you have previously been removed by
                      Rise of Rise of Immortals, or previously been banned from playing any Rise of
                      Immortals game.
                    </Typography>
                    <Typography
                      component="p"
                      fontSize={{ xs: '1.4rem' }}
                      lineHeight={{ xs: '1.8rem' }}
                      sx={{
                        mb: '12px',
                        fontWeight: '300',
                        color: 'var(--gray-01)',
                      }}
                    >
                      • &nbsp;You shall not use the Service to advertise, solicit, or transmit any
                      commercial advertisements, including chain letters, junk or spam e-mail, or
                      repetitive or misleading messages to anyone.
                    </Typography>
                  </Box>
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
                    Login information and Your Account
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
                    You may be required to connect a cryptocurrency wallet for your Account or you
                    may also use other credentials to access the Account ("Login Information"). You
                    must not give out your account information or the wallet seed information to
                    anyone else, grant unauthorized access to your account, or take any other
                    actions that could compromise your account's security. You must immediately
                    contact Rise of Immortals and change your Login Information if you learn of or
                    have a good reason to suspect any security breach, including without limitation
                    any loss, theft, or unauthorized disclosure of the Login Information. Your use
                    of the Login Information, including any purchases made with it, whether or not
                    you approved them, is entirely your responsibility. You are also solely
                    responsible for keeping the Login Information confidential. Anything that occurs
                    through your Account is your fault.
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
                    Rise of Immortals reserves the right to remove or reclaim any usernames at any
                    time and for any reason, including but not limited to claims by a third party
                    that a username violates the third party's rights.
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
                    Use Limitations
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
                    The Service may not be used in any way that violates these Use Limitations, and
                    doing so may result in the immediate cancellation of your restricted right as
                    well as legal repercussions for you.
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
                    You agree that you will not, under any circumstances:
                  </Typography>
                  <Box component="div" sx={{ pl: '16px' }}>
                    <Typography
                      component="p"
                      fontSize={{ xs: '1.4rem' }}
                      lineHeight={{ xs: '1.8rem' }}
                      sx={{
                        mb: '12px',
                        fontWeight: '300',
                        color: 'var(--gray-01)',
                      }}
                    >
                      • &nbsp;Use Rise of Immortals' support services improperly or engage in any
                      behavior that Rise of Immortals judges to be at odds with the spirit or
                      objective of the Service.
                    </Typography>
                    <Typography
                      component="p"
                      fontSize={{ xs: '1.4rem' }}
                      lineHeight={{ xs: '1.8rem' }}
                      sx={{
                        mb: '12px',
                        fontWeight: '300',
                        color: 'var(--gray-01)',
                      }}
                    >
                      • &nbsp;Use any unauthorized third-party software created to alter or
                      interfere with the Service, any Rise of Immortals game, or any Rise of
                      Immortals game experience, or participate (directly or indirectly) in the use
                      of cheats, exploits, automation software, emulators, bots, hacks, mods, or any
                      similar software.
                    </Typography>
                    <Typography
                      component="p"
                      fontSize={{ xs: '1.4rem' }}
                      lineHeight={{ xs: '1.8rem' }}
                      sx={{
                        mb: '12px',
                        fontWeight: '300',
                        color: 'var(--gray-01)',
                      }}
                    >
                      • &nbsp;Modify or cause to be modified any files that are a part of the
                      Service or any Rise of Immortals game without Rise of Immortals' express
                      written consent.
                    </Typography>
                    <Typography
                      component="p"
                      fontSize={{ xs: '1.4rem' }}
                      lineHeight={{ xs: '1.8rem' }}
                      sx={{
                        mb: '12px',
                        fontWeight: '300',
                        color: 'var(--gray-01)',
                      }}
                    >
                      • &nbsp;Disrupt, impede, or otherwise negatively impact the service's regular
                      operation, or act in a way that might adversely impact how other users utilize
                      the service or enjoy the games in Rise of Immortals. This covers win trading
                      and any other kind of ranking manipulation, as well as using the Service's
                      flaws against other players to obtain an unfair advantage and any other
                      behavior that deliberately abuses or violates the Service's design.
                    </Typography>
                    <Typography
                      component="p"
                      fontSize={{ xs: '1.4rem' }}
                      lineHeight={{ xs: '1.8rem' }}
                      sx={{
                        mb: '12px',
                        fontWeight: '300',
                        color: 'var(--gray-01)',
                      }}
                    >
                      • &nbsp;Disrupt or overload any computer or server utilized to provide or
                      maintain the Service or any Rise of Immortals game environment, or help or
                      assist in doing so.
                    </Typography>
                    <Typography
                      component="p"
                      fontSize={{ xs: '1.4rem' }}
                      lineHeight={{ xs: '1.8rem' }}
                      sx={{
                        mb: '12px',
                        fontWeight: '300',
                        color: 'var(--gray-01)',
                      }}
                    >
                      • &nbsp;Initiate, support, or participate in any kind of assault, such as
                      spreading viruses, launching denial-of-service attacks against the service, or
                      making any attempts to obstruct someone else from using or enjoying the
                      service.
                    </Typography>
                    <Typography
                      component="p"
                      fontSize={{ xs: '1.4rem' }}
                      lineHeight={{ xs: '1.8rem' }}
                      sx={{
                        mb: '12px',
                        fontWeight: '300',
                        color: 'var(--gray-01)',
                      }}
                    >
                      • &nbsp;Use any method other than the user interface provided by Rise of
                      Immortals to attempt to gain unauthorized access to the Service, Accounts
                      registered or used by others, or the computers, servers, or networks connected
                      to the Service. This includes, but is not limited to, trying to get around or
                      modify any security measures, technology, device, or software that is a part
                      of the Service.
                    </Typography>
                    <Typography
                      component="p"
                      fontSize={{ xs: '1.4rem' }}
                      lineHeight={{ xs: '1.8rem' }}
                      sx={{
                        mb: '12px',
                        fontWeight: '300',
                        color: 'var(--gray-01)',
                      }}
                    >
                      • &nbsp;Post any content that is racially, sexually, religiously, or otherwise
                      unpleasant or insulting. You should also refrain from engaging in persistently
                      destructive behavior, such as uploading something repeatedly and without
                      permission.
                    </Typography>
                    <Typography
                      component="p"
                      fontSize={{ xs: '1.4rem' }}
                      lineHeight={{ xs: '1.8rem' }}
                      sx={{
                        mb: '12px',
                        fontWeight: '300',
                        color: 'var(--gray-01)',
                      }}
                    >
                      • &nbsp;Post any content that links to or contains explicit language,
                      excessive violence, or otherwise offensive material.
                    </Typography>
                    <Typography
                      component="p"
                      fontSize={{ xs: '1.4rem' }}
                      lineHeight={{ xs: '1.8rem' }}
                      sx={{
                        mb: '12px',
                        fontWeight: '300',
                        color: 'var(--gray-01)',
                      }}
                    >
                      • &nbsp;Attempt to harass, abuse, or damage another person or group, including
                      Rise of Immortals personnel, such as customer service agents and to advocate
                      for or incite such behavior toward such persons or groups.
                    </Typography>
                    <Typography
                      component="p"
                      fontSize={{ xs: '1.4rem' }}
                      lineHeight={{ xs: '1.8rem' }}
                      sx={{
                        mb: '12px',
                        fontWeight: '300',
                        color: 'var(--gray-01)',
                      }}
                    >
                      • &nbsp;Make available through the Service any content or information that
                      violates the rights of any person or entity, including but not limited to
                      impersonating any other person, including a Rise of Immortals employee, to
                      privacy, publicity, or other rights.
                    </Typography>
                    <Typography
                      component="p"
                      fontSize={{ xs: '1.4rem' }}
                      lineHeight={{ xs: '1.8rem' }}
                      sx={{
                        mb: '12px',
                        fontWeight: '300',
                        color: 'var(--gray-01)',
                      }}
                    >
                      • &nbsp;Reverse engineering, decompiling, disassembling, deciphering, or
                      attempting to in any other way to obtain the source code for any underlying
                      software or other intellectual property used to provide the Service or any
                      Rise of Immortals game is strictly prohibited. You are also not allowed to
                      obtain any information from the Service or any Rise of Immortals game using
                      any method not specifically authorized by Rise of Immortals.
                    </Typography>
                    <Typography
                      component="p"
                      fontSize={{ xs: '1.4rem' }}
                      lineHeight={{ xs: '1.8rem' }}
                      sx={{
                        mb: '12px',
                        fontWeight: '300',
                        color: 'var(--gray-01)',
                      }}
                    >
                      • &nbsp;Asking or attempting to ask other players of the Service or any Rise
                      of Immortals game for their login information is against the law.
                    </Typography>
                    <Typography
                      component="p"
                      fontSize={{ xs: '1.4rem' }}
                      lineHeight={{ xs: '1.8rem' }}
                      sx={{
                        mb: '12px',
                        fontWeight: '300',
                        color: 'var(--gray-01)',
                      }}
                    >
                      • &nbsp;Collect or publish any user's private information, such as their
                      financial information, identity documents, or any personally identifying
                      information (in text, image, or video form).
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
                      • &nbsp;Use any Rise of Immortals game for wagering, gambling, or any similar
                      activity where awards or prizes can be earned (directly or indirectly),
                      including wagering on the results of games in which you take part as a player,
                      whether or not there is a cost or stake involved.
                    </Typography>
                  </Box>
                  <Typography
                    component="p"
                    fontSize={{ xs: '1.4rem' }}
                    lineHeight={{ xs: '1.8rem' }}
                    sx={{
                      mb: '16px',
                      fontWeight: '300',
                      color: 'var(--gray-01)',
                    }}
                  >
                    Rise of Immortals maintains the right to decide what behavior it deems to be
                    contrary to the terms of service or in any other way against the letter or
                    spirit of these terms of service or the Service itself. As a result, Rise of
                    Immortals reserves the right to take appropriate action, which may include
                    closing your Account and forbidding you from making any further use of the
                    Service, completely or in part.
                  </Typography>
                </Box>
                <Typography
                  component="h4"
                  fontSize={{ xs: '2rem', md: '2.8rem' }}
                  lineHeight={{ xs: '2.4rem', md: '3.2rem' }}
                  sx={{
                    pl: '16px',
                    mb: '20px',
                    fontWeight: '600',
                    color: 'var(--white)',
                  }}
                >
                  1.2. Suspension and Termination of Account and Service
                </Typography>
                <Box component="div" sx={{ pl: '32px' }}>
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
                    RISE OF IMMORTALS MAY, WITH OR WITHOUT NOTIFICATION TO YOU, LIMIT, SUSPEND,
                    TERMINATE, MODIFY, OR DELETE ACCOUNTS OR ACCESS TO THE SERVICE OR PORTIONS
                    THEREOF (I) IF YOU ARE, OR RISE OF IMMORTALS SUSPECTS THAT YOU ARE, FAILING TO
                    COMPLY WITH THESE TERMS OF SERVICE; OR (II) FOR ANY ACTUAL. BECAUSE OF ACCOUNT
                    TERMINATION OR LIMITATION, YOU COULD LOSE YOUR USER NAME AND PERSONA IN THE
                    SERVICE, AS WELL AS ANY BENEFITS, PRIVILEGES, EARNED VIRTUAL ITEMS, AND
                    PURCHASED VIRTUAL ITEMS ASSOCIATED WITH YOUR USE OF THE SERVICE, AND RISE OF
                    IMMORTALS IS UNBELIEVABLY UNRESPONSIBLE TO COMPENSATE YOU FOR ANY SUCH LOSSES OR
                    RESULTS. WITHOUT
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
                    LIMITING OUR OTHER REMEDIES, WE MAY LIMIT, SUSPEND OR TERMINATE THE SERVICE AND
                    ACCOUNTS OR PORTIONS THEREOF, AND PROHIBIT ACCESS TO OUR GAMES AND SITES, AND
                    THEIR CONTENT, SERVICES, AND TOOLS. DELAY OR REMOVE HOSTED CONTENT, AND TAKE
                    TECHNICAL AND LEGAL STEPS TO PREVENT USERS FROM ACCESSING THE SERVICE IF WE
                    BELIEVE THAT THEY ARE CREATING RISK OR POSSIBLE LEGAL LIABILITIES, INFRINGING
                    THE INTELLECTUAL PROPERTY RIGHTS OF THIRD PARTIES, OR ACTING INCONSISTENTLY WITH
                    THE LETTER OR SPIRIT OF OUR TERMS OR POLICIES. ADDITIONALLY, WE MAY, IN
                    APPROPRIATE CIRCUMSTANCES AND AT OUR SOLE DISCRETION, SUSPEND OR TERMINATE
                    ACCOUNTS OF USERS WHO MAY BE REPEAT INFRINGERS OF THIRD-PARTY INTELLECTUAL
                    PROPERTY RIGHTS.
                  </Typography>
                  <Typography
                    component="p"
                    fontSize={{ xs: '1.4rem' }}
                    lineHeight={{ xs: '1.8rem' }}
                    sx={{
                      mb: '16px',
                      fontWeight: '300',
                      color: 'var(--gray-01)',
                    }}
                  >
                    Anytime Rise of Immortals decides to stop offering and/or maintaining the
                    Service, your permission to use the entire Service or a portion of it will be
                    instantly revoked. Rise of Immortals is not required to provide users with any
                    refunds, prizes, or other compensation in connection with the Service that has
                    been terminated in this case. Your account cancellation may include blocking
                    your access to the Service or any part of it, including any content you or
                    others have posted.
                  </Typography>
                </Box>
              </ListItem>

              <ListItem component="li" sx={{ display: 'block' }}>
                <Typography
                  component="h3"
                  fontSize={{ xs: '2.2rem', md: '3.6rem' }}
                  lineHeight={{ xs: '2.6rem', md: '4rem' }}
                  sx={{
                    mb: '16px',
                    fontWeight: '600',
                    color: 'var(--white)',
                  }}
                >
                  2. Ownership
                </Typography>
                <Typography
                  component="h4"
                  fontSize={{ xs: '2rem', md: '2.8rem' }}
                  lineHeight={{ xs: '2.4rem', md: '3.2rem' }}
                  sx={{
                    pl: '16px',
                    mb: '20px',
                    fontWeight: '600',
                    color: 'var(--white)',
                  }}
                >
                  2.1. Games and Service
                </Typography>
                <Typography
                  component="p"
                  fontSize={{ xs: '1.4rem' }}
                  lineHeight={{ xs: '1.8rem' }}
                  sx={{
                    pl: '32px',
                    mb: '20px',
                    fontWeight: '300',
                    color: 'var(--gray-01)',
                  }}
                >
                  All intellectual property rights, titles, and interests in and to the Service
                  (including, without limitation, any games, titles, computer code, themes, objects,
                  characters, character names, stories, dialogue, catchphrases, artwork, animations,
                  sounds, musical compositions, audio-visual effects, methods of operation, moral
                  rights, documentation, in-game chat transcripts, character profile information,
                  recordings of games played using a Rise of Immortals game client, and the Rise of
                  Immortals trademark) are reserved. About its games and the Service, Rise of
                  Immortals reserves all rights, including without limitation any intellectual
                  property rights or other proprietary rights.
                </Typography>
                <Typography
                  component="h4"
                  fontSize={{ xs: '2rem', md: '2.8rem' }}
                  lineHeight={{ xs: '2.4rem', md: '3.2rem' }}
                  sx={{
                    pl: '16px',
                    mb: '20px',
                    fontWeight: '600',
                    color: 'var(--white)',
                  }}
                >
                  2.2. Accounts
                </Typography>
                <Typography
                  component="p"
                  fontSize={{ xs: '1.4rem' }}
                  lineHeight={{ xs: '1.8rem' }}
                  sx={{
                    pl: '32px',
                    mb: '20px',
                    fontWeight: '300',
                    color: 'var(--gray-01)',
                  }}
                >
                  DESPITE ANYTHING TO THE CONTRARY HEREIN, YOU ACKNOWLEDGE AND AGREE THAT YOU WILL
                  NOT HAVE ANY OWNERSHIP OR OTHER PROPERTY INTEREST IN THE ACCOUNT. ADDITIONALLY,
                  YOU ACKNOWLEDGE AND AGREE THAT ALL RIGHTS IN AND TO THE ACCOUNT ARE AND WILL
                  ALWAYS REMAIN THE PROPERTY OF RISE OF IMMORTALS AND WILL BENEFIT THEM.
                </Typography>
                <Typography
                  component="h4"
                  fontSize={{ xs: '2rem', md: '2.8rem' }}
                  lineHeight={{ xs: '2.4rem', md: '3.2rem' }}
                  sx={{
                    pl: '16px',
                    mb: '20px',
                    fontWeight: '600',
                    color: 'var(--white)',
                  }}
                >
                  2.3. Virtual Content
                </Typography>
                <Typography
                  component="p"
                  fontSize={{ xs: '1.4rem' }}
                  lineHeight={{ xs: '1.8rem' }}
                  sx={{
                    pl: '32px',
                    mb: '16px',
                    fontWeight: '300',
                    color: 'var(--gray-01)',
                  }}
                >
                  All of the content that is used in the Service or in Rise of Immortals games is
                  owned by Rise of Immortals or is otherwise permitted to be used by Rise of
                  Immortals. The virtual items, features, goods, services, or currency that appear
                  or originate in any Rise of Immortals game, whether earned in a game or purchased
                  from Rise of Immortals, or any other attributes associated with an Account or
                  stored on the Service, are just a few examples of the content that appears in the
                  Service, and you agree that you have no right or title in or to it.
                </Typography>
              </ListItem>

              <ListItem component="li" sx={{ display: 'block' }}>
                <Typography
                  component="h3"
                  fontSize={{ xs: '2.2rem', md: '3.6rem' }}
                  lineHeight={{ xs: '2.6rem', md: '4rem' }}
                  sx={{
                    mb: '16px',
                    fontWeight: '600',
                    color: 'var(--white)',
                  }}
                >
                  3. User Content
                </Typography>
                <Typography
                  component="h4"
                  fontSize={{ xs: '2rem', md: '2.8rem' }}
                  lineHeight={{ xs: '2.4rem', md: '3.2rem' }}
                  sx={{
                    pl: '16px',
                    mb: '20px',
                    fontWeight: '600',
                    color: 'var(--white)',
                  }}
                >
                  3.1. Submission of User Content
                </Typography>
                <Typography
                  component="p"
                  fontSize={{ xs: '1.4rem' }}
                  lineHeight={{ xs: '1.8rem' }}
                  sx={{
                    pl: '32px',
                    mb: '20px',
                    fontWeight: '300',
                    color: 'var(--gray-01)',
                  }}
                >
                  "User Content" refers to all messages, photos, sounds, and other content that you,
                  other users, or the Service's Rise of Immortals game clients submit or send. This
                  includes, but is not limited to, chat text. By sending or submitting any User
                  Content while using the Service, you affirm, represent, and warrant that it is (a)
                  truthful and not confidential or misleading; (b) not against any laws, contractual
                  restrictions, or other third-party rights, and that you have permission from any
                  third party whose personal information or intellectual property is contained in
                  the User Content; and (c) free of viruses, adware, spyware, worms, or other
                  harmful software and (d) you understand and agree that Rise of Immortals will
                  always process any personal information you provide in connection with such
                  content in accordance with its Privacy Policy.
                </Typography>
                <Typography
                  component="h3"
                  fontSize={{ xs: '1.8rem', md: '2.4rem' }}
                  lineHeight={{ xs: '1.8rem', md: '2.8rem' }}
                  sx={{
                    pl: '32px',
                    mb: '20px',
                    fontWeight: '600',
                    color: 'var(--white)',
                  }}
                >
                  3.1.1. Content Screening
                </Typography>
                <Box component="div" sx={{ pl: '48px' }}>
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
                    Rise of Immortals disclaims any liability for the actions of users who submit
                    User Content and for any monitoring of the Service for objectionable material or
                    behavior. We are unable to pre-screen or keep track of all User Content. The
                    Service is used at the user's own risk. You run the risk of being exposed to
                    obscene, lewd, or otherwise inappropriate User Content if you use the Service.
                    Use of any User Content made accessible in connection with the Service is at
                    your own risk. When you use the Service, our agents or technology may, in our
                    sole discretion, observe and/or record your communications with or usage of the
                    Service, including without limitation chat messages.
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
                    You hereby give your unreserved agreement to such monitoring and recording by
                    agreeing to these Terms of Service. Your expectation of privacy regarding the
                    transmission of any User Content, including but not limited to chat text or
                    voice interactions, is acknowledged and agreed upon by you.
                  </Typography>
                  <Typography
                    component="p"
                    fontSize={{ xs: '1.4rem' }}
                    lineHeight={{ xs: '1.8rem' }}
                    sx={{
                      mb: '16px',
                      fontWeight: '300',
                      color: 'var(--gray-01)',
                    }}
                  >
                    Rise of Immortals maintains the right, at any time, for any reason or no reason
                    at all, to review, monitor, restrict, edit, remove, deactivate access to, or
                    otherwise make unavailable any User Content (including without limitation your
                    User Content). Rise of Immortals disclaims all liability for User Content and
                    any obligation to change or remove any offensive User Content, even if it
                    decides at any point to monitor the Service in its sole discretion. We reserve
                    the right to edit, refuse to post, or remove any User Content at our sole
                    discretion, but we are not obligated to do so.
                  </Typography>
                </Box>
                <Typography
                  component="h4"
                  fontSize={{ xs: '2rem', md: '2.8rem' }}
                  lineHeight={{ xs: '2.4rem', md: '3.2rem' }}
                  sx={{
                    pl: '16px',
                    mb: '20px',
                    fontWeight: '600',
                    color: 'var(--white)',
                  }}
                >
                  3.2. Information Use by Other Members of the Service
                </Typography>
                <Typography
                  component="h3"
                  fontSize={{ xs: '1.8rem', md: '2.4rem' }}
                  lineHeight={{ xs: '1.8rem', md: '2.8rem' }}
                  sx={{
                    pl: '32px',
                    mb: '20px',
                    fontWeight: '600',
                    color: 'var(--white)',
                  }}
                >
                  3.2.1. Public Discourse
                </Typography>
                <Box component="div" sx={{ pl: '48px' }}>
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
                    You can publish User Content, such as your observations and comments on chosen
                    themes, in the Service's numerous forums, blogs, and chat capabilities. Rise of
                    Immortals cannot ensure that other members won't make advantage of the concepts
                    and knowledge you give. Therefore, don't publish any ideas or information you
                    want to keep private or that you don't want others to use on the Service. Any
                    thoughts or information that you choose to provide won't be evaluated, used, or
                    paid for by Rise of Immortals.
                  </Typography>
                </Box>
                <Typography
                  component="h3"
                  fontSize={{ xs: '1.8rem', md: '2.4rem' }}
                  lineHeight={{ xs: '1.8rem', md: '2.8rem' }}
                  sx={{
                    pl: '32px',
                    mb: '20px',
                    fontWeight: '600',
                    color: 'var(--white)',
                  }}
                >
                  3.2.2. Responsible For Your Own Content
                </Typography>
                <Box component="div" sx={{ pl: '48px' }}>
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
                    All information that you publish on, transmit through, or make accessible to
                    others in connection with the Service is solely your responsibility. For any
                    reason, including but not limited to User Content, it is in Rise of Immortals'
                    sole discretion if there is a violation of these Terms of Service, Rise of
                    Immortals has the right to reject, refuse to post, or delete any User Content.
                  </Typography>
                </Box>
                <Typography
                  component="h3"
                  fontSize={{ xs: '1.8rem', md: '2.4rem' }}
                  lineHeight={{ xs: '1.8rem', md: '2.8rem' }}
                  sx={{
                    pl: '32px',
                    mb: '20px',
                    fontWeight: '600',
                    color: 'var(--white)',
                  }}
                >
                  3.2.3. Your License to Rise of Immortals
                </Typography>
                <Box component="div" sx={{ pl: '48px' }}>
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
                    You hereby grant Rise of Immortals an irrevocable, perpetual, transferable,
                    fully paid-up, royalty-free, worldwide license (including the right to
                    sublicense and assign to a third party) and the right to copy, reproduce, fix,
                    adapt, modify, create derivative works from, manufacture, commercialize,
                    publish, distribute, sell, license, sublicense, transfer, lease, transmit,
                    publicly display, publicly perform, or provide access electronically, broadcast,
                    communicate to the public, and to make derivative works from. Additionally, you
                    give Rise of Immortals permission to delegate any of the rights provided to Rise
                    of Immortals in accordance with these Terms of Service. Furthermore, you agree
                    to provide Rise of Immortals the unrestricted, irrevocable right to use and
                    exploit any User Content, including your name, likeness, and any other
                    information or materials included therein, without any obligation to compensate
                    you. You give up any attribution rights and/or moral rights you may have in your
                    User Content, unless expressly forbidden by law, regardless of how your User
                    Content is modified or amended. Nothing in these Terms of Service is intended to
                    limit any rights you may have to use and commercially exploit your User Content.
                    Rise of Immortals does not claim ownership of any of your User Content. Rise of
                    Immortals is not obligated to keep track of or uphold your user content's
                    intellectual property rights.
                  </Typography>
                </Box>
                <Typography
                  component="h4"
                  fontSize={{ xs: '2rem', md: '2.8rem' }}
                  lineHeight={{ xs: '2.4rem', md: '3.2rem' }}
                  sx={{
                    pl: '16px',
                    mb: '20px',
                    fontWeight: '600',
                    color: 'var(--white)',
                  }}
                >
                  3.3. User Interactions
                </Typography>
                <Box component="div" sx={{ pl: '32px' }}>
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
                    Your interactions with other Service users and any other parties with whom you
                    come into contact while using the Service and/or Rise of Immortals games are
                    strictly your responsibility. Rise of Immortals reserves the right to intervene
                    in these issues in any manner but does not have to fully assist Rise of
                    Immortals in its investigation of any alleged illegal, fraudulent, or
                    inappropriate activities, you agree to give Rise of Immortals access to any
                    password-protected areas of your Account.
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
                    You agree to release us (and our officers, directors, agents, subsidiaries,
                    joint ventures, and employees) fray all claims, demands, and damages (actual and
                    consequential), known and unknown, arising out of or in any way related to any
                    disputes you may have with one or more users.
                  </Typography>
                </Box>
              </ListItem>

              <ListItem component="li" sx={{ display: 'block' }}>
                <Typography
                  component="h3"
                  fontSize={{ xs: '2.2rem', md: '3.6rem' }}
                  lineHeight={{ xs: '2.6rem', md: '4rem' }}
                  sx={{
                    mb: '16px',
                    fontWeight: '600',
                    color: 'var(--white)',
                  }}
                >
                  4. Feedback
                </Typography>
                <Typography
                  component="p"
                  fontSize={{ xs: '1.4rem' }}
                  lineHeight={{ xs: '1.8rem' }}
                  sx={{
                    pl: '16px',
                    mb: '16px',
                    fontWeight: '300',
                    color: 'var(--gray-01)',
                  }}
                >
                  You have the option to provide comments, bug reports, ideas, and other feedback
                  (collectively, "Feedback") regarding the App, including without limitation
                  suggestions for improvements. By providing any feedback, you agree that we are
                  permitted to use it as we see fit, without further payment to you, and to disclose
                  it to third parties (whether on a non-confidential basis or otherwise). You hereby
                  offer us a license under all rights necessary for us to incorporate and use your
                  feedback for any purpose, throughout the world, on a perpetual, irrevocable,
                  nonexclusive basis.
                </Typography>
              </ListItem>
              <ListItem component="li" sx={{ display: 'block' }}>
                <Typography
                  component="h3"
                  fontSize={{ xs: '2.2rem', md: '3.6rem' }}
                  lineHeight={{ xs: '2.6rem', md: '4rem' }}
                  sx={{
                    mb: '16px',
                    fontWeight: '600',
                    color: 'var(--white)',
                  }}
                >
                  5. Fees and Purchase Terms
                </Typography>
                <Typography
                  component="h4"
                  fontSize={{ xs: '2rem', md: '2.8rem' }}
                  lineHeight={{ xs: '2.4rem', md: '3.2rem' }}
                  sx={{
                    pl: '16px',
                    mb: '20px',
                    fontWeight: '600',
                    color: 'var(--white)',
                  }}
                >
                  5.1. Purchases
                </Typography>
                <Box component="div" sx={{ pl: '32px' }}>
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
                    A limited, personal, non-transferable, non-sublicensable, revocable right to use
                    (a) virtual currency, such as but not limited to virtual cash or SAPPHIRE, all
                    for use in Rise of Immortals games; (b) virtual in-game items, content, or
                    features; and (c) other goods or services may be purchased through the Service
                    using "real world" money (points a-c are jointly referred to as "Virtual
                    Items"). You may not acquire Virtual Items from us or our approved partners in
                    any other way than through the Service.
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
                    Rise of Immortals reserves the right to at any time, with or without prior
                    notice, manage, regulate, control, change, or eliminate Virtual Items. If Rise
                    of Immortals exercises any such rights, Rise of Immortals shall not be liable to
                    you or any third party. Virtual Items may only be transferred when specifically
                    permitted by the Service. You may not attempt to sell, buy, redeem, or otherwise
                    transfer Virtual Items to any person or entity, including but not limited to
                    Rise of Immortals, another user, or any third party, except as expressly
                    permitted in the Service. The provision of Virtual Items for use in Rise of
                    Immortals games is a service provided by Rise of Immortals and occurs
                    immediately upon Rise of Immortals accepting your purchase. ALL PURCHASES AND
                    REDEMPTIONS OF VIRTUAL ITEMS MADE THROUGH THE SERVICE ARE FINAL AND
                    NON-REFUNDABLE.
                  </Typography>
                </Box>
                <Typography
                  component="h4"
                  fontSize={{ xs: '2rem', md: '2.8rem' }}
                  lineHeight={{ xs: '2.4rem', md: '3.2rem' }}
                  sx={{
                    pl: '16px',
                    mb: '20px',
                    fontWeight: '600',
                    color: 'var(--white)',
                  }}
                >
                  5.2. Payment of Fees
                </Typography>
                <Box component="div" sx={{ pl: '32px' }}>
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
                    You consent to pay any fees or taxes that you or anyone else using an account
                    that is registered to you may incur. Rise of Immortals may, at any given time,
                    alter the cost of the Virtual Items made available through the Service. You
                    acknowledge that Rise of Immortals is not obligated to give a refund for any
                    reason and that you will not be compensated financially or otherwise for unused
                    virtual goods when an account is closed, regardless of whether it was voluntary
                    or involuntary.
                  </Typography>
                </Box>

                <Typography
                  component="h4"
                  fontSize={{ xs: '2rem', md: '2.8rem' }}
                  lineHeight={{ xs: '2.4rem', md: '3.2rem' }}
                  sx={{
                    pl: '16px',
                    mb: '20px',
                    fontWeight: '600',
                    color: 'var(--white)',
                  }}
                >
                  5.3 FEES AND PAYMENT
                </Typography>
                <Box component="div" sx={{ pl: '32px' }}>
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
                    A. Any financial transactions you engage in will only be made over the Ethereum
                    blockchain (Layer 2 Immutable X) compatible networks if you choose to buy,
                    trade, or breed Rise of Immortals NFT on the App, with other users, or via the
                    App. We won't know about or be able to influence any payments or transactions,
                    and we also lack the power to stop any of them. In light of this, you should be
                    aware that we won't be liable for any claims or damages that come from any
                    transactions you carry out using the App, using Smart Contracts, or carrying out
                    any other transactions using the Ethereum blockchain (Layer 2 Immutable X)
                    compatible networks. This goes for both you and any third parties.
                  </Typography>
                  <Typography
                    component="p"
                    fontSize={{ xs: '1.4rem' }}
                    lineHeight={{ xs: '1.8rem' }}
                    sx={{
                      mb: '16px',
                      fontWeight: '300',
                      color: 'var(--gray-01)',
                    }}
                  >
                    B. On the Ethereum blockchain (Layer 2 Immutable X) compatible networks,
                    Ethereum needs the payment of a transaction charge (a "Gas Fee") for each
                    transaction that takes place. The Gas Fee supports the decentralized Ethereum
                    blockchain (Layer 2 Immutable X) computer network. This means that a Gas Fee
                    will be charged for each transaction made via the site.
                  </Typography>
                </Box>
              </ListItem>

              <ListItem component="li" sx={{ display: 'block' }}>
                <Typography
                  component="h3"
                  fontSize={{ xs: '2.2rem', md: '3.6rem' }}
                  lineHeight={{ xs: '2.6rem', md: '4rem' }}
                  sx={{
                    mb: '16px',
                    fontWeight: '600',
                    color: 'var(--white)',
                  }}
                >
                  6. Updates to the Service
                </Typography>
                <Typography
                  component="p"
                  fontSize={{ xs: '1.4rem' }}
                  lineHeight={{ xs: '1.8rem' }}
                  sx={{
                    pl: '16px',
                    mb: '20px',
                    fontWeight: '300',
                    color: 'var(--gray-01)',
                  }}
                >
                  You are aware that the Service is constantly changing. You might need to agree to
                  updates to the Service and any Rise of Immortals games you have downloaded onto
                  your device or computer from Rise of Immortals. You understand and agree that Rise
                  of Immortals has the right to
                </Typography>
                <Typography
                  component="p"
                  fontSize={{ xs: '1.4rem' }}
                  lineHeight={{ xs: '1.8rem' }}
                  sx={{
                    pl: '32px',
                    mb: '16px',
                    fontWeight: '300',
                    color: 'var(--gray-01)',
                  }}
                >
                  Update the Service and Rise of Immortals games at any time, with or without prior
                  notice. For the Service and Rise of Immortals games, you might occasionally need
                  to update third-party software.
                </Typography>
              </ListItem>

              <ListItem component="li" sx={{ display: 'block' }}>
                <Typography
                  component="h3"
                  fontSize={{ xs: '2.2rem', md: '3.6rem' }}
                  lineHeight={{ xs: '2.6rem', md: '4rem' }}
                  sx={{
                    mb: '16px',
                    fontWeight: '600',
                    color: 'var(--white)',
                  }}
                >
                  7. Disclaimer of Warranties
                </Typography>
                <Typography
                  component="p"
                  fontSize={{ xs: '1.4rem' }}
                  lineHeight={{ xs: '1.8rem' }}
                  sx={{
                    pl: '16px',
                    mb: '16px',
                    fontWeight: '300',
                    color: 'var(--gray-01)',
                  }}
                >
                  WITHOUT LIMITING RISE OF IMMORTALS' LIABILITY UNDER SECTION 7 BELOW, THE SERVICE
                  IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS FOR YOUR USE, WITHOUT
                  WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION THE
                  WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE,
                  NON-INFRINGEMENT, AND THOSE ARISING FROM COURSE OF DEALING OR USAGE OF TRADE. RISE
                  OF IMMORTALS DOES NOT WARRANT THAT YOU WILL BE ABLE TO ACCESS OR USE THE SERVICE
                  AT THE TIMES OR LOCATIONS OF YOUR CHOOSING; THAT THE SERVICE WILL BE UNINTERRUPTED
                  OR ERROR-FREE; THAT DEFECTS WILL BE CORRECTED; OR THAT THE GAME OR THE SERVICE ARE
                  FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS. Certain guarantees cannot be excluded
                  in some areas. Some of the aforementioned disclaimers may not, therefore, apply to
                  you.
                </Typography>
              </ListItem>
              <ListItem component="li" sx={{ display: 'block' }}>
                <Typography
                  component="h3"
                  fontSize={{ xs: '2.2rem', md: '3.6rem' }}
                  lineHeight={{ xs: '2.6rem', md: '4rem' }}
                  sx={{
                    mb: '16px',
                    fontWeight: '600',
                    color: 'var(--white)',
                  }}
                >
                  8. Limitation of Liability; Sole and Exclusive Remedy; Indemnification
                </Typography>
                <Typography
                  component="p"
                  fontSize={{ xs: '1.4rem' }}
                  lineHeight={{ xs: '1.8rem' }}
                  sx={{
                    pl: '16px',
                    mb: '16px',
                    fontWeight: '300',
                    color: 'var(--gray-01)',
                  }}
                >
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, RISE OF IMMORTALS SHALL NOT BE LIABLE TO
                  YOU FOR ANY INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL, PUNITIVE, OR OTHER
                  SIMILAR DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF REVENUES, LOST PROFITS, LOST
                  DATA O,R BUSINESS INTERRUPTION OR OTHER INTANGIBLE LOSSES (HOWEVER SUCH LOSSES ARE
                  QUALIFIED), ARISING OUT OF OR RELATING IN ANY WAY TO THESE TERMS OF SERVICE OR THE
                  SERVICE ITSELF, WHETHER BASED ON CONTRACT, TORT OR ANY OTHER LEGAL THEORY, AND
                  WHETHER OR NOT RISE OF IMMORTALS HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH
                  DAMAGES. TO THE EXTENT NOT PROHIBITED BY LAW, RISE OF IMMORTALS SHALL NOT BE
                  LIABLE TO YOU FOR MORE THAN THE AMOUNT YOU HAVE PAID TO RISE OF IMMORTALS IN
                  ACCORDANCE WITH THESE TERMS OF SERVICE IN THE SIX (6) MONTHS IMMEDIATELY PRECEDING
                  THE DATE ON WHICH YOU FIRST ASSERT A CLAIM. YOU ACKNOWLEDGE AND AGREE THAT IF YOU
                  HAVE NOT PAID ANYTHING TO RISE OF IMMORTALS DURING SUCH TIME PERIOD, YOUR SOLE
                  REMEDY (AND RISE OF IMMORTALS' EXCLUSIVE LIABILITY) FOR ANY DISPUTE WITH RISE OF
                  IMMORTALS IS TO STOP USING THE SERVICE AND TO CANCEL YOUR ACCOUNT.
                </Typography>
                <Typography
                  component="p"
                  fontSize={{ xs: '1.4rem' }}
                  lineHeight={{ xs: '1.8rem' }}
                  sx={{
                    pl: '32px',
                    mb: '16px',
                    fontWeight: '300',
                    color: 'var(--gray-01)',
                  }}
                >
                  NOTHING IN THESE TERMS OF SERVICE SHALL AFFECT THE STATUTORY RIGHTS OF ANY
                  CONSUMER OR EXCLUDE OR RESTRICT ANY LIABILITY RESULTING FROM GROSS NEGLIGENCE OR
                  WILLFUL MISCONDUCT OF RISE OF IMMORTALS OR FOR DEATH OR PERSONAL INJURY ARISING
                  FROM ANY NEGLIGENCE OR FRAUD OF RISE OF IMMORTALS.
                </Typography>
                <Typography
                  component="p"
                  fontSize={{ xs: '1.4rem' }}
                  lineHeight={{ xs: '1.8rem' }}
                  sx={{
                    pl: '32px',
                    mb: '16px',
                    fontWeight: '300',
                    color: 'var(--gray-01)',
                  }}
                >
                  You agree to hold Rise of Immortals (and our officers, directors, agents,
                  subsidiaries, joint ventures, and employees) harmless from any claim, demand,
                  damages, or other losses, including reasonable attorneys' fees, asserted by any
                  third party as a result of or arising out of your use of the Service, or any
                  breach by you of these Terms of Service. The aforementioned does not, however,
                  apply if the infringement of rights is not attributable to your intention.
                </Typography>
              </ListItem>

              <ListItem component="li" sx={{ display: 'block' }}>
                <Typography
                  component="h3"
                  fontSize={{ xs: '2.2rem', md: '3.6rem' }}
                  lineHeight={{ xs: '2.6rem', md: '4rem' }}
                  sx={{
                    mb: '16px',
                    fontWeight: '600',
                    color: 'var(--white)',
                  }}
                >
                  9. Applicable Laws
                </Typography>
                <Typography
                  component="p"
                  fontSize={{ xs: '1.4rem' }}
                  lineHeight={{ xs: '1.8rem' }}
                  sx={{
                    pl: '16px',
                    mb: '16px',
                    fontWeight: '300',
                    color: 'var(--gray-01)',
                  }}
                >
                  If you are a resident of the United States or Canada: (1) the United States
                  Federal Arbitration Act (including its procedural provisions) governs the
                  interpretation and enforcement of the
                </Typography>
                <Typography
                  component="p"
                  fontSize={{ xs: '1.4rem' }}
                  lineHeight={{ xs: '1.8rem' }}
                  sx={{
                    pl: '32px',
                    mb: '16px',
                    fontWeight: '300',
                    color: 'var(--gray-01)',
                  }}
                >
                  Agreement to arbitrate and no class actions provisions of Section 8, and (2) any
                  dispute arising out of or related to these Terms of Service, the Privacy Policy,
                  or the Service shall be governed in all respects by the laws of the State of
                  California, USA without regard to conflict of law provisions.
                </Typography>
                <Typography
                  component="p"
                  fontSize={{ xs: '1.4rem' }}
                  lineHeight={{ xs: '1.8rem' }}
                  sx={{
                    pl: '32px',
                    mb: '16px',
                    fontWeight: '300',
                    color: 'var(--gray-01)',
                  }}
                >
                  If you reside outside of the United States and Canada, you acknowledge and agree
                  that, without respect to principles of conflicts of law, the laws of Vietnam shall
                  govern any claim or dispute arising out of or relating to these Terms of Service,
                  the Privacy Policy, or the Service.
                </Typography>
              </ListItem>

              <ListItem component="li" sx={{ display: 'block' }}>
                <Typography
                  component="h3"
                  fontSize={{ xs: '2.2rem', md: '3.6rem' }}
                  lineHeight={{ xs: '2.6rem', md: '4rem' }}
                  sx={{
                    mb: '16px',
                    fontWeight: '600',
                    color: 'var(--white)',
                  }}
                >
                  10. Severability
                </Typography>
                <Typography
                  component="p"
                  fontSize={{ xs: '1.4rem' }}
                  lineHeight={{ xs: '1.8rem' }}
                  sx={{
                    pl: '16px',
                    mb: '16px',
                    fontWeight: '300',
                    color: 'var(--gray-01)',
                  }}
                >
                  You and Rise of Immortals agree that if any part of these Terms of Service or the
                  Rise of Immortals Privacy Policy is determined to be invalid or unenforceable in
                  whole or in part by any court of competent jurisdiction, such provision shall be
                  ineffective as to such jurisdiction only to the extent of such determination,
                  without affecting the validity or enforceability thereof in any other manner or
                  jurisdiction, and without affecting the remainder of these Terms of Service or the
                  Rise of Immortals Privacy Policy.
                </Typography>
              </ListItem>

              <ListItem component="li" sx={{ display: 'block' }}>
                <Typography
                  component="h3"
                  fontSize={{ xs: '2.2rem', md: '3.6rem' }}
                  lineHeight={{ xs: '2.6rem', md: '4rem' }}
                  sx={{
                    mb: '16px',
                    fontWeight: '600',
                    color: 'var(--white)',
                  }}
                >
                  11. General Provisions
                </Typography>
                <Typography
                  component="h4"
                  fontSize={{ xs: '2rem', md: '2.8rem' }}
                  lineHeight={{ xs: '2.4rem', md: '3.2rem' }}
                  sx={{
                    pl: '16px',
                    mb: '20px',
                    fontWeight: '600',
                    color: 'var(--white)',
                  }}
                >
                  11.1. Assignment
                </Typography>
                <Typography
                  component="p"
                  fontSize={{ xs: '1.4rem' }}
                  lineHeight={{ xs: '1.8rem' }}
                  sx={{
                    pl: '32px',
                    mb: '20px',
                    fontWeight: '300',
                    color: 'var(--gray-01)',
                  }}
                >
                  You and Rise of Immortals agree that if any part of these Terms of Service or the
                  Rise of Immortals Privacy Policy is determined to be invalid or unenforceable in
                  whole or in part by any court of competent jurisdiction, such provision shall be
                  ineffective as to such jurisdiction only to the extent of such determination,
                  without affecting the validity or enforceability thereof in any other manner or
                  jurisdiction, and without affecting the remainder of these Terms of Service or the
                  Rise of Immortals Privacy Policy.
                </Typography>
                <Typography
                  component="h4"
                  fontSize={{ xs: '2rem', md: '2.8rem' }}
                  lineHeight={{ xs: '2.4rem', md: '3.2rem' }}
                  sx={{
                    pl: '16px',
                    mb: '20px',
                    fontWeight: '600',
                    color: 'var(--white)',
                  }}
                >
                  11.2. Supplemental Policies
                </Typography>
                <Typography
                  component="p"
                  fontSize={{ xs: '1.4rem' }}
                  lineHeight={{ xs: '1.8rem' }}
                  sx={{
                    pl: '32px',
                    mb: '20px',
                    fontWeight: '300',
                    color: 'var(--gray-01)',
                  }}
                >
                  Additional policies for certain services, such as forums, competitions, or loyalty
                  programs, may be published by Rise of Immortals. These terms of service and the
                  relevant rules govern your ability to use such services.
                </Typography>
                <Typography
                  component="h4"
                  fontSize={{ xs: '2rem', md: '2.8rem' }}
                  lineHeight={{ xs: '2.4rem', md: '3.2rem' }}
                  sx={{
                    pl: '16px',
                    mb: '20px',
                    fontWeight: '600',
                    color: 'var(--white)',
                  }}
                >
                  11.4. No Waiver
                </Typography>
                <Box component="div" sx={{ pl: '32px' }}>
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
                    About the Service, these Terms of Service, any supplemental policies, and any
                    documents expressly incorporated by reference herein (including the Rise of
                    Immortals Privacy Policy) constitute the entire agreement between you and Rise
                    of Immortals and supersede all prior
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
                    Understandings between the parties, whether in writing, oral, or written, or
                    based on custom, practice, policy, or precedent.
                  </Typography>
                  <Typography
                    component="p"
                    fontSize={{ xs: '1.4rem' }}
                    lineHeight={{ xs: '1.8rem' }}
                    sx={{
                      mb: '16px',
                      fontWeight: '300',
                      color: 'var(--gray-01)',
                    }}
                  >
                    Rise of Immortals' express waiver of a condition, requirement, or provision of
                    these Terms of Service or the Rise of Immortals Privacy Policy does not relieve
                    Rise of Immortals of the responsibility to abide by such conditions,
                    requirements, or provisions in the future. No representations, statements,
                    consents, waivers, or other acts or omissions by Rise of Immortals shall be
                    deemed a modification of these Terms of Service or legally binding, unless
                    recorded in physical writing and hand signed by You and a duly appointed officer
                    of Rise of Immortals, with the exception of what is expressly and specifically
                    stated in this these Terms of Service.
                  </Typography>
                </Box>
                <Typography
                  component="h4"
                  fontSize={{ xs: '2rem', md: '2.8rem' }}
                  lineHeight={{ xs: '2.4rem', md: '3.2rem' }}
                  sx={{
                    pl: '16px',
                    mb: '20px',
                    fontWeight: '600',
                    color: 'var(--white)',
                  }}
                >
                  11.5. Equitable Remedies
                </Typography>
                <Box component="div" sx={{ pl: '32px' }}>
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
                    You agree that Rise of Immortals is entitled to injunctive or other equitable
                    relief (without having to post a bond or surety or provide proof of damages) in
                    the event of any breach or anticipated breach because the rights and obligations
                    granted to Rise of Immortals under these Terms of Service are special and
                    irreplaceable, the loss of which would harm Rise of Immortals irreparably and
                    cannot be replaced by money damages alone.
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
                    You agree to restrict your claims to claims for monetary damages, as defined by
                    Section 7, and irrevocably waive all rights to seek injunctive or other
                    equitable relief, enjoin or restrain the operation of the Service or any Rise of
                    Immortals game, exploitation of any advertising or other materials issued in
                    connection therewith, and exploitation of the Service or any content or other
                    material used or displayed through the Service (if any).
                  </Typography>
                </Box>
                <Typography
                  component="h4"
                  fontSize={{ xs: '2rem', md: '2.8rem' }}
                  lineHeight={{ xs: '2.4rem', md: '3.2rem' }}
                  sx={{
                    pl: '16px',
                    mb: '20px',
                    fontWeight: '600',
                    color: 'var(--white)',
                  }}
                >
                  11.6. Force Majeure
                </Typography>
                <Typography
                  component="p"
                  fontSize={{ xs: '1.4rem' }}
                  lineHeight={{ xs: '1.8rem' }}
                  sx={{
                    pl: '32px',
                    mb: '16px',
                    fontWeight: '300',
                    color: 'var(--gray-01)',
                  }}
                >
                  Any delay or failure to perform under this agreement caused by events beyond Rise
                  of Immortals' reasonable control, such as acts of God, war, terrorism, riots,
                  embargoes, actions of civil or military authorities, fire, floods, accidents,
                  strikes, or shortages of transportation facilities, fuel, energy, or laboratory
                  resources, shall not subject Rise of Immortals to liability.
                </Typography>
              </ListItem>

              <ListItem component="li" sx={{ display: 'block' }}>
                <Typography
                  component="h3"
                  fontSize={{ xs: '2.2rem', md: '3.6rem' }}
                  lineHeight={{ xs: '2.6rem', md: '4rem' }}
                  sx={{
                    mb: '16px',
                    fontWeight: '600',
                    color: 'var(--white)',
                  }}
                >
                  12. General
                </Typography>
                <Typography
                  component="p"
                  fontSize={{ xs: '1.4rem' }}
                  lineHeight={{ xs: '1.8rem' }}
                  sx={{
                    pl: '16px',
                    mb: '16px',
                    fontWeight: '300',
                    color: 'var(--gray-01)',
                  }}
                >
                  These Terms replace any earlier or contemporaneous agreements between the parties
                  regarding your access to or use of the App, whether oral or written, and set forth
                  the entire legal agreement between you and Rise of Immortals. These Terms do not
                  benefit any third parties. Nothing in these Terms establishes an agency,
                  partnership, or joint venture between the parties, who are all independent
                  contractors. The text of these Terms will be applied in accordance with its fair
                  meaning, rather than strictly favoring or disfavoring any party. Without our prior
                  written consent, you are not permitted to assign any of your rights or
                  responsibilities under these Terms, whether by operation of law or otherwise. In
                  our sole discretion, we may transfer our rights and responsibilities under these
                  Terms to an affiliate or in connection with an acquisition, sale, or merger. The
                  remaining provisions of these Terms shall remain in full force and effect if any
                  part of them is found to be invalid or unenforceable and shall be interpreted in
                  accordance with applicable law. Any provision of these Terms that we fail to
                  enforce will not be construed as a waiver of that provision or the right to
                  enforce it in the future. This Agreement shall be governed by and construed in
                  accordance with the applicable laws of Vietnam, excluding its rules and principles
                  governing conflicts
                </Typography>
                <Typography
                  component="p"
                  fontSize={{ xs: '1.4rem' }}
                  lineHeight={{ xs: '1.8rem' }}
                  sx={{
                    pl: '16px',
                    mb: '16px',
                    fontWeight: '300',
                    color: 'var(--gray-01)',
                  }}
                >
                  Delay in fulfilling our obligations brought on by circumstances beyond our
                  reasonable control, such as governmental action, terrorist acts, earthquakes,
                  fires, floods, acts of God, labor conditions, power outages, Internet disruptions,
                  or actions or inactions of third parties. You agree that we may give you
                  communications via email, normal mail, or postings on the App (including, without
                  limitation, notices regarding modifications to these Terms). By giving us your
                  email address, you agree that we can contact you via email rather than postal mail
                  regarding any notices that are necessary under the law.
                </Typography>
              </ListItem>
            </List>
          </Box>
        </Box>
      </Container>
    </Container>
  );
}
