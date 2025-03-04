import type {
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from './types/config'
import { LinkPreset } from './types/config'

export const siteConfig: SiteConfig = {
  title: '山地园林',
  subtitle: '随意文稿',
  lang: 'zh_CN',         // 'en', 'zh_CN', 'zh_TW', 'ja', 'ko', 'es', 'th'
  themeColor: {
    hue: 300,         // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
    fixed: false,     // Hide the theme color picker for visitors
  },
  banner: {
    enable: true,
    src: '/assets/images/FROMWEST.png',   // Relative to the /src directory. Relative to the /public directory if it starts with '/'
    position: 'center',      // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
    credit: {
      enable: false,         // Display the credit text of the banner image
      text: '背景图片摄影师',              // Credit text to be displayed
      url: 'https://www.xiaohongshu.com/user/profile/5b16282c6b58b7267106b0fb'                // (Optional) URL link to the original artwork or artist's page
    }
  },
  toc: {
    enable: true,           // Display the table of contents on the right side of the post
    depth: 3                // Maximum heading depth to show in the table, from 1 to 3
  },
  favicon: [    // Leave this array empty to use the default favicon
     {
       src: '/favicon/logo-light.svg',    // Path of the favicon, relative to the /public directory
       theme: 'light',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
       sizes: '32x32',              // (Optional) Size of the favicon, set only if you have favicons of different sizes
     },
     {
      src: '/favicon/logo-dark.svg',    // Path of the favicon, relative to the /public directory
      theme: 'dark',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
      sizes: '32x32',              // (Optional) Size of the favicon, set only if you have favicons of different sizes
    }
  ]
}

export const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.Home,
    LinkPreset.Archive,
    LinkPreset.About,
    {
      name: '红叶',
      url: 'https://arts.pengxianzhe.org',     // Internal links should not include the base path, as it is automatically added
      external: true,                               // Show an external link icon and will open in a new tab
    },
  ],
}

export const profileConfig: ProfileConfig = {
  avatar: '/assets/images/profile.JPG',  // Relative to the /src directory. Relative to the /public directory if it starts with '/'
  name: '堤边人',
  bio: '风雨替花愁',
  links: [
    // {
      //name: 'Twitter',
      //icon: 'fa6-brands:twitter',       // Visit https://icones.js.org/ for icon codes
                                        // You will need to install the corresponding icon set if it's not already included
                                        // `pnpm add @iconify-json/<icon-set-name>`
      //url: 'https://twitter.com',
    //},
    {
      name: '域名主页',
      icon: 'ri:ancient-pavilion-fill',
      url: 'https://pengxianzhe.org',
    },
    {
      name: '新浪微博',
      icon: 'fa6-brands:weibo',
      url: 'https://weibo.com/u/7246216712',
    },
    {
      name: 'Bilibili',
      icon: 'fa6-brands:bilibili',
      url: 'https://space.bilibili.com/11190194',
    },
    {
      name: 'GitHub',
      icon: 'fa6-brands:github',
      url: 'https://github.com/Cynthian-pshds',
    },
    {
      name: '微信公众平台个人号',
      icon: 'fa6-brands:weixin',
      url: 'https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzkwNTMwNzI1Mw==',
    },
  ],
}

export const licenseConfig: LicenseConfig = {
  enable: true,
  name: 'CC BY-NC-ND 4.0',
  url: 'https://creativecommons.org/licenses/by-nc-nd/4.0/legalcode.zh-hans',
}
