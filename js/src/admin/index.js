import { extend } from 'flarum/common/extend';
import BasicsPage from 'flarum/admin/components/BasicsPage';

app.initializers.add('v17development-flarum-blog', () => {
  extend(BasicsPage.prototype, 'homePageItems', (items) => {
    items.add('capomod', {
      path: '/blog/category/recommend',
      label: 'CapoModHomePage',
    });
  });
});
