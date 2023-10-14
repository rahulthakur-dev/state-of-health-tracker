import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import SwipeDeleteListItem from './SwipeDeleteListItem';
import BorderRadius from '../constants/BorderRadius';
import Spacing from '../constants/Spacing';
import { Text, useStyleTheme } from '../styles/Theme';
import 'react-native-get-random-values';

interface Props {
    readonly title: string;
    readonly subtitle: string;
    readonly chip?: JSX.Element;
    readonly swipeableRef?: (ref: Swipeable) => void;
    readonly onSwipeActivated?: () => void;
    readonly onDeletePressed: () => void;
    readonly showLeftBorder?: boolean;
    readonly showRightBorder?: boolean
    readonly onPress?: () => void;
    readonly leftRightMargin?: number;
    readonly deleteIconRightMargin?: number;
}

const ListItem = (props: Props) => {
    const {
        title,
        subtitle,
        chip,
        onDeletePressed,
        swipeableRef,
        onSwipeActivated,
        showLeftBorder = false,
        showRightBorder = false,
        onPress,
        leftRightMargin = 28,
        deleteIconRightMargin = 0,
    } = props;

    return (
        <>
            <SwipeDeleteListItem
                deleteIconRightMargin={deleteIconRightMargin}
                onDeletePressed={onDeletePressed}
                key={title + subtitle}
                swipeableRef={swipeableRef}
                onSwipeActivated={onSwipeActivated}
            >
                <TouchableOpacity activeOpacity={0.5} delayPressIn={50} onPress={() => { onPress?.(); }}>
                    <View
                        style={[
                            {
                                backgroundColor: useStyleTheme().colors.background,
                                borderRadius: BorderRadius.LIST_ITEM,
                                borderWidth: 1,
                                borderColor: useStyleTheme().colors.border,
                                padding: Spacing.X_SMALL,
                                marginTop: Spacing.XX_SMALL,
                                marginBottom: Spacing.XX_SMALL,
                                marginLeft: leftRightMargin,
                                marginRight: leftRightMargin,
                            },
                        ]}
                    >

                        <Text style={{ fontWeight: 'bold', marginLeft: 10 }}>{title}</Text>
                        <Text style={{ fontWeight: '200', marginLeft: 10 }}>{subtitle}</Text>
                        <View style={{
                            position: 'absolute',
                            alignSelf: 'flex-end',
                            top: 0,
                            bottom: 0,
                            justifyContent: 'center',
                            paddingRight: Spacing.SMALL,
                        }}
                        >
                            {chip && chip}
                        </View>
                    </View>
                </TouchableOpacity>
            </SwipeDeleteListItem>
            {showLeftBorder
                && (
                    <View style={{
                        position: 'absolute',
                        width: 1,
                        height: '100%',
                        backgroundColor: useStyleTheme().colors.background,
                        paddingRight: Spacing.MEDIUM,
                        borderRightWidth: 1,
                        borderRightColor: useStyleTheme().colors.border,
                    }}
                    />
                )}
            {showRightBorder
                && (
                    <View style={{
                        position: 'absolute',
                        alignSelf: 'flex-end',
                        width: 1,
                        height: '100%',
                        paddingRight: Spacing.MEDIUM,
                        backgroundColor: useStyleTheme().colors.background,
                        borderLeftWidth: 1,
                        borderLeftColor: useStyleTheme().colors.border,
                    }}
                    />
                )}
        </>
    );
};

export default ListItem;
