/**
 * @description Component to conditionally render an error component, a 
 * skeleton component, or a component depending on whether async data is
 * received 
 *  
 * @Param {function}  Component - functional component
 * @Param {boolean}   error - error boolean
 * @Param {boolean}   loading - loading boolean
 * @Param {object}    propsToPassDown - object of component props
 * @Param {function}  SkeletonComponent - functional skeleton component
 */

import ConditionalRender from '../ConditionalRender';

import ErrorComponent from '../ErrorComponent';
import LoadingComponent from '../LoadingComponent';

const AsyncRender: React.FC<AsyncRenderProps> = ({
  Component,
  error,
  loading,
  propsToPassDown,
  SkeletonComponent,
}) => {
  if (error) return <ErrorComponent />

  if (loading && !!SkeletonComponent) {
    return (
      <ConditionalRender
        Component={SkeletonComponent}
        FallbackComponent={LoadingComponent}
        shouldRender={loading && !!SkeletonComponent}
      />
    )
  }
  return <Component {...propsToPassDown} />
};

// AsyncRender.propTypes = {
//   Component: T.func.isRequired,
//   error: T.bool.isRequired,
//   loading: T.bool.isRequired,
//   propsToPassDown: T.object,
//   SkeletonComponent: T.bool.isRequired,
// };

export default AsyncRender;

interface AsyncRenderProps {
  Component: React.ComponentType<any>,
  error: boolean;
  loading: boolean;
  propsToPassDown?: object;
  SkeletonComponent?: React.ComponentType<any> | null;
}
