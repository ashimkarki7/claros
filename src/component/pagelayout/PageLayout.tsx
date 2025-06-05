import Header from '@component/pagelayout/Header';
import Sidebar from '@component/pagelayout/SideBar';
import PageLayoutStyles from './PageLayout.module.scss';

const PageLayout = (props: any) => {
  return (
    <div id="PageLayout" className={'d-flex flex-column flex-md-row'}>
      <Sidebar />
      <div className={PageLayoutStyles?.mainWrapper}>
        <Header />
        <div id={'viewContent'}>{props.children}</div>
      </div>
    </div>
  );
};
export default PageLayout;
