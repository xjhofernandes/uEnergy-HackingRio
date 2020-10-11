import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './screens/Login';
import ReportFraud from './screens/ReportFraud';
import ReportMeasurement from './screens/ReportMeasurement';
import Services from './screens/Services';
import AvailableServices from './screens/AvailableServices';
import AvailableServicesMap from './screens/AvailableServicesMap';
import DetailsService from './screens/DetailsService';
import ServiceAttendance from './screens/ServiceAttendance';

const AppStack = createStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer >
            <AppStack.Navigator headerMode="none" initialRouteName="Login">
                <AppStack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <AppStack.Screen name="Services" component={Services}/>
                <AppStack.Screen name="ReportFraud" component={ReportFraud} options={{}} />
                <AppStack.Screen name="ReportMeasurement" component={ReportMeasurement} />
                <AppStack.Screen name="AvailableServices" component={AvailableServices} />
                <AppStack.Screen name="DetailsService" component={DetailsService} />
                <AppStack.Screen name="AvailableServicesMap" component={AvailableServicesMap} />
                <AppStack.Screen name="ServiceAttendance" component={ServiceAttendance} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
};

export default Routes;