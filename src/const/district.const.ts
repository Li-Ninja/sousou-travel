import { useI18n } from '@/makers/i18n.maker';
import { District } from '@/types/common';
import { CityEnum } from '@/enum/area.enum';

const { t } = useI18n();

const taipeiDistrictList: District[] = [
  {
    name: t('district.Taipei.ZhongzhengDist'),
    zipCode: 100
  },
  {
    name: t('district.Taipei.DatongDist'),
    zipCode: 103
  },
  {
    name: t('district.Taipei.ZhongshanDist'),
    zipCode: 104
  },
  {
    name: t('district.Taipei.SongshanDist'),
    zipCode: 105
  },
  {
    name: t('district.Taipei.DaAnDist'),
    zipCode: 106
  },
  {
    name: t('district.Taipei.WanhuaDist'),
    zipCode: 108
  },
  {
    name: t('district.Taipei.XinyiDist'),
    zipCode: 110
  },
  {
    name: t('district.Taipei.ShilinDist'),
    zipCode: 111
  },
  {
    name: t('district.Taipei.BeitouDist'),
    zipCode: 112
  },
  {
    name: t('district.Taipei.NeihuDist'),
    zipCode: 114
  },
  {
    name: t('district.Taipei.NangangDist'),
    zipCode: 115
  },
  {
    name: t('district.Taipei.WenshanDist'),
    zipCode: 116
  }
];

const newTaipeiDistrictList: District[] = [
  {
    name: t('district.NewTaipei.WanliDist'),
    zipCode: 207
  },
  {
    name: t('district.NewTaipei.JinshanDist'),
    zipCode: 208
  },
  {
    name: t('district.NewTaipei.BanqiaoDist'),
    zipCode: 220
  },
  {
    name: t('district.NewTaipei.XizhiDist'),
    zipCode: 221
  },
  {
    name: t('district.NewTaipei.ShenkengDist'),
    zipCode: 222
  },
  {
    name: t('district.NewTaipei.ShidingDist'),
    zipCode: 223
  },
  {
    name: t('district.NewTaipei.RuifangDist'),
    zipCode: 224
  },
  {
    name: t('district.NewTaipei.PingxiDist'),
    zipCode: 226
  },
  {
    name: t('district.NewTaipei.ShuangxiDist'),
    zipCode: 227
  },
  {
    name: t('district.NewTaipei.GongliaoDist'),
    zipCode: 228
  },
  {
    name: t('district.NewTaipei.XindianDist'),
    zipCode: 231
  },
  {
    name: t('district.NewTaipei.PinglinDist'),
    zipCode: 232
  },
  {
    name: t('district.NewTaipei.WulaiDist'),
    zipCode: 233
  },
  {
    name: t('district.NewTaipei.YongheDist'),
    zipCode: 234
  },
  {
    name: t('district.NewTaipei.ZhongheDist'),
    zipCode: 235
  },
  {
    name: t('district.NewTaipei.TuchengDist'),
    zipCode: 236
  },
  {
    name: t('district.NewTaipei.SanxiaDist'),
    zipCode: 237
  },
  {
    name: t('district.NewTaipei.ShulinDist'),
    zipCode: 238
  },
  {
    name: t('district.NewTaipei.YinggeDist'),
    zipCode: 239
  },
  {
    name: t('district.NewTaipei.SanchongDist'),
    zipCode: 241
  },
  {
    name: t('district.NewTaipei.XinzhuangDist'),
    zipCode: 242
  },
  {
    name: t('district.NewTaipei.TaishanDist'),
    zipCode: 243
  },
  {
    name: t('district.NewTaipei.LinkouDist'),
    zipCode: 244
  },
  {
    name: t('district.NewTaipei.LuzhouDist'),
    zipCode: 247
  },
  {
    name: t('district.NewTaipei.WuguDist'),
    zipCode: 248
  },
  {
    name: t('district.NewTaipei.BaliDist'),
    zipCode: 249
  },
  {
    name: t('district.NewTaipei.TamsuiDist'),
    zipCode: 251
  },
  {
    name: t('district.NewTaipei.SanzhiDist'),
    zipCode: 252
  },
  {
    name: t('district.NewTaipei.ShimenDist'),
    zipCode: 253
  }
];

const keelungDistrictList: District[] = [
  {
    name: t('district.Keelung.RenAiDist'),
    zipCode: 200
  },
  {
    name: t('district.Keelung.XinyiDist'),
    zipCode: 201
  },
  {
    name: t('district.Keelung.ZhongzhengDist'),
    zipCode: 202
  },
  {
    name: t('district.Keelung.ZhongshanDist'),
    zipCode: 203
  },
  {
    name: t('district.Keelung.AnleDist'),
    zipCode: 204
  },
  {
    name: t('district.Keelung.NuannuanDist'),
    zipCode: 205
  },
  {
    name: t('district.Keelung.QiduDist'),
    zipCode: 206
  }
];

const yilanCountyDistrictList: District[] = [
  {
    name: t('district.YilanCounty.YilanCity'),
    zipCode: 260
  },
  {
    name: t('district.YilanCounty.TouchengTownship'),
    zipCode: 261
  },
  {
    name: t('district.YilanCounty.JiaoxiTownship'),
    zipCode: 262
  },
  {
    name: t('district.YilanCounty.ZhuangweiTownship'),
    zipCode: 263
  },
  {
    name: t('district.YilanCounty.YuanshanTownship'),
    zipCode: 264
  },
  {
    name: t('district.YilanCounty.LuodongTownship'),
    zipCode: 265
  },
  {
    name: t('district.YilanCounty.SanxingTownship'),
    zipCode: 266
  },
  {
    name: t('district.YilanCounty.DatongTownship'),
    zipCode: 267
  },
  {
    name: t('district.YilanCounty.WujieTownship'),
    zipCode: 268
  },
  {
    name: t('district.YilanCounty.DongshanTownship'),
    zipCode: 269
  },
  {
    name: t('district.YilanCounty.SuAoTownship'),
    zipCode: 270
  },
  {
    name: t('district.YilanCounty.NanAoTownship'),
    zipCode: 272
  }
];

// there true zipCode all are 300
const hsinchuDistrictList: District[] = [
  {
    name: t('district.Hsinchu.EastDist'),
    zipCode: 3001
  },
  {
    name: t('district.Hsinchu.NorthDist'),
    zipCode: 3002
  },
  {
    name: t('district.Hsinchu.XiangshanDist'),
    zipCode: 3003
  }
];

const hsinchuCountyDistrictList: District[] = [
  {
    name: t('district.HsinchuCounty.ZhubeiCity'),
    zipCode:	302
  },
  {
    name: t('district.HsinchuCounty.HukouTownship'),
    zipCode:	303
  },
  {
    name: t('district.HsinchuCounty.XinfengTownship'),
    zipCode:	304
  },
  {
    name: t('district.HsinchuCounty.XinpuTownship'),
    zipCode:	305
  },
  {
    name: t('district.HsinchuCounty.GuanxiTownship'),
    zipCode:	306
  },
  {
    name: t('district.HsinchuCounty.QionglinTownship'),
    zipCode:	307
  },
  {
    name: t('district.HsinchuCounty.BaoshanTownship'),
    zipCode:	308
  },
  {
    name: t('district.HsinchuCounty.ZhudongTownship'),
    zipCode:	310
  },
  {
    name: t('district.HsinchuCounty.WufengTownship'),
    zipCode:	311
  },
  {
    name: t('district.HsinchuCounty.HengshanTownship'),
    zipCode:	312
  },
  {
    name: t('district.HsinchuCounty.JianshiTownship'),
    zipCode:	313
  },
  {
    name: t('district.HsinchuCounty.BeipuTownship'),
    zipCode:	314
  },
  {
    name: t('district.HsinchuCounty.EmeiTownship'),
    zipCode:	315
  }
];

const taoyuanDistrictList: District[] = [
  {
    name: t('district.Taoyuan.ZhongliDist'),
    zipCode: 320
  },
  {
    name: t('district.Taoyuan.PingzhenDist'),
    zipCode: 324
  },
  {
    name: t('district.Taoyuan.LongtanDist'),
    zipCode: 325
  },
  {
    name: t('district.Taoyuan.YangmeiDist'),
    zipCode: 326
  },
  {
    name: t('district.Taoyuan.XinwuDist'),
    zipCode: 327
  },
  {
    name: t('district.Taoyuan.GuanyinDist'),
    zipCode: 328
  },
  {
    name: t('district.Taoyuan.TaoyuanDist'),
    zipCode: 330
  },
  {
    name: t('district.Taoyuan.GuishanDist'),
    zipCode: 333
  },
  {
    name: t('district.Taoyuan.BadeDist'),
    zipCode: 334
  },
  {
    name: t('district.Taoyuan.DaxiDist'),
    zipCode: 335
  },
  {
    name: t('district.Taoyuan.FuxingDist'),
    zipCode: 336
  },
  {
    name: t('district.Taoyuan.DayuanDist'),
    zipCode: 337
  },
  {
    name: t('district.Taoyuan.LuzhuDist'),
    zipCode: 338
  }

];

// TODO 建立其他縣市的 district

export const districtList = [
  {
    key: CityEnum.Taipei,
    list: taipeiDistrictList
  },
  {
    key: CityEnum.NewTaipei,
    list: newTaipeiDistrictList
  },
  {
    key: CityEnum.Keelung,
    list: keelungDistrictList
  },
  {
    key: CityEnum.YilanCounty,
    list: yilanCountyDistrictList
  },
  {
    key: CityEnum.Hsinchu,
    list: hsinchuDistrictList
  },
  {
    key: CityEnum.HsinchuCounty,
    list: hsinchuCountyDistrictList
  },
  {
    key: CityEnum.Taoyuan,
    list: taoyuanDistrictList
  }
];