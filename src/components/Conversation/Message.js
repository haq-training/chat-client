import { Box, Stack } from '@mui/material';
import React from 'react';
import { chatHistory } from '../../_apis_/data';
import { DocMsg, LinkMsg, MediaMsg, ReplyMsg, TextMsg, TimeLine } from './MsgTypes';

const Message = ({ menu }) => (
  <Box p={3}>
    <Stack spacing={3}>
      {chatHistory.map((el) => {
        let renderedComponent = null;

        switch (el.type) {
          case 'divider':
            renderedComponent = <TimeLine el={el} />;
            break;

          case 'msg':
            switch (el.subtype) {
              case 'img':
                renderedComponent = <MediaMsg el={el} menu={menu} />;
                break;
              case 'doc':
                renderedComponent = <DocMsg el={el} menu={menu} />;
                break;
              case 'link':
                renderedComponent = <LinkMsg el={el} menu={menu} />;
                break;
              case 'reply':
                renderedComponent = <ReplyMsg el={el} menu={menu} />;
                break;
              default:
                renderedComponent = <TextMsg el={el} menu={menu} />;
            }
            break;

          default:
            break;
        }

        return renderedComponent;
      })}
    </Stack>
  </Box>
);

export default Message;
