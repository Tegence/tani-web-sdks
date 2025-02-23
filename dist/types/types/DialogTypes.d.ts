import { ReactNode } from "react";
export type DialogProps = {
    children: ReactNode;
    closeDialog: () => void;
};
