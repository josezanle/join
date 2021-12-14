import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MarketStack } from './MarketStack';
import SingleNavBar from '../components/SingleNavBar';
import SwipeScreen from '../screens/swipeScreen/SwipeScreen';

const Stack = createNativeStackNavigator();

const SwipeStack = () => {

    return (
        <Stack.Navigator
            screenOptions={{
                header: props => {
                    let title;
                    if (props.route.name === 'SwipeScreen') {
                        title = 'Join';
                        return <SingleNavBar {...props} title={title} />;
                    }
                },
            }}>
            <Stack.Screen
                name="SwipeScreen"
                component={SwipeScreen}
                options={{
                    headerShown: true,
                    contentStyle: {
                        backgroundColor: 'white',
                    },
                }}
            />
            <Stack.Screen
                name="MarketStack"
                component={MarketStack}
                options={{ headerShown: true }}
            />
        </Stack.Navigator>
    )
}

export default SwipeStack

