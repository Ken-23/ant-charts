import { IHeaderProps } from "./type";

export default function SecondaryHeader(props: IHeaderProps) {
  const { title, className, styles } = props;
  return (
    <div style={styles} className={className}>
      {title}
    </div>
  );
}
