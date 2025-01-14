import PropTypes from 'prop-types';
// @mui
import { Box, Card,  Typography, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

import { Link } from "react-router-dom";

// utils
import { fCurrency } from '../../../utils/formatNumber';
// components
import Label from '../../../components/label';
import { ColorPreview } from '../../../components/color-utils';

// ----------------------------------------------------------------------

const StyledProductImg = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
});

// ----------------------------------------------------------------------

ShopProductCard.propTypes = {
  product: PropTypes.object,
};

export default function ShopProductCard({ video }) {
  const {
    title: name,
    thumbnailUrl: cover,
    viewCount: price,
    duration: status,
    publishedAt,
    _id: id,
  } = video;

  const onClickHandler = () => {
    console.log('clicked', video);
  };

  return (
    <Card onClick={onClickHandler}>
      <Box sx={{ pt: '100%', position: 'relative' }}>
        {status && (
          <Label
            variant='filled'
            color={(status === 'sale' && 'error') || 'info'}
            sx={{
              zIndex: 9,
              top: 16,
              right: 16,
              position: 'absolute',
              textTransform: 'uppercase',
            }}
          >
            {status}
          </Label>
        )}
        <StyledProductImg alt={name} src={cover} />
      </Box>

      <Stack spacing={2} sx={{ p: 3 }}>
        <Link to={id} color='inherit' underline='hover'>
          <Typography variant='subtitle2' noWrap>
            {name}
          </Typography>
        </Link>

        <Stack
          direction='row'
          alignItems='center'
          justifyContent='space-between'
        >
          {/* <ColorPreview colors={colors} /> */}
          <Typography variant='subtitle1'>{publishedAt}</Typography>
          <Typography variant='subtitle1'>{price} views</Typography>
        </Stack>
      </Stack>
    </Card>
  );
}
