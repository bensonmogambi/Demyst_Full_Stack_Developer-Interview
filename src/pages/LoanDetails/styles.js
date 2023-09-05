import {
  contentStyle as landingPageContentStyle,
  headerStyle as landingPageHeaderStyle,
  headerText as landingPageheaderText
} from '../LandingPage/styles';

export const headerStyle = {
  ...landingPageHeaderStyle,
  height: 'auto',
  paddingTop: 0
};

export const headerText = {
  ...landingPageheaderText,
  textAlign: 'center'
};
export const contentStyle = {
  ...landingPageContentStyle,
  justifyContent: 'center'
};
