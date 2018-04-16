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
        primaryTextColor: Color(black).alpha(.87).hslString(),
        secondaryTextColor: Color(black).alpha(.54).hslString(),
        alternateTextColor: white,
        // backgournds and borders
        canvasColor: white,
        borderColor: Color(black).alpha(.12).hslString(),
        // https://material.google.com/style/color.html#color-text-background-colors
        disabledColor: Color(black).alpha(.38).hslString(),
        disabledTextColor: Color(black).alpha(.26).hslString(),
        activeIcon: Color(black).alpha(.54).hslString(),
        inactiveIcon: Color(black).alpha(.38).hslString(),
        // pickerHeaderColor: cyan500,
        // clockCircleColor: faintBlack,
        // shadowColor: fullBlack,

    },
};
