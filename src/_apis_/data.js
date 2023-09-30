import { faker } from '@faker-js/faker';
import { ChatCircleDots, Gear, GearSix, Phone, SignOut, User, Users, Bookmarks } from 'phosphor-react';

export const profileMenu = [
  {
    title: 'Profile',
    icon: <User />,
  },
  {
    title: 'Settings',
    icon: <Gear />,
  },
  {
    title: 'Logout',
    icon: <SignOut />,
  },
];

export const navButtons = [
  {
    index: 0,
    icon: <ChatCircleDots />,
  },
  {
    index: 1,
    icon: <Users />,
  },
  {
    index: 2,
    icon: <Phone />,
  },
  {
    index: 3,
    icon: <Bookmarks />,
  },
];

export const navSetting = [
  {
    index: 3,
    icon: <GearSix />,
  },
];

export const CallLogs = [
  {
    id: 0,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    missed: false,
    incoming: true,
  },
  {
    id: 1,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    missed: true,
    incoming: true,
  },
  {
    id: 2,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    missed: false,
    incoming: false,
  },
  {
    id: 3,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    missed: false,
    incoming: true,
  },
  {
    id: 4,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    missed: true,
    incoming: true,
  },
];

export const membersList = [
  {
    id: 0,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    online: true,
  },
  {
    id: 1,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    online: false,
  },
  {
    id: 2,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    online: true,
  },
  {
    id: 3,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    online: false,
  },
  {
    id: 4,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    online: true,
  },
];

export const chatList = [
  {
    id: 0,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: '9:36',
    unread: 0,
    pinned: true,
    online: true,
  },
  {
    id: 1,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: '12:02',
    unread: 2,
    pinned: true,
    online: false,
  },
  {
    id: 2,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: '10:35',
    unread: 3,
    pinned: false,
    online: true,
  },
  {
    id: 3,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: '04:00',
    unread: 0,
    pinned: false,
    online: true,
  },
  {
    id: 4,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: '08:42',
    unread: 0,
    pinned: false,
    online: false,
  },
  {
    id: 5,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: '08:42',
    unread: 0,
    pinned: false,
    online: false,
  },
  {
    id: 6,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: '08:42',
    unread: 0,
    pinned: false,
    online: false,
  },
  {
    id: 7,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: '08:42',
    unread: 0,
    pinned: false,
    online: false,
  },
];

export const chatHistory = [
  {
    type: 'msg',
    message: 'Hi 👋🏻, How are ya ?',
    incoming: true,
    outgoing: false,
  },
  {
    type: 'divider',
    text: 'Today',
  },
  {
    type: 'msg',
    message: 'Hi 👋 Panda, not bad, u ?',
    incoming: false,
    outgoing: true,
  },
  {
    type: 'msg',
    message: 'Can you send me an abstarct image?',
    incoming: false,
    outgoing: true,
  },
  {
    type: 'msg',
    message: 'Ya sure, sending you a pic',
    incoming: true,
    outgoing: false,
  },

  {
    type: 'msg',
    subtype: 'img',
    message: 'Here You Go',
    img: faker.image.abstract(),
    incoming: true,
    outgoing: false,
  },
  {
    type: 'msg',
    message: 'Can you please send this in file format?',
    incoming: false,
    outgoing: true,
  },

  {
    type: 'msg',
    subtype: 'doc',
    message: 'Yes sure, here you go.',
    incoming: true,
    outgoing: false,
  },
  {
    type: 'msg',
    subtype: 'link',
    preview: faker.image.cats(),
    message: 'Yep, I can also do that',
    incoming: true,
    outgoing: false,
  },
  {
    type: 'msg',
    subtype: 'reply',
    reply: 'This is a reply',
    message: 'Yep, I can also do that',
    incoming: false,
    outgoing: true,
  },
];

export const messageOptions = [
  {
    title: 'Reply',
  },
  {
    title: 'React to message',
  },
  {
    title: 'Forward message',
  },
  {
    title: 'Star message',
  },
  {
    title: 'Report',
  },
  {
    title: 'Delete Message',
  },
];

export const SHARED_LINKS = [
  {
    type: 'msg',
    subtype: 'link',
    preview: faker.image.cats(),
    message: 'Yep, I can also do that',
    incoming: true,
    outgoing: false,
  },
  {
    type: 'msg',
    subtype: 'link',
    preview: faker.image.cats(),
    message: 'Yep, I can also do that',
    incoming: true,
    outgoing: false,
  },
  {
    type: 'msg',
    subtype: 'link',
    preview: faker.image.cats(),
    message: 'Yep, I can also do that',
    incoming: true,
    outgoing: false,
  },
  {
    type: 'msg',
    subtype: 'link',
    preview: faker.image.cats(),
    message: 'Yep, I can also do that',
    incoming: true,
    outgoing: false,
  },
];

export const SHARED_DOCS = [
  {
    type: 'msg',
    subtype: 'doc',
    message: 'Yes sure, here you go.',
    incoming: true,
    outgoing: false,
  },
  {
    type: 'msg',
    subtype: 'doc',
    message: 'Yes sure, here you go.',
    incoming: true,
    outgoing: false,
  },
  {
    type: 'msg',
    subtype: 'doc',
    message: 'Yes sure, here you go.',
    incoming: true,
    outgoing: false,
  },
  {
    type: 'msg',
    subtype: 'doc',
    message: 'Yes sure, here you go.',
    incoming: true,
    outgoing: false,
  },
];
