import React from "react";

export interface AlertProps {
  /**
   * @description       Alert 的类型
   * @default           'info'
   */
  kind?: "info" | "positive" | "negative" | "warning";
  children: any;
}

export type KindMap = Record<Required<AlertProps>["kind"], string>;

const prefixCls = "happy-alert";

const kinds: KindMap = {
  info: "#5352ED",
  positive: "#2ED573",
  negative: "#FF4757",
  warning: "#FFA502",
};

const Alert: React.FC<AlertProps> = ({ children, kind = "info", ...rest }) => (
  <div
    className={prefixCls}
    style={{
      background: kinds[kind],
    }}
    {...rest}
  >
    {children}
  </div>
);

export default Alert;
