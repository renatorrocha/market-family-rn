import { ApplicationProvider } from "@ui-kitten/components";
import React, { PropsWithChildren } from "react";
import * as eva from "@eva-design/eva";

export default function KittenProvider({ children }: PropsWithChildren) {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      {children}
    </ApplicationProvider>
  );
}
