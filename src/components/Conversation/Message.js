import { Box, Stack } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { chatHistory } from '../../_apis_/data';
import { DocMsg, LinkMsg, MediaMsg, ReplyMsg, TextMsg, TimeLine } from './MsgTypes';


const Message = ({ menu }) => (
    <Box p={3}>
      <Stack spacing={3}>
        {chatHistory.map((el, index) => {
          switch (el.type) {
            case 'divider':
              return <TimeLine key={`timeline-${index}`} el={el}/>;
            case 'msg':
              switch (el.subtype) {
                case 'img':
                  return <MediaMsg key={`media-${index}`} el={el} menu={menu}/>;
                case 'doc':
                  return <DocMsg key={`doc-${index}`} el={el} menu={menu}/>;
                case 'link':
                  return <LinkMsg key={`link-${index}`} el={el} menu={menu}/>;
                case 'reply':
                  return <ReplyMsg key={`reply-${index}`} el={el} menu={menu}/>;
                default:
                  return <TextMsg key={`text-${index}`} el={el} menu={menu}/>;
              }
            default:
              return <React.Fragment key={`unknown-${index}`}/>;
          }
        })}
      </Stack>
    </Box>
  );

Message.propTypes = {
  menu: PropTypes.bool
};

export default Message;



