import Header from '../Header/Index';
import Home from '../Home/Index';
import Products from '../Products/Index';

export default function Index() {
  const {pathname} = window.location;
  let Page;

  if(pathname === '/products'){
    Page = Products
  } else {
    Page = Home
  }
  
  return (
    <section>
      <Header />
      <Page />
    </section>
  )
}
