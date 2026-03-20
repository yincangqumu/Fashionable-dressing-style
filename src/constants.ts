/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Product, Outfit, TrendingItem } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    brand: 'Nike Pro',
    name: 'Swoosh High-Support Bra',
    price: '$55.00',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDyswYQpK0FgpzyHUtg7roHxkJ2eYDbEwV6OmwyK22NJJLHrUH3gLDqaOe2PmYS2-n8mvCS3r6O_All4p_O-CXID5fwMPRyidybbok5k94EAo_dpyyrk23DA3CgZ_mVCD8bpLf8SOmMMRkq7HgnuIg7Zz-qyzbQRyPpnG2-TYftbym4ohEjPqqi2e2tNJ0OYcUi3dQQ7d5DY7Eg-YYLwgVlUsij5_jqkltX2qV3xyoIwQIgE_Aa3c7hGY5m6rxzaUEHfYwHfaGneUw',
    category: 'Bra'
  },
  {
    id: '2',
    brand: 'Nike Performance',
    name: 'Zonal Strength Leggings',
    price: '$98.00',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCsaQIQx5f2SrAodV7PqPYJ84Dqhr4GAo51lojmE-RUHmugzSk1fZZhM_YuCNDvJjQ4yCtFB1ET8N-S33VD8GSHuDvBuEYhEYVsVKOwJH2GzZ3QLNcBiSfrWJ7aRxT7-UQAPf56P8mxJjpeQ8LZunPeJ1BF2i3VIK0qmdxtPX6pR6NePfO7rDYjCaeCXtZw8iUZTpsZpUFs819F0YYhbRVX2wKWtQ7O-JvqsKmr_BUpWmeZ_F-ceNTSFQ4FWmjEAPmAXJ-VfGbLt5k',
    category: 'Leggings'
  }
];

export const OUTFITS: Outfit[] = [
  {
    id: '1',
    title: 'Urban Explorer V1',
    lastWorn: 'Yesterday',
    tags: ['TECHWEAR', 'WINTER'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCKgo3kNoSPporErYEewSfL7eNdFWZF0TIV5TpVPstn0FM2pd9DHKzV9n2i-jm3FN2PWIglFHEcwPJl_qxzoAPQyJAesD64lLJHQKAZ0lERLLNU3-HHroVLffEvxQF93rvQ85_nBs55kYeH7W1NPGj8VRH8fmRcpah0l5IM1qKqyX5G1kGXx-sVr5ntpy8w-CzzqdoNchM6xUGkg-tVWc7hk6fCmRP3FhAbjPuw8gNdQm0lDR2avz6tJanByKVLbWkI_lD8u5bZPqA'
  },
  {
    id: '2',
    title: 'Minimalist Trench',
    lastWorn: '3 days ago',
    tags: ['CASUAL', 'SPRING'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAXC2ckVq0WGd2AM5O2vYNsSxZn6Lq0Wp9kVqUHanqeVWaT3VV4bMb2N7ddtoOOfVRC6-wCyCAmkIyV4VEgOiceo5A7mzRFlwuTbmDSb3ukD9e-epqjPoe4-sg4zvK7dscKlpCIW1wzB5h_CLYkSRzojNyU9dQGKL-9oeUw20sAYRHE_tc58Ajh6-DiIzrdnS7b0RW5ReFLWHGt2TzQ1pLoqxV1MRcIHd5CUcFCG4aPvdH0yKpIji90lQOw-vrdPm912-n7-8G0LTY'
  }
];

export const TRENDING: TrendingItem[] = [
  {
    id: '1',
    user: { name: 'Elena Vance', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAxbvraXz8KoRnqV9jAhLl9KNYgFjSt9pq83D5qeDr-o2_21R7U15C5FyuDzv5U9RMesff3WByycipiKNgeOE0GVCLYwf-70m9fVCsPlUn3W7TgjdnnbAO-Tb-fngMBlLa5u9oz5zc9B3ctVoeTwKa5RS329kgWy1sSFz60ztPYfLzeXWs5420OA-qR45cwFtypmaEK6qDPNg79o-uROnx8oHnDBVFYtasfKjx2lAyXXXzxh3lXbR6xEJ25FKW5QH5joFo6xVBslGM' },
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDbq1q76kDUQtCiN0wy-VfVlW10amJkaZl-rAKvcC-TbDwtMqZw7Jq5wmuwPSUk7Gib7-B3S5-VhWp0IJ45RIezbB0OwpIj4BgmAv1GiQTmnVoKqAt2oog04OeYjMmzlPlHhm8XKimU-eq7XtipY9teEpGHOMQeDvfWRTm0GmW2m5dt6T7Dwj4j894z78alb1D5oWqiTeJENOs-jhCxJz20u91GAQUeGTYJHGalxhn5Qiwy_sk9dhGkNKGGD-sag9p2sL9jD9gjJu4',
    likes: '1.2k',
    category: 'Hiking'
  },
  {
    id: '2',
    user: { name: 'Marcus Thorne', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDFJySVfvvYYDvzYvjOGTrKdq2p15gv9v7qlQOW3TpW6YzukOggvbi4HwYE0Qoj6eXPRv3G27-T0apGSw3hZ9n9KdJisSn4JW6ZMlu8en_NRHs-eXRH7JcfzdAnCwnWJ42PGULOdPVUsFUDLwBE4gCkIiFh6H9bjE5OVJ5XzMI9zP4fEEw_QjwBGupue2cakbegUg7o5-JI3aUZmwhTHGDGSay6ufTiItlXlwtTxN37NEhM4ix6FEfSvj2hATZGT0hZGh2xKFOKrEU' },
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCSiF0v4pyfTrTIo6hkzrwIhSEzyCKKwRq9AfghQsdZVF6I0dK1ImuivrRozvIgS0YaLMpCdCuVcXi--DMIUtoHs4Xl4qeDFEU_Zbgu4oW3wfUbKJGCcC1NlYvMWDfjuvoFjcG_PNc--xSIJV6Kk58p_2kOApLXz7jEkfmfmo20uW_MZWic3mqig1MqKpXP3lWOccx38kfDBlmSM61GFp4TvyfzN5xO0bENnMe0bykWMeu2tB4AYuw_NJw_GZy2nR0Ffy_o_5a9Yq4',
    likes: '842',
    category: 'Gym'
  },
  {
    id: '3',
    user: { name: 'Sasha Grey', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAYRLFmnTQN7aP4KjTmuDaS0T9IRPyr9alzU_7viEXWAXtWjONls9YeNyyawv1HH00hOnQufTdO-PR0J8LQRlcXwmF0A9vwU4BNu0EpKAGGQ15KfGIJZDcP3ZBA1bqHnAFbU4GeGo-c2QwCDiQ_aIp45ccBvXaP7amSmC8VSmdK1hqCooPTF_Atr-BC_pJ6dphpk-O0W9Q5gXENt8rVsqyS1VSbUPn5Qs9zMFRMXl8bUZJDPS2uSpdWWXiWiTqODd1OpRilh94Bdmg' },
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEcNOSCH18OCAfZ3q7VPnE6akmcEp_1PZPoBu_yuw-mhuUbeGt8fVIVFceJ6gZxTbgLkwWM98U5hExqfifSGRsCdVoNWUDWai0o2eVCLL6jzdcAwb-2nB_BA2DuJBUK0ocnh_o35Wmkrj8EeeZFeGd2lFLzCwPjRGsTO7LCN49h4q77PtpbPRsUrVv_0YJ6l-5JJ37oAS0e__YrPt3fU-liDM4j4gHXG75ketB2JigegnAfZlZhviqNNQNGKP4MbVdN6lc7cvu3_Y',
    likes: '2.4k',
    category: 'Street'
  }
];
