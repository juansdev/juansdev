interface IEllipseProps {
  style: 1 | 2;
}

export const Ellipse = ({style}: IEllipseProps) => {
  return (
    style === 1 ? (
      <div className={"ellipse1"}></div>
    ) : (
      <div className={"ellipse2"}></div>
    )
  );
}