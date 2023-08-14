"use client";
import { useState, useEffect } from "react";

const formatter = new Intl.NumberFormat("en-US", {
  currency: "USD",
  style: "currency",
});

interface CurrencyProps {
  value?: string | number;
}

const Currency: React.FC<CurrencyProps> = ({ value }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <p className="font-semibold text-lg">{formatter.format(Number(value))}</p>
  );
};

export default Currency;
