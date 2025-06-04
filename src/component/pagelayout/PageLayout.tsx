import Header from '@component/pagelayout/header.tsx';
import Sidebar from '@component/pagelayout/sidebar.tsx';
import Footer from '@component/pagelayout/footer.tsx';

export const PageLayout = (props: any) => {
  return (
    <div id="PageLayout">
      <Header />
      <div>
        <Sidebar />
        <div id={'viewContent'}>{props.children}</div>
      </div>

      <Footer />
    </div>
  );
};
