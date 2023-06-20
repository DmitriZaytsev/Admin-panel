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
import { APP_PREFIX_PATH } from 'configs/AppConfig';



const mainNavTree = [
  {
    key: 'general',
    path: `${APP_PREFIX_PATH}/general`,
    title: 'sidenav.general',
    icon: '',
    breadcrumb: false,
    submenu: [
      {
        key: 'general-dashboard',
        path: `${APP_PREFIX_PATH}/general/dashboard`,
        title: 'sidenav.general.dashboard',
        icon: DashboardOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'general-catalog',
        path: `${APP_PREFIX_PATH}/general/catalog`,
        title: 'sidenav.general.catalog',
        icon: ShoppingCartOutlined,
        breadcrumb: false,
        submenu: [
          {
            key: 'general-catalog-goods',
            path: `${APP_PREFIX_PATH}/general/catalog/goods`,
            title: 'sidenav.general.catalog.goods',
            icon: '',
            breadcrumb: false,
            submenu: []
          },
          {
            key: 'general-catalog-categories',
            path: `${APP_PREFIX_PATH}/general/catalog/categories`,
            title: 'sidenav.general.catalog.categories',
            icon: '',
            breadcrumb: false,
            submenu: []
          },
          {
            key: 'general-catalog-collections',
            path: `${APP_PREFIX_PATH}/general/catalog/collections`,
            title: 'sidenav.general.catalog.collections',
            icon: '',
            breadcrumb: false,
            submenu: []
          },
          {
            key: 'general-catalog-combo',
            path: `${APP_PREFIX_PATH}/general/catalog/combo`,
            title: 'sidenav.general.catalog.combo',
            icon: '',
            breadcrumb: false,
            submenu: []
          },
        ]
      },
      {
        key: 'general-orders',
        path: `${APP_PREFIX_PATH}/general/orders`,
        title: 'sidenav.general.orders',
        icon: ShoppingOutlined,
        breadcrumb: true,
        submenu: []
      },
      {
        key: 'general-clients',
        path: `${APP_PREFIX_PATH}/general/clients`,
        title: 'sidenav.general.clients',
        icon: UserOutlined,
        breadcrumb: true,
        submenu: [
          {
            key: 'general-clients-list',
            path: `${APP_PREFIX_PATH}/general/clients/list`,
            title: 'sidenav.general.clients.list',
            icon: '',
            breadcrumb: false,
            submenu: []
          },
          {
            key: 'general-clients-groups',
            path: `${APP_PREFIX_PATH}/general/clients/groups`,
            title: 'sidenav.general.clients.groups',
            icon: '',
            breadcrumb: false,
            submenu: []
          }
        ]
      },
      {
        key: 'general-banners',
        path: `${APP_PREFIX_PATH}/general/banners`,
        title: 'sidenav.general.banners',
        icon: PictureOutlined,
        breadcrumb: true,
        submenu: []
      },
      {
        key: 'general-promocodes',
        path: `${APP_PREFIX_PATH}/general/promocodes`,
        title: 'sidenav.general.promocodes',
        icon: GiftOutlined,
        breadcrumb: true,
        submenu: []
      },
      {
        key: 'general-address',
        path: `${APP_PREFIX_PATH}/general/adress`,
        title: 'sidenav.general.address',
        icon: ShopOutlined,
        breadcrumb: true,
        submenu: [
          {
            key: 'general-address-addresses',
            path: `${APP_PREFIX_PATH}/general/adress/addresses`,
            title: 'sidenav.general.address.addresses',
            icon: '',
            breadcrumb: true,
            submenu: []
          },
          {
            key: 'general-address-geofences',
            path: `${APP_PREFIX_PATH}/general/adress/geofences`,
            title: 'sidenav.general.address.geofences',
            icon: '',
            breadcrumb: true,
            submenu: []
          },
        ]
      },
      {
        key: 'general-employees',
        path: `${APP_PREFIX_PATH}/general/employees`,
        title: 'sidenav.general.employees',
        icon: UsergroupAddOutlined,
        breadcrumb: true,
        submenu: []
      },
      {
        key: 'general-mailing',
        path: `${APP_PREFIX_PATH}/general/mailing`,
        title: 'sidenav.general.mailing',
        icon: MailOutlined,
        breadcrumb: true,
        submenu: []
      }
    ]
  }
];

const systemNavTree = [
  {
    key: 'system',
    path: `${APP_PREFIX_PATH}/system`,
    title: 'sidenav.system',
    icon: '',
    breadcrumb: false,
    submenu: [
      {
        key: 'system-settings',
        path: `${APP_PREFIX_PATH}/system/settings`,
        title: 'sidenav.system.settings',
        icon: SettingOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'system-mobileapp',
        path: `${APP_PREFIX_PATH}/system/mobileapp`,
        title: 'sidenav.system.mobileapp',
        icon: MobileOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'system-logs',
        path: `${APP_PREFIX_PATH}/system/logs`,
        title: 'sidenav.system.logs',
        icon: FileTextOutlined,
        breadcrumb: false,
        submenu: []
      },
    ]
  }
];

const navigationConfig = [
  ...mainNavTree,
  ...systemNavTree,
];

export default navigationConfig;