import { memo } from 'react';

type TabsElementWrapperProps = {
  isActive: boolean;
  children: JSX.Element;
}

function TabsElementWrapper({isActive, children}: TabsElementWrapperProps) {
  return (
    <div className={`tabs__element ${isActive ? 'is-active' : ''}`}>
      {children}
    </div>
  );
}

const MemoizedTabsElementWrapper = memo(TabsElementWrapper);

export default MemoizedTabsElementWrapper;
