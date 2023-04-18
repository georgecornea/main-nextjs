import { MdOutlineCopyright } from 'react-icons/md';

export default function Footer() {
  const projectDate = (date) => {
    return new Intl.DateTimeFormat('en-US', {
      // weekday: "long",
      year: 'numeric',
      // month: "long",
      // day: "numeric",
    }).format(date);
  };

  return (
    <footer style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
      <span>George Cornea</span>
      <MdOutlineCopyright />
      {`${projectDate(new Date())}`}
    </footer>
  );
}
