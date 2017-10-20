#!/bin/bash

if [ "$1" = "all" ] ; then
  mkdir tmp
  cd tmp

  curl 'https://docs.google.com/document/export?format=zip&id=126D6cOQD2CnHXYiYMh_yNcCYwmfDQgO_wvu3DdGmE3k&token=AC4w5VjyGSDwpfHRTBN92OrNLKl3ibSuSg%3A1508488354761&includes_info_params=true'  -H 'Host: docs.google.com' -H 'User-Agent: Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:56.0) Gecko/20100101 Firefox/56.0' -H 'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8' -H 'Accept-Language: en-US,en;q=0.5' --compressed -H 'Cookie: NID=114=W_mN_hRRib4lpEpQc5gV2Alqeq5O1wwUwD93oL6gQveHY4Ub2Jo2Ad7Jg20Ht97IO6aWx7z53kn753fk7faxm5YTO336J_6DXF_NCKNIFZ3ek_rC65kSEdv28bDYbQjkkjAgSu-dD3QV1-pS00YZEaXvV0DthSlE91KVCxbbd_6A457P_oPnKkQrAuFOI05z4dc7if130W4V8FG8aJs2H_nPcAedU2A1ht-o1dCKKKF60YysS5wGeSMndu3Tpb8ttwmzgWCZf0gwDHP0r0g47uvudiIOuVCz77axszh6; CONSENT=YES+FR.en+V7; SID=PAXoQDm6MWpssT1qSTXJ9f_ECYMYkxuh8AbPqAw_iwAC2DbkVb9QvA1C3405JRTflZNj-w.; HSID=AsP24jcmWlhywfk4D; SSID=Ab2tQuK0lWULttmgF; APISID=uDVMA-ZGVvUzKLF9/AmEAxoZ5XAz_1qvJz; SAPISID=J25317vDREkVBg38/A3zv0gt9s2HrUbm1J; WRITELY_SID=NAToQOYxUz0ihhE_1D3sxIQsaqhwwoxrMB6qgcb0nbKFMFqqHg1z1hcBCx8_VAFOt45KIQ.; SIDCC=AE4kn799zkippMp2Z2oDHBi1BVBRP7ovkowRI6R6Cq5Zt_mzdMORozU7NmYZHVwvcdudnGuSotTsyOKdXuTe; 1P_JAR=2017-10-20-8; S=photos_html=zl0JZZEOcMh7kbbiy6xsn-Q6VmtHkQ7E; lbcs=1' \
  > out.zip

  unzip out.zip
  cp Murder2017.html ..

  cd -
  rm -r tmp
fi

node index.js > memories.xml
mv memories.xml ../doc/memories.graphml
