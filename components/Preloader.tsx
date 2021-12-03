import { useEffect, useState } from "react";

interface Props {
  children: any;
}

export function Preloader({ children }: Props) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return null;
  }

  return children;
}
