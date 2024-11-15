import React from "react";
import { StyleSheet } from "react-native";
import {
  BottomNavigation,
  BottomNavigationProps,
  BottomNavigationTab,
  Icon,
  IconElement,
} from "@ui-kitten/components";

const useBottomNavigationState = (initialState = 0): BottomNavigationProps => {
  const [selectedIndex, setSelectedIndex] = React.useState(initialState);
  return { selectedIndex, onSelect: setSelectedIndex };
};

export const BottomNavigationAccessoriesShowcase = (): React.ReactElement => {
  const topState = useBottomNavigationState();
  const bottomState = useBottomNavigationState();

  return (
    <>
      <BottomNavigation style={styles.bottomNavigation} {...topState}>
        <BottomNavigationTab title="USERS" />
        <BottomNavigationTab title="ORDERS" />
        <BottomNavigationTab title="TRANSACTIONS" />
      </BottomNavigation>

      <BottomNavigation style={styles.bottomNavigation} {...bottomState}>
        <BottomNavigationTab />
        <BottomNavigationTab />
        <BottomNavigationTab />
      </BottomNavigation>
    </>
  );
};

const styles = StyleSheet.create({
  bottomNavigation: {
    marginVertical: 8,
  },
});
