import {
  itemDocx,
  itemPdf,
  itemMp3,
  itemPsd,
  item,
} from './Statistics.module.scss';

export default function selectClassBgColor(label) {
  switch (label) {
    case '.docx':
      return itemDocx;
    case '.pdf':
      return itemPdf;
    case '.mp3':
      return itemMp3;
    case '.psd':
      return itemPsd;

    default:
      return item;
  }
}
