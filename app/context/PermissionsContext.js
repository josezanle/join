import React, { createContext, useEffect, useState } from 'react';
import { AppState } from 'react-native';
import { check, PERMISSIONS, request } from 'react-native-permissions';

export const permissionInitState = {
  locationStatus: 'unavailable',
};

export const PermissionsContext = createContext({});

export const PermissionsProvider = ({ children }) => {
  const [permissions, setPermissions] = useState(permissionInitState);

  useEffect(() => {
    checkLocationPermission();

    const subscription = AppState.addEventListener('change', state => {
      if (state !== 'active') return;
      checkLocationPermission();
    });
    return () => {
      subscription.remove();
    };
  }, []);

  const askLocationPermission = async () => {
    let permissionStatus;

    permissionStatus = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);

    // if (permissionStatus === "blocked") {
    //     openSettings()
    // }

    setPermissions({
      ...permissions,
      locationStatus: permissionStatus,
    });
  };

  const checkLocationPermission = async () => {
    let permissionStatus;

    permissionStatus = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);

    setPermissions({
      ...permissions,
      locationStatus: permissionStatus,
    });
  };

  return (
    <PermissionsContext.Provider
      value={{
        permissions,
        askLocationPermission,
        checkLocationPermission,
      }}>
      {children}
    </PermissionsContext.Provider>
  );
};
