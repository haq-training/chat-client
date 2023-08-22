export const getVideoEmbedFromUrlYT = (url) => {
  const embedUrl = 'https://www.youtube.com/embed/';
  const regex = /[?&]v=([^&]+)/;
  const match = url.match(regex);
  if (match) {
    return embedUrl + match[1];
  }
  const regexWithEmbed = /\/embed\/([a-zA-Z0-9_-]+)/;
  const matchWithEmbed = url.match(regexWithEmbed);
  if (matchWithEmbed) {
    return embedUrl + matchWithEmbed[1];
  }
  if (url.includes('youtu.be')) {
    const videoID = url.split('/').pop();
    return embedUrl + videoID;
  }
  return '';
};
