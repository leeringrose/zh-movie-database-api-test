import React from 'react';
import { useParams } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';
// Import MUI Components
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { SxProps } from '@mui/system';

import usePersonDetail from '../hooks/usePersonDetail';
import PersonImage from '../components/core/PersonImage';
import { warnAdultWithBadge, genderIdentities, wrapImagePath } from '../shared/service';

interface WrapperProps {
  children?: React.ReactNode
  sx?: SxProps
}

const RowWrapper: React.FC<WrapperProps> = ({ children, ...rest }) => {
  return <Box
    display='flex'
    justifyContent='space-around'
    alignItems='center'
    flex={1}
    {...rest}
  >
    {children}
  </Box>;
};

const ColumnWrapper: React.FC<WrapperProps> = ({ children, ...rest }) => {
  return <Box
    display='flex'
    flexDirection='column'
    justifyContent='space-around'
    alignItems='center'
    flex={1}
    {...rest}
  >
    {children}
  </Box>;
};

const PersonDetail: React.FC = () => {

  const params = useParams();
  const {
    personDetail,
    externalIds,
    images,
    movieCredits,
    tvCredits
  } = usePersonDetail(params.personId);
  const {
    profile_path,
    name,
    gender,
    adult,
    also_known_as: alsoKnownAs,
    known_for_department: knownForDepartment,
    biography,
    birthday,
    deathday,
    place_of_birth: placeOfBirth,
    popularity
  } = personDetail;

  // eslint-disable-next-line no-console
  console.log(externalIds, images);

  return <Container sx={{ p: 3 }}>
    <Paper
      role='document'
      sx={{
        p: 4,
        display: 'flex',
        flexDirection: 'column',
        border: '2px solid purple'
      }}
      elevation={3}>
      <RowWrapper
        sx={{
          alignItems: 'stretch'
        }}
      >
        <Box
          width={300}
          height={350}
        >
          <PersonImage
            path={profile_path}
            gender={gender}
            alt={name}
          />
        </Box>
        <ColumnWrapper
          sx={{
            flexWrap: 'wrap'
          }}
        >
          <ColumnWrapper>
            {warnAdultWithBadge(
              adult,
              <Typography
                color='darkblue'
                component='div'
                variant='h2'>
                {name}
              </Typography>
            )}
            <Typography
              px={6}
              color='GrayText'
              component='div'
              variant='h6'>
              {`( ${birthday ? birthday : '?'} ~ ${deathday ? deathday : '?'} )`}
            </Typography>
          </ColumnWrapper>
          <ColumnWrapper
            sx={{
              px: 3,
              width: '100%',
              flexWrap: 'wrap',
              alignItems: 'flex-start'
            }}
          >
            <RowWrapper
              sx={{
                justifyContent: 'flex-start',
              }}
            >
              <Typography
                variant='h6'
                color='Highlight'
              >
                Also known as:
              </Typography>
              <Typography
                px={2}
                variant='subtitle1'
                color='InfoText'>
                {alsoKnownAs ? alsoKnownAs.join(', ') : 'Unknown'}
              </Typography>
            </RowWrapper>
            <RowWrapper
              sx={{
                justifyContent: 'flex-start',
              }}
            >
              <Typography
                variant='h6'
                color='Highlight'
              >
                Gender:
              </Typography>
              <Typography
                px={2}
                variant='subtitle1'
                color='InfoText'>
                {gender ? genderIdentities[gender] : 'Unknown'}
              </Typography>
            </RowWrapper>
            <RowWrapper
              sx={{
                justifyContent: 'flex-start',
              }}
            >
              <Typography
                variant='h6'
                color='Highlight'
              >
                Known for department:
              </Typography>
              <Typography
                px={2}
                variant='subtitle1'
                color='InfoText'>
                {knownForDepartment ? knownForDepartment : 'Unknown'}
              </Typography>
            </RowWrapper>
            <RowWrapper
              sx={{
                justifyContent: 'flex-start',
              }}
            >
              <Typography
                variant='h6'
                color='Highlight'
              >
                Birthplace:
              </Typography>
              <Typography
                px={2}
                variant='subtitle1'
                color='InfoText'>
                {placeOfBirth ? placeOfBirth : 'Unknown'}
              </Typography>
            </RowWrapper>
            <RowWrapper
              sx={{
                justifyContent: 'flex-start',
              }}
            >
              <Typography
                variant='h6'
                color='Highlight'
              >
                Popularity:
              </Typography>
              <Typography
                px={2}
                variant='subtitle1'
                color='InfoText'>
                {popularity ? popularity : 'Unknown'}
              </Typography>
            </RowWrapper>
          </ColumnWrapper>
        </ColumnWrapper>
      </RowWrapper>
      <RowWrapper
        sx={{
          justifyContent: 'flex-start'
        }}
      >
        <Typography
          py={3}
          variant='h6'
        >
          {biography}
        </Typography>
      </RowWrapper>
      <RowWrapper>
        <Paper
          elevation={2}
          sx={{
            maxWidth: 350,
            backgroundColor: 'gainsboro',
            p: 3,
          }}
        >
          <ImageGallery
            showPlayButton={false}
            showFullscreenButton
            infinite
            lazyLoad
            showIndex
            thumbnailPosition='right'
            items={
              images.map(image => ({
                original: wrapImagePath(image.file_path),
                thumbnail: wrapImagePath(image.file_path),
              }))
            }
          />
        </Paper>
        <ColumnWrapper
          sx={{
            px: 4,
            alignItems: 'flex-start'
          }}
        >
          <RowWrapper>
            <Typography
              pr={4}
              variant='h6'
              color='GrayText'>
              Freebase MId:
            </Typography>
            <Typography
              variant='h6'
              color='Highlight'>
              {externalIds.freebase_mid}
            </Typography>
          </RowWrapper>
          <RowWrapper>
            <Typography
              pr={4}
              variant='h6'
              color='GrayText'>
              Freebase Id:
            </Typography>
            <Typography
              variant='h6'
              color='Highlight'>
              {externalIds.freebase_id}
            </Typography>
          </RowWrapper>
          <RowWrapper>
            <Typography
              pr={4}
              variant='h6'
              color='GrayText'>
              IMDB Id:
            </Typography>
            <Typography
              variant='h6'
              color='Highlight'>
              {externalIds.imdb_id}
            </Typography>
          </RowWrapper>
          <RowWrapper>
            <Typography
              pr={4}
              variant='h6'
              color='GrayText'>
              TV rage Id:
            </Typography>
            <Typography
              variant='h6'
              color='Highlight'>
              {externalIds.tvrage_id}
            </Typography>
          </RowWrapper>
          <RowWrapper>
            <Typography
              pr={4}
              variant='h6'
              color='GrayText'>
              Wiki Data Id:
            </Typography>
            <Typography
              variant='h6'
              color='Highlight'>
              {externalIds.wikidata_id}
            </Typography>
          </RowWrapper>
          <RowWrapper>
            <Typography
              pr={4}
              variant='h6'
              color='GrayText'>
              Facebook Id:
            </Typography>
            <Typography
              variant='h6'
              color='Highlight'>
              {externalIds.facebook_id}
            </Typography>
          </RowWrapper>
          <RowWrapper>
            <Typography
              pr={4}
              variant='h6'
              color='GrayText'>
              Instagram Id:
            </Typography>
            <Typography
              variant='h6'
              color='Highlight'>
              {externalIds.instagram_id}
            </Typography>
          </RowWrapper>
          <RowWrapper>
            <Typography
              pr={4}
              variant='h6'
              color='GrayText'>
              Tiktok Id:
            </Typography>
            <Typography
              variant='h6'
              color='Highlight'>
              {externalIds.tiktok_id}
            </Typography>
          </RowWrapper>
          <RowWrapper>
            <Typography
              pr={4}
              variant='h6'
              color='GrayText'>
              Twitter Id:
            </Typography>
            <Typography
              variant='h6'
              color='Highlight'>
              {externalIds.twitter_id}
            </Typography>
          </RowWrapper>
          <RowWrapper>
            <Typography
              pr={4}
              variant='h6'
              color='GrayText'>
              Youtube Id:
            </Typography>
            <Typography
              variant='h6'
              color='Highlight'>
              {externalIds.youtube_id}
            </Typography>
          </RowWrapper>
        </ColumnWrapper>
      </RowWrapper>
      <RowWrapper>
        <Paper
          elevation={2}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            p: 3,
            maxWidth: '100%'
          }}
        >
          <Typography
            variant='h4'
            color='red'
            sx={{
              py: 3,
              fontWeight: 700
            }}
          >
            Movie Credits
          </Typography>
          <ImageGallery
            additionalClass='width: 100%!important;'
            showPlayButton={false}
            showFullscreenButton
            infinite
            lazyLoad
            showIndex
            items={
              movieCredits.map(image => ({
                original: wrapImagePath(image.backdrop_path),
                thumbnail: wrapImagePath(image.backdrop_path),
              }))
            }
          />
        </Paper>
      </RowWrapper>
      <RowWrapper>
        <Paper
          elevation={2}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            p: 3,
            maxWidth: '100%'
          }}
        >
          <Typography variant='h3'>
            TV Credits
          </Typography>
          <ImageGallery
            showPlayButton={false}
            showFullscreenButton
            infinite
            lazyLoad
            showIndex
            items={
              tvCredits.map(image => ({
                original: wrapImagePath(image.backdrop_path),
                thumbnail: wrapImagePath(image.poster_path),
              }))
            }
          />
        </Paper>
      </RowWrapper>
    </Paper >
  </Container >;
};

export default PersonDetail;