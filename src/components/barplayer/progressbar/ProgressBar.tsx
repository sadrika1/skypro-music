import { ChangeEvent } from "react";
import styles from "./progressbar.module.css";

type ProgressBarType = {
    max: number | undefined,
    value: number,
    step: number,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
}

export default function ProgressBar({ max = 0, value, step, onChange }: ProgressBarType) {
  return (
    <input
      className={styles.styledProgressInput}
      type="range"
      min={0}
      max={max}
      value={value}
      step={step}
      onChange={onChange}
    />
  );
}
