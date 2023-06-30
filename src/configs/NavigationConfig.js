import { 
  DashboardOutlined, 
  ShoppingCartOutlined, 
  ShoppingOutlined,
  UserOutlined,
  PictureOutlined,
  GiftOutlined,
  ShopOutlined,
  UsergroupAddOutlined,
  MailOutlined,
  SettingOutlined,
  MobileOutlined,
  FileTextOutlined
} from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig'


const dashBoardNavTree = [{
  key: 'dashboards',
  path: `${APP_PREFIX_PATH}/dashboards`,
  title: 'sidenav.dashboard',
  icon: DashboardOutlined,
  breadcrumb: false,
  isGroupTitle: true,
  submenu: [
    {
      key: 'dashboards-default',
      path: `${APP_PREFIX_PATH}/dashboards/default`,
      title: 'sidenav.dashboard.default',
      icon: DashboardOutlined,
      breadcrumb: false,
      submenu: []
    }
  ]
}];

const catalogNavTree = [{
  key: 'catalog',
  path: `${APP_PREFIX_PATH}/catalog`,
  title: 'sidenav.catalog',
  icon: ShoppingCartOutlined,
  breadcrumb: true,
  isGroupTitle: false,
  submenu: [
    {
      key: 'catalog-items',
      path: `${APP_PREFIX_PATH}/catalog/items`,
      title: 'sidenav.catalog.items',
      icon: '',
      breadcrumb: true,
      submenu: []
    },
    {
      key: 'catalog-categories',
      path: `${APP_PREFIX_PATH}/catalog/categories`,
      title: 'sidenav.catalog.categories',
      icon: '',
      breadcrumb: true,
      submenu: []
    },
    {
      key: 'catalog-collections',
      path: `${APP_PREFIX_PATH}/catalog/collections`,
      title: 'sidenav.catalog.collections',
      icon: '',
      breadcrumb: true,
      submenu: []
    },
    {
      key: 'catalog-combo',
      path: `${APP_PREFIX_PATH}/catalog/combo`,
      title: 'sidenav.catalog.combo',
      icon: '',
      breadcrumb: true,
      submenu: []
    }
  ]
}];

const ordersNavTree = [{
  key: 'orders',
  path: `${APP_PREFIX_PATH}/orders`,
  title: 'sidenav.orders',
  icon: ShoppingOutlined,
  breadcrumb: false,
  isGroupTitle: false,
  submenu: []
}];

const clientsNavTree = [{
  key: 'clients',
  path: `${APP_PREFIX_PATH}/clients`,
  title: 'sidenav.clients',
  icon: UserOutlined,
  breadcrumb: true,
  isGroupTitle: false,
  submenu: [
    {
      key: 'clients-list',
      path: `${APP_PREFIX_PATH}/clients/list`,
      title: 'sidenav.clients.list',
      icon: '',
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'clients-groups',
      path: `${APP_PREFIX_PATH}/clients/groups`,
      title: 'sidenav.clients.groups',
      icon: '',
      breadcrumb: false,
      submenu: []
    }
  ]
}];

const bannersNavTree = [{
  key: 'banners',
  path: `${APP_PREFIX_PATH}/banners`,
  title: 'sidenav.banners',
  icon: PictureOutlined,
  breadcrumb: false,
  isGroupTitle: false,
  submenu: []
}];

const promoNavTree = [{
  key: 'promocode',
  path: `${APP_PREFIX_PATH}/promocode`,
  title: 'sidenav.promocode',
  icon: GiftOutlined,
  breadcrumb: false,
  isGroupTitle: false,
  submenu: []
}];

const offlineNavTree = [{
  key: 'offline',
  path: `${APP_PREFIX_PATH}/offline`,
  title: 'sidenav.offline',
  icon: ShopOutlined,
  breadcrumb: true,
  isGroupTitle: false,
  submenu: [
    {
      key: 'offline-addresses',
      path: `${APP_PREFIX_PATH}/offline/addresses`,
      title: 'sidenav.offline.addresses',
      icon: '',
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'offline-geofence',
      path: `${APP_PREFIX_PATH}/offline/geofence`,
      title: 'sidenav.offline.geofence',
      icon: '',
      breadcrumb: false,
      submenu: []
    }
  ]
}];

const employeesNavTree = [{
  key: 'employees',
  path: `${APP_PREFIX_PATH}/employees`,
  title: 'sidenav.employees',
  icon: UsergroupAddOutlined,
  breadcrumb: false,
  isGroupTitle: false,
  submenu: []
}];

const mailingNavTree = [{
  key: 'mailing',
  path: `${APP_PREFIX_PATH}/mailing`,
  title: 'sidenav.mailing',
  icon: MailOutlined,
  breadcrumb: false,
  isGroupTitle: false,
  submenu: []
}];

const settingsNavTree = [{
  key: 'system',
  path: `${APP_PREFIX_PATH}/system`,
  title: 'sidenav.settings',
  icon: '',
  breadcrumb: false,
  isGroupTitle: true,
  submenu: [
    {
      key: 'settings',
      path: `${APP_PREFIX_PATH}/settings`,
      title: 'sidenav.settings',
      icon: SettingOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'mobile',
      path: `${APP_PREFIX_PATH}/mobile`,
      title: 'sidenav.mobile',
      icon: MobileOutlined,
      breadcrumb: false,
      submenu: []
    },{
      key: 'logs',
      path: `${APP_PREFIX_PATH}/logs`,
      title: 'sidenav.logs',
      icon: FileTextOutlined,
      breadcrumb: false,
      submenu: []
    },
  ]
}];

const navigationConfig = [
  ...dashBoardNavTree,
  ...catalogNavTree,
  ...ordersNavTree,
  ...clientsNavTree,
  ...bannersNavTree,
  ...promoNavTree,
  ...offlineNavTree,
  ...employeesNavTree,
  ...mailingNavTree,
  ...settingsNavTree
]

export default navigationConfig;
