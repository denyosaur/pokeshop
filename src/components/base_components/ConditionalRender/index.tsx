/**
 * @description Conditionally render Component or a FallbackComponent depending on the 
 * shouldRender boolean that is passed down.
 *  
 * @Param {function}  Component - functional component
 * @Param {function}  FallbackComponent - functional component
 * @Param {object}    propsToPassDown - object of component props
 * @Param {boolean}   shouldRender - boolean logic to display which Component
 */

import T from 'prop-types';

const ConditionalRender: React.FC<ConditionalRenderProps> = ({
  Component,
  FallbackComponent,
  propsToPassDown,
  shouldRender,
}) => {
  if (shouldRender) {
    return <Component {...propsToPassDown} />
  } else if (!shouldRender && !!FallbackComponent) {
    return <FallbackComponent {...propsToPassDown} />
  } else {
    return null;
  }
};

// ConditionalRender.propTypes = {
//   Component: T.func.isRequired,
//   FallbackComponent: T.func,
//   propsToPassDown: T.object,
//   shouldRender: T.bool.isRequired,
// };

export default ConditionalRender;

interface ConditionalRenderProps {
  Component: React.ComponentType<any>,
  FallbackComponent?: React.ComponentType<any> | null,
  propsToPassDown?: object,
  shouldRender: boolean,
}
