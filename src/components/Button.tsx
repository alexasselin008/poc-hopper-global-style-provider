import { ComponentProps, ReactNode } from "react";
import styles from "./Button.module.css";

export interface ButtonProps extends ComponentProps<"button">{
    children: ReactNode;
}

export function Button({className, ...rest}: ButtonProps) {
    const classNames = [styles["o-ui-button"], className].join(" ");
  return <button className={classNames} {...rest} />;
}