import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';

export const transform = (node: any, children: any) => {
  if (node.tagName.toLowerCase() === 'table') {
    return <span className="markup-replacement">таблица</span>;
  } else if (node.tagName.toLowerCase() === 'img') {
    return <PhotoSizeSelectActualIcon />;
  } else if (node.tagName.toLowerCase() === 'figure') {
    return <PhotoSizeSelectActualIcon />;
  }
};
