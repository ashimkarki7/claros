import Header from '@component/pagelayout/Header/Header.tsx';
import Sidebar from '@component/pagelayout/SideBar/Sidebar.tsx';
import Footer from '@component/pagelayout/footer.tsx';
import PageLayoutStyles from './PageLayout.module.scss';

export const PageLayout = (props: any) => {
  return (
    <div id="PageLayout" className={'d-flex flex-column flex-md-row'}>
      <Sidebar />
      <div className={PageLayoutStyles?.mainWrapper}>
        <Header />
        <div id={'viewContent'}>{props.children}</div>
        <Footer />
      </div>
    </div>
  );
};
