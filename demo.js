// sets of demo data

var words = ["Pásovec","Bizo","Kráva","Králík","Slon","Liška","Kůň","Sokol","Bažant","Tučňák","Klokan","Lev","Myš"]; // 13 words (good)

var states = ['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District Of Columbia','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming'];

var kSiteWords = ['všechno', 'já', 'jsme', 've', 'jíst', 'být', 'černá', 'hnědá', 'ale', 'jít', 'dělat', 'mýt', 'jídlo', 'čtyři', 'dostat', 'dobrý', 'dát', 'on', 'do', 'rád', 'muset', 'teď', 'ne', 'včera', 'dnes', 'náš', 'ven', 'prosím', 'hezký', 'běh', 'jezdit', 'vidět', 'říct', 'ona', 'tudíž', 'později', 'to', 'tam', 'oni', 'tohle', 'také', 'pod', 'chtít', 'zítra', 'dobře', 'chodit', 'co', 'bílá', 'kdo', 'začít', 's', 'ano'];


// landscapes
var landscapes = [
    'http://photos.smugmug.com/photos/304577222_Qn7CQRf-S.jpg,Salt Lake',
    'http://photos.smugmug.com/photos/403266789_mCSMHRD-S.jpg,Timpanogos',
    'http://photos.smugmug.com/photos/359969600_nRwXqXM-S.jpg,Salt Lake',
    'http://photos.smugmug.com/photos/1122710934_cRdphsk-S.jpg,Boston',
    'http://photos.smugmug.com/photos/131782448_Fqc3JCw-S.jpg,Manti',
    'http://photos.smugmug.com/photos/304571981_qGFWfS8-S.jpg,Salt Lake',
    'http://photos.smugmug.com/photos/401587434_GR3DFB5-S.jpg,Boston',
    'http://photos.smugmug.com/photos/580400758_z2GZkJ8-S.jpg,Los Angeles',
    'http://photos.smugmug.com/photos/1562689053_Q43Zz2X-S.jpg,Manti',
    'http://photos.smugmug.com/photos/580386980_WLTF9b4-S.jpg,Las Vegas',
    'http://photos.smugmug.com/photos/1257250439_LBrVLtD-S.jpg,Oakland',
    'http://photos.smugmug.com/photos/3176068382_96zWqvm-S.jpg,Gilbert',
    'http://photos.smugmug.com/photos/144710668_knmqVdW-S.jpg,Salt Lake',
    'http://photos.smugmug.com/photos/634102549_C38Sf6j-S.jpg,Jordan River',
    'http://photos.smugmug.com/photos/2544854528_zrXK9sS-S.jpg,Idaho Falls',
    'http://photos.smugmug.com/photos/2878215594_CFhkvHR-S.jpg,San Diego',
    'http://photos.smugmug.com/photos/1257250132_mpnKXwZ-S.jpg,Oakland',
    'http://photos.smugmug.com/photos/243635385_Xvf535r-S.jpg,Salt Lake',
    'http://photos.smugmug.com/photos/1122711641_ZmQ9Rm2-S.jpg,Boston',
    'http://photos.smugmug.com/photos/3176064514_KsSQd7j-S.jpg,Mesa',
    'http://photos.smugmug.com/photos/580402585_x5pvLM3-S.jpg,Redlands',
    'http://photos.smugmug.com/photos/580401883_43t9qPx-S.jpg,Newport Beach',
    'http://photos.smugmug.com/photos/2544855897_vtCJzJS-S.jpg,Idaho Falls',
    'http://photos.smugmug.com/photos/132071734_4cSHSft-S.jpg,San Diego',
    'http://photos.smugmug.com/photos/635273000_bgvHvZJ-S.jpg,Oquirrh Mountain',
    'http://photos.smugmug.com/photos/1220410064_8CPnKds-S.jpg,San Antonio',
    'http://photos.smugmug.com/photos/3176076557_Vj76Qhk-S.jpg,Las Vegas',
    'http://photos.smugmug.com/photos/4083715325_TkJB8pW-S.jpg,Oakland',
    'http://photos.smugmug.com/photos/359943832_pswZFMz-S.jpg,Salt Lake',
    'http://photos.smugmug.com/photos/359968395_WJwCbFN-S.jpg,Salt Lake',
    'http://photos.smugmug.com/photos/131776376_St2Dk9p-S.jpg,Timpanogos',
    'http://photos.smugmug.com/photos/144708886_wQ2MSNL-S.jpg,St George',
    'http://photos.smugmug.com/photos/2544851927_MKX5xsg-S.jpg,Rexburg',
    'http://photos.smugmug.com/photos/243633998_mjJFwNR-S.jpg,Salt Lake',
    'http://photos.smugmug.com/photos/3412798406_6qJGxwd-S.jpg,Provo',
    'http://photos.smugmug.com/photos/3176075048_TWHsvPj-S.jpg,Las Vegas',
    'http://photos.smugmug.com/photos/4089091813_m2b87Kd-S.jpg,Payson',
    'http://photos.smugmug.com/photos/2544860063_pKZxkZ2-S.jpg,Boise',
    'http://photos.smugmug.com/photos/1220410777_3WPSF8K-S.jpg,San Antonio',
    'http://photos.smugmug.com/photos/1517506324_JcDZdqJ-S.jpg,Albuquerque',
    'http://photos.smugmug.com/photos/2544858108_WkH2nJk-S.jpg,Twin Falls',
    'http://photos.smugmug.com/photos/2878142096_dMRKG7T-S.jpg,San Diego',
    'http://photos.smugmug.com/photos/3412795697_z9QfC7T-S.jpg,Provo',
    'http://photos.smugmug.com/photos/3176058799_tt2jkdn-S.jpg,Mesa',
    'http://photos.smugmug.com/photos/580385759_988bmhN-S.jpg,Las Vegas',
    'http://photos.smugmug.com/photos/635275578_j5JQGb4-S.jpg,Oquirrh Mountain',
    'http://photos.smugmug.com/photos/2545358787_8CHqPKQ-S.jpg,Twin Falls',
    'http://photos.smugmug.com/photos/3982667842_3BR3Q22-S.jpg,St George',
    'http://photos.smugmug.com/photos/1507210214_7Bt9hr5-S.jpg,Provo',
    'http://photos.smugmug.com/photos/4093885283_sCbSg2F-S.jpg,Payson',
    'http://photos.smugmug.com/photos/2152525449_2wSrhXF-S.jpg,Dallas',
    'http://photos.smugmug.com/photos/2544860439_qQwPVx3-S.jpg,Boise',
    'http://photos.smugmug.com/photos/3176061430_MGpSKSS-S.jpg,Mesa',
    'http://photos.smugmug.com/photos/3176071063_CBFkNPV-S.jpg,Gilbert',
    'http://photos.smugmug.com/photos/206363846_6KzK399-S.jpg,Timpanogos',
    'http://photos.smugmug.com/photos/206365579_ZhWbLj3-S.jpg,Timpanogos',
    'http://photos.smugmug.com/photos/2455422533_dbTmrzS-S.jpg,Salt Lake',
];

// portraits
var portraits = [
    'http://photos.smugmug.com/photos/304574382_FxSDMkH-S.jpg,Salt Lake',
    'http://photos.smugmug.com/photos/304575261_p3D5j2V-S.jpg,Salt Lake',
    'http://photos.smugmug.com/photos/4089086406_s7JdN8F-S.jpg,Payson',
    'http://photos.smugmug.com/photos/2455425041_CKFjm8N-S.jpg,Jordan River',
    'http://photos.smugmug.com/photos/1220410635_MpMgg8s-S.jpg,San Antonio',
    'http://photos.smugmug.com/photos/243636674_Pr3vLgr-S.jpg,Salt Lake',
    'http://photos.smugmug.com/photos/580401466_SfdpMjF-S.jpg,Newport Beach',
    'http://photos.smugmug.com/photos/304573075_rwfCQTF-S.jpg,Salt Lake',
    'http://photos.smugmug.com/photos/2544858303_LB564xW-S.jpg,Twin Falls',
    'http://photos.smugmug.com/photos/401578633_W2tdPGP-S.jpg,Boston',
    'http://photos.smugmug.com/photos/401580975_x4JgJpV-S.jpg,Boston',
    'http://photos.smugmug.com/photos/2152509431_6vVGzBZ-S.jpg,Dallas',
    'http://photos.smugmug.com/photos/359945805_vt3pT5H-S.jpg,Salt Lake',
    'http://photos.smugmug.com/photos/2544853859_gwc9MX7-S.jpg,Idaho Falls',
    'http://photos.smugmug.com/photos/304576148_xLhkZcH-S.jpg,Salt Lake',
    'http://photos.smugmug.com/photos/1607632216_N9crMgn-S.jpg,Denver',
    'http://photos.smugmug.com/photos/2878149170_tz25f9c-S.jpg,San Diego',
    'http://photos.smugmug.com/photos/401585054_KgpjV4h-S.jpg,Boston',
    'http://photos.smugmug.com/photos/144704753_4nCJPSG-S.jpg,St George',
    'http://photos.smugmug.com/photos/580384501_VCVgMBF-S.jpg,St George',
    'http://photos.smugmug.com/photos/635272155_dC3mxLH-S.jpg,Oquirrh Mountain',
    'http://photos.smugmug.com/photos/144698745_c5GHz49-S.jpg,St George',
    'http://photos.smugmug.com/photos/206364607_NrsbdHW-S.jpg,Mt Timpanogos',
    'http://photos.smugmug.com/photos/359966942_77nn5R6-S.jpg,Salt Lake',
    'http://photos.smugmug.com/photos/1122711220_n8dcrbk-S.jpg,Boston',
    'http://photos.smugmug.com/photos/2544860982_pvpXGZc-S.jpg,Boise',
    'http://photos.smugmug.com/photos/206363240_wCx65vv-S.jpg,Mt Timpanogos',
    'http://photos.smugmug.com/photos/2455422878_WTPfgMw-S.jpg,Salt Lake',
    'http://photos.smugmug.com/photos/3176057980_g2dQv7g-S.jpg,Mesa',
    'http://photos.smugmug.com/photos/3176069743_mSDP7sQ-S.jpg,Gilbert',
    'http://photos.smugmug.com/photos/2544852374_kv5nxnp-S.jpg,Rexburg',
];
