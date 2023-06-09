type Props = {
  title?: string;
  createdAt?: string;
};

export default function NoticeHeader({ title, createdAt }: Props) {
  return (
    <header className="notice-detail_header">
      <h1 className="notice-detail_title">{title}</h1>
      <p className="notice-detail_date">{createdAt}</p>
    </header>
  );
}
