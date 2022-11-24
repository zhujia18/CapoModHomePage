import { extend } from 'flarum/common/extend';
import BasicsPage from 'flarum/admin/components/BasicsPage';

app.initializers.add('capomod-home-page', () => {
  extend(BasicsPage.prototype, 'homePageItems', (items) => {
    items.add('capomod', {
      path: 'http://capomod.com/blog/category/recommend',
      label: 'CapoModHomePage',
    });
  });
});
