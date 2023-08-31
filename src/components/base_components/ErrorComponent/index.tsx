import {
  ErrorContainer,
  ImageWrapper,
} from './styledComponents';

import { H1, H2 } from '../../base_components';

import twoBandages from '../../../assets/twoBandages.png';

const ErrorComponent: React.FC<ErrorComponentProps> = ({
  buttonProps,
  headerText,
  paragraphText,
}) => {
  return (
    <ErrorContainer>
      <ImageWrapper>
        {twoBandages}
      </ImageWrapper>
      <H1>{headerText}</H1>
      <H2>{paragraphText}</H2>
      {/* <StyledLink
        label={label}
        path={{ pathname: '/home' }}
        {...linkProps}
      /> */}
    </ErrorContainer>
  )
};

export default ErrorComponent;

interface ErrorComponentProps {
  buttonProps?: {
    label: string | 'Take me back',
    linkProps: object | {},
  },
  headerText?: string | 'You\'ve found an error!',
  paragraphText?: string | 'Sorry about that!',
}