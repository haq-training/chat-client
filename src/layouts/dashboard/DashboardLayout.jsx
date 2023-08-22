import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import useResponsive from '../../hooks/useResponsive';
import { useSettingsContext } from '../../components/settings';

import Main from './Main';
import { Header } from './header';
import NavMini from './nav/NavMini';
import NavVertical from './nav/NavVertical';
import NavHorizontal from './nav/NavHorizontal';
import useToggle from '../../hooks/useToggle';

// ----------------------------------------------------------------------

export default function DashboardLayout() {
  const [, setPageHeading] = useState(null);
  const [messageIncome, setMessageIncome] = useState(null);
  const { themeLayout } = useSettingsContext();
  const { toggle: open, onOpen: handleOpen, onClose: handleClose } = useToggle();
  const isDesktop = useResponsive('up', 'lg');

  const isNavHorizontal = themeLayout === 'horizontal';

  const isNavMini = themeLayout === 'mini';

  const renderNavVertical = <NavVertical openNav={open} onCloseNav={handleClose} setMessageIncome={setMessageIncome} />;

  if (isNavHorizontal) {
    return (
      <>
        {!isDesktop && <Header setMessageIncome={setMessageIncome} onOpenNav={handleOpen} />}

        {isDesktop ? <NavHorizontal setMessageIncome={setMessageIncome} /> : renderNavVertical}

        <Main>
          <Outlet context={{ setPageHeading, messageIncome, setMessageIncome }} />
        </Main>
      </>
    );
  }

  if (isNavMini) {
    return (
      <>
        {!isDesktop && <Header setMessageIncome={setMessageIncome} onOpenNav={handleOpen} />}
        <Box
          sx={{
            display: { lg: 'flex' },
            minHeight: { lg: 1 },
          }}
        >
          {isDesktop ? <NavMini setMessageIncome={setMessageIncome} /> : renderNavVertical}

          <Main>
            <Outlet context={{ setPageHeading, messageIncome, setMessageIncome }} />
          </Main>
        </Box>
      </>
    );
  }

  return (
    <>
      {!isDesktop && <Header setMessageIncome={setMessageIncome} onOpenNav={handleOpen} />}
      <Box
        sx={{
          display: { lg: 'flex' },
          minHeight: { lg: 1 },
        }}
      >
        {renderNavVertical}
        <Main>
          <Outlet context={{ setPageHeading, messageIncome, setMessageIncome }} />
        </Main>
      </Box>
    </>
  );
}
