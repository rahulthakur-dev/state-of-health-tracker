import React, { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Keyboard, TouchableOpacity, View } from 'react-native';
import Spacing from '../constants/Spacing';
import { TextInput, useStyleTheme } from '../styles/Theme';

interface Props {
    placeholder?: string;
    onSearchTextChanged: (text: string) => void;
}

const SearchBar = (props: Props) => {
    const { onSearchTextChanged, placeholder } = props;

    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        onSearchTextChanged(searchText);
    }, [searchText]);

    const onCancel = () => {
        setSearchText('');
        Keyboard.dismiss();
    };

    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'center',
            width: '100%',
            height: 64,
            backgroundColor: useStyleTheme().colors.secondary,
        }}
        >
            <View
                style={{
                    backgroundColor: useStyleTheme().colors.background,
                    alignSelf: 'center',
                    borderRadius: 50,
                    flexDirection: 'row',
                    width: '90%',
                }}
            >
                <Ionicons
                    style={{ alignSelf: 'center', marginLeft: Spacing.MEDIUM }}
                    name="search"
                    size={20}
                    color={useStyleTheme().colors.secondary}
                />
                <TextInput
                    maxLength={100}
                    style={{ borderRadius: 50, borderWidth: 0, flex: 1 }}
                    value={searchText}
                    onChangeText={setSearchText}
                    placeholder={placeholder}
                />
                {searchText !== ''
                    && (
                        <TouchableOpacity style={{ alignSelf: 'center', marginRight: Spacing.MEDIUM }} onPress={onCancel}>
                            <Ionicons name="close" size={20} color={useStyleTheme().colors.white} />
                        </TouchableOpacity>
                    )}
            </View>
        </View>
    );
};

export default SearchBar;
