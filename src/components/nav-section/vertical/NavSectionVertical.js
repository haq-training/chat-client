import PropTypes from 'prop-types';
import { List, Stack } from '@mui/material';
import { useLocales } from '../../../locales';
import { StyledSubheader } from './styles';
import NavList from './NavList';

// ----------------------------------------------------------------------

NavSectionVertical.propTypes = {
  sx: PropTypes.object,
  data: PropTypes.array,
};

function NavSectionVertical({ data, sx, ...other }) {
  const { translate } = useLocales();

  return (
    <Stack sx={sx} {...other}>
      {data.map((group) => {
        const key = group.subheader || group.items[0].title;

        return (
          <List key={key} disablePadding sx={{ px: 1 }}>
            {group.subheader && <StyledSubheader disableSticky>{`${translate(group.subheader)}`}</StyledSubheader>}

            {group.items.map((list) => (
              <NavList key={list.title + list.path} data={list} depth={1} hasChild={!!list.children} />
            ))}
          </List>
        );
      })}
    </Stack>
  );
}

export default NavSectionVertical;
