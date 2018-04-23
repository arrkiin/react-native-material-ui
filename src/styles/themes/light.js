import Color from 'color';
import {
    blue500,
    red500,
    white,
    black,
} from '../colors';

import spacing from '../spacing';
import typography from '../typography';

export default {
    spacing,
    typography,
    fontFamily: 'Roboto',
    palette: {
        // main theme colors
        primaryColor: blue500,
        accentColor: red500,
        // text color palette
        primaryTextColor: Color(black).alpha(.87).string(),
        secondaryTextColor: Color(black).alpha(.54).string(),
        alternateTextColor: white,
        // backgournds and borders
        canvasColor: white,
        borderColor: Color(black).alpha(.12).string(),
        // https://material.google.com/style/color.html#color-text-background-colors
        disabledColor: Color(black).alpha(.38).string(),
        disabledTextColor: Color(black).alpha(.26).string(),
        activeIcon: Color(black).alpha(.54).string(),
        inactiveIcon: Color(black).alpha(.38).string(),
        // pickerHeaderColor: cyan500,
        // clockCircleColor: faintBlack,
        // shadowColor: fullBlack,

    },
};
